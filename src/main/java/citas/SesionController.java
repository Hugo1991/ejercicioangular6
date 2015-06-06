package citas;

import java.io.Console;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.Printer;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sesion")
public class SesionController {
	
	
	public static class DatosSesion {
		public String mail;
		public String pass;
	}
	
	@Autowired
	private UsuarioRepository usuarioRepository;	
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Boolean> islogPerson(HttpSession sesion){
		List<Boolean> lista =new ArrayList<Boolean>();
		if(sesion.getAttribute("login")!=null){
			lista.add((Boolean)sesion.getAttribute("login"));
			lista.add((Boolean)sesion.getAttribute("admin"));
		}else{
			lista.add(false);
			lista.add(false);
		}
		return lista;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public void login(@RequestBody DatosSesion datos, HttpSession sesion){
		for (Usuario usuario: usuarioRepository.findAll()) {
			if (usuario.getEmail().equalsIgnoreCase(datos.mail) && usuario.getPass().equalsIgnoreCase(datos.pass)) {
					if(usuario.isAlta()){
						if(usuario.isAdmin()){
							sesion.setAttribute("admin",true);
						}else{
							sesion.setAttribute("admin",false);
						}
						sesion.setAttribute("login",true);
						sesion.setAttribute("persona",usuario);
					}				
			}
			System.out.println(usuario.isAlta());
		}		
	}
	
	@RequestMapping(method = RequestMethod.DELETE)
	public void logoutPerson(HttpSession sesion){
		sesion.setAttribute("login",false);
		sesion.setAttribute("admin",false);
		sesion.setAttribute("persona",null);	
	}
	
	@RequestMapping(value="/persona",method = RequestMethod.GET)
	public Usuario getPersonLog(HttpSession sesion){
		
		if((sesion!=null)&&(sesion.getAttribute("persona") != null)){
			Usuario usuario = ((Usuario)sesion.getAttribute("persona"));
			usuario.setPass("");
			sesion.setAttribute("usuario", usuario);
			return (Usuario) sesion.getAttribute("usuario");
		} else {		
			return null;
		}
	}	
}
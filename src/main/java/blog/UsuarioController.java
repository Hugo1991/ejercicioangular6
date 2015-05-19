package blog;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Usuario> addUsuario(@RequestBody Usuario usuario) {
		usuarioRepository.save(usuario);		
		return new ResponseEntity<>(usuario,HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void borrarUsuario(@PathVariable Long dni) {
		usuarioRepository.delete(dni);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Usuario> getUsuarios(Model model) {
		return usuarioRepository.findAll();
	}
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Usuario getUsuario(@PathVariable Long id) {
		return usuarioRepository.findOne(id);
	}

}

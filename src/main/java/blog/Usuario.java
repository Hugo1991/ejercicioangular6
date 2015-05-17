package blog;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idUsuario;
	
	private long DNI;
	private String tarjetaSocio;
	private String nombre;
	private String apellidos;
	private Date fechaNac;
	private String email;
	private String pass;
	
	public Usuario(){}
	public Usuario(long dni,String tarjetaSocio,String nombre,String apellidos,Date fecha,String email,
			String pass){
		setDNI(dni);
		setTarjetaSocio(tarjetaSocio);
		setNombre(nombre);
		setApellidos(apellidos);
		setFechaNac(fecha);
		setEmail(email);
		setPass(pass);
	}
	public void setDNI(long dni){}
	public void setTarjetaSocio(String tarjetaSocio){}
	public void setNombre(String nombre){}
	public void setApellidos(String apellidos){}
	public void setFechaNac(Date fecha){}
	public void setEmail(String email){}
	public void setPass(String pass){}
	public Long getDNI(){
		return DNI;
	}
	public String getTarjetaSocio(){
		return tarjetaSocio;
	}
	public String getNombre(){
		return nombre;
	}
	public String getApellidos(){
		return apellidos;
	}
	public Date getFechaNac(){
		return fechaNac;
	}
	public String getPass(){
		return pass;
	}
	public void pedirCita(Medico medico,Date fecha){
		
	}
}

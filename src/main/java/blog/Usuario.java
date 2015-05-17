package blog;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Usuario {
	
	@Id	
	private long DNI;
	private String nombre;
	private String apellidos;
	private Date fechaNac;
	private String email;
	private String pass;
	
	public Usuario(){}
	public Usuario(long dni,String nombre,String apellidos,Date fecha,String email,String pass){
		setDNI(dni);
		setNombre(nombre);
		setApellidos(apellidos);
		setFechaNac(fecha);
		setEmail(email);
		setPass(pass);
	}
	public void setDNI(long dni){
		this.DNI=dni;
	}
	public void setNombre(String nombre){
		this.nombre=nombre;
	}
	public void setApellidos(String apellidos){
		this.apellidos=apellidos;
	}
	public void setFechaNac(Date fecha){
		this.fechaNac=fecha;
	}
	public void setEmail(String email){
		this.email=email;
	}
	public void setPass(String pass){
		this.pass=pass;
	}
	public Long getDNI(){
		return DNI;
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

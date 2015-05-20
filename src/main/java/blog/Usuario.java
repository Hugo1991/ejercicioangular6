package blog;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private long DNI;
	private String nombre;
	private String apellidos;
	private String fechaNac;
	private String email;
	private String pass;
	
	public Usuario(){}
	public Usuario(String nombre,String apellidos,String fecha,String email,long dni,String pass){
		setDNI(DNI);
		setNombre(nombre);
		setApellidos(apellidos);
		setFechaNac(fecha);
		setEmail(email);
		setPass(pass);
	}
	public void setDNI(Long dni){
		this.DNI=dni;
	}
	public void setNombre(String nombre){
		this.nombre=nombre;
	}
	public void setApellidos(String apellidos){
		this.apellidos=apellidos;
	}
	public void setFechaNac(String fecha){
		this.fechaNac=fecha;
	}
	public void setEmail(String email){
		this.email=email;
	}
	public void setPass(String pass){
		this.pass=pass;
	}
	public Long getId(){
		return id;
	}
	public long getDNI(){
		return DNI;
	}
	public String getNombre(){
		return nombre;
	}
	public String getApellidos(){
		return apellidos;
	}
	public String getFechaNac(){
		return fechaNac;
	}
	public String getEmail(){
		return email;
	}
	public String getPass(){
		return pass;
	}
	public void pedirCita(Medico medico,Date fecha){
		
	}
}

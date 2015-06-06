package citas;

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
	
	private String dni;
	private String nombre;
	private String apellidos;
	private String fechaNac;
	private String email;
	private String pass;
	private boolean admin;
	
	public Usuario(){}
	public Usuario(String dni,String nombre,String apellidos,String fecha,String email,String pass){
		setDni(dni);
		setNombre(nombre);
		setApellidos(apellidos);
		setFechaNac(fecha);
		setEmail(email);
		setPass(pass);
	}
	public Usuario(String dni,String nombre,String apellidos,String fecha,String email,String pass,boolean admin){
		setDni(dni);
		setNombre(nombre);
		setApellidos(apellidos);
		setFechaNac(fecha);
		setEmail(email);
		setPass(pass);
		this.admin=admin;
	}
	
	
	public void setDni(String dni){
		this.dni=dni;
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
	public String getDni(){
		return dni;
	}
	public String getPass(){
		return pass;
	}
	public void setId(Long id){
		this.id=id;
	}
	
	public boolean isAdmin(){
		return this.admin;
	}
	
	public boolean isAlta(){
		return this.admin;
	}
	
	public void pedirCita(Medico medico,Date fecha){
		
	}
}

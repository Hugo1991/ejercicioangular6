package blog;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Medico {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private long nColegiado;
	private String nombre;
	private String apellidos;
	private String especialidad;
	@ManyToOne
	@JoinColumn (name="idHospital")
	private Hospital hospital;
	public Medico() {
	}

	public Medico(Long nColegiado,String nombre, String apellidos,String especialidad) {
		setnColegiado(nColegiado);
		setNombre(nombre);
		setApellidos(apellidos);
		setEspecialidad(especialidad);
	}
	public Long getnColegiado(){
		return nColegiado;
	}
	public void setnColegiado(Long nColegiado){
		this.nColegiado=nColegiado;
	}
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setEspecialidad(String especialidad){
		this.especialidad=especialidad;
	}
	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}


	public long getId() {
		return id;
	}
	public String getEspecialidad(){
		return especialidad;
	}

}

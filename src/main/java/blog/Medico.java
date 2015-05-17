package blog;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Medico {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idMedico;
	
	private long nColegiado;
	private String nombre;
	private String apellidos;
	public Medico() {
	}

	public Medico(Long nColegiado,String nombre, String apellidos) {
		setNumeroColegiado(nColegiado);
		setNombre(nombre);
		setApellidos(apellidos);
		
	}
	public Long getNumeroColegiado(){
		return nColegiado;
	}
	public void setNumeroColegiado(Long nColegiado){
		this.nColegiado=nColegiado;
	}
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	
	
	public long getId() {
		return idMedico;
	}

}

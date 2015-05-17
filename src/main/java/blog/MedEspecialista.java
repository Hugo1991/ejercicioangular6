package blog;

public class MedEspecialista extends Medico{
	private String especialidad;
	public MedEspecialista(){}
	public MedEspecialista(Long nColegiado,String nombre, String apellidos, String especialidad){
		super(nColegiado,nombre,apellidos);
		setEspecialidad(especialidad);
	}
	public String getEspecialidad() {
		return especialidad;
	}

	public void setEspecialidad(String especialidad) {
		this.especialidad = especialidad;
	}
	
}

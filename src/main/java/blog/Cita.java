package blog;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Cita {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idCita;
	
	/*private Usuario usuario;
	private Medico medico;
	private Date fechaCita;
	public Cita(){}
	public Cita(Usuario usuario,Medico medico,Date fecha){}
	public void setUsuario(Usuario usuario){}
	public void setMedico(){}
	public void setFecha(){}*/
}

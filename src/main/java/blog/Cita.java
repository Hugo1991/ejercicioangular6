



package blog;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Cita {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idCita;
	@ManyToOne
	@JoinColumn (name="idUsuario")
	private Usuario usuario;
	@ManyToOne
	@JoinColumn (name="idMedico")
	private Medico medico;
	private Date fechaCita;
	@ManyToOne
	@JoinColumn (name="idHospital")
	private Hospital hospital;
	public Cita(){}
	public Cita(Usuario usuario,Date fecha,Hospital hospital,Medico medico){
		setUsuario(usuario);
		setFecha(fecha);
		setHospital(hospital);
		setMedico(medico);
	}
	public void setUsuario(Usuario usuario){
		this.usuario=usuario;
	}
	public void setFecha(Date fecha){
		this.fechaCita=fecha;
	}
	public void setHospital(Hospital hospital){
		this.hospital=hospital;
	}
	public void setMedico(Medico medico){
		this.medico=medico;
	}
	public Usuario getUsuario(){
		return usuario;
	}
	public Date getFecha(){
		return fechaCita;
	}
	public Hospital getHospital(){
		return hospital;
	}
	public Medico getMedico(){
		return medico;
	}
	

}



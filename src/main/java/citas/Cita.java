package citas;


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
	private long id;
	@ManyToOne
	@JoinColumn (name="usuario.id")
	private Usuario usuario;
	@ManyToOne
	@JoinColumn (name="medico.id")
	private Medico medico;
	private String fechaCita;
	@ManyToOne
	@JoinColumn (name="hospital.id")
	private Hospital hospital;
	public Cita(){}
	public Cita(Usuario usuario,String fechaCita,Hospital hospital,Medico medico){
		setUsuario(usuario);
		setFecha(fechaCita);
		setHospital(hospital);
		setMedico(medico);
	}
	public Cita(String fechaCita,Hospital hospital,Medico medico){
		setFecha(fechaCita);
		setHospital(hospital);
		setMedico(medico);
	}
	public void setUsuario(Usuario usuario){
		this.usuario=usuario;
	}
	public void setFecha(String fechaCita){
		this.fechaCita=fechaCita;
	}
	public void setHospital(Hospital hospital){
		this.hospital=hospital;
	}
	public void setMedico(Medico medico){
		this.medico=medico;
	}
	public long getid(){
		return id;
	}
	public Usuario getUsuario(){
		return usuario;
	}
	public String getFechaCita(){
		return fechaCita;
	}
	public Hospital getHospital(){
		return hospital;
	}
	public Medico getMedico(){
		return medico;
	}
	

}



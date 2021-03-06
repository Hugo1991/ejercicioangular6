package citas;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Hospital {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String nombre;
	private String calle;
	private String poblacion;
	private String pais;
	private long nTelefono;
	public Hospital(){}
	public Hospital(String nombre,String calle, String poblacion,String pais,long nTelefono){
		setNombre(nombre);
		setCalle(calle);
		setPoblacion(poblacion);
		setPais(pais);
		setTelefono(nTelefono);
	}
	public void setNombre(String nombre){
		this.nombre=nombre;
	}
	public void setCalle(String calle){
		this.calle=calle;
	}
	public void setPoblacion(String poblacion){
		this.poblacion=poblacion;
	}
	public void setPais(String pais){
		this.pais=pais;
	}
	public void setTelefono(long nTelefono){
		this.nTelefono=nTelefono;
	}
	public long getid(){
		return id;
	}
	public String getNombre(){
		return nombre;
	}
	public String getCalle(){
		return calle;
	}
	public String getPoblacion(){
		return poblacion;
	}
	public String getPais(){
		return pais;
	}
	public long getnTelefono(){
		return nTelefono;
	}
}

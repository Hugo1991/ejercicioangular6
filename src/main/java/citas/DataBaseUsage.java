package citas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

@Controller
public class DataBaseUsage implements CommandLineRunner {

	@Autowired
	private HospitalRepository hospitales;
	
	@Autowired
	private MedicoRepository medicos;
	
	@Autowired
	private CitaRepository citas;
	
	@Autowired
	private UsuarioRepository usuarios;
	
	@Override
	public void run(String... args) throws Exception {
		
		 // save a couple of customers
		
		Medico m=new Medico(822287l, "Doctor Jacobo", "Fernandez Lopez", "Cirujano");
		medicos.save(m);
		medicos.save(new Medico(7182757l, "Doctora Rosa", "Alcantara Martinez", "Dentista"));
		medicos.save(new Medico(618336l, "Doctor Alvaro", "Castellano Novillo", "Primaria"));



		Hospital h=new Hospital("Gregorio Marañon","C/ Doctor Esquerdo, 46","Madrid","España",915868000);
		hospitales.save(h);
		hospitales.save(new Hospital("La Paz","Pº de la Castellana, 261","Madrid","España",917277000));
		hospitales.save(new Hospital("12 de Octubre","Avda de Córdoba s/n","Madrid","España",913908000));
        Usuario u=new Usuario("49100755x","Hugo", "Fernandez Visier", "02-02-1991", "hugofernandezvisier@gmail.com", "1234",true);
        usuarios.save(u);
        usuarios.save(new Usuario("75632554j","Cruz Hector", "Fernandez", "08-12-1992", "cruz@gmail.com", "1234",false));
		
        
        usuarios.save(u);
        Cita c=new Cita(u,"07-02-1991",h,m);
        citas.save(c);

       
        // fetch all customers
        Iterable<Hospital> hospital = hospitales.findAll();
        System.out.println("Customers found with findAll():");
        System.out.println("-------------------------------");
        for (Hospital customer : hospital) {
            System.out.println(customer.getNombre());
        }
        System.out.println();

        Iterable<Medico> medico = medicos.findAll();
        System.out.println("Customers found with findAll():");
        System.out.println("-------------------------------");
        for (Medico customer : medico) {
            System.out.println(customer.getNombre());
        }
        Iterable<Cita> cita = citas.findAll();
        System.out.println("Customers found with findAll():");
        System.out.println("-------------------------------");
        for (Cita customer : cita) {
            System.out.println(customer.getUsuario());
        }
	}
}

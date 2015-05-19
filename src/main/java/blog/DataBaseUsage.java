package blog;

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
        hospitales.save(new Hospital("ramon y cajal","ramon y cajal","Madrid","España",915765456));
        medicos.save(new Medico(918276l, "Doctor florencio", "Magdalenas Martinez", "Doctorcito Malcorazon"));
        medicos.save(new Medico(100276l, "Doctor Down", "de carrito", "dentista"));
        citas.save(new Cita());

        usuarios.save(new Usuario("hugo", "fernnandez", "02-02-1991", "hugofernandezvisier@gmail.com", 49100755l, "123456789"));
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

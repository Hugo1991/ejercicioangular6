
/*package blog;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/citas")

public class CitaController {
<<<<<<< HEAD
	/*
	@Autowired
	private CitaRepository citaRepository;


=======
	
	@Autowired
	private CitaRepository citaRepository;
	

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Cita> addCita(@RequestBody Cita cita) {
		citaRepository.save(cita);		
		return new ResponseEntity<>(cita,HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteCita(@PathVariable Long id) {
		citaRepository.delete(id);
	}
	@RequestMapping(method = RequestMethod.GET)
	public List<Cita> mostrarCitas(Model model) {
		return citaRepository.findAll();
	}
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Cita mostrarCita(@PathVariable Long id) {
		return citaRepository.findOne(id);
	}

	
}*/


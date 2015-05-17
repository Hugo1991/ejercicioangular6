package blog;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/medicos")

public class MedicoController {
	
	@Autowired
	private MedicoRepository medicoRepository;
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Medico> addMedico(@RequestBody Medico medico) {
		medicoRepository.save(medico);		
		return new ResponseEntity<>(medico,HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteMedico(@PathVariable Integer id) {
		medicoRepository.delete(id);
	}

}

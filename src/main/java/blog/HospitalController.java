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
@RequestMapping("/hospitales")

public class HospitalController {
	
	@Autowired
	private HospitalRepository hospitalRepository;
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Hospital> addHospital(@RequestBody Hospital hospital) {
		hospitalRepository.save(hospital);		
		return new ResponseEntity<>(hospital,HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteHospital(@PathVariable Integer id) {
		hospitalRepository.delete(id);
	}

}

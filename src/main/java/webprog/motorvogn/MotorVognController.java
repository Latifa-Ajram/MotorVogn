package webprog.motorvogn;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MotorVognController {

    private final List<Bil> biler = new ArrayList<>();

    @PostMapping("/lagre")
    public void registrer(Bil bil){

        biler.add(bil);
    }
    @GetMapping("/hentdata")

    public List<Bil>hentData(){

        return biler;
    }


    @GetMapping("/slett")
    public void slettAlle(){
        biler.clear();
    }
}

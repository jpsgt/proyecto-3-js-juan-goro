function beca(){

        let edad = document.getElementById("edadu");
        let promedio = document.getElementById("promediou");
        let est = document.getElementById("estado");
        
        if( edad.value >= 18 && promedio.value >= 8 ){
        
            let parrafo = document.createElement("P");
            parrafo.innerText = "su beca esta siendo aprobada";
            est.append( parrafo );
        
        }
        else if( edad .value>= 18 && promedio.value <= 7){
        
            let parrafo = document.createElement("P");
            parrafo.innerText = "su beca esta siendo procesada";
            est.append( parrafo );
        
        }
        else{
        
            let parrafo = document.createElement("P");
            parrafo.innerText = "usted no puede tener beca";
            est.append( parrafo );
        
        }

}
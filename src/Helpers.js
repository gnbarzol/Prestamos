export function calcularTotal(cantidad, plazo){

    let interesTotal;

    let interesMaximo = 0.25;
    let interesNormal = 0.20;
    let interesMedio = 0.15;
    let interesMinimo = 0.10;

    //Interes por cantidad
    if (cantidad<=1000) 
        interesTotal = cantidad*interesMaximo;
    else if (cantidad >1000 && cantidad <=5000)
        interesTotal = cantidad*interesNormal;
    else if (cantidad >5000 && cantidad <=10000)
        interesTotal = cantidad*interesMedio;
    else
        interesTotal = cantidad*interesMinimo;
    

    //Interes por plazo
    switch(plazo){
        case 3:
            interesTotal += cantidad*0.05;
            break;
        case 6:
            interesTotal += cantidad*0.1;
            break;
        case 12:
            interesTotal += cantidad*0.15;
            break;
        case 24:
            interesTotal += cantidad*0.2;
            break;
        default:
            break;

    }

    return interesTotal + cantidad;
    
}

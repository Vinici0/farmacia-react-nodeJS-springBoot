import React from 'react'

export const validarCedula = ({setMesajeCedula}) => {

    const isValidCI = (ci) => {
        var isNumeric = true;
        var total = 0,
          individual;
      
        for (var position = 0; position < 10; position++) {
          individual = ci.toString().substring(position, position + 1);
      
          if (isNaN(individual)) {
            console.log(ci, position, individual, isNaN(individual));
            isNumeric = false;
            break;
          } else {
            if (position < 9) {
              if (position % 2 == 0) {
                if (parseInt(individual) * 2 > 9) {
                  total += 1 + ((parseInt(individual) * 2) % 10);
                } else {
                  total += parseInt(individual) * 2;
                }
              } else {
                total += parseInt(individual);
              }
            }
          }
        }
      
        if (total % 10 != 0) {
          total = total - (total % 10) + 10 - total;
        } else {
          total = 0;
        }
      
        if (isNumeric) {
          console.log(ci, total, individual);
          console.log(ci, typeof ci, ci.length);
          if (ci.toString().length != 10) {
            setMesajeCedula("La cedula debe ser de: 10 digitos")
            return false;
          }
      
          if (parseInt(ci, 10) == 0) {
            setMesajeCedula("La cedula no puede ser cero")
            return false;
          }
          if (total != parseInt(individual)) {
            setMesajeCedula("La cedula ingresada no es valida")
            return false;
          }
      
          console.log("cédula válida", ci);
          return true;
        }
        setMesajeCedula("El dato solo puede contener numeros.")
        return false;
      };
      

  return {
    isValidCI
  }
}





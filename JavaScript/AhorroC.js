function validar(){
    var mes, semana, dia, fecha, grafica;

    mes = document.getElementById("mes2").value;
    semana = document.getElementById("semana2").value;
    dia = document.getElementById("dia2").value;
    fecha = document.getElementById("fecha").value;
    grafica = document.getElementById("grafica2").value;

    if(mes == 0 && semana == 0 && dia == 0 && fecha == ""){
        Swal.fire({
			icon: 'error',
			title:'Calculo fallido',
			text: 'Debe diligenciar mínimo una opción de las fechas para generar el calculo',
		});
        return false;
    }

    else if(grafica == "0"){
        Swal.fire({
			icon: 'error',
			title:'Calculo fallido',
			text: 'Debe seleccionar un tipo de grafica',
		});
        return false;
    }

    Swal.fire({
        icon: 'success',
        title:'Calculo exitoso',
    });

};
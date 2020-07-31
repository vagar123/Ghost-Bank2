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
			title:'Reporte fallido',
			text: 'Debe seleccionar mínimo un mes, semana, día o fecha.',
		});
        return false;
    }

    else if(grafica == "0"){
        Swal.fire({
			icon: 'error',
			title:'Reporte fallido',
			text: 'Debe seleccionar el tipo de gráfica que desea',
		});
        return false;
    }

    else{
        alert("Reporte generado con éxito");
    }

};
function validar(){
    var salario, arriendo, emprendimientos, eventos, servicios, mes, semana, dia, fecha;

    salario = document.getElementById("salario").value;
    arriendo = document.getElementById("arriendo").value;
    emprendimientos = document.getElementById("emprendimientos").value;
    eventos = document.getElementById("eventos").value;
    servicios = document.getElementById("servicios").value;
    auto = document.getElementById("auto").value;
    manu = document.getElementById("manu").value;
    mes = document.getElementById("mes").value;
    semana = document.getElementById("semana").value;
    dia = document.getElementById("dia").value;
    fecha = document.getElementById("fecha").value;


    if(salario == ""  && arriendo == "" && emprendimientos == "" && eventos == "" && servicios == "" 
    && auto == "" && manu == "" ){
        Swal.fire({
			icon: 'error',
			title:'Calculo fallido',
			text: 'Debe diligenciar mínimo un campo de los ingresos mensuales o los egresos mensuales',
		});
        return false;
    }

    else if(mes == 0 && semana == 0 && dia == 0 && fecha == ""){
        Swal.fire({
			icon: 'error',
			title:'Calculo fallido',
			text: 'Debe diligenciar mínimo una opción de las fechas para generar el calculo',
		});
        return false;
    }

    Swal.fire({
        icon: 'success',
        title:'Calculo exitoso',
    });

};
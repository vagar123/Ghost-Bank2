function sololetras(e){
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key).toLowerCase();
    letras="abcdefghijklmnñopqrstuvwxyz";
    especiales="8-37-38-46-164";
    teclado_especial=false;
    
    for(var i in especiales){
        
        if(key==especiales[i]){
            teclado_especial=true;break;
        }
    }
    
    if(letras.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
};


function solonumeros(e){

    key=e.keyCode || e.which;

    teclado=String.fromCharCode(key);

    numeros="0123456789";

    especiales="8-37-38-46";

    teclado_especial=false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
        }
    }

    if(numeros.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
};


function validar(){
    var fecha, dia, semana, mes, año;

    fecha = document.getElementById("fecha").value;
    dia = document.getElementById("dia").value;
    semana = document.getElementById("semana").value;
    mes = document.getElementById("mes").value;
    año = document.getElementById("año").value;

    if(dia == 0 && semana == 0 && mes == 0 && año == 0){
        Swal.fire({
			icon: 'error',
			title:'Reporte Últimos Ingresos Fallido',
			text: 'Debe escoger mínimo un dia, semana, mes o año.',
		});
        return false;
    }

    else if(fecha == ""){
        Swal.fire({
			icon: 'error',
			title:'Reporte Últimos Ingresos Fallido',
			text: 'Debe diligenciar la fecha del reporte',
		});
        return false;
    }

    Swal.fire({
        icon: 'success',
        title:'Registro exitoso',
    });

};

function validar2(){
    var id, nombre, valor, fecha, estado, grupo;

    id = document.getElementById("id2").value;
    nombre = document.getElementById("des2").value;
    valor = document.getElementById("grafica2").value;
    fecha = document.getElementById("fecha2").value;
    estado = document.getElementById("estado2").value;
    grupo = document.getElementById("grupo2").value;

    if(id == "" || nombre == "" || valor == "" || fecha == "" || estado == 0 || grupo == 0){
        Swal.fire({
			icon: 'error',
			title:'Nuevo Ingreso Fallido',
			text: 'Debe diligenciar todos los campos.',
		});
        return false;
    }

    else if(id.length>10){
        Swal.fire({
			icon: 'error',
			title:'Nuevo Ingreso Fallido',
			text: 'El id del ingreso es muy largo',
		});
        return false;
    }

    else if(id.length>30){
        Swal.fire({
			icon: 'error',
			title:'Nuevo Ingreso Fallido',
			text: 'El nombre del ingreso es muy largo',
		});
        return false;
    }

    else if(fecha != "" && estado == 1){
        Swal.fire({
			icon: 'error',
			title:'Nuevo Ingreso Fallido',
			text: 'El estado constante elegido fue "Activo" (se mantiene), si esto es correcto por favor no diligencie la fecha en el formulario.',
		});
        return false;
    }

    Swal.fire({
        icon: 'success',
        title:'Registro exitoso',
    });

};

function validar3(){
    var id, nombre, valor, fecha, estado, grupo;

    id = document.getElementById("id2").value;
    nombre = document.getElementById("des2").value;
    valor = document.getElementById("grafica2").value;
    fecha = document.getElementById("fecha2").value;
    estado = document.getElementById("estado2").value;
    grupo = document.getElementById("grupo2").value;

    if(id == "" || nombre == "" || valor == "" || fecha == "" || estado == 0 || grupo == 0){
        Swal.fire({
			icon: 'error',
			title:'Nuevo Egreso Fallido',
			text: 'Debe diligenciar todos los campos.',
		});
        return false;
    }

    else if(id.length>10){
        Swal.fire({
			icon: 'error',
			title:'Nuevo Egreso Fallido',
			text: 'El id del egreso es muy largo',
		});
        return false;
    }

    else if(id.length>30){
        Swal.fire({
			icon: 'error',
			title:'Nuevo Egreso Fallido',
			text: 'El nombre del egreso es muy largo',
		});
        return false;
    }

    else if(fecha != "" && estado == 1){
        Swal.fire({
			icon: 'error',
			title:'Nuevo Egreso Fallido',
			text: 'El estado constante elegido fue "Activo" (se mantiene), si esto es correcto por favor no diligencie la fecha en el formulario.',
		});
        return false;
    }

    Swal.fire({
        icon: 'success',
        title:'Registro exitoso',
    });

};
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
    var id, nombre, valor, fecha, descripcion;

    id = document.getElementById("id2").value;
    nombre = document.getElementById("des2").value;
    valor = document.getElementById("grafica2").value;
    fecha = document.getElementById("fecha2").value;
    descripcion = document.getElementById("estado2").value;

    if(id == "" || nombre == "" || valor == "" || fecha == ""){
        Swal.fire({
			icon: 'error',
			title:'Reporte fallido',
			text: 'Todos los campos son obligatorios, excepto la descripción, esta es opcional.',
		});
        return false;
    }

    else if(id.length>10){
        Swal.fire({
			icon: 'error',
			title:'Id inválido',
			text: 'El id ingresado es muy largo.',
		});
        return false;
    }

    else if(descripcion.length>100){
        Swal.fire({
			icon: 'error',
			title:'Descripción inválida',
			text: 'La descripción digitada es muy larga.',
		});
        return false;
    }

    Swal.fire({
        icon: 'success',
        title:'Registro exitoso',
    });

};
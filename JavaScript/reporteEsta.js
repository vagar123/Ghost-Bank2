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
    var id, des, grafica, autor;

    id = document.getElementById("id2").value;
    des = document.getElementById("des2").value;
    grafica = document.getElementById("grafica2").value;
    autor = document.getElementById("autor2")

    if(id == "" || des == "" || grafica == 0 || autor == ""){
        Swal.fire({
			icon: 'error',
			title:'Reporte fallido',
			text: 'Debe diligenciar todos los campos.',
		});
        return false;
    }

    else if(id.length>10){
        Swal.fire({
			icon: 'error',
			title:'Id inválido',
			text: 'El id ingresado para el reporte es muy largo.',
		});
        return false;
    }

    else if(des.length>30){
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
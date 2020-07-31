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
    var tipo, identificacion, nombre, apellido, correo, telefono, genero, fechaN, pass1, pass2;

    tipo = document.getElementById("tipo2").value;
    identificacion = document.getElementById("codigo2").value;
    nombre = document.getElementById("nombre2").value;
    apellido = document.getElementById("apellido2").value;
    correo = document.getElementById("correo2").value;
    telefono = document.getElementById("telefono2").value;
    genero = document.getElementById("rol2").value;
    fechaN = document.getElementById("contrato2").value;
    pass1 = document.getElementById("pass2").value;
    pass2 = document.getElementById("pass4").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(tipo == 0 || identificacion == "" || nombre == "" || apellido == "" || correo == "" || 
    telefono == "" || genero == 0 || fechaN == "" || pass1 == "" || pass2 == ""){
        Swal.fire({
			icon: 'error',
			title:'Registro fallido',
			text: 'Debe diligenciar todos los campos.',
		});
        return false;
    }

    else if(identificacion.length>10){
        Swal.fire({
			icon: 'warning',
			title:'Identificación inválida',
			text: 'El número de identificación es muy largo.',
		});
        return false;
    }

    else if(nombre.length>30){
        Swal.fire({
			icon: 'warning',
			title:'Nombre inválido',
			text: 'El nombre diligenciado es muy largo.',
		});
        return false;
    }

    else if(nombre.length<3){
        Swal.fire({
			icon: 'warning',
			title:'Nombre inválido',
			text: 'El nombre diligenciado es muy corto.',
		});
        return false;
    }

    else if(apellido.length>30){
        Swal.fire({
			icon: 'warning',
			title:'Apellido inválido',
			text: 'El apellido diligenciado es muy largo.',
		});
        return false;
    }

    else if(apellido.length<3){
        Swal.fire({
			icon: 'warning',
			title:'Apellido inválido',
			text: 'El apellido diligenciado es muy corto.',
		});
        return false;
    }

    else if(correo.length>60){
        Swal.fire({
			icon: 'warning',
			title:'Correo inválido',
			text: 'El correo diligenciado es muy largo.',
		});
        return false;
    }

    else if(!expresion.test(correo)){
        Swal.fire({
			icon: 'warning',
			title:'Correo inválido',
			text: 'El correo electrónico no cumple con la sintáxis estipulada: Example@gmail.com.',
		});
        return false;
    }

    else if(telefono.length>10){
        Swal.fire({
			icon: 'warning',
			title:'Teléfono inválido',
		});
        return false;
    }

    else if(pass2 != pass1){
        Swal.fire({
			icon: 'warning',
			title:'Las contraseñas no coniciden',
		});
        return false;
    }

    alert("Registro exitoso");

};


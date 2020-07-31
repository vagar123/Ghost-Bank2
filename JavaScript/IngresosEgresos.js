function validar(){
    var reporte, des, grafico, mes;

    reporte = document.getElementById("id2").value;
    des = document.getElementById("des2").value;
    grafico = document.getElementById("grafica2").value;
    mes = document.getElementById("autor2").value;


    if(reporte == ""  || des == "" || grafico == "" || mes == ""){
        Swal.fire({
			icon: 'error',
			title:'Reporte fallido',
			text: 'Debe diligenciar todos los campos.',
		});
        return false;
    }

    else if(des.length>30){
        Swal.fire({
			icon: 'error',
			title:'Reporte fallido',
			text: 'La descripción del reporte es muy larga',
		});
        return false;
    }

    Swal.fire({
        icon: 'success',
        title:'Reporte exitoso',
    });

};
//Código para la tabla utilizando los plugins de DataTable//

$(document).ready(function() {
    $('#example').DataTable({
        //Para cambiar el lenguaje de ingles a español//
        "language":{
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando resgistros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior",
            },
            "s,Processing":"Procesando....",
        }
    });
});


//Función de Sweetalert2 para mostrar las alertas de eliminar//

function validar2(){
    Swal.fire({
        title: '¿Esta seguro?',
        text: "Esta acción no se podrá revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo!'
    })
    .then((result) => {
        if (result.value) {
        Swal.fire(
            'Eliminado!',
            'El registro ha sido eliminado.',
            'success'
        )}
    })
};
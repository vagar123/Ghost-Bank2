//Función de Sweetalert2 para mostrar las alertas de eliminar//

function validar2(){
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2']
      }).queue([
        {
          title: 'Título',
          text: 'Escribe el título de la nueva publicación.'
        },
        {title:'Publicación',
        text: 'Escribe la publicación que deseas realizar.'
        },
      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            width: '500px',
            heigh: '200px',
            position: 'top-end',
            icon: 'success',
            title: 'Publicación exitosa',
            showConfirmButton: false,
            timer: 1500
          })
        }
    })
};
import swal from 'sweetalert';

export default (inputs) => {
    if(inputs.email === '' || inputs.password === '') {
        swal({
            title: "¡Error!",
            text: "Coloqué un email/password",
            icon: "error",
            timer: 1500
          });
          return true;
    }
}
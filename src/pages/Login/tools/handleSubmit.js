import { Navigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import validate from './validate';

export const handleSubmit = async (e, inputs, setLoading) => {
  e.preventDefault();
  
  if(validate(inputs)) return;

  setLoading(true);

  await axios.post("http://challenge-react.alkemy.org/", {
    email: inputs.email,
    password: inputs.password
  })
    .then(response => {
      const { token } = response.data;
      localStorage.setItem('TOKEN', token);
      <Navigate to="/user" />
    })
    .catch(error => {
      if (error.response.status === 401) {
        swal({
          title: "¡Error!",
          text: "Email o password incorrecto",
          icon: "error",
          timer: 1500
        });
        return;
      }
      console.log(error);
    })
    .finally(() => setLoading(false))
}
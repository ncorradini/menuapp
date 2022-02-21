import './Form.scss';
import swal from 'sweetalert';
import { useState } from 'react';
import { handleFocusForm } from '../../../utils/handleFocusForm';
import { handleSubmit } from '../../../pages/Login/tools/handleSubmit';

const Form = ({ setLoading }) => {
    const initialState = { email: '', password: '' }
    const [inputs, setInputs] = useState(initialState);

    const handleChange = e => setInputs({ ...inputs, [e.target.name]: e.target.value });

    const showUser = () => (
        swal({
            title: "User:",
            text: "Email: challenge@alkemy.org || Password: react",
            timer: Infinity
        })
    )

    return (
        <form
            className="loginForm"
            onSubmit={e => handleSubmit(e, inputs, setLoading)}
            onChange={handleChange}
        >
            <div className="loginForm__input">
                <i className="fas fa-user"></i>
                <input
                    name="email"
                    type="text"
                    onFocus={handleFocusForm}
                    onBlur={handleFocusForm}
                />
            </div>
            <div className="loginForm__input">
                <i className="fas fa-lock"></i>
                <input
                    name="password"
                    type="password"
                    onFocus={handleFocusForm}
                    onBlur={handleFocusForm}
                />
            </div>
            <button className="loginForm__buttonSubmit">Ingresar</button>
            <p
                className="loginForm__forget"
                onClick={() => showUser()}
            >¿Olvidaste tu contraseña?</p>
        </form>
    );
};

export default Form;

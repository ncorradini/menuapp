import './Searcher.scss';
import { useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../../../pages/User/tools/const';
import { handleFocusForm } from '../../../utils/handleFocusForm';
import DishList from '../DishList';
import swal from 'sweetalert';

const Searcher = () => {
    const [search, setSearch] = useState(null);
    const [dishs, getDishs] = useState(null);

    const getDishData = e => {
        e.preventDefault();

        if (search.length <= 2) return swal({
            title: "Término incorrecto!",
            text: "El nombre del plato debe contener más de 2 carácteres",
            icon: "error",
            timer: 2000
        });

        const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';

        axios.get(`${baseUrl}?apiKey=${API_KEY}&query=${search}&number=5`)
            .then(response => {
                const data = response.data;
                getDishs(data.results);
            })
            .catch(error => console.log(error))
    }

    const handleChange = e => {
        setSearch(e.target.value);
    }

    return (
        <>
            <div className="searcher">
                <h2 className="searcher__title">Buscador</h2>
                <form
                    className="searcher__form"
                    onSubmit={getDishData}
                    onFocus={handleFocusForm}
                    onBlur={handleFocusForm}
                >
                    <div className="searcher__form-container">
                        <input
                            className="searcher__form-container--input"
                            type="text"
                            onChange={handleChange}
                        />
                        <i
                            className="fas fa-search"
                            onClick={getDishData}
                        ></i>
                    </div>
                </form>
            </div>
            {dishs && <DishList dishs={dishs} />}
        </>
    )
}

export default Searcher;
const ListFeatures = ({ Info }) => {
    return (
        <ul className="dish__list">
            <li>Muy sano: {Info.veryHealthy ? 'Si' : 'No'}</li>
            <li>Libre de lácteos: {Info.dairyFree ? 'Si' : 'No'}</li>
            <li>Vegano: {Info.vegan ? 'Si' : 'No'}</li>
            <li>Libre de glúten: {Info.glutenFree ? 'Si' : 'No'}</li>
            <li>Vegetariano: {Info.vegetarian ? 'Si' : 'No'}</li>
        </ul>
    )
}

export default ListFeatures
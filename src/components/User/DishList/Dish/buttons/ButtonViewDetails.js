const ButtonViewDetails = ({ setViewDetails }) => {
    return (
        <button className="dish__buttonView"
            onClick={() => setViewDetails(true)}
        >
            <i className="fas fa-info-circle"></i>
            Ver Detalles
        </button >
    )
}

export default ButtonViewDetails
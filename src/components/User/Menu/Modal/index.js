import './Modal.scss';

const Modal = ({ children, viewDetails, setViewDetails }) => {
    return (
        <>
            {viewDetails &&
                <div className="modal">
                    <div className="modal__container">
                        <header className="modal__container-title">
                            <h3>Detalles del plato</h3>
                        </header>
                        <button 
                            className="modal__container-btn"
                            onClick={() => setViewDetails(false)}
                        >
                            X
                        </button>
                        <div className="modal__container-content">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal
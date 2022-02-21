import { useContext } from "react"
import MenuContext from '../../../../context/menu/MenuContext';

const Features = () => {
    const { features } = useContext(MenuContext);

    return (
        <div className="features">
            <p>HealthScore:&nbsp;
                <span>{features.health_score}</span>
            </p>
            <p>Listo en:&nbsp;
                <span>{features.ready_minutes}min</span>
            </p>
            <p>Precio:&nbsp;
                <span>${features.price}</span>
            </p>
        </div>
    )
}

export default Features
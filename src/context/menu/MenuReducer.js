export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case 'ADD_DISH': {
            return {
                menu: [...state.menu, payload],
                features: {
                    health_score: state.features.health_score + payload.info.healthScore,
                    ready_minutes: state.features.ready_minutes + payload.info.readyInMinutes,
                    price: parseInt(state.features.price + payload.info.pricePerServing)
                }
            }
        }
        case 'DELETE_DISH': {
            return {
                menu: state.menu.filter((dish) => dish.id !== payload.id),
                features: {
                    health_score: state.features.health_score - payload.info.healthScore,
                    ready_minutes: state.features.ready_minutes - payload.info.readyInMinutes,
                    price: parseInt(state.features.price - payload.info.pricePerServing) <= 0 
                            ? 0 
                            : parseInt(state.features.price - payload.info.pricePerServing)
                }
            }
        }
        default:
            return state;
    }
}
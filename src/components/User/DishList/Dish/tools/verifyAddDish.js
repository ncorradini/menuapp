import swal from 'sweetalert';

export const verifyAddDish = (menu, addDish, dish) => {
    if (menu.length >= 4) {
        swal({
            title: "¡No puedes agregar más platos!",
            text: "Ya has alcanzado el máximo de platos permitidos",
            icon: "error",
            timer: 2000
        });
        return;
    }

    if (menu.filter(d => d.id === dish.id).length > 0) {
        swal({
            title: "¡Ya has agregado este plato!",
            text: "No puedes agregar dos veces el mismo plato",
            icon: "error",
            timer: 2000
        });
        return;
    }

    const dishVegan = menu.filter(d => d.info.vegan === true);

    if (dishVegan.length > 1 && dish.info.vegan === true) {
        swal({
            title: "¡No puedes agregar más platos veganos!",
            text: "Tu menú solo puede tener dos platos veganos",
            icon: "error",
            timer: 2000
        });
        return;
    }

    const dishNormal = menu.filter(d => d.info.vegan === false);

    if (dishNormal.length > 1 && dish.info.vegan === false) {
        swal({
            title: "¡No puedes agregar más platos NO veganos!",
            text: "Tu menú solo puede tener dos platos NO veganos",
            icon: "error",
            timer: 2000
        });
        return;
    }

    addDish(dish);
}
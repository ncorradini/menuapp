export const handleFocusForm = e => {
    const element = e.target.parentElement;
    if (element.classList.contains('focused')) {
        element.classList.remove('focused');
    } else {
        element.classList.add('focused');
    }
}
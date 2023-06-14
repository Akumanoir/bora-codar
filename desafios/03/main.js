function toggle() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {

        if (button.classList.contains('primary')) {
            button.classList.add('secondary');
            button.classList.remove('primary')
        } else if (button.classList.contains('secondary')) {
            button.classList.add('tertiary');
            button.classList.remove('secondary')
        } else if (button.classList.contains('tertiary')) {
            button.classList.add('primary');
            button.classList.remove('tertiary')
        }
    });
}
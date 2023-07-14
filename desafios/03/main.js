function toggle() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        if (button.classList.contains('primary')) {
            button.classList.replace("primary", "secondary")
        } else if (button.classList.contains('secondary')) {
            button.classList.replace("secondary", "tertiary")
        } else if (button.classList.contains('tertiary')) {
            button.classList.replace("tertiary", "primary")
        }
    });
}
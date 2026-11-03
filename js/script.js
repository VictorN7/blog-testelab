
const favoriteBtns = document.querySelectorAll('.favorite-btn');

favoriteBtns.forEach((button) => {

    button.addEventListener('click', () => {

        const isActive = button.classList.toggle('active');

        button.setAttribute('aria-pressed', isActive);

    });

});

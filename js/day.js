document.addEventListener("DOMContentLoaded", () => {

    const dateBlock = document.querySelector('.date-block');

    const months = [
        'January','February','March','April','May','June',
        'July','August','September','October','November','December'
    ];

    if (dateBlock) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        const day = tomorrow.getDate();
        const month = months[tomorrow.getMonth()];

        dateBlock.textContent = `${day} ${month}`;
    }

});
const scriptTag = document.currentScript;
const startDateTimeStr = scriptTag.dataset.startDatetime;

const spotsBlock = document.getElementById('spots-countеtt');

// стартове значення
const START_SPOTS = 14;
const HOURS_STEP = 4;

if (spotsBlock && startDateTimeStr) {

    // парсимо дату вручну
    const [datePart, timePart] = startDateTimeStr.split(' ');
    const [day, month, year] = datePart.split('.').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);

    const startDate = new Date(year, month - 1, day, hours, minutes);
    const now = new Date();

    // різниця в годинах
    const diffMs = now - startDate;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    // скільки разів пройшло по 4 години
    const stepsPassed = Math.floor(diffHours / HOURS_STEP);

    // обчислюємо залишок
    let spotsLeft = START_SPOTS - stepsPassed;

    // ❗ не дозволяємо піти в мінус
    if (spotsLeft < 0) spotsLeft = 0;

    spotsBlock.textContent = spotsLeft;
}

const scriptTag = document.currentScript;
const startDateTimeStr = scriptTag.dataset.startDatetime;

const spotsBlock = document.getElementById('spots-countеtt');

// налаштування
const START_SPOTS = 14;
const HOURS_STEP = 4;

if (spotsBlock && startDateTimeStr) {

    const [datePart, timePart] = startDateTimeStr.split(' ');
    const [day, month, year] = datePart.split('.').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);

    const startDate = new Date(year, month - 1, day, hours, minutes);
    const now = new Date();

    // різниця в годинах
    const diffMs = now - startDate;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    let spotsLeft = START_SPOTS;

    // якщо дата вже настала
    if (diffHours > 0) {
        const stepsPassed = Math.floor(diffHours / HOURS_STEP);
        spotsLeft = START_SPOTS - stepsPassed;
    }

    // 🔒 жорсткі обмеження
    spotsLeft = Math.max(0, Math.min(START_SPOTS, spotsLeft));

    spotsBlock.textContent = spotsLeft;
}

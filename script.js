const dateButton = document.getElementById('dateBtn');

if (dateButton) {
    dateButton.addEventListener('click', function () {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-GB', options);
    document.getElementById('dateOutput').textContent = `Today is ${formattedDate}`;
    });
}

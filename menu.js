document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tableNumber = urlParams.get('table');

    if (tableNumber) {
        document.getElementById('table-number').textContent = tableNumber;
    } else {
        window.location.href = 'error.html';
    }
});

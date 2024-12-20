// URL'den masa numarasını kontrol et ve ayarla
function initializeTable() {
    const urlParams = new URLSearchParams(window.location.search);
    const tableNumber = urlParams.get('table');
    
    if (!tableNumber) {
        // Masa numarası yoksa ana sayfaya yönlendir
        window.location.href = 'index.html';
        return;
    }

    // Masa numarasını ekranda göster
    const tableNumberElement = document.getElementById('table-number');
    tableNumberElement.textContent = tableNumber;

    // Masa numarasını localStorage'a kaydet (siparişler için)
    localStorage.setItem('currentTable', tableNumber);
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', initializeTable);
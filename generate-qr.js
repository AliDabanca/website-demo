document.addEventListener('DOMContentLoaded', () => {
    const tableCount = 20; // Toplam masa sayısı
    const container = document.getElementById('tables-container');

    for (let i = 1; i <= tableCount; i++) {
        // Her masa için bir div oluştur
        const tableDiv = document.createElement('div');
        tableDiv.className = 'table-qr';

        // Masa başlığı
        const tableTitle = document.createElement('h2');
        tableTitle.textContent = `Masa ${i}`;

        // QR kodu için bir div oluştur
        const qrDiv = document.createElement('div');
        qrDiv.id = `qr-code-${i}`;

        // QR kodu oluştur
        new QRCode(qrDiv, {
            text: `${window.location.origin}/menu.html?table=${i}`,
            width: 128,
            height: 128
        });

        // Öğeleri ekrana yerleştir
        tableDiv.appendChild(tableTitle);
        tableDiv.appendChild(qrDiv);
        container.appendChild(tableDiv);
    }
});

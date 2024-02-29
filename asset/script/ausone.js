document.getElementById('contact-btn').addEventListener('click', function() {
    var popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-btn" onclick="closePopup()">X</span>
            <h1>A toi de coder</h1>
            <p class="txt">Testez vos compétences en Flexbox en jouant à Flexbox Froggy ! Scannez le QR code ci-dessous pour commencer :</p>
            <img src="asset/img/froggy.png" alt="QR Code Flexbox Froggy">
        </div>
    `;
    document.body.appendChild(popup);
    setTimeout(function() {
        popup.classList.add('show');
    }, 100);
});

function closePopup() {
    var popup = document.querySelector('.popup');
    popup.classList.remove('show');
    setTimeout(function() {
        popup.parentNode.removeChild(popup);
    }, 300);
}

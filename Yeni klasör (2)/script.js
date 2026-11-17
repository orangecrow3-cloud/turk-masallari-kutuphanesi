let totalReadCount = 0;

// FERMANI AÇMA/KAPATMA
function toggleFerman(headerElement) {
    let card = headerElement.closest('.ferman-card');
    card.classList.toggle('open');
}

// HEPSİNİ AÇ
function openAllFermans() {
    let cards = document.querySelectorAll('.ferman-card');
    cards.forEach(card => card.classList.add('open'));
}

// HEPSİNİ KAPAT
function closeAllFermans() {
    let cards = document.querySelectorAll('.ferman-card');
    cards.forEach(card => card.classList.remove('open'));
}

// GECE/GÜNDÜZ MODU
function toggleTheme() {
    let body = document.body;
    let btn = document.getElementById('themeToggleBtn');
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        btn.innerText = '☀️ Gündüz Çinisi';
    } else {
        body.setAttribute('data-theme', 'light');
        btn.innerText = '🌙 Gece Çinisi';
    }
}

// ARAMA VE "SONUÇ BULUNAMADI" DÜZELTMESİ
function filterTales() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('ferman-card');
    let visibleCount = 0;

    for (let card of cards) {
        let title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    }

    let noResultsMsg = document.getElementById('noResultsMsg');
    if (visibleCount === 0) {
        noResultsMsg.style.display = "block";
    } else {
        noResultsMsg.style.display = "none";
    }
}

// KATEGORİ FİLTRELEME
function filterByCategory(category, btnElement) {
    let buttons = document.getElementsByClassName('filter-btn');
    for (let btn of buttons) {
        btn.classList.remove('active');
    }
    btnElement.classList.add('active');

    let cards = document.getElementsByClassName('ferman-card');
    let visibleCount = 0;

    for (let card of cards) {
        let cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    }

    let noResultsMsg = document.getElementById('noResultsMsg');
    if (visibleCount === 0) {
        noResultsMsg.style.display = "block";
    } else {
        noResultsMsg.style.display = "none";
    }
}

// RASTGELE FERMAN AÇ
function openRandomFerman() {
    let cards = document.querySelectorAll('.ferman-card');
    cards.forEach(c => c.classList.remove('open'));
    
    let randomIndex = Math.floor(Math.random() * cards.length);
    let selectedCard = cards[randomIndex];
    selectedCard.classList.add('open');
    selectedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// OKUNDU İŞARETLE / KALDIR
function toggleReadStatus(btnElement) {
    event.stopPropagation();
    let parentCard = btnElement.closest('.ferman-card');

    if (btnElement.classList.contains('is-read')) {
        btnElement.classList.remove('is-read');
        btnElement.innerHTML = '☐ Okundu İşaretle';
        totalReadCount--;
    } else {
        btnElement.classList.add('is-read');
        btnElement.innerHTML = '✓ Okundu';
        totalReadCount++;
        
        setTimeout(() => {
            parentCard.classList.remove('open');
        }, 500);
    }
    document.getElementById('readTalesCount').innerText = '📖 ' + totalReadCount + ' / 8';
}

// METNİ KOPYALAMA İŞLEVİ (UTILITY)
function copyMasalText(btnElement) {
    event.stopPropagation();
    let body = btnElement.closest('.ferman-body');
    let text = body.querySelector('.masal-full-text').innerText;

    navigator.clipboard.writeText(text).then(() => {
        let originalText = btnElement.innerText;
        btnElement.innerText = '✓ Kopyalandı!';
        setTimeout(() => {
            btnElement.innerText = originalText;
        }, 1500);
    });
}
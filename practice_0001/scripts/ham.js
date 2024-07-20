// ナビゲーションバーを表示・非表示にする関数
function toggleNav() {
    let nav = document.querySelector('nav');
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

// 最終更新日を表示する関数
function showLastModified() {
    let lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = '最終更新日: ' + document.lastModified;
}

// メニューアイコンにクリックイベントを追加
let menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', toggleNav);


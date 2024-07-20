document.addEventListener("DOMContentLoaded", function () {
    // ハンバーガーメニューのトグル
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.getElementById("nav-links");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // 最終更新日を表示
    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // 現在の年を表示
    const yearSpan = document.getElementById("yearSpan");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 画像ホバーで変更 (Effector Historyページ用)
    const historyImages = document.querySelectorAll(".history-image");
    historyImages.forEach(img => {
        img.addEventListener("mouseenter", () => {
            img.src = img.dataset.hover;
        });
        img.addEventListener("mouseleave", () => {
            img.src = img.dataset.original;
        });
    });

    // ノブカードクリックで詳細表示 (Knob Typesページ用)
    const knobCards = document.querySelectorAll(".knob-card");
    knobCards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("expanded");
        });
    });

    // お気に入り保存 (localStorage使用)
    const favoriteBtns = document.querySelectorAll(".favorite-btn");
    favoriteBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const knobType = btn.parentElement.dataset.type;
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            if (favorites.includes(knobType)) {
                favorites = favorites.filter(fav => fav !== knobType);
            } else {
                favorites.push(knobType);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
            displayFavorites();
        });
    });

    function displayFavorites() {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const favoriteDisplay = document.getElementById("favorite-display");
        if (favoriteDisplay) {
            favoriteDisplay.textContent = `お気に入り: ${favorites.join(", ")}`;
        }
    }

    displayFavorites();

    // IntersectionObserverで1秒遅らせてlazy loading
    const lazyLoadImages = document.querySelectorAll("img[loading='lazy']");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }, 1000); // 1秒遅らせる
            }
        });
    }, observerOptions);

    lazyLoadImages.forEach(img => {
        img.dataset.src = img.src;
        img.src = ""; // 初期状態ではsrcを空にする
        observer.observe(img);
    });
});

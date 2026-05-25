document.addEventListener("DOMContentLoaded", () => {

    const products = [
    {
        id: 1,
        brand: "Google",
        name: "Google Pixel 10 Pro",
        price: 37999,
        description: "Флагманський смартфон із передовими AI-функціями, неймовірною камерою та чистим Android.",
        image: "https://my-apple.com.ua/image/catalog/products/google-pixel/pixel-10-pro/google-pixel-10-pro-moonstone-1.png"
    },
    {
        id: 2,
        brand: "Xiaomi",
        name: "Xiaomi Redmi 14C",
        price: 5659,
        description: "Доступний та стильний смартфон із великим екраном та потужною батареєю для повсякденних завдань.",
        image: "https://sota.store/image/cache/catalog/Xiaomi-3/Redmi-14C-grn-03-1600x1600.webp"
    },
    {
        id: 3,
        brand: "Apple",
        name: "Apple MacBook Pro 14",
        price: 106699,
        description: "Ультимативний ноутбук для професіоналів. Потужний процесор, вражаючий дисплей Liquid Retina XDR та довга автономність.",
        image: "C:/Users/andri/Documents/фінальний проєкт/images/rrr (2).png"
    },
    {
        id: 4,
        brand: "Xiaomi",
        name: "Xiaomi Pad 7",
        price: 12999,
        description: "Сучасний планшет для роботи та розваг із яскравим дисплеєм та підтримкою фірмового стилуса.",
        image: "C:/Users/andri/Documents/фінальний проєкт/images/Знімок_екрана_2026-05-21_163928-removebg-preview.png"
    },
    {
        id: 5,
        brand: "Samsung",
        name: "Samsung Galaxy Tab S10 Plus",
        price: 33249,
        description: "Преміальний планшет із великим AMOLED-екраном, захистом від води та комплектним пером S Pen.",
        image: "C:/Users/andri/Documents/фінальний проєкт/images/aaa (1).webp"
    },
    {
        id: 6,
        brand: "Xiaomi",
        name: "Xiaomi Earbuds 6 Active",
        price: 699,
        description: "Бюджетні бездротові навушники з хорошим басом, ергономічним дизайном та тривалим часом роботи.",
        image: "C:/Users/andri/Documents/фінальний проєкт/images/6_active-removebg-preview.png"
    },
    {
        id: 7,
        brand: "Sony",
        name: "Sony PlayStation 5 Pro",
        price: 47999,
        description: "Покращена версія легендарної консолі з потужнішим графічним чіпом та підтримкою покращеного трасування променів.",
        image: "https://us-playstation.com/wp-content/uploads/2024/09/PS5-PRO-Hero-1.webp"
    },
    {
        id: 8,
        brand: "Sony",
        name: "Sony PlayStation 6 (ранній доступ)",
        price: 100000000,
        description: "Ексклюзивна пропозиція! Консоль майбутнього покоління. Ціна кусається, але статус безцінний.",
        image: "C:/Users/andri/Documents/фінальний проєкт/images/ps6-removebg-preview.png"
    },
    {
        id: 9,
        brand: "Microsoft",
        name: "Microsoft Xbox Series X",
        price: 24300,
        description: "Найпотужніша консоль від Microsoft із підтримкою ігор у True 4K та швидким завантаженням завдяки SSD.",
        image: "https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png"
    },
    {
        id: 10,
        brand: "Fossibot",
        name: "Qichang Fossibot F106 Pro",
        price: 7199,
        description: "Захищений невбивний смартфон із величезною батареєю, потужним ліхтариком та вбудованим динаміком-колонкою.",
        image: "C:/Users/andri/Documents/фінальний проєкт/images/446090105-removebg-preview.png"
    },
    {
        id: 11,
        brand: "Microsoft",
        name: "Microsoft Windows 11 Pro (ліцензія)",
        price: 9999,
        description: "Офіційний ліцензійний ключ для професійної версії ОС із розширеними функціями безпеки та шифрування.",
        image: "https://softload.nl/wp-content/uploads/2022/02/W11P.png"
    },
    {
        id: 12,
        brand: "Microsoft",
        name: "Microsoft Windows 10 Pro (ліцензія)",
        price: 3999,
        description: "Перевірена часом та стабільна операційна система для бізнесу та дому з офіційною підтримкою.",
        image: "https://images.prom.ua/1416181631_w640_h640_1416181631.jpg"
    },
    {
        id: 13,
        brand: "Samsung",
        name: "Samsung Galaxy S26 Ultra",
        price: 50000,
        description: "Ультра-флагман із революційною камерою на 200 Мп, вбудованим стилусом та титановим корпусом.",
        image: "https://cdn.samsungshop.com.ua/products/10426/cover/224723/S26-Ultra-Black.webp"
    },
    {
        id: 14,
        brand: "Xiaomi",
        name: "Xiaomi Pad 8 Pro",
        price: 24999,
        description: "Флагманський планшет із надвисокою частотою оновлення екрана, топовим процесором та металевим корпусом.",
        image: "https://sota.store/image/cache/catalog/Xiaomi-3/xiaomi-pad-8-pro-wifi-blue-01-1600x1600.webp"
    }
];

    const productsContainer = document.getElementById("products");
    const details = document.getElementById("details");
    const overlay = document.querySelector(".overlay");

    const detailsImg = details.querySelector(".product-img");
    const detailsTitle = details.querySelector(".product-title");
    const detailsPrice = details.querySelector(".product-price");
    const detailsDescription = details.querySelector(".product-description");

    function openDetails(product) {
        detailsImg.src = product.image;
        detailsTitle.textContent = product.name;
        detailsPrice.textContent = product.price + " грн";
        detailsDescription.textContent = product.description;

        details.style.display = "flex";
        overlay.style.display = "block";

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function closeDetails() {
        details.style.display = "none";
        overlay.style.display = "none";
    }

    products.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product">
                <img class="product-img" src="${product.image}">
                <h2 class="product-title">${product.name}</h2>
                <p class="product-price">${product.price} грн</p>

                <button class="add-to-cart-btn">
                    Додати до кошика
                </button>

                <button class="details-btn" data-id="${product.id}">
                    Докладніше
                </button>
            </div>
        `;
    });

    document.querySelectorAll(".details-btn").forEach(button => {
        button.addEventListener("click", () => {
            const product = products.find(p => p.id == button.dataset.id);
            openDetails(product);
        });
    });

    document.querySelector(".back-btn")
        .addEventListener("click", closeDetails);

    overlay.addEventListener("click", closeDetails);

    const textElement = document.querySelector(".changing-text");

    const words = ["телефони","ноутбуки","планшети","навушники","консолі","ліцензії"];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex);
            charIndex--;
        }

        let speed = isDeleting ? 50 : 120;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 1200;
            isDeleting = true;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

});
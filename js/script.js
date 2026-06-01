document.addEventListener("DOMContentLoaded", () => {

    const products = [
        { id: 1, 
            brand: "Google", 
            name: "Google Pixel 10 Pro", 
            price: 37999, type: "телефони",
            description: "Флагманський смартфон із передовими AI-функціями, неймовірною камерою та чистим Android.", 
            image: "https://my-apple.com.ua/image/catalog/products/google-pixel/pixel-10-pro/google-pixel-10-pro-moonstone-1.png" },
     
        { id: 2, 
            brand: "Xiaomi", 
            name: "Xiaomi Redmi 14C", 
            price: 5659, 
            type: "телефони", 
            description: "Доступний та стильний смартфон із великим екраном та потужною батареєю для повсякденних завдань.", 
            image: "https://sota.store/image/cache/catalog/Xiaomi-3/Redmi-14C-grn-03-1600x1600.webp" },
      
        { id: 3, 
            brand: "Apple", 
            name: "Apple MacBook Pro 14", 
            price: 106699, type: "ноутбуки", 
            description: "Ультимативний ноутбук для професіоналів. Потужний процесор, вражаючий дисплей Liquid Retina XDR та довга автономність.", 
            image: "C:/Users/andri/Documents/фінальний проєкт/images/rrr (2).png" },
       
        { id: 4, 
            brand: "Xiaomi", 
            name: "Xiaomi Pad 7", 
            price: 12999, 
            type: "планшети", 
            description: "Сучасний планшет для роботи та розваг із яскравим дисплеєм та підтримкою фірмового стилуса.", 
            image: "C:/Users/andri/Documents/фінальний проєкт/images/Знімок_екрана_2026-05-21_163928-removebg-preview.png" },
      
        { id: 5, 
            brand: "Samsung", 
            name: "Samsung Galaxy Tab S10 Plus", 
            price: 33249, 
            type: "планшети", 
            description: "Преміальний планшет із великим AMOLED-екраном, захистом від води та комплектним пером S Pen.", 
            image: "C:/Users/andri/Documents/фінальний проєкт/images/aaa (1).webp" },
      
        { id: 6, 
            brand: "Xiaomi", 
            name: "Xiaomi Earbuds 6 Active", 
            price: 699, type: "навушники", 
            description: "Бюджетні бездротові навушники з хорошим басом, ергономічним дизайном та тривалим часом роботи.", 
            image: "C:/Users/andri/Documents/фінальний проєкт/images/6_active-removebg-preview.png" },
     
        { id: 7, brand: "Sony", 
            name: "Sony PlayStation 5 Pro", 
            price: 47999, 
            type: "консолі", 
            description: "Покращена версія легендарної консолі з потужнішим графічним чіпом та підтримкою покращеного трасування променів.", 
            image: "https://us-playstation.com/wp-content/uploads/2024/09/PS5-PRO-Hero-1.webp" },
    
        { id: 8, brand: "Sony", 
            name: "Sony PlayStation 6 (ранній доступ)", 
            price: 100000000, 
            type: "консолі", 
            description: "Ексклюзивна пропозиція! Консоль майбутнього покоління. Ціна кусається, але статус безцінний.", 
            image: "C:/Users/andri/Documents/фінальний проєкт/images/ps6-removebg-preview.png" },
  
        { id: 9, brand: "Microsoft", 
            name: "Microsoft Xbox Series X", 
            price: 24300, type: "консолі", 
            description: "Найпотужніша консоль від Microsoft із підтримкою ігор у True 4K та швидким завантаженням завдяки SSD.", 
            image: "https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png" },
  
        { id: 10, brand: "Qichang", 
            name: "Qichang Fossibot F106 Pro", 
            price: 7199, type: "телефони", 
            description: "Захищений невбивний смартфон із величезною батареєю, потужним ліхтариком та вбудованим динаміком-колонкою.", 
            image: "C:/Users/andri/Documents/фінальний проєкт/images/446090105-removebg-preview.png" },

        { id: 11, brand: "Microsoft", name: "Microsoft Windows 11 Pro (ліцензія)", 
            price: 9999, type: "ліцензії", 
            description: "Офіційний ліцензійний ключ для професійної версії ОС із розширеними функціями безпеки та шифрування.", 
            image: "https://softload.nl/wp-content/uploads/2022/02/W11P.png" },
 
        { id: 12, 
            brand: "Microsoft", 
            name: "Microsoft Windows 10 Pro (ліцензія)", 
            price: 3999, type: "ліцензії", description: "Перевірена часом та стабільна операційна система для бізнесу та дому з офіційною підтримкою.", image: "https://images.prom.ua/1416181631_w640_h640_1416181631.jpg" },

        { id: 13, brand: "Samsung",
            name: "Samsung Galaxy S26 Ultra", price: 50000,
            type: "телефони", description: "Ультра-флагман із революційною камерою на 200 Мп, вбудованим стилусом та титановим корпусом.",
            image: "https://cdn.samsungshop.com.ua/products/10426/cover/224723/S26-Ultra-Black.webp" },

        { id: 14, brand: "Xiaomi", 
            name: "Xiaomi Pad 8 Pro",
            price: 24999, type: "планшети",
            description: "Флагманський планшет із надвисокою частотою оновлення екрана, топовим процесором та металевим корпусом.",
            image: "https://sota.store/image/cache/catalog/Xiaomi-3/xiaomi-pad-8-pro-wifi-blue-01-1600x1600.webp" }
    ];

    const productsContainer = document.getElementById("products");
    const details = document.getElementById("details");
    const overlay = document.querySelector(".overlay");
    const notification = document.querySelector('.cart-notification');
    const toCartButton = document.getElementById('to-cart-btn');
    const searchInput = document.getElementById('search-input');
    const typeFilter = document.getElementById('type-filter');
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');

    const callBtn = document.getElementById('call-btn');
    const phoneInput = document.getElementById('phone-input');

    if (callBtn) {
        callBtn.addEventListener('click', () => {
            if (phoneInput && phoneInput.value.trim() !== '') {
                alert('Ми зв\'яжемося з вами найближчим часом!');
                phoneInput.value = '';
                callBtn.disabled = true;
            } else {
                alert('Будь ласка, введіть номер телефону.');
            }
        });
    }

    function updateCallButtonState() {
        if (!callBtn || !phoneInput) return;
        callBtn.disabled = phoneInput.value.trim() === '';
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', updateCallButtonState);
        updateCallButtonState();
    }

    const detailsImg = details.querySelector(".product-img");
    const detailsTitle = details.querySelector(".product-title");
    const detailsPrice = details.querySelector(".product-price");
    const detailsDescription = details.querySelector(".product-description");
    const detailsAddBtn = details.querySelector(".add-to-cart-btn");

    function getCart() {
        const cookie = document.cookie.split('; ').find(row => row.startsWith('cart='));
        if (cookie) {
            try {
                return JSON.parse(decodeURIComponent(cookie.split('=')[1] || '')) || [];
            } catch (error) {
                console.warn('Не вдалося прочитати cookie cart:', error);
            }
        }

        try {
            const local = localStorage.getItem('cart');
            return local ? JSON.parse(local) : [];
        } catch (error) {
            console.warn('Не вдалося прочитати localStorage cart:', error);
            return [];
        }
    }

    function saveCart(cart) {
        const value = JSON.stringify(cart);
        document.cookie = `cart=${encodeURIComponent(value)};path=/;max-age=${2592000}`;

        try {
            localStorage.setItem('cart', value);
        } catch (error) {
            console.warn('Не вдалося зберегти localStorage cart:', error);
        }
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === Number(productId));
        if (!product) return;

        const cart = getCart();
        const existing = cart.find(item => item.id === product.id);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        saveCart(cart);
        showNotification('Товар додано до кошика!');
    }

    function showNotification(message) {
        if (!notification) return;

        const messageElement = notification.querySelector('p:last-child');
        if (messageElement) {
            messageElement.textContent = message;
        }

        notification.style.display = 'flex';
        notification.style.opacity = '1';

        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 300);
        }, 2000);
    }

    function openDetails(product) {
        detailsImg.src = product.image;
        detailsTitle.textContent = product.name;
        detailsPrice.textContent = product.price + " грн";
        detailsDescription.textContent = product.description;
        detailsAddBtn.dataset.id = product.id;

        details.style.display = "flex";
        overlay.style.display = "block";

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function closeDetails() {
        details.style.display = "none";
        overlay.style.display = "none";
    }

    function renderProducts(list) {
        productsContainer.innerHTML = '';

        list.forEach(product => {
            productsContainer.innerHTML += `
                <div class="product">
                    <img class="product-img" src="${product.image}" alt="${product.name}">
                    <h2 class="product-title">${product.name}</h2>
                    <p class="product-price">${product.price} грн</p>
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        Додати до кошика
                    </button>
                    <button class="details-btn" data-id="${product.id}">
                        Докладніше
                    </button>
                </div>
            `;
        });

        productsContainer.querySelectorAll(".add-to-cart-btn").forEach(button => {
            button.addEventListener("click", () => {
                addToCart(button.dataset.id);
            });
        });

        productsContainer.querySelectorAll(".details-btn").forEach(button => {
            button.addEventListener("click", () => {
                const product = products.find(p => p.id == button.dataset.id);
                openDetails(product);
            });
        });
    }

    function populateBrandFilter() {
        const brands = [...new Set(products.map(product => product.brand))].sort();
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });
    }

    function populateTypeFilter() {
        const types = [...new Set(products.map(product => product.type))].sort();
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeFilter.appendChild(option);
        });
    }

    function filterProducts() {
        const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const selectedType = typeFilter ? typeFilter.value : '';
        const selectedBrand = brandFilter ? brandFilter.value : '';
        const selectedPrice = priceFilter ? priceFilter.value : '';

        const filtered = products.filter(product => {
            const matchesSearch = searchValue === '' ||
                product.name.toLowerCase().includes(searchValue) ||
                product.brand.toLowerCase().includes(searchValue) ||
                product.description.toLowerCase().includes(searchValue);

            const matchesType = selectedType === '' || product.type === selectedType;
            const matchesBrand = selectedBrand === '' || product.brand === selectedBrand;

            let matchesPrice = true;
            if (selectedPrice) {
                const [min, max] = selectedPrice.split('-').map(Number);
                matchesPrice = product.price >= min && product.price <= max;
            }

            return matchesSearch && matchesType && matchesBrand && matchesPrice;
        });

        renderProducts(filtered);
    }

    populateBrandFilter();
    populateTypeFilter();
    renderProducts(products);

    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    if (brandFilter) {
        brandFilter.addEventListener('change', filterProducts);
    }

    if (priceFilter) {
        priceFilter.addEventListener('change', filterProducts);
    }

    if (typeFilter) {
        typeFilter.addEventListener('change', filterProducts);
    }


    document.querySelector(".back-btn")
        .addEventListener("click", closeDetails);

    overlay.addEventListener("click", closeDetails);

    if (toCartButton) {
        toCartButton.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }

    const textElement = document.querySelector(".changing-text");
    const words = ["телефони", "ноутбуки", "планшети", "навушники", "консолі", "ліцензії"];

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

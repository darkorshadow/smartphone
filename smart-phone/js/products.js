// بيانات التصنيفات والعلامات التجارية
const categories = {
    smartphones: {
        name: 'الهواتف الذكية',
        brands: ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Redmi', 'Honor', 'Oppo', 'Vivo', 'Motorola', 'Tecno', 'Infinix'],
        description: 'أحدث الهواتف الذكية من أشهر العلامات التجارية'
    },
    watches: {
        name: 'الساعات الذكية والأجهزة القابلة للارتداء',
        brands: ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Amazfit', 'Realme', 'Haylou'],
        description: 'أجهزة تتبع اللياقة والساعات الذكية'
    },
    accessories: {
        name: 'ملحقات الهواتف',
        brands: ['Apple', 'Samsung', 'Baseus', 'UGREEN', 'MI', 'PISEN', 'Anker'],
        description: 'شواحن، سماعات، أغلفة وملحقات متنوعة'
    },
    speakers: {
        name: 'مكبرات الصوت والسماعات',
        brands: ['JBL', 'Sony', 'Xiaomi', 'HUAWEI', 'Marshall', 'Anker'],
        description: 'سماعات ومكبرات صوت بجودة عالية'
    },
    electronics: {
        name: 'الإلكترونيات',
        brands: ['Sony', 'LG', 'Xiaomi', 'Samsung', 'Apple', 'HUAWEI'],
        description: 'مجموعة متنوعة من الأجهزة الإلكترونية'
    }
};

// جميع المنتجات
const allProducts = [
    // هواتف ذكية
    {
        id: 'iphone14-pro',
        name: 'آيفون 14 برو ماكس',
        description: 'أحدث هاتف ذكي من أبل بشاشة Dynamic Island وتقنية ديناميكية متطورة',
        price: 4499,
        image: 'images/products/iphone14-pro.jpg',
        images: ['images/products/iphone14-pro.jpg', 'images/products/iphone14-pro-2.jpg'],
        brand: 'Apple',
        category: 'smartphones',
        available: true,
        specifications: {
            'الشاشة': '6.7 بوصة Super Retina XDR',
            'المعالج': 'A16 Bionic',
            'الكاميرا': 'نظام ثلاثي الكاميرات 48MP',
            'التخزين': '256 جيجابايت',
            'الذاكرة': '6 جيجابايت',
            'البطارية': '4323 مللي أمبير',
            'نظام التشغيل': 'iOS 16'
        }
        //samsung phone
    },
    {
        id: 'samsung-s23-ultra',
        name: 'سامسونج S23 الترا',
        description: 'هاتف سامسونج الأحدث بكاميرة 200 ميجابكسل وأداء استثنائي',
        price: 3899,
        image: 'images/products/samsung-s23-ultra.jpg',
        images: ['images/products/samsung-s23-ultra.jpg', 'images/products/samsung-s23-ultra-2.jpg'],
        brand: 'Samsung',
        category: 'smartphones',
        available: true,
        specifications: {
            'الشاشة': '6.8 بوصة Dynamic AMOLED 2X',
            'المعالج': 'Snapdragon 8 Gen 2',
            'الكاميرا': '200 ميجابكسل رئيسية',
            'التخزين': '512 جيجابايت',
            'الذاكرة': '12 جيجابايت',
            'البطارية': '5000 مللي أمبير',
            'نظام التشغيل': 'Android 15'
        }
    },
    {
        id: 'samsung-s22-ultra',
        name: 'سامسونج S22 الترا',
        description: 'هاتف سامسونج الأحدث بكاميرة 200 ميجابكسل وأداء استثنائي',
        price: 1640,
        image: 'images/products/samsung-s22-ultra.jpg',
        images: ['images/products/samsung-s22-ultra.jpg', 'images/products/samsung-s22-ultra-2.jpg'],
        brand: 'Samsung',
        category: 'smartphones',
        available: true,
        specifications: {
            'الشاشة': '6.8 بوصة Dynamic AMOLED 2X',
            'المعالج': 'Snapdragon 8 Gen 2',
            'الكاميرا': '200 ميجابكسل رئيسية',
            'التخزين': '512 جيجابايت',
            'الذاكرة': '12 جيجابايت',
            'البطارية': '5000 مللي أمبير',
            'نظام التشغيل': 'Android 15'
        }
    },
    {
        id: 'samsung-s21-ultra',
        name: 'سامسونج S21 الترا',
        description: 'هاتف سامسونج الأحدث بكاميرة 108 ميجابكسل وأداء استثنائي',
        price: 999,
        image: 'images/products/samsung-s21-ultra.jpg',
        images: ['images/products/samsung-s21-ultra.jpg', 'images/products/samsung-s21-ultra-2.jpg'],
        brand: 'Samsung',
        category: 'smartphones',
        available: true,
        specifications: {
            'الشاشة': '6.8 بوصة Dynamic AMOLED 2X',
            'المعالج': 'Snapdragon 8 Gen 2',
            'الكاميرا': '200 ميجابكسل رئيسية',
            ' التخزين': '512 جيجاباي بسعر 1200ت',
           
            'التخزين': '256 جيجاباي بسعر 1100ت',
            'الذاكرة': '128 جيجابايت بسعر 999ت',
            'البطارية': '5000 مللي أمبير',
            'نظام التشغيل': 'Android 15'
        }
    },
    {
        id: 'samsung-s24-ultra',
        name: 'سامسونج S24 الترا',
        description: 'هاتف سامسونج الأحدث بكاميرة 200 ميجابكسل وأداء استثنائي',
        price: 3899,
        image: 'images/products/samsung-s24-ultra.jpg',
        images: ['images/products/samsung-s24-ultra.jpg', 'images/products/samsung-s24-ultra-2.jpg'],
        brand: 'Samsung',
        category: 'smartphones',
        available: true,
        specifications: {
            'الشاشة': '6.8 بوصة Dynamic AMOLED 2X',
            'المعالج': 'Snapdragon 8 Gen 2',
            'الكاميرا': '200 ميجابكسل رئيسية',
            'التخزين': '512 جيجابايت',
            'الذاكرة': '12 جيجابايت',
            'البطارية': '5000 مللي أمبير',
            'نظام التشغيل': 'Android 15'
        }
    },
    {
        id: 'samsung-s25-ultra',
        name: 'سامسونج S25 الترا',
        description: 'هاتف سامسونج الأحدث بكاميرة 200 ميجابكسل وأداء استثنائي',
        price: 3899,
        image: 'images/products/samsung-s25-ultra.jpg',
        images: ['images/products/samsung-s25-ultra.jpg', 'images/products/samsung-s25-ultra-2.jpg'],
        brand: 'Samsung',
        category: 'smartphones',
        available: true,
        specifications: {
            'الشاشة': '6.8 بوصة Dynamic AMOLED 2X',
            'المعالج': 'Snapdragon 8 Gen 2',
            'الكاميرا': '200 ميجابكسل رئيسية',
            'التخزين': '512 جيجابايت',
            'الذاكرة': '12 جيجابايت',
            'البطارية': '5000 مللي أمبير',
            'نظام التشغيل': 'Android 15'
        }
    },
//////////////////////////////huawei
    {
        id: 'huawei-p60-pro',
        name: 'هواوي P60 برو',
        description: 'هاتف هواوي المميز بكاميرة متطورة وتصميم أنيق',
        price: 3299,
        image: 'images/products/huawei-p60-pro.jpg',
        images: ['images/products/huawei-p60-pro.jpg', 'images/products/huawei-p60-pro-2.jpg'],
        brand: 'Huawei',
        category: 'smartphones',
        available: false,
        specifications: {
            'الشاشة': '6.67 بوصة OLED',
            'المعالج': 'Snapdragon 8+ Gen 1',
            'الكاميرا': '48MP مع عدسة متغيرة',
            'التخزين': '512 جيجابايت',
            'الذاكرة': '8 جيجابايت',
            'البطارية': '4815 مللي أمبير',
            'الشحن': '88 وات سريع'
        }
    },
//////////////////////////////xiaomi
    {
        id: 'xiaomi-13-pro',
        name: 'شاومي 13 برو',
        description: 'هاتف شاومي الأحدث بكاميرة Leica وأداء قوي',
        price: 2899,
        image: 'images/products/xiaomi-13-pro.jpg',
        images: ['images/products/xiaomi-13-pro.jpg', 'images/products/xiaomi-13-pro-2.jpg'],
        brand: 'Xiaomi',
        category: 'smartphones',
        available: true,
        specifications: {
            'الشاشة': '6.73 بوصة AMOLED',
            'المعالج': 'Snapdragon 8 Gen 2',
            'الكاميرا': 'Leica 50.3MP',
            'التخزين': '256 جيجابايت',
            'الذاكرة': '12 جيجابايت',
            'البطارية': '4820 مللي أمبير',
            'الشحن': '120 وات سريع'
        }
    },

    // ساعات ذكية
    {
        id: 'apple-watch-8',
        name: 'آبل واتش 8',
        description: 'ساعة أبل الذكية الجديدة بميزات صحية متطورة',
        price: 1999,
        image: 'images/products/apple-watch-8.jpg',
        images: ['images/products/apple-watch-8.jpg', 'images/products/apple-watch-8-2.jpg'],
        brand: 'Apple',
        category: 'watches',
        available: true,
        specifications: {
            'الشاشة': '1.9 بوصة Retina',
            'الميزات': 'تتبع النوم، ECG، قياس الأكسجين',
            'المقاومة': 'مقاومة الماء 50 متر',
            'البطارية': '18 ساعة',
            'التوافق': 'iOS فقط'
        }
    },
    {
        id: 'samsung-watch-5',
        name: 'سامسونج واتش 5',
        description: 'ساعة سامسونج الذكية لتتبع اللياقة والصحة',
        price: 1299,
        image: 'images/products/samsung-watch-5.jpg',
        images: ['images/products/samsung-watch-5.jpg', 'images/products/samsung-watch-5-2.jpg'],
        brand: 'Samsung',
        category: 'watches',
        available: true,
        specifications: {
            'الشاشة': '1.4 بوصة Super AMOLED',
            'الميزات': 'تتبع النوم، BIA، مراقبة الضغط',
            'المقاومة': 'مقاومة الماء 5 ATM',
            'البطارية': '40 ساعة',
            'التوافق': 'أندرويد و iOS'
        }
    },

    // ملحقات
    {
        id: 'airpods-pro-2',
        name: 'آيربودز برو 2',
        description: 'سماعات لاسلكية مع إلغاء ضوضاء متطور',
        price: 899,
        image: 'images/products/airpods-pro-2.jpg',
        images: ['images/products/airpods-pro-2.jpg', 'images/products/airpods-pro-2-2.jpg'],
        brand: 'Apple',
        category: 'accessories',
        available: true,
        specifications: {
            'النوع': 'سماعات True Wireless',
            'إلغاء الضوضاء': 'نشط',
            'البطارية': '6 ساعات (30 مع العلبة)',
            'المقاومة': 'IPX4 ضد الماء',
            'الشحن': 'لاسلكي'
        }
    },
    {
        id: 'anker-charger',
        name: 'شاحن أنكر سريع',
        description: 'شاحن سريع بقوة 65 وات مع منفذين USB-C',
        price: 199,
        image: 'images/products/anker-charger.jpg',
        images: ['images/products/anker-charger.jpg'],
        brand: 'Anker',
        category: 'accessories',
        available: true,
        specifications: {
            'القدرة': '65 وات',
            'المنافذ': '2 × USB-C',
            'التوافق': 'جميع الأجهزة',
            'الأبعاد': 'صغير الحجم'
        }
    },

    // سماعات
    {
        id: 'jbl-flip-5',
        name: 'JBL فلب 5',
        description: 'مكبر صوت بلوتوث مقاوم للماء بجودة صوت ممتازة',
        price: 499,
        image: 'images/products/jbl-flip-5.jpg',
        images: ['images/products/jbl-flip-5.jpg', 'images/products/jbl-flip-5-2.jpg'],
        brand: 'JBL',
        category: 'speakers',
        available: true,
        specifications: {
            'القدرة': '20 وات',
            'البطارية': '12 ساعة',
            'المقاومة': 'IPX7 ضد الماء',
            'التوصيل': 'بلوتوث 5.1',
            'الألوان': 'متعددة'
        }
    },
    {
        id: 'sony-headphones',
        name: 'سوني WH-1000XM5',
        description: 'سماعات رأس مع إلغاء ضوضاء استثنائي',
        price: 1299,
        image: 'images/products/sony-headphones.jpg',
        images: ['images/products/sony-headphones.jpg', 'images/products/sony-headphones-2.jpg'],
        brand: 'Sony',
        category: 'speakers',
        available: true,
        specifications: {
            'النوع': 'سماعات رأس',
            'إلغاء الضوضاء': 'متطور',
            'البطارية': '30 ساعة',
            'الوزن': '250 جرام',
            'التوصيل': 'بلوتوث 5.2'
        }
    }
];

// تحميل صفحة التصنيف
function loadCategoryPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('cat');

    if (categoryId && categories[categoryId]) {
        const category = categories[categoryId];

        // تحديث عنوان الصفحة
        document.title = `${category.name} - متجر سمارت فون`;

        // تحديث محتوى الصفحة
        const categoryContainer = document.getElementById('categoryContainer');
        if (categoryContainer) {
            categoryContainer.innerHTML = createCategoryHTML(categoryId, category);

            // تحميل المنتجات حسب التصنيف
            loadProductsByCategory(categoryId);
        }
    } else {
        window.location.href = 'index.html';
    }
}

// إنشاء HTML للتصنيف
function createCategoryHTML(categoryId, category) {
    let brandsHTML = '';
    category.brands.forEach(brand => {
        const brandProducts = allProducts.filter(p => p.category === categoryId && p.brand === brand);
        const productCount = brandProducts.length;

        brandsHTML += `
            <div class="brand-card" data-brand="${brand}">
                <div class="brand-logo">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <h3>${brand}</h3>
                <p>${productCount} منتج</p>
                <a href="brand.html?cat=${categoryId}&brand=${encodeURIComponent(brand)}" class="brand-link">
                    عرض المنتجات
                </a>
            </div>
        `;
    });

    return `
        <div class="category-header">
            <button onclick="history.back()" class="btn-back" style="margin-bottom: 20px;"><i class="fas fa-arrow-right"></i> عودة</button>
            <h1>${category.name}</h1>
            <p>${category.description}</p>
        </div>
        
        <div class="brands-section">
            <h2 class="section-title"><i class="fas fa-tags"></i> العلامات التجارية</h2>
            <div class="brands-grid" id="brandsGrid">
                ${brandsHTML}
            </div>
        </div>
        
        <div class="products-section">
            <h2 class="section-title"><i class="fas fa-box-open"></i> جميع المنتجات</h2>
            <div class="products-grid" id="categoryProducts">
                <!-- سيتم تعبئتها بواسطة JavaScript -->
            </div>
        </div>
    `;
}

// تحميل المنتجات حسب التصنيف
function loadProductsByCategory(categoryId) {
    const products = getProductsByCategory(categoryId);
    const productsContainer = document.getElementById('categoryProducts');

    if (productsContainer) {
        if (products.length === 0) {
            productsContainer.innerHTML = `
                <div class="no-products" style="text-align: center; padding: 40px; grid-column: 1 / -1;">
                    <i class="fas fa-box-open fa-3x" style="color: #6b7280; margin-bottom: 20px;"></i>
                    <h3 style="color: #6b7280;">لا توجد منتجات في هذا القسم حالياً</h3>
                    <p>سوف نضيف منتجات جديدة قريباً</p>
                </div>
            `;
            return;
        }

        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = createProductElement(product);
            productsContainer.appendChild(productElement);
        });
    }
}

// الحصول على المنتجات حسب التصنيف
function getProductsByCategory(categoryId) {
    return allProducts.filter(product => product.category === categoryId);
}

// تحميل صفحة العلامة التجارية
function loadBrandPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('cat');
    const brand = urlParams.get('brand');

    if (categoryId && brand) {
        // تحديث عنوان الصفحة
        document.title = `${brand} - متجر سمارت فون`;

        // تحديث محتوى الصفحة
        const brandContainer = document.getElementById('brandContainer');
        if (brandContainer) {
            const categoryName = categories[categoryId]?.name || '';
            brandContainer.innerHTML = createBrandHTML(categoryId, categoryName, brand);

            // تحميل منتجات العلامة التجارية
            loadProductsByBrand(categoryId, brand);
        }
    } else {
        window.location.href = 'index.html';
    }
}

// إنشاء HTML للعلامة التجارية
function createBrandHTML(categoryId, categoryName, brand) {
    return `
        <div class="brand-header">
            <nav class="breadcrumb">
                <button onclick="history.back()" class="btn-back" style="display:inline-block; margin-left:15px;"><i class="fas fa-arrow-right"></i> عودة</button>
                <a href="index.html">الرئيسية</a> /
                <a href="category.html?cat=${categoryId}">${categoryName}</a> /
                <span>${brand}</span>
            </nav>
            
            <h1>${brand}</h1>
            <p>جميع منتجات ${brand} في قسم ${categoryName}</p>
        </div>
        
        <div class="products-section">
            <div class="products-grid" id="brandProducts">
                <!-- سيتم تعبئتها بواسطة JavaScript -->
            </div>
        </div>
    `;
}

// تحميل المنتجات حسب العلامة التجارية
function loadProductsByBrand(categoryId, brand) {
    const products = allProducts.filter(product =>
        product.category === categoryId && product.brand === brand
    );
    const productsContainer = document.getElementById('brandProducts');

    if (productsContainer) {
        if (products.length === 0) {
            productsContainer.innerHTML = `
                <div class="no-products" style="text-align: center; padding: 40px; grid-column: 1 / -1;">
                    <i class="fas fa-box-open fa-3x" style="color: #6b7280; margin-bottom: 20px;"></i>
                    <h3 style="color: #6b7280;">لا توجد منتجات لهذه العلامة التجارية حالياً</h3>
                    <p>سوف نضيف منتجات جديدة قريباً</p>
                </div>
            `;
            return;
        }

        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = createProductElement(product);
            productsContainer.appendChild(productElement);
        });
    }
}

// تحميل صفحة البحث
function loadSearchPage() {
    const searchQuery = localStorage.getItem('searchQuery') || '';
    const searchResultsContainer = document.getElementById('searchResults');

    if (searchResultsContainer) {
        if (!searchQuery) {
            searchResultsContainer.innerHTML = `
                <div class="no-results" style="text-align: center; padding: 80px 0;">
                    <i class="fas fa-search fa-3x" style="color: #6b7280; margin-bottom: 20px;"></i>
                    <h2 style="color: #6b7280;">لم يتم إدخال كلمة بحث</h2>
                    <a href="index.html" class="btn btn-primary">العودة إلى الرئيسية</a>
                </div>
            `;
            return;
        }

        // البحث في المنتجات
        const results = searchProducts(searchQuery);

        if (results.length === 0) {
            searchResultsContainer.innerHTML = `
                <div class="no-results" style="text-align: center; padding: 80px 0;">
                    <i class="fas fa-search fa-3x" style="color: #6b7280; margin-bottom: 20px;"></i>
                    <h2 style="color: #6b7280;">لا توجد نتائج لـ "${searchQuery}"</h2>
                    <p>حاول البحث بكلمات أخرى</p>
                    <div style="margin-top: 20px;">
                        <a href="index.html" class="btn btn-primary">العودة إلى الرئيسية</a>
                        <a href="#categories" class="btn btn-secondary" style="margin-right: 10px;">تصفح الأقسام</a>
                    </div>
                </div>
            `;
        } else {
            searchResultsContainer.innerHTML = `
                <h2 class="section-title">نتائج البحث عن: "${searchQuery}"</h2>
                <p style="text-align: center; margin-bottom: 30px; color: #6b7280;">تم العثور على ${results.length} منتج</p>
                <div class="products-grid" id="searchResultsGrid"></div>
            `;

            const resultsGrid = document.getElementById('searchResultsGrid');
            results.forEach(product => {
                const productElement = createProductElement(product);
                resultsGrid.appendChild(productElement);
            });
        }
    }
}

// البحث في المنتجات
function searchProducts(query) {
    const searchTerm = query.toLowerCase();

    return allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
}

// تهيئة الصفحات عند اكتمال تحميل DOM
document.addEventListener('DOMContentLoaded', function () {
    // فحص صفحة التصنيف
    if (document.getElementById('categoryContainer')) {
        loadCategoryPage();
    }

    // فحص صفحة العلامة التجارية
    if (document.getElementById('brandContainer')) {
        loadBrandPage();
    }

    // فحص صفحة البحث
    if (document.getElementById('searchResults')) {
        loadSearchPage();
    }
});

// إنشاء عنصر منتج (نسخة مطورة)
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.className = 'product-card';
    productElement.dataset.productId = product.id;

    // تقييم عشوائي للمنتج (للعرض فقط)
    const rating = (Math.random() * 2 + 3).toFixed(1);
    const reviews = Math.floor(Math.random() * 100) + 10;

    productElement.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='images/products/default.jpg'">
            <div class="product-badge">${product.brand}</div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            
            <div class="product-rating">
                <div class="stars">
                    ${'★'.repeat(Math.floor(rating))}${'☆'.repeat(5 - Math.floor(rating))}
                </div>
                <span class="rating-text">${rating} (${reviews} تقييم)</span>
                </span>
            </div>
            
            <div class="product-price-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <div class="product-price" style="margin-bottom: 0;">${product.price.toFixed(2)} ر.س</div>
                <span class="product-status-badge ${product.available !== false ? 'in-stock' : 'out-of-stock'}">
                    ${product.available !== false ? 'متوفر' : 'غير متوفر'}
                </span>
            </div>
            
            <div class="product-actions" style="flex-wrap: wrap; gap: 8px;">
                <button class="order-now btn-primary" data-product-id="${product.id}" style="width: 100%; margin-bottom: 5px;">
                    <i class="fas fa-paper-plane"></i> اطلب الآن
                </button>
                
                <a href="product.html?id=${product.id}" class="view-details" data-product-id="${product.id}" style="width: 100%; text-align: center;">
                    <i class="fas fa-eye"></i> التفاصيل
                </a>
            </div>
        </div>
    `;

    return productElement;
}

// إضافة أنماط إضافية للمنتجات
const style = document.createElement('style');
style.textContent = `
    .product-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background: var(--primary-color);
        color: white;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 2;
    }
    
    .product-status-badge {
        font-size: 0.8rem;
        padding: 2px 8px;
        border-radius: 12px;
        margin-right: auto; /* Push to left */
    }
    .product-status-badge.in-stock { background: #d1fae5; color: #065f46; }
    .product-status-badge.out-of-stock { background: #fee2e2; color: #b91c1c; }
    
    .product-rating {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
    }
    
    .stars {
        color: #fbbf24;
        font-size: 1rem;
    }
    
    .rating-text {
        color: var(--gray-color);
        font-size: 0.9rem;
    }
    
    .brand-card {
        background-color: white;
        border-radius: var(--border-radius);
        padding: 20px;
        text-align: center;
        box-shadow: var(--box-shadow);
        transition: var(--transition);
        border: 1px solid var(--gray-light);
    }
    
    .brand-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
        border-color: var(--primary-color);
    }
    
    .brand-logo {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--dark-blue) 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 15px;
    }
    
    .brand-logo i {
        font-size: 1.5rem;
        color: white;
    }
    
    .brand-card h3 {
        margin-bottom: 5px;
        color: var(--dark-color);
    }
    
    .brand-card p {
        color: var(--gray-color);
        font-size: 0.8rem;
        margin-bottom: 15px;
    }
    
    .brand-link {
        display: inline-block;
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 600;
        padding: 8px 20px;
        border: 2px solid var(--primary-color);
        border-radius: 20px;
        transition: var(--transition);
    }
    
    .brand-link:hover {
        background-color: var(--primary-color);
        color: white;
    }
    
    .breadcrumb {
        margin-bottom: 20px;
        font-size: 0.9rem;
        color: var(--gray-color);
    }
    
    .breadcrumb a {
        color: var(--primary-color);
        text-decoration: none;
    }
    
    .breadcrumb span {
        color: var(--dark-color);
        font-weight: 600;
    }
    
    .brand-header {
        text-align: center;
        margin-bottom: 40px;
    }
    
    .brand-header h1 {
        font-size: 2.5rem;
        color: var(--dark-color);
        margin-bottom: 10px;
    }
    
    .brand-header p {
        color: var(--gray-color);
        font-size: 1.1rem;
    }
`;
document.head.appendChild(style);
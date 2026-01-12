// بيانات التطبيق
let csrfToken = generateCSRFToken();

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function () {
    // Cart removed
    // updateCartCount();

    // تهيئة القائمة الجانبية
    initSidebar();

    // تهيئة البحث
    initSearch();



    // تحميل المنتجات المميزة إذا كانت الصفحة الرئيسية
    if (document.getElementById('featuredProducts')) {
        loadFeaturedProducts();
    }

    // تهيئة نموذج الاتصال
    initContactForm();

    // تهيئة زر العودة للأعلى
    initScrollToTop();

    // إضافة مستمعين للأحداث
    document.addEventListener('click', function (e) {
        // إضافة طلب (Order Now)
        if (e.target.classList.contains('order-now') || e.target.closest('.order-now')) {
            e.preventDefault();
            const productId = e.target.dataset.productId || e.target.closest('.order-now').dataset.productId;
            openOrderModal(productId);
        }

        // البحث من خلال العلامات
        if (e.target.classList.contains('search-tag')) {
            e.preventDefault();
            const searchTerm = e.target.dataset.term || e.target.textContent.trim();
            const mainSearchInput = document.getElementById('mainSearchInput');
            if (mainSearchInput) {
                mainSearchInput.value = searchTerm;
                // Force localStorage update directly here to be safe
                localStorage.setItem('searchQuery', searchTerm);
                window.location.href = 'search.html';
            }
        }
    });

    // تحميل بيانات الموقع
    loadSiteData();
});

// تهيئة القائمة الجانبية
function initSidebar() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn'); // Hamburger
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    // فتح القائمة
    if (mobileMenuBtn && sidebar && sidebarOverlay) {
        mobileMenuBtn.addEventListener('click', function () {
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
        });
    }

    // إغلاق القائمة
    function closeSidebar() {
        if (sidebar && sidebarOverlay) {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // إغلاق القائمة عند النقر على ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });

    // Handle form submission in sidebar
    const sidebarForm = document.getElementById('sidebarContactForm');
    if (sidebarForm) {
        sidebarForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Reuse contact logic or simple alert
            const name = document.getElementById('sbName').value;
            // ... minimal logic
            showNotification('تم إرسال رسالتك بنجاح!', 'success');
            sidebarForm.reset();
            closeSidebar();
        });
    }
}

// تهيئة البحث
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const mainSearchInput = document.getElementById('mainSearchInput');
    const mainSearchBtn = document.getElementById('mainSearchBtn');

    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    if (mainSearchInput && mainSearchBtn) {
        mainSearchBtn.addEventListener('click', performMainSearch);
        mainSearchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                performMainSearch();
            }
        });
    }
}

// تنفيذ البحث الرئيسي
function performMainSearch() {
    const mainSearchInput = document.getElementById('mainSearchInput');
    const query = mainSearchInput.value.trim();

    if (query) {
        // حفظ البحث في localStorage للاستخدام في صفحة النتائج
        localStorage.setItem('searchQuery', query);
        window.location.href = 'search.html';
    } else {
        showNotification('يرجى إدخال كلمة للبحث', 'warning');
    }
}

// تنفيذ البحث
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (query) {
        // حفظ البحث في localStorage للاستخدام في صفحة النتائج
        localStorage.setItem('searchQuery', query);
        window.location.href = 'search.html';
    } else {
        showNotification('يرجى إدخال كلمة للبحث', 'warning');
    }
}

// تحميل بيانات الموقع
function loadSiteData() {
    // تحديث تواريخ الفوتر
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
    }
}

// --- Order Now Logic ---

let currentOrderProduct = null;

function openOrderModal(productId) {
    const product = getProductById(productId);
    if (!product) return;

    currentOrderProduct = product;

    // Create modal if not exists
    let modal = document.getElementById('orderModal');
    if (!modal) {
        createOrderModal();
        modal = document.getElementById('orderModal');
    }

    // Update modal content
    document.getElementById('orderProductName').textContent = product.name;
    document.getElementById('orderProductPrice').textContent = product.price.toFixed(2) + ' ر.س';

    modal.style.display = 'flex';
}

function createOrderModal() {
    const modalHTML = `
        <div id="orderModal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>طلب المنتج</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>أنت تطلب: <strong id="orderProductName"></strong></p>
                    <p>السعر: <strong id="orderProductPrice"></strong></p>
                    <p class="order-instruction">كيف تفضل إكمال الطلب؟</p>
                    
                    <div class="order-options">
                        <button class="order-btn whatsapp" onclick="completeOrder('whatsapp')">
                            <i class="fab fa-whatsapp"></i> واتساب
                        </button>
                        <button class="order-btn telegram" onclick="completeOrder('telegram')">
                            <i class="fab fa-telegram"></i> تلجرام
                        </button>
                        <button class="order-btn email" onclick="completeOrder('email')">
                            <i class="fas fa-envelope"></i> البريد الإلكتروني
                        </button>
                    </div>
                    
                    <div class="copy-option">
                        <button class="btn-copy" onclick="copyOrderDetails()">
                            <i class="fas fa-copy"></i> نسخ تفاصيل الطلب
                        </button>
                    </div>
                    
                    <div class="payment-info">
                        <h4>طرق الدفع المتاحة:</h4>
                        <div class="payment-icons">
                            <span title="الكريمي"><i class="fas fa-money-bill-wave"></i> الكريمي</span>
                            <span title="محفظة جيب"><i class="fas fa-wallet"></i> محفظة جيب</span>
                            <span title="تحويل بنكي"><i class="fas fa-university"></i> تحويل بنكي</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Close events
    const modal = document.getElementById('orderModal');
    const closeBtn = modal.querySelector('.close-modal');

    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}

function completeOrder(method) {
    if (!currentOrderProduct) return;

    const message = `مرحباً، أرغب بطلب المنتج التالي:
الاسم: ${currentOrderProduct.name}
السعر: ${currentOrderProduct.price} ر.س
رابط المنتج: ${window.location.origin + window.location.pathname.replace('index.html', '')}product.html?id=${currentOrderProduct.id}`;

    let url = '';

    if (method === 'whatsapp') {
        url = `https://wa.me/+967777130352?text=${encodeURIComponent(message)}`;
    } else if (method === 'telegram') {
        url = `https://t.me/+967777130352`;
        navigator.clipboard.writeText(message).then(() => {
            showNotification('تم نسخ تفاصيل الطلب، يمكنك لصقها في المحادثة', 'success');
        });
    } else if (method === 'email') {
        url = `mailto:yemensmartfhonestore@gmail.com?subject=طلب منتج: ${currentOrderProduct.name}&body=${encodeURIComponent(message)}`;
    }

    if (url) window.open(url, '_blank');
}

function copyOrderDetails() {
    if (!currentOrderProduct) return;

    const message = `المنتج: ${currentOrderProduct.name}
السعر: ${currentOrderProduct.price} ر.س`;

    navigator.clipboard.writeText(message).then(() => {
        showNotification('تم نسخ تفاصيل المنتج للحافظة', 'success');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}



// إظهار إشعار
function showNotification(message, type = 'info') {
    // إنشاء عنصر الإشعار
    let notification = document.getElementById('notification');

    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.className = 'notification';
        document.body.appendChild(notification);
    }

    // إعداد الأيقونة حسب النوع
    let icon = 'fa-info-circle';
    switch (type) {
        case 'success':
            icon = 'fa-check-circle';
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            icon = 'fa-exclamation-circle';
            notification.style.backgroundColor = '#ef4444';
            break;
        case 'warning':
            icon = 'fa-exclamation-triangle';
            notification.style.backgroundColor = '#f59e0b';
            break;
        case 'info':
            icon = 'fa-info-circle';
            notification.style.backgroundColor = '#3b82f6';
            break;
    }

    // تعيين النص والأيقونة
    notification.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;

    // إظهار الإشعار
    notification.classList.add('show');

    // إخفاء الإشعار بعد 1.5 ثانية (User Request)
    setTimeout(() => {
        notification.classList.remove('show');
    }, 1500);
}

// تحميل المنتجات ال
async function loadFeaturedProducts() {
    try {
        const featuredProductsContainer = document.getElementById('featuredProducts');

        if (featuredProductsContainer && typeof allProducts !== 'undefined') {
            featuredProductsContainer.innerHTML = '';

            // Display first 4 items as featured
            const products = allProducts.slice(0, 4);

            products.forEach(product => {
                const productElement = createProductElement(product);
                featuredProductsContainer.appendChild(productElement);
            });
        }
    } catch (error) {
        console.error('Error loading featured products:', error);
        showNotification('حدث خطأ في تحميل المنتجات', 'error');
    }
}

// إنشاء عنصر منتج
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.className = 'product-card';
    productElement.dataset.productId = product.id;

    productElement.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='images/products/default.jpg'">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
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

// الحصول على المنتج بواسطة المعرف
function getProductById(productId) {
    if (typeof allProducts !== 'undefined') {
        return allProducts.find(product => product.id === productId);
    }
    return null;
}

// تهيئة نموذج الاتصال (تمت إزالته من هنا، موجود في app.js بشكل عام)
function initContactForm() {
    // ...
}

// إرسال رسالة الاتصال
function sendContactMessage() {
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    // التحقق من البيانات
    if (!name || !email || !message) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
        return;
    }

    // إنشاء بيانات الرسالة
    const contactData = {
        name,
        email,
        phone,
        message,
        timestamp: new Date().toISOString(),
        type: 'contact'
    };

    // حفظ الرسالة في localStorage (في تطبيق حقيقي، سترسل للخادم)
    const contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    contactMessages.push(contactData);
    localStorage.setItem('contactMessages', JSON.stringify(contactMessages));

    // إرسال إشعار بالبريد الإلكتروني (محاكاة)
    sendContactEmail(contactData);

    // إظهار رسالة نجاح
    showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');

    // مسح النموذج
    document.getElementById('contactForm').reset();
}

// إرسال بريد الاتصال
function sendContactEmail(contactData) {
    const subject = 'رسالة جديدة من متجر سمارت فون';
    const body = `
        رسالة جديدة من نموذج الاتصال:
        
        الاسم: ${contactData.name}
        البريد الإلكتروني: ${contactData.email}
        الهاتف: ${contactData.phone || 'لم يتم تقديمه'}
        الرسالة:
        ${contactData.message}
        
        التاريخ: ${new Date(contactData.timestamp).toLocaleString('ar-SA')}
    `;

    // في تطبيق حقيقي، سيتم استخدام خدمة بريد إلكتروني
    console.log('Email would be sent to: yemensmartfhonestore@gmail.com');
    console.log('Subject:', subject);
    console.log('Body:', body);

    // يمكن استخدام EmailJS أو خدمة مشابهة
}

// التحقق من صحة البريد الإلكتروني
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// إنشاء توكن CSRF
function generateCSRFToken() {
    const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem('csrf_token', token);
    return token;
}

// التحقق من توكن CSRF
function validateCSRFToken(token) {
    const storedToken = localStorage.getItem('csrf_token');
    return token && storedToken && token === storedToken;
}

// تهيئة زر العودة للأعلى
function initScrollToTop() {
    const scrollButton = document.querySelector('.scroll-to-top');

    if (scrollButton) {
        // إظهار/إخفاء الزر عند التمرير
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollButton.classList.add('visible');
            } else {
                scrollButton.classList.remove('visible');
            }
        });

        // التمرير للأعلى عند النقر
        scrollButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// إذا كانت الصفحة الحالية هي صفحة المنتج، قم بتهيئتها
if (window.location.pathname.includes('product.html')) {
    document.addEventListener('DOMContentLoaded', initProductPage);
}

// تهيئة صفحة المنتج
function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        loadProductDetails(productId);
    }
}

// تحميل تفاصيل المنتج
function loadProductDetails(productId) {
    const product = getProductById(productId);

    if (product) {
        // تحديث عنوان الصفحة
        document.title = `${product.name} - متجر سمارت فون`;

        // تحديث محتوى الصفحة
        const productContainer = document.querySelector('.product-detail-container');
        if (productContainer) {
            productContainer.innerHTML = createProductDetailHTML(product);

            // تهيئة معرض الصور
            initProductGallery(product.images);
        }
    } else {
        document.querySelector('.product-detail').innerHTML = `
            <div class="container" style="text-align: center; padding: 100px 0;">
                <h2>المنتج غير موجود</h2>
                <p>عذراً، المنتج الذي تبحث عنه غير متوفر.</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 20px;">العودة إلى الرئيسية</a>
            </div>
        `;
    }
}

// إنشاء HTML لتفاصيل المنتج
function createProductDetailHTML(product) {
    let specsHTML = '';
    for (const [key, value] of Object.entries(product.specifications)) {
        specsHTML += `<li><span class="spec-name">${key}</span><span>${value}</span></li>`;
    }

    return `
        <div class="product-gallery">
            <div class="main-image">
                <img id="mainProductImage" src="${product.images[0]}" alt="${product.name}" onerror="this.src='images/products/default.jpg'">
            </div>
            <div class="thumbnail-images" id="thumbnailContainer">
                ${product.images.map((img, index) => `
                    <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
                        <img src="${img}" alt="${product.name} ${index + 1}">
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="product-info-detail">
            <h1 class="product-title-detail">${product.name}</h1>
            <div class="product-brand">${product.brand}</div>
            <div class="product-status ${product.available !== false ? 'in-stock' : 'out-of-stock'}">
                ${product.available !== false ? 'متوفر' : 'غير متوفر'}
            </div>
            <div class="product-price-detail">${product.price.toFixed(2)} ر.س</div>
            <p class="product-description-detail">${product.description}</p>
            
            <div class="specifications">
                <h3><i class="fas fa-list-alt"></i> المواصفات</h3>
                <ul class="spec-list">
                    ${specsHTML}
                </ul>
            </div>
            
            <div class="product-actions-detail">
                <button class="btn btn-primary order-now-detail" onclick="openOrderModal('${product.id}')">
                    <i class="fas fa-paper-plane"></i> اطلب الآن
                </button>
            </div>
        </div>
    `;
}

// تهيئة معرض الصور
function initProductGallery(images) {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainProductImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const imageSrc = this.dataset.image;
            mainImage.src = imageSrc;

            // تحديث الصورة النشطة
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // تهيئة أزرار الكمية
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity-input');

    if (minusBtn && plusBtn && quantityInput) {
        minusBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            if (value < 10) {
                quantityInput.value = value + 1;
            }
        });
    }
}

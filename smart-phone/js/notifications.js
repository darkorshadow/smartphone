// إعدادات الإشعارات
const notificationSettings = {
    storeName: 'متجر التقنية اليمني',
    storeEmail: 'yemensmartfhonestore@gmail.com',
    storePhone: '+967777130352',
    emailEnabled: true,
    telegramEnabled: true,
    whatsappEnabled: true,
    telegramBotToken: '', // سيتم تعيينه من قبل المالك
    telegramChatId: '', // سيتم تعيينه من قبل المالك
    whatsappNumber: '+967777130352'
};

// إرسال إشعار الطلب
async function sendOrderNotification(orderDetails) {
    try {
        // بناء رسالة الطلب
        const message = buildOrderMessage(orderDetails);
        
        // إرسال عبر البريد الإلكتروني
        if (notificationSettings.emailEnabled) {
            sendEmailNotification(orderDetails, message);
        }
        
        // إرسال عبر Telegram (إذا كان مفعلاً)
        if (notificationSettings.telegramEnabled && notificationSettings.telegramBotToken) {
            await sendTelegramNotification(message);
        }
        
        // إرسال عبر WhatsApp (إذا كان مفعلاً)
        if (notificationSettings.whatsappEnabled) {
            sendWhatsAppNotification(message);
        }
        
        console.log('Order notification sent successfully');
        return true;
        
    } catch (error) {
        console.error('Error sending order notification:', error);
        // حتى إذا فشل الإرسال، نتابع العملية
        return false;
    }
}

// بناء رسالة الطلب
function buildOrderMessage(orderDetails) {
    let message = `🛒 *طلب جديد في ${notificationSettings.storeName}*\n\n`;
    message += `📦 *رقم الطلب:* ${orderDetails.orderId}\n`;
    message += `📅 *التاريخ:* ${new Date(orderDetails.date).toLocaleString('ar-SA')}\n`;
    message += `💰 *المجموع:* ${orderDetails.total.toFixed(2)} ر.س\n\n`;
    
    message += `👤 *بيانات العميل:*\n`;
    message += `• الاسم: ${orderDetails.customer.name}\n`;
    message += `• الهاتف: ${orderDetails.customer.phone}\n`;
    message += `• البريد: ${orderDetails.customer.email || 'غير محدد'}\n`;
    message += `• العنوان: ${orderDetails.customer.address}\n`;
    
    if (orderDetails.customer.notes) {
        message += `• ملاحظات: ${orderDetails.customer.notes}\n`;
    }
    
    message += `\n📋 *تفاصيل الطلب:*\n`;
    orderDetails.items.forEach((item, index) => {
        message += `\n${index + 1}. *${item.name}*\n`;
        message += `   الكمية: ${item.quantity}\n`;
        message += `   السعر: ${item.price.toFixed(2)} ر.س\n`;
        message += `   المجموع: ${(item.price * item.quantity).toFixed(2)} ر.س\n`;
    });
    
    message += `\n────────────────────\n`;
    message += `*المجموع الكلي:* ${orderDetails.total.toFixed(2)} ر.س\n`;
    message += `\n📍 ${notificationSettings.storeName}\n`;
    message += `📞 ${notificationSettings.storePhone}\n`;
    
    return message;
}

// إرسال إشعار عبر البريد الإلكتروني
function sendEmailNotification(orderDetails, message) {
    const subject = `طلب جديد #${orderDetails.orderId} - ${notificationSettings.storeName}`;
    const emailBody = `
        <div dir="rtl" style="font-family: 'Cairo', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 30px; background-color: #2563eb; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0;">طلب جديد</h1>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">${notificationSettings.storeName}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <h2 style="color: #2563eb; margin-top: 0;">تفاصيل الطلب #${orderDetails.orderId}</h2>
                <p><strong>التاريخ:</strong> ${new Date(orderDetails.date).toLocaleString('ar-SA')}</p>
                <p><strong>المجموع:</strong> ${orderDetails.total.toFixed(2)} ر.س</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <h3 style="color: #2563eb; margin-top: 0;">بيانات العميل</h3>
                <p><strong>الاسم:</strong> ${orderDetails.customer.name}</p>
                <p><strong>الهاتف:</strong> ${orderDetails.customer.phone}</p>
                <p><strong>البريد الإلكتروني:</strong> ${orderDetails.customer.email || 'غير محدد'}</p>
                <p><strong>العنوان:</strong> ${orderDetails.customer.address}</p>
                ${orderDetails.customer.notes ? `<p><strong>ملاحظات:</strong> ${orderDetails.customer.notes}</p>` : ''}
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <h3 style="color: #2563eb; margin-top: 0;">المنتجات المطلوبة</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background-color: #f3f4f6;">
                            <th style="padding: 10px; text-align: right; border-bottom: 2px solid #e5e7eb;">المنتج</th>
                            <th style="padding: 10px; text-align: center; border-bottom: 2px solid #e5e7eb;">الكمية</th>
                            <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e5e7eb;">السعر</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orderDetails.items.map(item => `
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${item.name}</td>
                                <td style="padding: 10px; text-align: center; border-bottom: 1px solid #e5e7eb;">${item.quantity}</td>
                                <td style="padding: 10px; text-align: left; border-bottom: 1px solid #e5e7eb;">${(item.price * item.quantity).toFixed(2)} ر.س</td>
                            </tr>
                        `).join('')}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2" style="padding: 10px; text-align: left; font-weight: bold;">المجموع الكلي:</td>
                            <td style="padding: 10px; text-align: left; font-weight: bold; color: #2563eb;">${orderDetails.total.toFixed(2)} ر.س</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            
            <div style="text-align: center; color: #6b7280; font-size: 0.9rem; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p>${notificationSettings.storeName}</p>
                <p>هاتف: ${notificationSettings.storePhone} | بريد: ${notificationSettings.storeEmail}</p>
                <p>تم إنشاء هذا البريد تلقائياً من نظام إدارة الطلبات</p>
            </div>
        </div>
    `;
    
    // محاكاة إرسال البريد الإلكتروني
    console.log('Email would be sent to:', notificationSettings.storeEmail);
    console.log('Subject:', subject);
    
    // في تطبيق حقيقي، استخدم EmailJS أو خدمة مماثلة:
    /*
    emailjs.send('service_id', 'template_id', {
        to_email: notificationSettings.storeEmail,
        subject: subject,
        message: emailBody,
        order_id: orderDetails.orderId,
        customer_name: orderDetails.customer.name,
        customer_phone: orderDetails.customer.phone,
        total: orderDetails.total.toFixed(2),
        items: orderDetails.items.map(item => `${item.name} x${item.quantity}`).join(', ')
    });
    */
}

// إرسال إشعار عبر Telegram
async function sendTelegramNotification(message) {
    try {
        if (!notificationSettings.telegramBotToken || !notificationSettings.telegramChatId) {
            console.warn('Telegram credentials not configured');
            return false;
        }
        
        const url = `https://api.telegram.org/bot${notificationSettings.telegramBotToken}/sendMessage`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: notificationSettings.telegramChatId,
                text: message,
                parse_mode: 'Markdown'
            })
        });
        
        if (!response.ok) {
            throw new Error(`Telegram API error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Telegram notification sent successfully:', data);
        return true;
        
    } catch (error) {
        console.error('Error sending Telegram notification:', error);
        return false;
    }
}

// إرسال إشعار عبر WhatsApp
function sendWhatsAppNotification(message) {
    const phone = notificationSettings.whatsappNumber.replace(/[^\d]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    // فتح نافذة جديدة للواتساب
    window.open(whatsappUrl, '_blank');
    console.log('WhatsApp notification prepared:', whatsappUrl);
    
    return true;
}

// معالجة عملية الدفع
async function processCheckout() {
    // الحصول على بيانات النموذج
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const notes = document.getElementById('orderNotes').value.trim();
    
    // التحقق من البيانات
    if (!name || !phone || !email || !address) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
        return;
    }
    
    if (!isValidPhone(phone)) {
        showNotification('يرجى إدخال رقم هاتف صحيح', 'error');
        return;
    }
    
    // إنشاء تفاصيل الطلب
    const orderDetails = {
        customer: { name, phone, email, address, notes },
        items: cart,
        total: calculateCartTotal(),
        date: new Date().toISOString(),
        orderId: 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase()
    };
    
    // إظهار تحميل
    const submitBtn = document.querySelector('#checkoutForm button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جارٍ إرسال الطلب...';
    submitBtn.disabled = true;
    
    try {
        // إرسال الطلب
        const sent = await sendOrderNotification(orderDetails);
        
        if (sent) {
            // مسح السلة
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            // حفظ الطلب في localStorage للعرض
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(orderDetails);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // إعادة توجيه إلى صفحة تأكيد الطلب
            localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
            window.location.href = 'order-confirmation.html';
        } else {
            throw new Error('Failed to send order notification');
        }
        
    } catch (error) {
        console.error('Checkout error:', error);
        showNotification('حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى', 'error');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// تهيئة صفحة تأكيد الطلب
function initOrderConfirmationPage() {
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
    
    if (!lastOrder) {
        window.location.href = 'index.html';
        return;
    }
    
    // عرض تفاصيل الطلب
    const orderContainer = document.getElementById('orderDetails');
    if (orderContainer) {
        orderContainer.innerHTML = createOrderConfirmationHTML(lastOrder);
    }
    
    // إرسال إشعارات للمستخدم
    sendUserConfirmation(lastOrder);
    
    // مسح الطلب السابق من localStorage
    localStorage.removeItem('lastOrder');
}

// إنشاء HTML لتأكيد الطلب
function createOrderConfirmationHTML(order) {
    let itemsHTML = '';
    order.items.forEach((item, index) => {
        itemsHTML += `
            <li>
                <span>${item.name} × ${item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)} ر.س</span>
            </li>
        `;
    });
    
    const contactLinks = `
        <div class="contact-options" style="margin-top: 30px; text-align: center;">
            <p style="margin-bottom: 15px;">يمكنك التواصل معنا عبر:</p>
            <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                <a href="https://wa.me/+967777130352" target="_blank" class="btn" style="background-color: #25D366; color: white;">
                    <i class="fab fa-whatsapp"></i> واتساب
                </a>
                <a href="https://t.me/+967777130352" target="_blank" class="btn" style="background-color: #0088cc; color: white;">
                    <i class="fab fa-telegram"></i> تلغرام
                </a>
                <a href="mailto:yemensmartfhonestore@gmail.com" class="btn" style="background-color: #EA4335; color: white;">
                    <i class="fas fa-envelope"></i> البريد
                </a>
            </div>
        </div>
    `;
    
    return `
        <div class="order-confirmation-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h1>تم تأكيد طلبك بنجاح!</h1>
            <p class="order-number">رقم الطلب: <strong>${order.orderId}</strong></p>
            <p>شكراً لثقتك بنا. سيتم التواصل معك في أقرب وقت لتأكيد الطلب وتحديد طريقة التسليم والدفع.</p>
            
            <div class="order-summary">
                <h2><i class="fas fa-receipt"></i> ملخص الطلب</h2>
                
                <div class="summary-section">
                    <h3>بيانات العميل</h3>
                    <ul>
                        <li><strong>الاسم:</strong> ${order.customer.name}</li>
                        <li><strong>الهاتف:</strong> ${order.customer.phone}</li>
                        <li><strong>البريد الإلكتروني:</strong> ${order.customer.email}</li>
                        <li><strong>العنوان:</strong> ${order.customer.address}</li>
                        ${order.customer.notes ? `<li><strong>ملاحظات:</strong> ${order.customer.notes}</li>` : ''}
                    </ul>
                </div>
                
                <div class="summary-section">
                    <h3>المنتجات المطلوبة</h3>
                    <ul class="order-items">
                        ${itemsHTML}
                        <li class="total">
                            <strong>المجموع الكلي</strong>
                            <strong>${order.total.toFixed(2)} ر.س</strong>
                        </li>
                    </ul>
                </div>
            </div>
            
            ${contactLinks}
            
            <div class="order-actions">
                <a href="index.html" class="btn btn-primary">
                    <i class="fas fa-home"></i> العودة إلى الرئيسية
                </a>
                <button onclick="window.print()" class="btn btn-secondary">
                    <i class="fas fa-print"></i> طباعة الطلب
                </button>
            </div>
        </div>
    `;
}

// إرسال تأكيد للمستخدم
function sendUserConfirmation(order) {
    // إرسال بريد تأكيد للمستخدم
    const userSubject = `تأكيد طلبك #${order.orderId} - ${notificationSettings.storeName}`;
    const userMessage = `
        عزيزي/عزيزتي ${order.customer.name}،
        
        تم استلام طلبك رقم ${order.orderId} بنجاح.
        
        تفاصيل الطلب:
        - المجموع: ${order.total.toFixed(2)} ر.س
        - تاريخ الطلب: ${new Date(order.date).toLocaleString('ar-SA')}
        
        سوف نتصل بك في أقرب وقت لتأكيد الطلب وتحديد طريقة التسليم.
        
        للاستفسار، يمكنك التواصل معنا عبر:
        - الواتساب: ${notificationSettings.whatsappNumber}
        - البريد: ${notificationSettings.storeEmail}
        
        شكراً لاختيارك متجر التقنية اليمني
    `;
    
    // محاكاة إرسال بريد للمستخدم
    console.log('User confirmation email would be sent to:', order.customer.email);
    console.log('Subject:', userSubject);
    console.log('Message:', userMessage);
}

// إذا كانت الصفحة الحالية هي صفحة تأكيد الطلب، قم بتهيئتها
if (window.location.pathname.includes('order-confirmation.html')) {
    document.addEventListener('DOMContentLoaded', initOrderConfirmationPage);
}

// تحميل عناصر السلة
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSummaryContainer = document.getElementById('cartSummary');
    
    if (cartItemsContainer && cartSummaryContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart" style="text-align: center; padding: 60px 20px;">
                    <i class="fas fa-shopping-cart fa-4x" style="color: #6b7280; margin-bottom: 20px;"></i>
                    <h3 style="color: #6b7280; margin-bottom: 15px;">سلة التسوق فارغة</h3>
                    <p style="color: #9ca3af; margin-bottom: 30px;">لم تقم بإضافة أي منتجات إلى السلة بعد</p>
                    <a href="index.html" class="btn btn-primary" style="padding: 12px 30px;">
                        <i class="fas fa-shopping-bag"></i> تصفح المنتجات
                    </a>
                </div>
            `;
            
            cartSummaryContainer.innerHTML = '';
            return;
        }
        
        // عرض عناصر السلة
        let cartItemsHTML = '';
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            cartItemsHTML += `
                <div class="cart-item" data-product-id="${item.id}">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='images/products/default.jpg'">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="cart-item-brand" style="color: #6b7280; font-size: 0.9rem; margin-bottom: 5px;">${item.brand}</div>
                        <div class="cart-item-price">${item.price.toFixed(2)} ر.س</div>
                        <div class="cart-item-quantity" style="margin-top: 10px;">
                            <div class="quantity-selector" style="display: inline-flex; align-items: center; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                                <button class="quantity-btn minus" onclick="updateCartItemQuantity('${item.id}', ${item.quantity - 1})" style="background: #f3f4f6; border: none; padding: 5px 10px; cursor: pointer;">-</button>
                                <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="10" style="width: 40px; text-align: center; border: none; padding: 5px;" onchange="updateCartItemQuantity('${item.id}', this.value)">
                                <button class="quantity-btn plus" onclick="updateCartItemQuantity('${item.id}', ${item.quantity + 1})" style="background: #f3f4f6; border: none; padding: 5px 10px; cursor: pointer;">+</button>
                            </div>
                        </div>
                    </div>
                    <button class="cart-item-remove remove-item" data-product-id="${item.id}" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 1.2rem; padding: 5px;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        });
        
        cartItemsContainer.innerHTML = cartItemsHTML;
        
        // حساب المجموع
        const shipping = subtotal > 500 ? 0 : 50;
        const total = subtotal + shipping;
        
        // عرض ملخص السلة
        cartSummaryContainer.innerHTML = `
            <div class="summary-item">
                <span>المجموع الفرعي</span>
                <span>${subtotal.toFixed(2)} ر.س</span>
            </div>
            <div class="summary-item">
                <span>الشحن</span>
                <span>${shipping === 0 ? 'مجاني' : shipping.toFixed(2) + ' ر.س'}</span>
            </div>
            <div class="summary-item" style="font-size: 1.1rem; color: #1f2937;">
                <span>المجموع الكلي</span>
                <span style="color: #2563eb; font-weight: bold;">${total.toFixed(2)} ر.س</span>
            </div>
        `;
    }
}

// التحقق من صحة رقم الهاتف
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
}

// إذا كانت الصفحة الحالية هي صفحة السلة، قم بتهيئتها
if (window.location.pathname.includes('cart.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        loadCartItems();
        
        // تهيئة نموذج الخروج
        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', function(e) {
                e.preventDefault();
                processCheckout();
            });
        }
    });
}

// تحديث كمية عنصر في السلة
function updateCartItemQuantity(productId, quantity) {
    updateCartQuantity(productId, parseInt(quantity));
}
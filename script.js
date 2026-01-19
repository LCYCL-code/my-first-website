// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 处理联系表单提交
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // 阻止表单默认提交
            
            // 获取表单数据
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // 简单的表单验证
            if (!name || !email || !message) {
                showMessage('请填写所有必填字段', 'error');
                return;
            }
            
            // 模拟表单提交
            showMessage('消息发送成功！', 'success');
            
            // 重置表单
            contactForm.reset();
        });
    }
    
    // 显示消息函数
    function showMessage(text, type) {
        const messageDiv = document.getElementById('formMessage');
        if (messageDiv) {
            messageDiv.textContent = text;
            messageDiv.className = `form-message ${type}`;
            
            // 3秒后隐藏消息
            setTimeout(() => {
                messageDiv.textContent = '';
                messageDiv.className = 'form-message';
            }, 3000);
        }
    }
    
    // 为导航链接添加平滑滚动效果
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 只处理当前页面的锚点链接
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // 考虑固定导航栏的高度
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 为所有按钮添加悬停效果
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 页面加载动画
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        
        // 使用requestAnimationFrame确保动画流畅
        requestAnimationFrame(() => {
            mainContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        });
    }
    
    // 为特性卡片添加进入动画
    const featureItems = document.querySelectorAll('.feature-item');
    if (featureItems.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        featureItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });
    }
});
// Banner轮播
document.addEventListener('DOMContentLoaded', function() {
    // Banner轮播
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (slides.length > 0) {
        let currentIndex = 0;
        let interval;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                dots[i]?.classList.remove('active');
            });
            slides[index].classList.add('active');
            dots[index]?.classList.add('active');
            currentIndex = index;
        }

        function nextSlide() {
            let next = (currentIndex + 1) % slides.length;
            showSlide(next);
        }

        // 自动轮播
        interval = setInterval(nextSlide, 3000);

        // 点击圆点切换
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                clearInterval(interval);
                showSlide(index);
                interval = setInterval(nextSlide, 3000);
            });
        });
    }

    // 移动端菜单切换
    const nav = document.querySelector('nav ul');
    const header = document.querySelector('header');
    if (nav && window.innerWidth <= 768) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.style.cssText = 'background:none;border:none;font-size:28px;cursor:pointer;color:#1a3a6b;padding:5px 10px;';
        header.querySelector('.container').appendChild(menuToggle);

        menuToggle.addEventListener('click', function() {
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.width = '100%';
                nav.style.marginTop = '10px';
            }
        });
    }

    // 商城搜索功能
    const searchBtn = document.querySelector('.shop-search button');
    const searchInput = document.querySelector('.shop-search input');
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const keyword = searchInput.value.trim();
            if (keyword) {
                alert('搜索功能开发中，您搜索的是："' + keyword + '"');
            }
        });
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // 加入购物车
    const addCartBtns = document.querySelectorAll('.btn-add-cart');
    addCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const product = this.closest('.product-item');
            const name = product ? product.querySelector('h3').textContent : '商品';
            alert('「' + name + '」已加入购物车！');
        });
    });

    // 商城入驻申请
    const joinBtn = document.querySelector('.join-form button');
    const joinInput = document.querySelector('.join-form input');
    if (joinBtn && joinInput) {
        joinBtn.addEventListener('click', function() {
            const contact = joinInput.value.trim();
            if (contact) {
                alert('感谢您的申请！我们将尽快与您联系：' + contact);
                joinInput.value = '';
            } else {
                alert('请输入您的联系方式');
            }
        });
    }
});

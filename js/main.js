// ===== 信息发布系统 =====
// 本地存储键名
const INFO_STORAGE_KEY = 'smy_info_list';

// 初始化示例数据（仅在首次使用时）
function initDemoData() {
    if (localStorage.getItem(INFO_STORAGE_KEY + '_initialized')) return;
    
    const demos = [
        {
            id: 'demo1',
            title: '专业ICP许可证办理服务，快速拿证',
            category: 'icp',
            categoryName: 'ICP许可证',
            contact: '张经理',
            phone: '18048576055',
            area: '四川 - 成都',
            email: '545482979@qq.com',
            content: '成都三木易科技有限公司专业办理ICP许可证，全程代办，从材料准备到提交审批一站式服务。我们拥有丰富的行业经验，熟悉各省通信管理局的审批标准，已成功为五百余家企业完成ICP许可证办理。服务流程：需求沟通→方案制定→签约合作→材料准备→提交审批→成功拿证。',
            date: '2026-06-25T08:00:00.000Z',
            dateStr: '2026-06-25',
            status: 'approved'
        },
        {
            id: 'demo2',
            title: 'EDI许可证办理，电商平台必备资质',
            category: 'edi',
            categoryName: 'EDI许可证',
            contact: '李经理',
            phone: '18048576055',
            area: '四川 - 成都',
            email: '545482979@qq.com',
            content: 'EDI许可证适用于电子商务平台、在线交易平台、互联网金融平台等涉及在线数据处理与交易处理业务的企业。我们提供专业的EDI许可证办理服务，高效快捷，让您的电商平台合规运营。',
            date: '2026-06-24T08:00:00.000Z',
            dateStr: '2026-06-24',
            status: 'approved'
        },
        {
            id: 'demo3',
            title: '网站备案代办，阿里云接入快速备案',
            category: 'beian',
            categoryName: '网站备案',
            contact: '王经理',
            phone: '18048576055',
            area: '全国',
            email: '545482979@qq.com',
            content: '阿里云备案接入，快速完成工信部ICP备案。我们为企业提供备案接入、资料提交、进度跟踪等一站式服务，熟悉各省通信管理局审核要求，帮助企业快速完成网站备案。',
            date: '2026-06-23T08:00:00.000Z',
            dateStr: '2026-06-23',
            status: 'approved'
        },
        {
            id: 'demo4',
            title: '企业网站建设，PC+手机自适应',
            category: 'website',
            categoryName: '网站建设',
            contact: '刘经理',
            phone: '18048576055',
            area: '全国',
            email: '545482979@qq.com',
            content: '专业企业网站建设服务，支持PC端、手机端、微信端自适应。提供模板建站、定制开发等多种方案，含产品图处理、banner设计、SEO优化等全方位服务。高质量低成本为企业打造专业官网。',
            date: '2026-06-22T08:00:00.000Z',
            dateStr: '2026-06-22',
            status: 'approved'
        },
        {
            id: 'demo5',
            title: 'APP开发，安卓/iOS双系统源码交付',
            category: 'software',
            categoryName: '软件开发',
            contact: '陈经理',
            phone: '18048576055',
            area: '全国',
            email: '545482979@qq.com',
            content: '专业APP定制开发服务，支持安卓和iOS双系统，源码交付。提供商城APP、社交APP、企业办公APP等各类APP开发服务。专业团队，高质量开发，免费提供一年售后服务。',
            date: '2026-06-21T08:00:00.000Z',
            dateStr: '2026-06-21',
            status: 'approved'
        },
        {
            id: 'demo6',
            title: 'IT运维外包，服务器维护网络管理',
            category: 'operation',
            categoryName: '运维服务',
            contact: '赵经理',
            phone: '18048576055',
            area: '四川 - 成都',
            email: '545482979@qq.com',
            content: '专业IT运维外包服务，涵盖服务器维护、网络管理、电脑维护、安全优化等。一站式IT服务覆盖，全方位保障企业IT系统稳定运行。软件杀毒、电脑清理、桌面维护、安全优化。',
            date: '2026-06-20T08:00:00.000Z',
            dateStr: '2026-06-20',
            status: 'approved'
        }
    ];
    
    saveInfoList(demos);
    localStorage.setItem(INFO_STORAGE_KEY + '_initialized', 'true');
}

// 获取存储的信息列表
function getInfoList() {
    try {
        const data = localStorage.getItem(INFO_STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

// 保存信息列表
function saveInfoList(list) {
    localStorage.setItem(INFO_STORAGE_KEY, JSON.stringify(list));
}

// 生成唯一ID
function genId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// 获取分类名称
function getCategoryName(cat) {
    const map = {
        icp: 'ICP许可证',
        edi: 'EDI许可证',
        beian: '网站备案',
        website: '网站建设',
        software: '软件开发',
        operation: '运维服务',
        other: '其他'
    };
    return map[cat] || cat || '未分类';
}

// 格式化日期
function formatDate(dateStr) {
    const d = new Date(dateStr);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
}

// ===== 信息发布表单提交 =====
document.addEventListener('DOMContentLoaded', function() {
    // 初始化示例数据
    initDemoData();

    const publishForm = document.getElementById('publishForm');
    if (publishForm) {
        publishForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const title = document.getElementById('infoTitle').value.trim();
            const category = document.getElementById('infoCategory').value;
            const contact = document.getElementById('infoContact').value.trim();
            const phone = document.getElementById('infoPhone').value.trim();
            const area = document.getElementById('infoArea').value.trim();
            const email = document.getElementById('infoEmail').value.trim();
            const content = document.getElementById('infoContent').value.trim();
            const agree = document.getElementById('agreeCheck').checked;

            if (!agree) {
                alert('请阅读并同意用户服务协议和隐私政策');
                return;
            }

            const infoItem = {
                id: genId(),
                title: title,
                category: category,
                categoryName: getCategoryName(category),
                contact: contact,
                phone: phone,
                area: area || '--',
                email: email || '--',
                content: content,
                date: new Date().toISOString(),
                dateStr: formatDate(new Date().toISOString()),
                status: 'pending' // pending 待审核, approved 已通过
            };

            const list = getInfoList();
            list.unshift(infoItem);
            saveInfoList(list);

            // 显示成功提示
            const formContainer = document.querySelector('.publish-form-container');
            if (formContainer) {
                formContainer.innerHTML = `
                    <div class="publish-success show">
                        <div class="success-icon">✅</div>
                        <h3>信息发布成功！</h3>
                        <p>感谢您的发布，信息已提交，管理员审核通过后将展示在信息列表中。</p>
                        <a href="list-info.html" class="btn">查看信息列表</a>
                        <a href="publish.html" class="btn btn-outline" style="margin-left:10px;">继续发布</a>
                    </div>
                `;
            }
        });
    }

    // ===== 信息列表渲染 =====
    const infoListEl = document.getElementById('infoList');
    if (infoListEl) {
        renderInfoList();
    }

    function renderInfoList() {
        const list = getInfoList();
        // 只显示已审核通过的信息
        const approved = list.filter(item => item.status === 'approved');

        if (approved.length === 0) {
            infoListEl.innerHTML = '<div class="empty-state" style="text-align:center;padding:60px 20px;color:#999;"><p style="font-size:48px;margin-bottom:15px;">📭</p><h3 style="color:#1a3a6b;margin-bottom:10px;">暂无信息</h3><p>还没有发布的信息，快来发布第一条吧！</p></div>';
            return;
        }

        // 获取分类参数
        const urlParams = new URLSearchParams(window.location.search);
        const catFilter = urlParams.get('cat');

        let filtered = approved;
        if (catFilter) {
            filtered = approved.filter(item => item.category === catFilter);
            // 高亮对应的分类筛选按钮
            document.querySelectorAll('.filter-item').forEach(el => {
                const href = el.getAttribute('href');
                if (href && href.includes('cat=' + catFilter)) {
                    el.classList.add('active');
                } else if (!href || !href.includes('cat=')) {
                    // 非筛选链接
                }
            });
        }

        if (filtered.length === 0) {
            infoListEl.innerHTML = '<div class="empty-state" style="text-align:center;padding:60px 20px;color:#999;"><p style="font-size:48px;margin-bottom:15px;">🔍</p><h3 style="color:#1a3a6b;margin-bottom:10px;">该分类暂无信息</h3><p>换个分类看看吧！</p></div>';
            return;
        }

        let html = '';
        filtered.forEach(item => {
            const desc = item.content.replace(/<[^>]*>/g, '').substring(0, 80);
            html += `
                <li>
                    <a href="info-detail.html?id=${item.id}">
                        <div class="inC_c_T">
                            <p style="font-size:48px;text-align:center;padding:40px 0;background:#f0f4f8;margin:0;">📄</p>
                            <div></div>
                        </div>
                        <div class="inC_c_e">
                            <h3>${escapeHtml(item.title)}</h3>
                            <p>${item.dateStr}　👤 ${escapeHtml(item.contact)}　📞 ${escapeHtml(item.phone)}</p>
                        </div>
                        <div class="l1"></div><div class="l2"></div><div class="l3"></div><div class="l4"></div>
                    </a>
                </li>
            `;
        });
        infoListEl.innerHTML = html;

        // 分页信息
        const pagination = document.getElementById('infoPagination');
        if (pagination) {
            const totalPages = Math.ceil(filtered.length / 10);
            if (totalPages > 1) {
                let pHtml = '';
                for (let i = 1; i <= totalPages; i++) {
                    pHtml += `<span class="page-item ${i === 1 ? 'active' : ''}">${i}</span>`;
                }
                pagination.innerHTML = pHtml;
            } else {
                pagination.innerHTML = '';
            }
        }
    }

    // ===== 信息详情页 =====
    const detailTitle = document.getElementById('detailTitle');
    if (detailTitle) {
        loadInfoDetail();
    }

    function loadInfoDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (!id) {
            document.getElementById('detailTitle').textContent = '信息未找到';
            return;
        }

        const list = getInfoList();
        const item = list.find(i => i.id === id);

        if (!item) {
            document.getElementById('detailTitle').textContent = '信息未找到或已被删除';
            document.getElementById('detailContent').innerHTML = '<p style="text-align:center;color:#999;padding:40px 0;">抱歉，您查看的信息不存在或已被删除。</p>';
            return;
        }

        document.getElementById('detailTitle').textContent = item.title;
        document.getElementById('detailCategory').textContent = item.categoryName;
        document.getElementById('detailDate').textContent = '发布日期：' + item.dateStr;
        document.getElementById('detailContent').innerHTML = item.content.replace(/\n/g, '<br>');
        document.getElementById('detailContact').textContent = item.contact;
        document.getElementById('detailPhone').textContent = item.phone;
        document.getElementById('detailArea').textContent = item.area || '--';
        document.getElementById('detailEmail').textContent = item.email || '--';

        // 更新页面标题
        document.title = item.title + ' - 成都三木易科技有限公司';
    }

    // HTML转义
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ===== 首页信息TOP（仿njzwtqgs.cn inC结构） =====
    const homeInfoList = document.getElementById('homeInfoList');
    const homeLatestList = document.getElementById('homeLatestList');
    
    if (homeInfoList) {
        const list = getInfoList();
        const approved = list.filter(item => item.status === 'approved').slice(0, 8);
        if (approved.length === 0) {
            homeInfoList.innerHTML = '<li style="text-align:center;padding:60px 20px;list-style:none;width:100%;color:#999;">暂无信息，<a href="publish.html" style="color:#e8491d;">立即发布</a></li>';
        } else {
            let html = '';
            approved.forEach(item => {
                const desc = item.content.replace(/<[^>]*>/g, '').substring(0, 80);
                html += `
                <li>
                    <a href="info-detail.html?id=${item.id}">
                        <div class="inC_c_T">
                            <p style="font-size:48px;text-align:center;padding:40px 0;background:#f0f4f8;margin:0;">📄</p>
                            <div></div>
                        </div>
                        <div class="inC_c_e">
                            <h3>${escapeHtml(item.title)}</h3>
                            <p>${item.dateStr}　👤 ${escapeHtml(item.contact)}</p>
                        </div>
                        <div class="l1"></div><div class="l2"></div><div class="l3"></div><div class="l4"></div>
                    </a>
                </li>`;
            });
            homeInfoList.innerHTML = html;
        }
    }

    // ===== 最新发布NEWS（仿njzwtqgs.cn inD结构） =====
    if (homeLatestList) {
        const list = getInfoList();
        const approved = list.filter(item => item.status === 'approved').slice(0, 6);
        if (approved.length === 0) {
            homeLatestList.innerHTML = '<li style="text-align:center;padding:40px;list-style:none;width:100%;color:#999;">暂无最新信息</li>';
        } else {
            let html = '';
            approved.forEach(item => {
                const desc = item.content.replace(/<[^>]*>/g, '').substring(0, 100);
                html += `
                <li>
                    <a href="info-detail.html?id=${item.id}">
                        <dl class="inD_c_e">
                            <dt>${escapeHtml(item.title)}</dt>
                            <dd>
                                <p>${escapeHtml(desc)}${item.content.length > 100 ? '...' : ''}</p>
                                <span>${item.dateStr}　👤 ${escapeHtml(item.contact)}　📞 ${escapeHtml(item.phone)}<i></i></span>
                            </dd>
                        </dl>
                    </a>
                </li>`;
            });
            homeLatestList.innerHTML = html;
        }
    }

    // ===== 原有功能 =====
    // Banner轮播
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

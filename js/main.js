/* ===== Header / Footer dùng chung ===== */
const NAV = [
  { href: "index.html", label: "Trang chủ", key: "home" },
  { href: "index.html#bo-suu-tap", label: "Bộ sưu tập", key: "collections" },
  { href: "shop.html", label: "Shop", key: "shop" },
  { href: "thu-do.html", label: "Thử đồ AI", key: "tryon" },
  { href: "index.html#tin-tuc", label: "Tin tức", key: "news" },
  { href: "index.html#ve-chung-toi", label: "Về chúng tôi", key: "about" },
  { href: "index.html#hoi-vien", label: "Hội viên", key: "member" },
];

const ICONS = {
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1 13H7L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8Z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  tt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.4 2.4 1.8 3.8 4 4v3.2a8 8 0 0 1-4-1.2V15a6 6 0 1 1-6-6v3.3A2.8 2.8 0 1 0 12.8 15V3H16Z"/></svg>',
};

function renderHeader() {
  const page = document.body.dataset.page;
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="container header-inner">
      <a href="index.html" class="logo" aria-label="Mộc Duyên">
        <span class="logo-mark">Mộc<br>Duyên</span>
      </a>
      <nav class="main-nav" id="mainNav">
        ${NAV.map((n) => `<a href="${n.href}" class="${n.key === page ? "active" : ""}">${n.label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <button class="btn-pill btn-outline btn-sm" data-open="login">Đăng nhập</button>
        <button class="icon-btn" data-open="cart" aria-label="Giỏ hàng">${ICONS.bag}<span class="cart-count" id="cartCount">0</span></button>
        <button class="icon-btn menu-toggle" id="menuToggle" aria-label="Menu" aria-controls="mainNav" aria-expanded="false">${ICONS.menu}</button>
      </div>
    </div>`;
  document.body.prepend(header);

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="container footer-grid">
      <div>
        <a href="index.html" class="logo logo-light"><span class="logo-mark">Mộc<br>Duyên</span></a>
        <p class="footer-about">Thời trang Việt hiện đại – chất liệu chọn lọc, đường may tinh tế, kết hợp công nghệ thử đồ AI cho trải nghiệm mua sắm mới.</p>
        <div class="socials">
          <a href="#" aria-label="Facebook">${ICONS.fb}</a>
          <a href="#" aria-label="Instagram">${ICONS.ig}</a>
          <a href="#" aria-label="TikTok">${ICONS.tt}</a>
        </div>
      </div>
      <div>
        <h4>Khám phá</h4>
        <a href="index.html#bo-suu-tap">Bộ sưu tập</a>
        <a href="shop.html">Shop</a>
        <a href="thu-do.html">Thử đồ AI</a>
        <a href="index.html#tin-tuc">Tin tức</a>
      </div>
      <div>
        <h4>Về Mộc Duyên</h4>
        <a href="index.html#ve-chung-toi">Câu chuyện</a>
        <a href="index.html#hoi-vien">Hội viên</a>
        <a href="#" data-open="login">Tài khoản</a>
        <a href="#" data-open="cart">Giỏ hàng</a>
      </div>
      <div>
        <h4>Liên hệ</h4>
        <p class="contact">${ICONS.phone} 0900 000 000</p>
        <p class="contact">${ICONS.mail} hello@mocduyen.demo</p>
        <p class="contact">${ICONS.pin} Hà Nội, Việt Nam</p>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 Mộc Duyên – Website demo.</span>
      <span>Ảnh minh họa: <a href="https://unsplash.com" target="_blank" rel="noopener">Unsplash</a></span>
    </div>`;
  document.body.append(footer);

  // Cart drawer + login modal + toast
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="overlay" id="overlay"></div>
    <aside class="cart-drawer" id="cartDrawer" aria-label="Giỏ hàng">
      <div class="drawer-head"><h3>Giỏ hàng</h3><button class="icon-btn" data-close aria-label="Đóng giỏ hàng">${ICONS.close}</button></div>
      <div class="drawer-body" id="cartItems"></div>
      <div class="drawer-foot">
        <div class="cart-total"><span>Tạm tính</span><strong id="cartTotal">0đ</strong></div>
        <button class="btn-pill btn-primary btn-block" id="checkoutBtn">Thanh toán</button>
      </div>
    </aside>
    <div class="modal" id="loginModal" role="dialog" aria-label="Đăng nhập">
      <div class="modal-card">
        <button class="icon-btn modal-close" data-close aria-label="Đóng">${ICONS.close}</button>
        <h3>Chào mừng trở lại</h3>
        <p class="muted">Đăng nhập để nhận ưu đãi hội viên</p>
        <form id="loginForm">
          <label>Email<input type="email" required placeholder="ban@email.com"></label>
          <label>Mật khẩu<input type="password" required placeholder="••••••••"></label>
          <button class="btn-pill btn-primary btn-block" type="submit">Đăng nhập</button>
        </form>
        <p class="muted small center">Chưa có tài khoản? <a href="#">Đăng ký</a></p>
      </div>
    </div>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
    <div class="petals" aria-hidden="true"></div>`
  );
}

/* ===== Giỏ hàng (localStorage) ===== */
const Cart = {
  key: "mocduyen_cart",
  get() {
    // Bỏ qua dữ liệu hỏng hoặc sản phẩm không còn tồn tại (giỏ cũ lưu từ bản trước)
    try {
      const raw = JSON.parse(localStorage.getItem(this.key));
      if (!Array.isArray(raw)) return [];
      return raw
        .filter((i) => i && findProduct(i.id) && Number(i.qty) > 0)
        .map((i) => {
          const p = findProduct(i.id);
          return { id: p.id, qty: Number(i.qty), size: i.size || "M", color: p.colors.includes(i.color) ? i.color : p.colors[0] };
        });
    } catch { return []; }
  },
  save(items) {
    try { localStorage.setItem(this.key, JSON.stringify(items)); } catch {}
    this.render();
  },
  add(id, qty = 1, size = "M", color) {
    const p = findProduct(id);
    if (!p) return;
    color = p.colors.includes(color) ? color : p.colors[0];
    const items = this.get();
    const found = items.find((i) => i.id === p.id && i.size === size && i.color === color);
    if (found) found.qty += qty;
    else items.push({ id: p.id, qty, size, color });
    this.save(items);
    toast(`Đã thêm “${p.name}” (size ${size}) vào giỏ`);
  },
  update(index, delta) {
    const items = this.get();
    items[index].qty += delta;
    if (items[index].qty <= 0) items.splice(index, 1);
    this.save(items);
  },
  render() {
    const items = this.get();
    const count = items.reduce((s, i) => s + i.qty, 0);
    const countEl = document.getElementById("cartCount");
    countEl.textContent = count;
    countEl.classList.toggle("show", count > 0);
    const list = document.getElementById("cartItems");
    if (!items.length) {
      list.innerHTML = `<div class="empty-cart">${ICONS.bag}<p>Giỏ hàng đang trống</p><a href="shop.html" class="btn-pill btn-outline btn-sm">Mua sắm ngay</a></div>`;
    } else {
      list.innerHTML = items
        .map((i, idx) => {
          const p = findProduct(i.id);
          return `<div class="cart-item">
            <img src="${IMG(p.img, 160, 200)}" alt="${p.name}">
            <div>
              <a href="product.html?id=${p.id}" class="cart-name">${p.name}</a>
              <p class="muted small cart-variant">Size: ${i.size} · Màu <span class="dot" style="background:${i.color}"></span></p>
              <div class="qty"><button data-q="${idx}" data-d="-1" aria-label="Giảm số lượng">−</button><span>${i.qty}</span><button data-q="${idx}" data-d="1" aria-label="Tăng số lượng">+</button></div>
            </div>
            <strong>${fmt(p.price * i.qty)}</strong>
          </div>`;
        })
        .join("");
    }
    const total = items.reduce((s, i) => s + findProduct(i.id).price * i.qty, 0);
    document.getElementById("cartTotal").textContent = fmt(total);
  },
};

/* ===== Tiện ích ===== */
let toastTimer;
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

function openPanel(name) {
  closePanels();
  document.getElementById("overlay").classList.add("show");
  const panel = document.getElementById(name === "cart" ? "cartDrawer" : "loginModal");
  panel.classList.add("open");
  // chuyển focus vào panel để dùng được bằng bàn phím
  setTimeout(() => (name === "login" ? panel.querySelector("input") : panel.querySelector("[data-close]")).focus(), 50);
}
function closePanels() {
  document.getElementById("overlay").classList.remove("show");
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("loginModal").classList.remove("open");
}
function toggleMenu(force) {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open", force);
  document.getElementById("menuToggle").setAttribute("aria-expanded", open);
}

function productCard(p) {
  return `<article class="product-card reveal">
    <a href="product.html?id=${p.id}" class="product-thumb">
      <img src="${IMG(p.img, 600, 750)}" alt="${p.name}" loading="lazy">
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
    </a>
    <div class="product-actions">
      <button class="btn-pill btn-primary btn-sm" data-add="${p.id}">Thêm vào giỏ</button>
      ${p.tryon ? `<a class="btn-pill btn-light btn-sm" href="thu-do.html?id=${p.id}">Thử đồ</a>` : ""}
    </div>
    <div class="product-info">
      <p class="product-col">${findCollection(p.col).name}</p>
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="price">${fmt(p.price)} ${p.oldPrice ? `<del>${fmt(p.oldPrice)}</del>` : ""}</div>
      <div class="swatches">${p.colors.map((c) => `<span style="background:${c}"></span>`).join("")}</div>
    </div>
  </article>`;
}

function initReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
}

function initPetals() {
  const box = document.querySelector(".petals");
  if (!box || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let i = 0; i < 12; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDuration = 9 + Math.random() * 10 + "s";
    s.style.animationDelay = -Math.random() * 15 + "s";
    s.style.transform = `scale(${0.5 + Math.random()})`;
    box.append(s);
  }
}

/* ===== Khởi tạo ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  Cart.render();
  initPetals();

  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 20);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });

  document.addEventListener("click", (e) => {
    const open = e.target.closest("[data-open]");
    if (open) { e.preventDefault(); openPanel(open.dataset.open); return; }
    // Link giữ chỗ (href="#") trong bản demo: không nhảy lên đầu trang
    if (e.target.closest('a[href="#"]')) { e.preventDefault(); toast("Nội dung đang được cập nhật (demo)"); return; }
    if (e.target.closest("[data-close]") || e.target.id === "overlay" || e.target.id === "loginModal") { closePanels(); return; }
    const add = e.target.closest("[data-add]");
    if (add) { Cart.add(Number(add.dataset.add)); return; }
    const q = e.target.closest("[data-q]");
    if (q) { Cart.update(Number(q.dataset.q), Number(q.dataset.d)); return; }
    if (e.target.closest("#menuToggle")) { toggleMenu(); return; }
    if (e.target.closest(".main-nav a")) toggleMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closePanels(); toggleMenu(false); }
  });

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    closePanels();
    toast("Đăng nhập thành công (demo)");
  });
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (!Cart.get().length) return toast("Giỏ hàng đang trống");
    Cart.save([]);
    closePanels();
    toast("Đặt hàng thành công! Cảm ơn bạn ♥ (demo)");
  });

  try {
    if (typeof initPage === "function") initPage();
  } catch (err) {
    console.error(err);
  } finally {
    initReveal(); // luôn chạy để nội dung không bị ẩn khi có lỗi
  }
});

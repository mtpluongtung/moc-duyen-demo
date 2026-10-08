/* Dữ liệu demo – ảnh lấy từ Unsplash (miễn phí, Unsplash License) */
const IMG = (id, w = 800, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=75`;

const CATEGORIES = [
  { id: "ao", name: "Áo" },
  { id: "dam", name: "Đầm" },
  { id: "khoac", name: "Áo khoác" },
  { id: "quan", name: "Quần" },
];

const COLLECTIONS = [
  {
    id: "pho-thu",
    name: "Phố Thu",
    tags: "Streetwear, Casual",
    desc: "Denim, da và những gam trầm cho những ngày phố lên đèn.",
    img: "1539109136881-3be0616acf4b",
  },
  {
    id: "ha-ruc-ro",
    name: "Hạ Rực Rỡ",
    tags: "Feminine, Dạo phố",
    desc: "Đầm hoa, sắc đỏ và tím – nữ tính, bay bổng cho mùa hè.",
    img: "1496747611176-843222e1e57c",
  },
  {
    id: "basic-tee",
    name: "Basic Tee",
    tags: "Unisex, Everyday",
    desc: "Áo thun cotton dày dặn, form rộng, dễ phối mọi ngày.",
    img: "1503342217505-b0a15ec3261c",
  },
];

const PRODUCTS = [
  { id: 1, name: "Áo thun Original trắng", price: 290000, oldPrice: 350000, cat: "ao", col: "basic-tee", img: "1576566588028-4147f3842f27", colors: ["#ffffff", "#1d1d1d"], badge: "Hot", tryon: true },
  { id: 2, name: "Áo thun Peace đen", price: 320000, cat: "ao", col: "basic-tee", img: "1503341504253-dff4815485f1", colors: ["#1d1d1d"], tryon: true },
  { id: 3, name: "Áo thun trơn cotton", price: 220000, cat: "ao", col: "basic-tee", img: "1521572163474-6864f9cf17ab", colors: ["#ffffff", "#e8d9c4", "#1d1d1d"], tryon: true },
  { id: 4, name: "Áo thun logo tròn", price: 260000, cat: "ao", col: "basic-tee", img: "1618354691373-d851c5c3a990", colors: ["#1d1d1d", "#ffffff"], badge: "Mới", tryon: true },
  { id: 5, name: "Áo thun in hình Retro", price: 280000, cat: "ao", col: "basic-tee", img: "1554568218-0f1715e72254", colors: ["#ffffff"], tryon: true },
  { id: 6, name: "Đầm đỏ xòe dự tiệc", price: 890000, oldPrice: 1090000, cat: "dam", col: "ha-ruc-ro", img: "1595777457583-95e059d581b8", colors: ["#c8102e"], badge: "-18%", tryon: true },
  { id: 7, name: "Đầm hoa đỏ cổ vuông", price: 650000, cat: "dam", col: "ha-ruc-ro", img: "1572804013309-59a88b7e92f1", colors: ["#d23a3a"], tryon: true },
  { id: 8, name: "Đầm tím trễ vai", price: 720000, cat: "dam", col: "ha-ruc-ro", img: "1566174053879-31528523f8ae", colors: ["#5b2a6e"], badge: "Mới", tryon: true },
  { id: 9, name: "Đầm suông trắng tinh khôi", price: 590000, cat: "dam", col: "ha-ruc-ro", img: "1617922001439-4a2e6562f328", colors: ["#f6f1ea"], tryon: true },
  { id: 10, name: "Áo khoác da biker", price: 1290000, cat: "khoac", col: "pho-thu", img: "1551028719-00167b16eac5", colors: ["#1d1d1d"], badge: "Hot", tryon: true },
  { id: 11, name: "Áo bomber cam đất", price: 790000, oldPrice: 950000, cat: "khoac", col: "pho-thu", img: "1591047139829-d91aecb6caea", colors: ["#c8714f"], tryon: true },
  { id: 12, name: "Quần jeans xanh đậm", price: 550000, cat: "quan", col: "pho-thu", img: "1542272604-787c3835535d", colors: ["#1f2b44"], tryon: false },
  { id: 13, name: "Quần ống rộng hồng pastel", price: 480000, cat: "quan", col: "ha-ruc-ro", img: "1594633312681-425c7b97ccd1", colors: ["#f2b8b5"], tryon: false },
  { id: 14, name: "Áo len dệt kim kem", price: 520000, cat: "ao", col: "pho-thu", img: "1434389677669-e08b4cac3105", colors: ["#efe4d2"], tryon: true },
];

const NEWS = [
  { title: "Mộc Duyên Lookbook Thu – Đông 2026", date: "29/07/2026", tag: "Lookbook", img: "1509631179647-0177331693ae" },
  { title: "Thử đồ AI: chọn size, phối đồ ngay trên điện thoại", date: "07/07/2026", tag: "Công nghệ", img: "1441984904996-e0b6ba687e04" },
  { title: "5 cách phối phụ kiện cho outfit công sở thêm thanh lịch", date: "06/07/2026", tag: "Phối đồ", img: "1492707892479-7bc8d5a4ee93" },
];

/* Ảnh người mẫu mẫu cho phòng thử đồ */
const MODELS = [
  { name: "Mẫu nữ 1", img: "1515886657613-9f3515b0c78f" },
  { name: "Mẫu nam", img: "1488161628813-04466f872be2" },
  { name: "Mẫu nữ 2", img: "1529139574466-a303027c1d8b" },
];

const fmt = (n) => n.toLocaleString("vi-VN") + "đ";
const findProduct = (id) => PRODUCTS.find((p) => p.id === Number(id));
const findCollection = (id) => COLLECTIONS.find((c) => c.id === id);

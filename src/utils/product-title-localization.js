const EXACT_TITLE_MAP = {
  "Galaxy Tab S6 Lite Android Tablet": "Máy tính bảng Galaxy Tab S6 Lite Android",
};

const PHRASE_REPLACEMENTS = [
  ["Wireless Earbuds", "Tai nghe nhét tai không dây"],
  ["Wireless Headphones", "Tai nghe không dây"],
  ["Bluetooth Speaker", "Loa Bluetooth"],
  ["Smart Watch", "Đồng hồ thông minh"],
  ["Smartphone", "Điện thoại thông minh"],
  ["Tablet", "Máy tính bảng"],
  ["Laptop", "Máy tính xách tay"],
  ["Headphones", "Tai nghe"],
  ["Earbuds", "Tai nghe nhét tai"],
  ["Speaker", "Loa"],
  ["Camera", "Máy ảnh"],
  ["Keyboard", "Bàn phím"],
  ["Mouse", "Chuột"],
  ["Charger", "Bộ sạc"],
  ["Cable", "Cáp"],
  ["Concealer", "Kem che khuyết điểm"],
  ["Foundation", "Kem nền"],
  ["Lipstick", "Son môi"],
  ["Serum", "Tinh chất"],
  ["Moisturizer", "Kem dưỡng ẩm"],
  ["Face Wash", "Sữa rửa mặt"],
  ["Cleanser", "Sữa rửa mặt"],
  ["Sneakers", "Giày thể thao"],
  ["Shoes", "Giày"],
  ["T-Shirt", "Áo thun"],
  ["Shirt", "Áo sơ mi"],
  ["Jacket", "Áo khoác"],
  ["Hoodie", "Áo hoodie"],
  ["Dress", "Váy"],
  ["Jeans", "Quần jeans"],
  ["Bag", "Túi"],
  ["Wallet", "Ví"],
  ["Ring", "Nhẫn"],
  ["Necklace", "Dây chuyền"],
  ["Bracelet", "Vòng tay"],
  ["Earrings", "Bông tai"],
  ["Women", "Nữ"],
  ["Women's", "Nữ"],
  ["Men", "Nam"],
  ["Men's", "Nam"],
  ["Kids", "Trẻ em"],
  ["and", "và"],
  ["with", "với"],
  ["for", "cho"],
  ["New", "Mới"],
];

function toTitleCaseLikeVietnamese(text) {
  return text
    .replace(/\s+/g, " ")
    .trim()
    .replace(/(^|\s)(\p{L})/gu, (m, p1, p2) => `${p1}${p2.toUpperCase()}`);
}

export const localizeProductTitle = (title) => {
  if (typeof title !== "string") {
    return title;
  }

  const source = title.trim();
  if (!source) {
    return source;
  }

  if (EXACT_TITLE_MAP[source]) {
    return EXACT_TITLE_MAP[source];
  }

  let localized = source;
  PHRASE_REPLACEMENTS.forEach(([en, vi]) => {
    localized = localized.replace(new RegExp(`\\b${en}\\b`, "gi"), vi);
  });

  localized = localized
    .replace(/\s{2,}/g, " ")
    .replace(/\bNữ's\b/gi, "Nữ")
    .replace(/\bNam's\b/gi, "Nam")
    .trim();

  const hasAsciiWords = /[a-zA-Z]/.test(source);
  const hasVietnamese = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(localized);
  if (hasAsciiWords && !hasVietnamese) {
    return `Sản phẩm ${toTitleCaseLikeVietnamese(localized)}`;
  }

  return toTitleCaseLikeVietnamese(localized);
};

const isProductLike = (item) => {
  if (!item || typeof item !== "object") {
    return false;
  }
  return (
    typeof item.title === "string" &&
    ("price" in item || "discount" in item || "imageURLs" in item || "reviews" in item)
  );
};

export const localizeProductPayload = (payload) => {
  if (Array.isArray(payload)) {
    return payload.map((item) => localizeProductPayload(item));
  }

  if (!payload || typeof payload !== "object") {
    return payload;
  }

  const cloned = { ...payload };

  if (isProductLike(cloned)) {
    cloned.title = localizeProductTitle(cloned.title);
  }

  Object.keys(cloned).forEach((key) => {
    const value = cloned[key];
    if (Array.isArray(value) || (value && typeof value === "object")) {
      cloned[key] = localizeProductPayload(value);
    }
  });

  return cloned;
};

# Y'Ecommerce Website

## Thông tin người phát triển

- Họ và tên: Nguyễn Thị Như Ý
- MSSV: 124000725
- Lớp: 24CT111

## Mô tả dự án

Y'Ecommerce Website là ứng dụng thương mại điện tử (client-side) được xây dựng với Next.js, hướng đến trải nghiệm mua sắm trực tuyến hiện đại, tối ưu cho cả desktop và mobile.

Dự án cung cấp các chức năng chính:

- Hiển thị danh sách sản phẩm và trang chi tiết sản phẩm.
- Tìm kiếm, lọc và duyệt sản phẩm theo nhu cầu.
- Quản lý giỏ hàng, wishlist và compare.
- Checkout và tích hợp thanh toán qua Stripe.
- Xác thực người dùng: đăng ký, đăng nhập, quên mật khẩu, xác minh email.
- Hỗ trợ blog, trang liên hệ và các trang nội dung bổ trợ.

## Các module chính

- src/pages: Quản lý route và trang của ứng dụng (Pages Router).
- src/components: Thành phần giao diện tái sử dụng cho từng khu vực chức năng.
- src/layout: Header, footer, wrapper và bố cục dùng chung.
- src/redux: Store, state management và kết nối API qua RTK Query.
- src/hooks: Custom hooks cho logic nghiệp vụ (cart, auth, pagination, submit form...).
- src/data: Dữ liệu tĩnh (menu, blog, testimonial...).
- src/styles, src/ui, src/svg và public/assets: Style, UI elements, icon, hình ảnh và tài nguyên tĩnh.

## Công nghệ sử dụng

- Next.js 13 (Pages Router)
- React.js
- Redux Toolkit + RTK Query
- Bootstrap 5 + Sass
- Stripe
- Google OAuth

## Yêu cầu hệ thống

- Node.js 18 LTS trở lên
- npm 9 trở lên

## Hướng dẫn cài đặt và chạy dự án

1. Clone dự án:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

2. Cài đặt dependencies:

```bash
npm install
```

3. Chạy môi trường phát triển:

```bash
npm run dev
```

4. Build production:

```bash
npm run build
```

5. Chạy production sau khi build:

```bash
npm run start
```

## Bản quyền

Bản quyền hiện tại: Copyright (c) 2026 Nguyễn Thị Như Ý. All rights reserved.

Dự án được điều chỉnh và phát triển dựa trên nền tảng [giao diện Shofy - Beauty & Cosmetics] (https://github.com/Hamed-Hasan/shofy-Beauty-and-Cosmetics-ecommerce-client) để phục vụ mục tiêu học tập và triển khai.

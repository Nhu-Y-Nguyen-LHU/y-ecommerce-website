import home_1 from '@assets/img/menu/menu-home-1.jpg';
import home_2 from '@assets/img/menu/menu-home-2.jpg';
import home_3 from '@assets/img/menu/menu-home-3.jpg';
import home_4 from '@assets/img/menu/menu-home-4.jpg';

const menu_data = [
  {
    id: 1,
    homes: true,
    title: 'Trang chủ',
    link: '/',
    home_pages: [
      {
        img: home_1,
        title: 'Công nghệ',
        link: '/'
      },
      {
        img: home_2,
        title: 'Thời trang',
        link: '/home-2'
      },
      {
        img: home_3,
        title: 'Làm đẹp',
        link: '/home-3'
      },
      {
        img: home_4,
        title: 'Phụ kiện',
        link: '/home-4'
      }
    ]
  },
  {
    id: 2,
    products: true,
    title: 'Sản phẩm',
    link: '/shop',
    product_pages: [
      {
        title: 'Trang mua sắm',
        link: '/shop',
        mega_menus: [
          { title: 'Theo danh mục', link: '/shop-category' },
          { title: 'Lưới sản phẩm', link: '/shop' },
          { title: 'Chi tiết sản phẩm', link: '/product-details' },
        ]
      },
      {
        title: 'Chi tiết',
        link: '/product-details',
        mega_menus: [
          { title: 'Phiên bản cơ bản', link: '/product-details' },
          { title: 'Kèm video', link: '/product-details-video' },
          { title: 'Kèm đồng hồ đếm ngược', link: '/product-details-countdown' },
          { title: 'Màu sắc tùy chọn', link: '/product-details-swatches' },
        ]
      },
      {
        title: 'Thương mại điện tử',
        link: '/shop',
        mega_menus: [
          { title: 'Giỏ hàng', link: '/cart' },
          { title: 'So sánh', link: '/compare' },
          { title: 'Yêu thích', link: '/wishlist' },
          { title: 'Thanh toán', link: '/checkout' },
          { title: 'Tài khoản', link: '/profile' },
        ]
      },
      {
        title: 'Trang khác',
        link: '/shop',
        mega_menus: [
          { title: 'Đăng nhập', link: '/login' },
          { title: 'Đăng ký', link: '/register' },
          { title: 'Quên mật khẩu', link: '/forgot' },
          { title: 'Lỗi 404', link: '/404' },
        ]
      },
    ]
  },
  {
    id: 3,
    sub_menu: true,
    title: 'Mua sắm',
    link: '/shop',
    sub_menus: [
      { title: 'Tất cả sản phẩm', link: '/shop' },
      { title: 'Thanh bên phải', link: '/shop-right-sidebar' },
      { title: 'Thanh ẩn', link: '/shop-hidden-sidebar' },
    ],
  },
  {
    id: 4,
    single_link: true,
    title: 'Mã giảm giá',
    link: '/coupon',
  },
  {
    id: 5,
    sub_menu: true,
    title: 'Tin tức',
    link: '/blog',
    sub_menus: [
      { title: 'Bài viết', link: '/blog' },
      { title: 'Dạng lưới', link: '/blog-grid' },
      { title: 'Dạng danh sách', link: '/blog-list' },
      { title: 'Chi tiết bài viết', link: '/blog-details' },
      { title: 'Chi tiết toàn trang', link: '/blog-details-2' },
    ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Liên hệ',
    link: '/contact',
  },
]

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    homes: true,
    title: 'Trang chủ',
    link: '/',
    home_pages: [
      {
        img: home_1,
        title: 'Công nghệ',
        link: '/'
      },
      {
        img: home_2,
        title: 'Thời trang',
        link: '/home-2'
      },
      {
        img: home_3,
        title: 'Làm đẹp',
        link: '/home-3'
      },
      {
        img: home_4,
        title: 'Phụ kiện',
        link: '/home-4'
      }
    ]
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Sản phẩm',
    link: '/shop',
    sub_menus: [
      { title: 'Tất cả sản phẩm', link: '/shop' },
      { title: 'Thanh bên phải', link: '/shop-right-sidebar' },
      { title: 'Thanh ẩn', link: '/shop-hidden-sidebar' },
      { title: 'Theo danh mục', link: '/shop-category' },
      { title: 'Phiên bản cơ bản', link: '/product-details' },
      { title: 'Kèm video', link: '/product-details-video' },
      { title: 'Kèm đồng hồ đếm ngược', link: '/product-details-countdown' },
      { title: 'Màu sắc tùy chọn', link: '/product-details-swatches' },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: 'Thương mại điện tử',
    link: '/cart',
    sub_menus: [
      { title: 'Giỏ hàng', link: '/cart' },
      { title: 'So sánh', link: '/compare' },
      { title: 'Yêu thích', link: '/wishlist' },
      { title: 'Thanh toán', link: '/checkout' },
      { title: 'Tài khoản', link: '/profile' },
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: 'Trang khác',
    link: '/login',
    sub_menus: [
      { title: 'Đăng nhập', link: '/login' },
      { title: 'Đăng ký', link: '/register' },
      { title: 'Quên mật khẩu', link: '/forgot' },
      { title: 'Lỗi 404', link: '/404' },
    ],
  },
  {
    id: 4,
    single_link: true,
    title: 'Mã giảm giá',
    link: '/coupon',
  },
  {
    id: 5,
    sub_menu: true,
    title: 'Tin tức',
    link: '/blog',
    sub_menus: [
      { title: 'Bài viết', link: '/blog' },
      { title: 'Dạng lưới', link: '/blog-grid' },
      { title: 'Dạng danh sách', link: '/blog-list' },
      { title: 'Chi tiết bài viết', link: '/blog-details' },
      { title: 'Chi tiết toàn trang', link: '/blog-details-2' },
    ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Liên hệ',
    link: '/contact',
  },
]

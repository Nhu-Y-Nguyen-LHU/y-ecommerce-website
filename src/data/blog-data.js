// electronic
import blog_1 from "@assets/img/blog/blog-1.jpg";
import blog_2 from "@assets/img/blog/blog-2.jpg";
import blog_3 from "@assets/img/blog/blog-3.jpg";
// fashion
import blog_4 from '@assets/img/blog/2/blog-1.jpg';
import blog_5 from '@assets/img/blog/2/blog-2.jpg';
import blog_6 from '@assets/img/blog/2/blog-3.jpg';
// blog postbox 
import blog_post_1 from '@assets/img/blog/blog-big-3.jpg';
import blog_post_2 from '@assets/img/blog/blog-big-2.jpg';
import blog_post_3 from '@assets/img/blog/blog-big-4.jpg';
import blog_post_4 from '@assets/img/blog/blog-big-5.jpg';
import blog_post_5 from '@assets/img/blog/blog-big-6.jpg';
// blog grid 
import blog_grid_1 from '@assets/img/blog/grid/blog-grid-1.jpg';
import blog_grid_2 from '@assets/img/blog/grid/blog-grid-2.jpg';
import blog_grid_3 from '@assets/img/blog/grid/blog-grid-3.jpg';
import blog_grid_4 from '@assets/img/blog/grid/blog-grid-4.jpg';
import blog_grid_5 from '@assets/img/blog/grid/blog-grid-5.jpg';
import blog_grid_6 from '@assets/img/blog/grid/blog-grid-6.jpg';
import blog_grid_7 from '@assets/img/blog/grid/blog-grid-7.jpg';
import blog_grid_8 from '@assets/img/blog/grid/blog-grid-8.jpg';
// list img 
import list_img_1 from '@assets/img/blog/grid/blog-grid-1.jpg';
import list_img_2 from '@assets/img/blog/grid/blog-grid-2.jpg';
import list_img_3 from '@assets/img/blog/grid/blog-grid-3.jpg';
import list_img_4 from '@assets/img/blog/grid/blog-grid-4.jpg';
import list_img_5 from '@assets/img/blog/grid/blog-grid-5.jpg';
import list_img_6 from '@assets/img/blog/grid/blog-grid-6.jpg';
import list_img_7 from '@assets/img/blog/grid/blog-grid-2.jpg';
import list_img_8 from '@assets/img/blog/grid/blog-grid-3.jpg';

const blogData = [
  {
    id: 1,
    img: blog_1,
    date: "14 Tháng 1, 2023",
    author:'Mark Smith',
    title: "Nghệ thuật gốm sứ đương đại trong không gian sống.",
    tags: ["Máy tính bảng", "Tin tức"],
    category:'Công nghệ',
    comments:2,
    sm_desc:
      "Khám phá xu hướng sản phẩm mới cùng những gợi ý mua sắm phù hợp nhu cầu hàng ngày.",
    blog: "electronics",
  },
  {
    id: 2,
    img: blog_2,
    date: "18 Tháng 2, 2023",
    author:'Naim Ahmed',
    title: "Thời trang tác động đến khí hậu như thế nào",
    tags: ["Màn hình", "Công nghệ"],
    category:'Công nghệ',
    comments:4,
    sm_desc:
      "Khám phá xu hướng sản phẩm mới cùng những gợi ý mua sắm phù hợp nhu cầu hàng ngày.",
    blog: "electronics",
  },
  {
    id: 3,
    img: blog_3,
    date: "20 Tháng 1, 2023",
    author:'Salim Rana',
    title: "Âm thanh của thời trang: góc nhìn mới",
    tags: ["Micro", "Máy tính"],
    category:'Công nghệ',
    comments:5,
    sm_desc:
      "Khám phá xu hướng sản phẩm mới cùng những gợi ý mua sắm phù hợp nhu cầu hàng ngày.",
    blog: "electronics",
  },
  // fashion blog
  {
    id: 4,
    img: blog_4,
    date: "20 Tháng 7, 2023",
    author:'John Smith',
    title: "Làn sóng nhân sự quay lại sau khi nghỉ việc",
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Thời trang',
    comments:6,
    sm_desc:
      "Khám phá xu hướng sản phẩm mới cùng những gợi ý mua sắm phù hợp nhu cầu hàng ngày.",
    blog: "fashion",
  },
  {
    id: 5,
    img: blog_5,
    date: "18 Tháng 3, 2023",
    author:'John Smith',
    title: "Thời trang nhanh và tác động đến biến đổi khí hậu",
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Thời trang',
    comments:3,
    sm_desc:
      "Khám phá xu hướng sản phẩm mới cùng những gợi ý mua sắm phù hợp nhu cầu hàng ngày.",
    blog: "fashion",
  },
  {
    id: 6,
    img: blog_6,
    date: "15 Tháng 2, 2023",
    author:'John Smith',
    title: "Âm hưởng thời trang qua những tuyên ngôn nổi bật",
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Thời trang',
    comments:8,
    sm_desc:
      "Khám phá xu hướng sản phẩm mới cùng những gợi ý mua sắm phù hợp nhu cầu hàng ngày.",
    blog: "fashion",
  },
  //postbox blog
  {
    id:7,
    img:blog_post_1,
    date:'21 Tháng 7, 2023',
    author:'John Smith',
    comments:2,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'Mẹo dọn nhà nhanh và hiệu quả hơn mỗi ngày',
    desc:'Một không gian gọn gàng giúp tinh thần tích cực và tăng hiệu suất làm việc. Bài viết tổng hợp các bước dọn dẹp đơn giản, dễ áp dụng cho gia đình bận rộn.',
    blog:'blog-postbox'
  },
  {
    id:8,
    img:blog_post_2,
    date:'18 Tháng 4, 2023',
    author:'Mark Smith',
    comments:5,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'4 cách nơi làm việc ngăn nắp giúp nhân sự khỏe và vui hơn',
    desc:'Không gian làm việc sạch sẽ giúp tăng sự tập trung, giảm căng thẳng và cải thiện tinh thần đội nhóm. Đây là những thay đổi nhỏ mang lại hiệu quả lớn.',
    video:true,
    video_id:'457mlqV1gzA',
    blog:'blog-postbox'
  },
  {
    id:9,
    date:'15 Tháng 3, 2023',
    author:'Shahnewaz Sakil',
    comments:8,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'Sự sáng tạo chỉ bền vững khi đi cùng với tôn trọng bản quyền',
    desc:'Trong thời đại số, việc bảo vệ nội dung gốc là yếu tố quan trọng với thương hiệu. Tôn trọng bản quyền cũng là cách xây dựng niềm tin với khách hàng.',
    blockquote:true,
    blog:'blog-postbox'
  },
  {
    id:10,
    date:'20 Tháng 1, 2023',
    author:'Salim Rana',
    comments:10,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'Dọn dẹp đầu năm: bí quyết từ chuyên gia',
    desc:'Nếu bạn muốn làm mới ngôi nhà sau dịp lễ, hãy bắt đầu từ các khu vực sử dụng hàng ngày. Các mẹo trong bài giúp tiết kiệm thời gian mà vẫn hiệu quả.',
    audio:true,
    audio_id:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    blog:'blog-postbox'
  },
  {
    id:11,
    slider:true,
    slider_images:[blog_post_3,blog_post_4,blog_post_5],
    date:'20 Tháng 2, 2023',
    author:'Smith Mark',
    comments:12,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'Dọn dẹp đầu năm: bí quyết từ chuyên gia',
    desc:'Nếu bạn muốn làm mới ngôi nhà sau dịp lễ, hãy bắt đầu từ các khu vực sử dụng hàng ngày. Các mẹo trong bài giúp tiết kiệm thời gian mà vẫn hiệu quả.',
    blog:'blog-postbox'
  },
  // blog grid data 
  {
    id:12,
    img:blog_grid_1,
    list_img:list_img_1,
    date:'8 Tháng 1, 2023',
    author:'John Smith',
    comments:5,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'Xây dựng đội ngũ bán hàng đúng người, đúng thời điểm',
    desc:'Bí quyết tuyển và phát triển đội ngũ bán hàng phù hợp với từng giai đoạn tăng trưởng.',
    blog:'blog-grid'
  },
  {
    id:13,
    img:blog_grid_2,
    list_img:list_img_2,
    date:'12 Tháng 2, 2023',
    author:'Salim Rana',
    comments:0,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'Đón trọn sự trở lại của phong cách thập niên 90',
    desc:'Những item kinh điển của thập niên 90 đang quay lại mạnh mẽ trong tủ đồ hiện đại.',
    blog:'blog-grid'
  },
  {
    id:14,
    img:blog_grid_3,
    list_img:list_img_3,
    date:'15 Tháng 3, 2023',
    author:'John Smith',
    comments:12,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'Khám phá miền quê thanh bình',
    desc:'Cảm hứng sống chậm và tối giản trong nhịp sống hiện đại bận rộn.',
    blog:'blog-grid'
  },
  {
    id:15,
    img:blog_grid_4,
    list_img:list_img_4,
    date:'7 Tháng 4, 2023',
    author:'John Smith',
    comments:8,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'BST trang điểm mới nhất đã chính thức ra mắt',
    desc:'Những tông màu nổi bật và cách phối phù hợp nhiều phong cách khác nhau.',
    blog:'blog-grid'
  },
  {
    id:16,
    img:blog_grid_5,
    list_img:list_img_5,
    date:'2 Tháng 5, 2023',
    author:'John Smith',
    comments:4,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'Theo đuổi quy trình sáng tạo phù hợp với chính bạn',
    desc:'Sự nhất quán trong phong cách giúp bạn xây dựng dấu ấn cá nhân bền vững.',
    blog:'blog-grid'
  },
  {
    id:17,
    img:blog_grid_6,
    list_img:list_img_6,
    date:'5 Tháng 4, 2023',
    author:'John Smith',
    comments:6,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'Cuộc sống freelancer: điều gì mới và đáng chú ý?',
    desc:'Cập nhật xu hướng làm việc linh hoạt và cách tối ưu hiệu suất cá nhân.',
    blog:'blog-grid'
  },
  {
    id:18,
    img:blog_grid_7,
    list_img:list_img_7,
    date:'12 Tháng 5, 2023',
    author:'John Smith',
    comments:6,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'Xây dựng đội ngũ bán hàng đúng người, đúng thời điểm',
    desc:'Kinh nghiệm thực tế để tuyển đúng nhân sự cho từng mục tiêu doanh thu.',
    blog:'blog-grid'
  },
  {
    id:19,
    img:blog_grid_8,
    list_img:list_img_8,
    date:'22 Tháng 3, 2023',
    author:'John Smith',
    comments:15,
    tags: ["Thời trang", "Lối sống","Tin tức"],
    category:'Làm đẹp',
    title:'Nhu cầu dinh dưỡng thiết yếu cho cơ thể khỏe mạnh',
    desc:'Gợi ý thực phẩm chất lượng giúp cân bằng năng lượng cho ngày làm việc dài.',
    blog:'blog-grid'
  },
];

export default blogData;

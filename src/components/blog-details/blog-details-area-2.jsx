import React from 'react';
import Image from 'next/image';
// internal
import shape_line from '@assets/img/blog/details/shape/line.png';
import shape_line_2 from '@assets/img/blog/details/shape/quote.png';
import blog_details_big_img from '@assets/img/blog/details/blog-big-1.jpg';
import blog_details_sm_img from '@assets/img/blog/details/blog-details-sm-1.jpg';
import blogData from '@/data/blog-data';
import GridItem from '../blog/blog-grid/grid-item';
import BlogDetailsComments from './blog-details-comments';
import BlogPostCommentForm from '../forms/blog-post-comment-form';
import BlogDetailsAuthor from './blog-details-author';
import PostboxDetailsNav from './postbox-details-nav';
import PostboxDetailsTop from './postbox-details-top';
import social_data from '@/data/social-data';

// related_blogs
const related_blogs = blogData.filter(b => b.blog === 'blog-grid').slice(0, 3)

const BlogDetailsAreaTwo = ({blog}) => {
  return (
    <>
      <section className="tp-postbox-details-area pb-120 pt-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <PostboxDetailsTop blog={blog} />
            </div>
            <div className="col-xl-12">
              <div className="tp-postbox-details-thumb">
                <Image src={blog_details_big_img} alt="blog-big-img" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2">
              <div className="tp-postbox-details-share-2">
                <span>Chia sẻ</span>
                <ul>
                  {social_data.map(s => (
                  <li key={s.id}>
                    <a href={s.link} target="_blank" className='me-1'>
                      <i className={s.icon}></i>
                    </a>
                  </li>
                  )) }
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-10">
              <div className="tp-postbox-details-main-wrapper tp-postbox-style2">
                <div className="tp-postbox-details-content">
                  <p className="tp-dropcap">Quy trình bán hàng là yếu tố sống còn quyết định hiệu quả của đội ngũ và tăng trưởng của doanh nghiệp. Một nhân viên bán hàng giỏi luôn biết đặt câu hỏi đúng, đề xuất đúng giải pháp và xử lý băn khoăn của khách hàng một cách tự nhiên.</p>

                  <p>Một trong những khó khăn lớn khi vận hành đội ngũ từ xa là thiếu minh bạch trong từng giai đoạn xử lý khách hàng. Bài viết này giúp bạn nhìn rõ toàn bộ quy trình để tối ưu chuyển đổi tốt hơn.</p>

                  <h4 className="tp-postbox-details-heading">Tạm biệt thời trang nhanh dễ hơn bạn nghĩ</h4>
                  <p>Khi thay đổi thói quen mua sắm theo hướng bền vững, bạn sẽ ưu tiên chất lượng, độ bền và tính ứng dụng lâu dài thay vì chạy theo xu hướng ngắn hạn.</p>

                  <div className="tp-postbox-details-desc-thumb text-center">
                    <Image src={blog_details_sm_img} alt="details-sm-img" />
                    <span className="tp-postbox-details-desc-thumb-caption">Bộ ảnh bộ sưu tập du thuyền 2023 dành cho nữ đã chính thức ra mắt</span>
                  </div>
                  <p>&ldquo;Đội ngũ rất vui khi được đồng hành cùng bạn triển khai chiến lược mới. Tài liệu chi tiết đã được gửi kèm và chúng tôi sẽ sớm liên hệ để lên lịch buổi khởi động.&rdquo;</p>

                  <div className="tp-postbox-details-quote">
                    <blockquote>
                      <div className="tp-postbox-details-quote-shape">
                        <Image className="tp-postbox-details-quote-shape-1" src={shape_line} alt="shape" />
                        <Image className="tp-postbox-details-quote-shape-2" src={shape_line_2} alt="shape" />
                      </div>
                      <p>Mọi khó khăn đều có lối ra, mọi bài toán đều có lời giải, quan trọng là ta đủ kiên nhẫn để tìm.</p>
                      <cite>Shahnewaz Sakil</cite>
                    </blockquote>
                  </div>

                  <h4 className="tp-postbox-details-heading">Khám phá miền quê thanh bình</h4>
                  <p>Phong cách sống tinh gọn đang trở thành lựa chọn phổ biến của người trẻ, vì giúp tiết kiệm thời gian, chi phí và tạo không gian sống dễ chịu hơn.</p>

                  <div className="tp-postbox-details-list">
                    <ul>
                      <li>Chọn chất liệu bền và dễ bảo quản.</li>
                      <li>Ưu tiên thiết kế phù hợp nhu cầu sử dụng.</li>
                      <li>Đầu tư vào sản phẩm dùng được lâu dài.</li>
                    </ul>
                  </div>
                  <p>Từ thời trang đến đồ gia dụng, việc chọn đúng sản phẩm theo nhu cầu thực tế sẽ giúp bạn tối ưu trải nghiệm sử dụng và tránh lãng phí không cần thiết.</p>

                  <div className="tp-postbox-details-share-wrapper">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="tp-postbox-details-tags tagcloud">
                          <span>Thẻ:</span>
                          <a href="#">Lối sống</a>
                          <a href="#">Mua sắm</a>
                          <a href="#">Xu hướng</a>
                          <a href="#">Phụ kiện</a>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* PostboxDetailsNav */}
                  <PostboxDetailsNav />
                  {/* PostboxDetailsNav */}

                  {/* author details start */}
                  <BlogDetailsAuthor />
                  {/* author details end */}

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-postbox-related-area pt-115 pb-90 mb-110" style={{backgroundColor:'#F4F7F9'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-postbox-related">
                  <h3 className="tp-postbox-related-title">Bài viết liên quan</h3>

                  <div className="row">
                    {related_blogs.map((blog) => (
                      <div className="col-lg-4 col-md-6" key={blog.id}>
                        <GridItem blog={blog} style_2={true} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="tp-postbox-details-comment-wrapper">
                <h3 className="tp-postbox-details-comment-title">Bình luận (2)</h3>
                {/* BlogDetailsComments */}
                <BlogDetailsComments />
                {/* BlogDetailsComments */}
              </div>

              <div className="tp-postbox-details-form">
                <h3 className="tp-postbox-details-form-title">Để lại bình luận</h3>
                <p>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc có dấu *</p>

                {/* form start */}
                <BlogPostCommentForm />
                {/* form end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsAreaTwo;
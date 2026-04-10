import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// internal
import user from '@assets/img/users/user-11.jpg';
import signature from '@assets/img/blog/signature/signature.png';
import { Search } from '@/svg';
import blogData from '@/data/blog-data';

// latest post
const latest_post = blogData.slice(0,3)

const BlogSidebar = () => {
  return (
    <>
      <div className="tp-sidebar-wrapper tp-sidebar-ml--24">
        <div className="tp-sidebar-widget mb-35">
          <div className="tp-sidebar-search">
            <form action="#">
              <div className="tp-sidebar-search-input">
                <input type="text" placeholder="Tìm kiếm..." />
                <button type="submit">
                  <Search/>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* about  */}
        <div className="tp-sidebar-widget mb-35">
          <h3 className="tp-sidebar-widget-title">Về tác giả</h3>
          <div className="tp-sidebar-widget-content">
            <div className="tp-sidebar-about">
              <div className="tp-sidebar-about-thumb mb-25">
                <a href="#">
                  <Image src={user} alt="user" />
                </a>
              </div>
              <div className="tp-sidebar-about-content">
                <h3 className="tp-sidebar-about-title">
                  <a href="#">Biên tập viên NY - MART</a>
                </h3>
                <span className="tp-sidebar-about-designation">Chuyên viên nội dung TMĐT</span>
                <p>Chia sẻ kinh nghiệm mua sắm thông minh và xu hướng tiêu dùng phù hợp với gia đình Việt.</p>
                <div className="tp-sidebar-about-signature">
                  <Image src={signature} alt="signature" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- about end --> */}

        {/* <!-- latest post start --> */}
        <div className="tp-sidebar-widget mb-35">
          <h3 className="tp-sidebar-widget-title">Bài viết mới nhất</h3>
          <div className="tp-sidebar-widget-content">
            <div className="tp-sidebar-blog-item-wrapper">
              {latest_post.map(b => (
              <div key={b.id} className="tp-sidebar-blog-item d-flex align-items-center">
                <div className="tp-sidebar-blog-thumb">
                  <Link href={`/blog-details/${b.id}`}>
                    <Image src={b.img} alt="blog img" />
                  </Link>
                </div>
                <div className="tp-sidebar-blog-content">
                  <div className="tp-sidebar-blog-meta">
                    <span>{b.date}</span>
                  </div>
                  <h3 className="tp-sidebar-blog-title">
                    <Link href={`/blog-details/${b.id}`}>{b.title}</Link>
                  </h3>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        {/* <!-- latest post end --> */}

        {/* <!-- categories start --> */}
        <div className="tp-sidebar-widget widget_categories mb-35">
          <h3 className="tp-sidebar-widget-title">Chuyên mục</h3>
          <div className="tp-sidebar-widget-content">
            <ul>
              <li><Link href="/blog">Mẹo mua sắm <span>(12)</span></Link></li>
              <li><Link href="/blog">Thời trang <span>(6)</span></Link></li>
              <li><Link href="/blog">Gia dụng <span>(2)</span></Link></li>
              <li><Link href="/blog">Công nghệ <span>(8)</span></Link></li>
              <li><Link href="/blog">Khuyến mãi <span>(0)</span></Link></li>
              <li><Link href="/blog">Đời sống <span>(3)</span></Link></li>
            </ul>
          </div>
        </div>
        {/* <!-- categories end --> */}

        {/* <!-- tag cloud start --> */}
        <div className="tp-sidebar-widget mb-35">
          <h3 className="tp-sidebar-widget-title">Thẻ phổ biến</h3>
          <div className="tp-sidebar-widget-content tagcloud">
            <a href="#">Mùa hè</a>
            <a href="#">Phong cách</a>
            <a href="#">Phụ kiện</a>
            <a href="#">Tiêu dùng xanh</a>
            <a href="#">Lối sống</a>
            <a href="#">Xu hướng</a>
          </div>
        </div>
        {/* <!-- tag cloud end --> */}

      </div>
    </>
  );
};

export default BlogSidebar;
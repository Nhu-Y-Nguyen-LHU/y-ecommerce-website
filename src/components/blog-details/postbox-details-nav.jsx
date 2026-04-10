import React from 'react';
import Link from 'next/link';
import { ArrowRightLong, ArrowRightLongPrev } from '@/svg';

const PostboxDetailsNav = () => {
  return (
    <div className="tp-postbox-details-navigation d-none d-md-flex justify-content-between align-items-center">
      <div className="tp-postbox-details-navigation-item d-flex align-items-center">
        <div className="tp-postbox-details-navigation-icon mr-15">
          <span>
            <Link href="/blog-details">
              <ArrowRightLongPrev/>
            </Link>
          </span>
        </div>
        <div className="tp-postbox-details-navigation-content">
          <span>Bài trước</span>
          <h3 className="tp-postbox-details-navigation-title">
            <Link href="/blog-details">Xây dựng đội ngũ bán hàng <br /> đúng người, đúng thời điểm</Link>
          </h3>
        </div>
      </div>
      <div className="tp-postbox-details-navigation-item d-flex align-items-center text-end">
        <div className="tp-postbox-details-navigation-content">
          <span>Bài tiếp theo</span>
          <h3 className="tp-postbox-details-navigation-title">
            <Link href="/blog-details">Đón trọn làn sóng trở lại <br /> của thời trang thập niên 90</Link>
          </h3>
        </div>
        <div className="tp-postbox-details-navigation-icon ml-15">
          <span>
            <Link href="/blog-details">
              <ArrowRightLong/>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostboxDetailsNav;
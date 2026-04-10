import React from 'react';

const BlogPostCommentForm = () => {
  return (
    <form >
      <div className="tp-postbox-details-form-wrapper">
        <div className="tp-postbox-details-form-inner">
          <div className="tp-postbox-details-input-box">
            <div className="tp-contact-input">
              <input name="name" id="name" type="text" placeholder="Nguyễn Văn A" />
            </div>
            <div className="tp-postbox-details-input-title">
              <label htmlFor="name">Họ và tên</label>
            </div>
          </div>
          <div className="tp-postbox-details-input-box">
            <div className="tp-contact-input">
              <input name="email" id="email" type="email" placeholder="ban@nymart.vn" />
            </div>
            <div className="tp-postbox-details-input-title">
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="tp-postbox-details-input-box">
            <div className="tp-contact-input">
              <textarea id="msg" placeholder="Nhập nội dung bình luận..."></textarea>
            </div>
            <div className="tp-postbox-details-input-title">
              <label htmlFor="msg">Nội dung</label>
            </div>
          </div>
        </div>
        <div className="tp-postbox-details-suggetions mb-20">
          <div className="tp-postbox-details-remeber">
            <input id="remeber" type="checkbox" />
            <label htmlFor="remeber">Lưu họ tên và email trên trình duyệt này cho lần bình luận tiếp theo.</label>
          </div>
        </div>
        <div className="tp-postbox-details-input-box">
          <button className="tp-postbox-details-input-btn" type="submit">Gửi bình luận</button>
        </div>
      </div>
    </form>
  );
};

export default BlogPostCommentForm;
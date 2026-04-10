import React from "react";
import Image from "next/image";
// internal
import author_img from "@assets/img/users/user-11.jpg";
import social_data from "@/data/social-data";

const BlogDetailsAuthor = () => {
  return (
    <div
      className="tp-postbox-details-author d-sm-flex align-items-start"
      data-bg-color="#F4F7F9"
    >
      <div className="tp-postbox-details-author-thumb">
        <a href="#">
          <Image src={author_img} alt="author_img" />
        </a>
      </div>
      <div className="tp-postbox-details-author-content">
        <span>Được viết bởi</span>
        <h5 className="tp-postbox-details-author-title">
          <a href="#">Biên tập viên NY - MART</a>
        </h5>
        <p>
          Khi quy trình vận hành được thiết kế rõ ràng, đội ngũ sẽ phối hợp
          hiệu quả hơn để thu hút, chăm sóc và giữ chân khách hàng bền vững.
        </p>

        <div className="tp-postbox-details-author-social">
          {social_data.map((s) => (
            <a href={s.link} target="_blank" className="me-1" key={s.id}>
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsAuthor;

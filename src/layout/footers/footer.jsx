import React from "react";
import Image from "next/image";
import pay from "@assets/img/footer/footer-pay.png";
import social_data from "@/data/social-data";
import { Email, Location } from "@/svg";
import BrandLogo from "@/components/common/brand-logo";

const Footer = ({ style_2 = false, style_3 = false, primary_style = false }) => {
  return (
    <footer>
      <div
        className={`tp-footer-area ${
          primary_style ? "tp-footer-style-2 tp-footer-style-primary tp-footer-style-6" : ""
        } ${style_2 ? "tp-footer-style-2" : style_3 ? "tp-footer-style-2 tp-footer-style-3" : ""}`}
        data-bg-color={`${style_2 ? "footer-bg-white" : "footer-bg-grey"}`}
      >
        <div className="tp-footer-top pt-95 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-1 mb-50">
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-logo">
                      <BrandLogo />
                    </div>
                    <p className="tp-footer-desc">
                      NY - MART là sàn thương mại điện tử tinh tế của người Việt,
                      mang đến sản phẩm chất lượng và trải nghiệm mua sắm tin cậy.
                    </p>
                    <div className="tp-footer-social">
                      {social_data.map((s) => (
                        <a href={s.link} key={s.id} target="_blank" rel="noreferrer">
                          <i className={s.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-2 mb-50">
                  <h4 className="tp-footer-widget-title">Tài khoản</h4>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li><a href="#">Theo dõi đơn hàng</a></li>
                      <li><a href="#">Vận chuyển</a></li>
                      <li><a href="#">Sản phẩm yêu thích</a></li>
                      <li><a href="#">Tài khoản của tôi</a></li>
                      <li><a href="#">Lịch sử mua hàng</a></li>
                      <li><a href="#">Đổi trả</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-3 mb-50">
                  <h4 className="tp-footer-widget-title">Thông tin</h4>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li><a href="#">Câu chuyện thương hiệu</a></li>
                      <li><a href="#">Tuyển dụng</a></li>
                      <li><a href="#">Chính sách bảo mật</a></li>
                      <li><a href="#">Điều khoản sử dụng</a></li>
                      <li><a href="#">Tin tức mới</a></li>
                      <li><a href="#">Liên hệ</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-4 mb-50">
                  <h4 className="tp-footer-widget-title">Hỗ trợ khách hàng</h4>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-talk mb-20">
                      <span>Cần hỗ trợ? Gọi ngay</span>
                      <h4><a href="tel:1900636600">1900 636 600</a></h4>
                    </div>
                    <div className="tp-footer-contact">
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span><Email /></span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p><a href="mailto:hotro@nymart.vn">hotro@nymart.vn</a></p>
                        </div>
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span><Location /></span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>
                            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                              Tầng 8, 123 Nguyễn Huệ <br />Q.1, TP. Hồ Chí Minh
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-footer-bottom">
          <div className="container">
            <div className="tp-footer-bottom-wrapper">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="tp-footer-copyright">
                    <p>© {new Date().getFullYear()} NY - MART. Bảo lưu mọi quyền.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tp-footer-payment text-md-end">
                    <p><Image src={pay} alt="pay" /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

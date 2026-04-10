import React from 'react';
import Link from 'next/link';
// internal
import { ArrowRightLong } from '@/svg';
import banner_bg_1 from '@assets/img/banner/2/banner-1.jpg';
import banner_bg_2 from '@assets/img/banner/2/banner-2.jpg';
import banner_bg_3 from '@assets/img/banner/2/banner-3.jpg';
import banner_bg_4 from '@assets/img/product/banner/product-banner-1.jpg';

// BannerItem
function BannerItem({ cls, bg_clr, bg, content, title,isBtn=false}) {
  return (
    <div className={`tp-banner-item-4 tp-banner-height-4 fix p-relative z-index-1 ${cls}`} 
    data-bg-color={`#${bg_clr}`}>
      <div className="tp-banner-thumb-4 include-bg black-bg transition-3" 
      style={{backgroundImage:`url(${bg.src})`}}></div>
      <div className="tp-banner-content-4">
        <span>{content}</span>
        <h3 className="tp-banner-title-4">
          <Link href="/shop">{title}</Link>
        </h3>
        {isBtn && <div className="tp-banner-btn-4">
          <Link href="/shop" className="tp-btn tp-btn-border">
            Mua ngay {" "} <ArrowRightLong/>
          </Link>
        </div>}
      </div>
    </div>
  )
}

const JewelryShopBanner = () => {
  return (
    <>
      <section className="tp-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-xl-12">
                  <BannerItem cls="mb-25" bg_clr="F3F7FF" bg={banner_bg_1} content="Bộ sưu tập" 
                  title={<>Nhẫn ngọc trai Ardeco <br /> phong cách 2026</>} isBtn={true} />
                </div>
                <div className="col-md-6 col-sm-6">
                <BannerItem cls="has-green sm-banner" bg_clr="F0F6EF" bg={banner_bg_2} content="Xu hướng" title="Bộ phụ kiện nhiệt đới" />
  
                </div>
                <div className="col-md-6 col-sm-6">
                <BannerItem cls="has-brown sm-banner" bg_clr="F8F1E6" bg={banner_bg_3} content="Mới về" title="Trang sức mạ vàng" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="tp-banner-full tp-banner-full-height fix p-relative z-index-1">
                <div className="tp-banner-full-thumb include-bg black-bg transition-3" 
                style={{backgroundImage:`url(${banner_bg_4.src})`}}></div>
                <div className="tp-banner-full-content">
                  <span>Bộ sưu tập</span>
                  <h3 className="tp-banner-full-title">
                    <Link href="/shop">Nhẫn vàng đính <br /> đá sang trọng</Link>
                  </h3>
                  <div className="tp-banner-full-btn">
                    <Link href="/shop" className="tp-btn tp-btn-border">
                      Mua ngay{" "}<ArrowRightLong/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JewelryShopBanner;
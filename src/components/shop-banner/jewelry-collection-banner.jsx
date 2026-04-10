import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
//internal
import thumb_bg from '@assets/img/banner/5/best-banner-1.jpg';
import side_text from '@assets/img/product/collection/4/side-text.png';
import collection_sm from '@assets/img/product/product-11.jpg';
import { ArrowRightSm, PlusTwo } from '@/svg';

const JewelryCollectionBanner = () => {
  return (
    <>
      <section className="tp-collection-area">
        <div className="container-fluid">
          <div className="tp-collection-inner-4 pl-100 pr-100">
            <div className="row gx-0">
              <div className="col-xl-6 col-lg-6">
                <div className="tp-collection-thumb-wrapper-4 p-relative fix z-index-1" >
                  <div className="tp-collection-thumb-4 include-bg black-bg" 
                    style={{backgroundImage:`url(${thumb_bg.src})`}}>
                  </div>
                  <span className="tp-collection-thumb-info-4">DIỆN MẠO MỚI - BỘ SƯU TẬP MỚI</span>

                  <div className="tp-collection-hotspot-item tp-collection-hotspot-1">
                    <span className="tp-hotspot tp-pulse-border ">
                      <PlusTwo />
                    </span>
                    <div className="tp-collection-hotspot-content">
                      <h3 className="tp-collection-hotspot-title">Sản phẩm chăm sóc da</h3>
                      <p>Dịu nhẹ, phù hợp làn da châu Á.</p>
                    </div>
                  </div>

                  <div className="tp-collection-hotspot-item tp-collection-hotspot-2">
                    <span className="tp-hotspot tp-pulse-border ">
                      <PlusTwo />
                    </span>
                    <div className="tp-collection-hotspot-content on-top">
                      <h3 className="tp-collection-hotspot-title">Sản phẩm chăm sóc da</h3>
                      <p>Thiết kế sang trọng, dễ phối.</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-collection-wrapper-4 p-relative pt-90 pb-95" 
                style={{backgroundColor:`#F6F6F6`}}>
                  <span className="tp-collection-side-text">
                    <Image src={side_text} alt="text img" />
                  </span>
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                      <div className="tp-collection-item-4 text-center">
                        <span className="tp-collection-subtitle-4">TỰ PHỐI BỘ THEO CÁCH CỦA BẠN</span>
                        <div className="tp-collection-thumb-banner-4 m-img">
                          <Link href="/shop">
                            <Image src={collection_sm} alt="collection_sm img" />
                          </Link>
                        </div>
                        <div className="tp-collection-content-4">
                          <h3 className="tp-collection-title-4">
                            <Link href="/shop">Trang sức tuyển chọn cao cấp</Link>
                          </h3>
                          <div className="tp-collection-btn-4">
                            <Link href="/shop" className="tp-link-btn-line-2">
                              Xem bộ sưu tập {" "} <ArrowRightSm />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default JewelryCollectionBanner;
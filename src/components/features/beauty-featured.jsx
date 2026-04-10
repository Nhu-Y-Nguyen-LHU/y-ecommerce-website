import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import featured_1 from '@assets/img/product/featured/featured-1.png';
import featured_2 from '@assets/img/product/featured/featured-2.png';
import featured_3 from '@assets/img/product/featured/featured-3.png';
import { formatVND } from '@/utils/currency';



// featured data 
const featured_data = [
  {
    id: 1,
    img: featured_1,
    title: <>Son kem lì <br /> và chì viền môi</>,
    subtitle: 'Sản phẩm được chọn lọc cho nhu cầu làm đẹp hằng ngày.',
    save: 72,
  },
  {
    id: 2,
    img: featured_2,
    title: <>Son lì dạng kem <br /> tông màu đỏ rượu vang</>,
    subtitle: 'Mức giá tốt cùng nhiều ưu đãi cho thành viên NY - MART.',
    save: 98,
  },
  {
    id: 3,
    img: featured_3,
    title: <>Che khuyết điểm <br /> chống nước bền màu</>,
    subtitle: 'Giao nhanh và đổi trả dễ dàng trên toàn quốc.',
    save: 133,
  },
]

const BeautyFeatured = () => {
  return (
    <>
      <section className="tp-featured-product-area pt-70 pb-150">
        <div className="container">
          <div className="row gx-0">
            {featured_data.map(item => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="tp-featured-item-3 text-center">
                  <div className="tp-featured-thumb-3 d-flex align-items-end justify-content-center">
                    <Image src={item.img} alt="featured image" />
                  </div>
                  <div className="tp-featured-content-3">
                    <h3 className="tp-featured-title-3">
                      <Link href="/shop">{item.title}</Link>
                    </h3>
                    <p>{item.subtitle}</p>
                    <div className="tp-featured-price-3">
                      <span>Tiết kiệm đến {formatVND(item.save)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BeautyFeatured;

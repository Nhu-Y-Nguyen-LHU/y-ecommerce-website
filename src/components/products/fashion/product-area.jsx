import React, { useState } from 'react';
import ErrorMsg from '@/components/common/error-msg';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import { TextShapeLine } from '@/svg';
import ProductItem from './product-item';
import { HomeTwoPrdLoader } from '@/components/loader';

// tabs
const tabs = [
  { label: "Tất cả bộ sưu tập", value: "all" },
  { label: "Giày", value: "Shoes" },
  { label: "Quần áo", value: "Clothing" },
  { label: "Túi", value: "Bags" },
];

const ProductArea = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const { data: products, isError, isLoading } =
    useGetProductTypeQuery({ type: 'fashion' });
  // handleActiveTab
  const handleActiveTab = (tabValue) => {
    setActiveTab(tabValue);
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeTwoPrdLoader loading={isLoading} />
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="Có lỗi xảy ra" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="Không tìm thấy sản phẩm!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    let product_items = products.data;
    if (activeTab === 'all') {
      product_items = products.data
    }
    else if (activeTab === 'Shoes') {
      product_items = products.data.filter(p => p.category.name === 'Shoes')
    } else if (activeTab === 'Clothing') {
      product_items = products.data.filter(p => p.category.name === 'Clothing')
    } else if (activeTab === 'Bags') {
      product_items = products.data.filter(p => p.category.name === 'Bags')
    } else {
      product_items = products.data;
    }
    content = <>
      <div className="row">
        <div className="col-xl-12">
          <div className="tp-product-tab-2 tp-tab mb-50 text-center">
            <nav>
              <div className="nav nav-tabs justify-content-center">
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => handleActiveTab(tab.value)}
                    className={`nav-link text-capitalize ${activeTab === tab.value ? "active" : ""}`}
                  >
                    {tab.label}
                    <span className="tp-product-tab-tooltip">{product_items.length}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="row">
        {product_items.map((prd) => (
          <div key={prd._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <ProductItem product={prd} />
          </div>
        ))}
      </div>
    </>
  }
  return (
    <>
      <section className="tp-product-area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper-2 text-center mb-35">
                <span className="tp-section-title-pre-2">
                  Cửa hàng sản phẩm
                  <TextShapeLine />
                </span>
                <h3 className="tp-section-title-2">Phong cách khách hàng yêu thích</h3>
              </div>
            </div>
          </div>
          {content}
        </div>
      </section>
    </>
  );
};

export default ProductArea;

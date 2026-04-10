import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import ReactToPrint from "react-to-print";
// internal
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import ErrorMsg from "@/components/common/error-msg";
import { useGetUserOrderByIdQuery } from "@/redux/features/order/orderApi";
import PrdDetailsLoader from "@/components/loader/prd-details-loader";
import BrandLogo from "@/components/common/brand-logo";


const SingleOrder = ({ params }) => {
  const orderId = params.id;
  const [simulatedPaymentMeta, setSimulatedPaymentMeta] = useState(null);
  const printRef = useRef();
  const { data: order, isError, isLoading } = useGetUserOrderByIdQuery(orderId);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem("simulatedPaymentByOrder");
      const paymentMap = raw ? JSON.parse(raw) : {};
      setSimulatedPaymentMeta(paymentMap?.[orderId] || null);
    } catch (error) {
      console.error("Could not read simulated payment metadata", error);
    }
  }, [orderId]);
  let content = null;
  if (isLoading) {
    content = <PrdDetailsLoader loading={isLoading}/>
  }
  if (isError) {
    content = <ErrorMsg msg="Có lỗi xảy ra" />;
  }
  if (!isLoading && !isError) {
    const { name, country, city, contact, invoice, createdAt, cart, shippingCost, discount, totalAmount,paymentMethod} = order.order;
    content = (
      <>
        <section className="invoice__area pt-120 pb-120">
          <div className="container">
            <div className="invoice__msg-wrapper">
              <div className="row">
                <div className="col-xl-12">
                  <div className="invoice_msg mb-40">
                    <p className="text-black alert alert-success">Cảm ơn <strong>{name}</strong>, đơn hàng của bạn đã được tiếp nhận.</p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={printRef} className="invoice__wrapper grey-bg-2 pt-40 pb-40 pl-40 pr-40 tp-invoice-print-wrapper">
              <div className="invoice__header-wrapper border-2 border-bottom border-white mb-40">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="invoice__header pb-20">
                      <div className="row align-items-end">
                        <div className="col-md-4 col-sm-6">
                          <div className="invoice__left">
                            <BrandLogo />
                            <p>Tầng 8, 123 Nguyễn Huệ <br /> Quận 1, TP. Hồ Chí Minh</p>
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-6">
                          <div className="invoice__right mt-15 mt-sm-0 text-sm-end">
                            <h3 className="text-uppercase font-70 mb-20">Hóa đơn</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice__customer mb-30">
                <div className="row">
                  <div className="col-md-6 col-sm-8">
                    <div className="invoice__customer-details">
                      <h4 className="mb-10 text-uppercase">{name}</h4>
                      <p className="mb-0 text-uppercase">{country}</p>
                      <p className="mb-0 text-uppercase">{city}</p>
                      <p className="mb-0">{contact}</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4">
                    <div className="invoice__details mt-md-0 mt-20 text-md-end">
                      <p className="mb-0">
                        <strong>Mã hóa đơn:</strong> #{invoice}
                      </p>
                      <p className="mb-0">
                        <strong>Ngày:</strong> {dayjs(createdAt).format("MMMM D, YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice__order-table pt-30 pb-30 pl-40 pr-40 bg-white mb-30">
                <table className="table">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">SL</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Đơn giá</th>
                      <th scope="col">Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {cart.map((item, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.orderQuantity}</td>
                        <td>${item.price}</td>
                        <td>${item.price * item.orderQuantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="invoice__total pt-40 pb-10 alert-success pl-40 pr-40 mb-30">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__payment-method mb-30">
                      <h5 className="mb-0">Phương thức thanh toán</h5>
                      <p className="tp-font-medium text-uppercase">{paymentMethod}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__shippint-cost mb-30">
                      <h5 className="mb-0">Phi van chuyen</h5>
                      <p className="tp-font-medium">${shippingCost}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__discount-cost mb-30">
                      <h5 className="mb-0">Giảm giá</h5>
                      <p className="tp-font-medium">${discount.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__total-ammount mb-30">
                      <h5 className="mb-0">Tổng thanh toán</h5>
                      <p className="tp-font-medium text-danger">
                        <strong>${parseInt(totalAmount).toFixed(2)}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {simulatedPaymentMeta && (
                <div className="alert alert-info mb-30">
                  <h5 className="mb-2">Thông tin giao dịch mô phỏng</h5>
                  <p className="mb-1"><strong>Mã giao dịch:</strong> {simulatedPaymentMeta.id}</p>
                  <p className="mb-1"><strong>Trạng thái:</strong> {simulatedPaymentMeta.status}</p>
                  <p className="mb-1"><strong>Phương thức:</strong> {simulatedPaymentMeta.method}</p>
                  {simulatedPaymentMeta.last4 && (
                    <p className="mb-1"><strong>Thẻ:</strong> **** **** **** {simulatedPaymentMeta.last4}</p>
                  )}
                  <p className="mb-0"><strong>Thời gian:</strong> {dayjs(simulatedPaymentMeta.createdAt).format("MMMM D, YYYY h:mm A")}</p>
                </div>
              )}

            </div>
            <div className="invoice__print text-end mt-3">
              <div className="row">
                <div className="col-xl-12">
                  <ReactToPrint
                    trigger={() => (
                      <button
                        type="button"
                        className="tp-invoice-print tp-btn tp-btn-black"
                      >
                        <span className="mr-5">
                          <i className="fa-regular fa-print"></i>
                        </span>{" "}
                        In hóa đơn
                      </button>
                    )}
                    content={() => printRef.current}
                    documentTitle="Invoice"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

    );
  }
  return (
    <>
      <Wrapper>
        <SEO pageTitle={"Chi tiet don hang"} />
        <HeaderTwo style_2={true} />
        {/* content */}
        {content}
        {/* content */}
        {/* footer start */}
        <Footer primary_style={true} />
        {/* footer end */}
      </Wrapper>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  return {
    props: { params },
  };
};

export default SingleOrder;

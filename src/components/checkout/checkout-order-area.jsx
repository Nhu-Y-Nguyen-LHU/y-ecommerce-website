import { useState } from "react";
import { useSelector } from "react-redux";
// internal
import useCartInfo from "@/hooks/use-cart-info";
import ErrorMsg from "../common/error-msg";

const CheckoutOrderArea = ({ checkoutData }) => {
  const [showCard, setShowCard] = useState(false);
  const {
    handleShippingCost,
    cartTotal = 0,
    isCheckoutSubmit,
    isSimulatingPayment,
    register,
    errors,
    shippingCost,
    discountAmount
  } = checkoutData;
  const { cart_products } = useSelector((state) => state.cart);
  const { total } = useCartInfo();
  return (
    <div className="tp-checkout-place white-bg">
      <h3 className="tp-checkout-place-title">Đơn hàng của bạn</h3>

      <div className="tp-order-info-list">
        <ul>
          {/*  header */}
          <li className="tp-order-info-list-header">
            <h4>Sản phẩm</h4>
            <h4>Tổng</h4>
          </li>

          {/*  item list */}
          {cart_products.map((item) => (
            <li key={item._id} className="tp-order-info-list-desc">
              <p>
                {item.title} <span> x {item.orderQuantity}</span>
              </p>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}

          {/*  shipping */}
          <li className="tp-order-info-list-shipping">
            <span>Vận chuyển</span>
            <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
              <span>
                <input
                  {...register(`shippingOption`, {
                    required: `Vui lòng chọn hình thức giao hàng`,
                  })}
                  id="flat_shipping"
                  type="radio"
                  name="shippingOption"
                />
                <label
                  onClick={() => handleShippingCost(60)}
                  htmlFor="flat_shipping"
                >
                  Giáo nhanh trong ngày: <span>$60.00</span>
                </label>
                <ErrorMsg msg={errors?.shippingOption?.message} />
              </span>
              <span>
                <input
                  {...register(`shippingOption`, {
                    required: `Vui lòng chọn hình thức giao hàng`,
                  })}
                  id="flat_rate"
                  type="radio"
                  name="shippingOption"
                />
                <label
                  onClick={() => handleShippingCost(20)}
                  htmlFor="flat_rate"
                >
                  Giáo tiêu chuẩn 7 ngày: <span>$20.00</span>
                </label>
                <ErrorMsg msg={errors?.shippingOption?.message} />
              </span>
            </div>
          </li>

           {/*  subtotal */}
           <li className="tp-order-info-list-subtotal">
            <span>Tạm tính</span>
            <span>${total.toFixed(2)}</span>
          </li>

           {/*  shipping cost */}
           <li className="tp-order-info-list-subtotal">
            <span>Phí vận chuyển</span>
            <span>${shippingCost.toFixed(2)}</span>
          </li>

           {/* discount */}
           <li className="tp-order-info-list-subtotal">
            <span>Giảm giá</span>
            <span>${discountAmount.toFixed(2)}</span>
          </li>

          {/* total */}
          <li className="tp-order-info-list-total">
            <span>Tổng thanh toán</span>
            <span>${parseFloat(cartTotal).toFixed(2)}</span>
          </li>
        </ul>
      </div>
      <div className="tp-checkout-payment">
        <div className="tp-checkout-payment-item">
          <input
            {...register(`payment`, {
              required: `Vui lòng chọn phương thức thanh toán`,
            })}
            type="radio"
            id="back_transfer"
            name="payment"
            value="Card"
          />
          <label onClick={() => setShowCard(true)} htmlFor="back_transfer">
            Thẻ tín dụng (mô phỏng)
          </label>
          {showCard && (
            <div className="direct-bank-transfer">
              <div className="tp-checkout-input mb-15">
                <input
                  {...register("cardName")}
                  type="text"
                  name="cardName"
                  placeholder="Tên chủ thẻ"
                />
              </div>
              <div className="tp-checkout-input mb-15">
                <input
                  {...register("cardNumber")}
                  type="text"
                  name="cardNumber"
                  placeholder="Số thẻ (4242 4242 4242 4242)"
                />
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="tp-checkout-input mb-15">
                    <input
                      {...register("cardExpiry")}
                      type="text"
                      name="cardExpiry"
                      placeholder="MM/YY"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="tp-checkout-input mb-15">
                    <input
                      {...register("cardCvc")}
                      type="text"
                      name="cardCvc"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
              <p className="mb-0" style={{ fontSize: "13px", color: "#777" }}>
                Thẻ demo: 4242 4242 4242 4242 (thành công), 4000 0000 0000 0002 (từ chối)
              </p>
            </div>
          )}
          <ErrorMsg msg={errors?.payment?.message} />
        </div>
        <div className="tp-checkout-payment-item">
          <input
            {...register(`payment`, {
              required: `Vui lòng chọn phương thức thanh toán`,
            })}
            defaultChecked
            onClick={() => setShowCard(false)}
            type="radio"
            id="cod"
            name="payment"
            value="COD"
          />
          <label htmlFor="cod">Thanh toán khi nhận hàng (demo)</label>
          <ErrorMsg msg={errors?.payment?.message} />
        </div>
      </div>

      <div className="tp-checkout-btn-wrapper">
        <button
          type="submit"
          disabled={isCheckoutSubmit}
          className="tp-checkout-btn w-100"
        >
          {isSimulatingPayment ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Đang xử lý thanh toán...
            </>
          ) : (
            "Đặt hàng"
          )}
        </button>
      </div>
    </div>
  );
};

export default CheckoutOrderArea;

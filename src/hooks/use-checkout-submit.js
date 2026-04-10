import * as dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
//internal import
import useCartInfo from "./use-cart-info";
import { set_shipping } from "@/redux/features/order/orderSlice";
import { set_coupon } from "@/redux/features/coupon/couponSlice";
import { notifyError, notifySuccess } from "@/utils/toast";
import { useSaveOrderMutation } from "@/redux/features/order/orderApi";
import { useGetOfferCouponsQuery } from "@/redux/features/coupon/couponApi";

const PAYMENT_LOG_KEY = "simulatedPaymentLogs";
const PAYMENT_ORDER_KEY = "simulatedPaymentByOrder";

const useCheckoutSubmit = () => {
  // offerCoupons
  const { data: offerCoupons, isError, isLoading } = useGetOfferCouponsQuery();
  // addOrder
  const [saveOrder, {}] = useSaveOrderMutation();
  // cart_products
  const { cart_products } = useSelector((state) => state.cart);
  // user
  const { user } = useSelector((state) => state.auth);
  // shipping_info
  const { shipping_info } = useSelector((state) => state.order);
  // total amount
  const { total, setTotal } = useCartInfo();
  //cartTotal
  const [cartTotal, setCartTotal] = useState("");
  // minimumAmount
  const [minimumAmount, setMinimumAmount] = useState(0);
  // shippingCost
  const [shippingCost, setShippingCost] = useState(0);
  // discountAmount
  const [discountAmount, setDiscountAmount] = useState(0);
  // discountPercentage
  const [discountPercentage, setDiscountPercentage] = useState(0);
  // discountProductType
  const [discountProductType, setDiscountProductType] = useState("");
  // isCheckoutSubmit
  const [isCheckoutSubmit, setIsCheckoutSubmit] = useState(false);
  // isSimulatingPayment
  const [isSimulatingPayment, setIsSimulatingPayment] = useState(false);
  // coupon apply message
  const [couponApplyMsg,setCouponApplyMsg] = useState("");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const pushPaymentLog = (entry) => {
    if (typeof window === "undefined") return;
    try {
      const prevLogs = JSON.parse(localStorage.getItem(PAYMENT_LOG_KEY) || "[]");
      const logs = [entry, ...prevLogs].slice(0, 50);
      localStorage.setItem(PAYMENT_LOG_KEY, JSON.stringify(logs));
    } catch (error) {
      console.error("Could not save simulated payment log", error);
    }
  };

  const attachOrderPaymentMeta = (orderId, meta) => {
    if (typeof window === "undefined") return;
    try {
      const prevMap = JSON.parse(localStorage.getItem(PAYMENT_ORDER_KEY) || "{}");
      prevMap[orderId] = meta;
      localStorage.setItem(PAYMENT_ORDER_KEY, JSON.stringify(prevMap));
    } catch (error) {
      console.error("Could not attach simulated payment metadata", error);
    }
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const {register,handleSubmit,setValue,formState: { errors }} = useForm();

  const couponRef = useRef("");

  useEffect(() => {
    if (localStorage.getItem("couponInfo")) {
      const data = localStorage.getItem("couponInfo");
      const coupon = JSON.parse(data);
      setDiscountPercentage(coupon.discountPercentage);
      setMinimumAmount(coupon.minimumAmount);
      setDiscountProductType(coupon.productType);
    }
  }, []);

  useEffect(() => {
    if (minimumAmount - discountAmount > total || cart_products.length === 0) {
      setDiscountPercentage(0);
      localStorage.removeItem("couponInfo");
    }
  }, [minimumAmount, total, discountAmount, cart_products]);

  //calculate total and discount value
  useEffect(() => {
    const result = cart_products?.filter(
      (p) => p.productType === discountProductType
    );
    const discountProductTotal = result?.reduce(
      (preValue, currentValue) =>
        preValue + currentValue.price * currentValue.orderQuantity,
      0
    );
    let totalValue = "";
    let subTotal = Number((total + shippingCost).toFixed(2));
    let discountTotal = Number(
      discountProductTotal * (discountPercentage / 100)
    );
    totalValue = Number(subTotal - discountTotal);
    setDiscountAmount(discountTotal);
    setCartTotal(totalValue);
  }, [
    total,
    shippingCost,
    discountPercentage,
    cart_products,
    discountProductType,
  ]);

  // handleCouponCode
  const handleCouponCode = (e) => {
    e.preventDefault();

    if (!couponRef.current?.value) {
      notifyError("Vui lòng nhập mã giảm giá!");
      return;
    }
    if (isLoading) {
      return <h3>Loading...</h3>;
    }
    if (isError) {
      return notifyError("Hệ thống đang bận, vui lòng thử lại.");
    }
    const result = offerCoupons?.filter(
      (coupon) => coupon.couponCode === couponRef.current?.value
    );

    if (result.length < 1) {
      notifyError("Mã giảm giá không hợp lệ!");
      return;
    }

    if (dayjs().isAfter(dayjs(result[0]?.endTime))) {
      notifyError("Mã giảm giá đã hết hạn!");
      return;
    }

    if (total < result[0]?.minimumAmount) {
      notifyError(
        `Đơn tối thiểu ${result[0].minimumAmount} USD để áp dụng mã giảm giá!`
      );
      return;
    } else {
      // notifySuccess(
      //   `Your Coupon ${result[0].title} is Applied on ${result[0].productType}!`
      // );
      setCouponApplyMsg(`Đã áp dụng mã ${result[0].title} cho danh mục ${result[0].productType}!`)
      setMinimumAmount(result[0]?.minimumAmount);
      setDiscountProductType(result[0].productType);
      setDiscountPercentage(result[0].discountPercentage);
      dispatch(set_coupon(result[0]));
      setTimeout(() => {
        couponRef.current.value = "";
        setCouponApplyMsg("")
      }, 5000);
    }
  };

  // handleShippingCost
  const handleShippingCost = (value) => {
    setShippingCost(value);
  };

  //set values
  useEffect(() => {
    setValue("firstName", shipping_info.firstName);
    setValue("lastName", shipping_info.lastName);
    setValue("country", shipping_info.country);
    setValue("address", shipping_info.address);
    setValue("city", shipping_info.city);
    setValue("zipCode", shipping_info.zipCode);
    setValue("contactNo", shipping_info.contactNo);
    setValue("email", shipping_info.email);
    setValue("orderNote", shipping_info.orderNote);
  }, [setValue, shipping_info]);

  // submitHandler
  const submitHandler = async (data) => {
    dispatch(set_shipping(data));
    setIsCheckoutSubmit(true);

    let orderInfo = {
      name: `${data.firstName} ${data.lastName}`,
      address: data.address,
      contact: data.contactNo,
      email: data.email,
      city: data.city,
      country: data.country,
      zipCode: data.zipCode,
      shippingOption: data.shippingOption,
      status: "Pending",
      cart: cart_products,
      paymentMethod: data.payment,
      subTotal: total,
      shippingCost: shippingCost,
      discount: discountAmount,
      totalAmount: cartTotal,
      orderNote:data.orderNote,
      user: `${user?._id}`,
    };

    if (data.payment === 'Card') {
      setIsSimulatingPayment(true);
      const cardNumber = (data.cardNumber || "").replace(/\s+/g, "");
      const expiry = (data.cardExpiry || "").trim();
      const cvc = (data.cardCvc || "").trim();

      if (!data.cardName || !cardNumber || !expiry || !cvc) {
        setIsSimulatingPayment(false);
        setIsCheckoutSubmit(false);
        notifyError("Vui lòng điền đầy đủ thông tin thẻ.");
        return;
      }

      await sleep(1800);

      // Simulate success/failure with common Stripe test cards
      // Success: 4242424242424242
      // Decline: 4000000000000002
      if (cardNumber === "4000000000000002") {
        pushPaymentLog({
          id: `txn_demo_${Date.now()}`,
          status: "failed",
          reason: "card_declined",
          paymentMethod: "Card",
          amount: Number(cartTotal),
          createdAt: new Date().toISOString(),
          last4: cardNumber.slice(-4),
        });
        setIsSimulatingPayment(false);
        setIsCheckoutSubmit(false);
        notifyError("Thanh toán thất bại: thẻ bị từ chối (mô phỏng).");
        return;
      }

      const transactionId = `txn_demo_${Date.now()}`;
      const orderData = {
        ...orderInfo,
        paymentIntent: {
          id: transactionId,
          status: cardNumber === "4242424242424242" ? "succeeded" : "simulated_success",
          amount: Number(cartTotal),
          currency: "usd",
        },
        cardInfo: {
          brand: "visa",
          last4: cardNumber.slice(-4),
          exp: expiry,
        },
      };

      saveOrder({
        ...orderData
      }).then((res) => {
        if (res?.error) {
          pushPaymentLog({
            id: transactionId,
            status: "failed",
            reason: "order_save_failed",
            paymentMethod: "Card",
            amount: Number(cartTotal),
            createdAt: new Date().toISOString(),
            last4: cardNumber.slice(-4),
          });
          setIsSimulatingPayment(false);
          setIsCheckoutSubmit(false);
          notifyError("Không thể lưu đơn hàng sau khi thanh toán mô phỏng.");
        }
        else {
          const savedOrderId = res.data?.order?._id;
          pushPaymentLog({
            id: transactionId,
            orderId: savedOrderId,
            status: "succeeded",
            paymentMethod: "Card",
            amount: Number(cartTotal),
            createdAt: new Date().toISOString(),
            last4: cardNumber.slice(-4),
          });

          if (savedOrderId) {
            attachOrderPaymentMeta(savedOrderId, {
              id: transactionId,
              status: "succeeded",
              method: "Card (Simulated)",
              amount: Number(cartTotal),
              last4: cardNumber.slice(-4),
              createdAt: new Date().toISOString(),
            });
          }

          localStorage.removeItem("cart_products");
          localStorage.removeItem("couponInfo");
          setIsSimulatingPayment(false);
          setIsCheckoutSubmit(false);
          notifySuccess("Thanh toán thẻ thành công. Đơn hàng đã được xác nhận!");
          router.push(`/order/${savedOrderId}`);
        }
      });
      return;
    }

    if (data.payment === 'COD') {
      saveOrder({
        ...orderInfo
      }).then(res => {
        if(res?.error){
          setIsCheckoutSubmit(false)
          notifyError("Không thể lưu đơn hàng COD.");
        }
        else {
          const savedOrderId = res.data?.order?._id;
          pushPaymentLog({
            id: `txn_cod_${Date.now()}`,
            orderId: savedOrderId,
            status: "succeeded",
            paymentMethod: "COD",
            amount: Number(cartTotal),
            createdAt: new Date().toISOString(),
          });

          if (savedOrderId) {
            attachOrderPaymentMeta(savedOrderId, {
              id: `txn_cod_${Date.now()}`,
              status: "pending_collection",
              method: "Cash on Delivery (Simulated)",
              amount: Number(cartTotal),
              createdAt: new Date().toISOString(),
            });
          }

          localStorage.removeItem("cart_products")
          localStorage.removeItem("couponInfo");
          setIsCheckoutSubmit(false)
          notifySuccess("Đặt hàng thành công!");
          router.push(`/order/${savedOrderId}`);
        }
      })
      return;
    }

    setIsCheckoutSubmit(false);
    notifyError("Vui lòng chọn phương thức thanh toán hợp lệ.");
  };

  return {
    handleCouponCode,
    couponRef,
    handleShippingCost,
    discountAmount,
    total,
    shippingCost,
    discountPercentage,
    discountProductType,
    isCheckoutSubmit,
    setTotal,
    register,
    errors,
    submitHandler,
    handleSubmit,
    cartTotal,
    isCheckoutSubmit,
    isSimulatingPayment,
    couponApplyMsg,
  };
};

export default useCheckoutSubmit;


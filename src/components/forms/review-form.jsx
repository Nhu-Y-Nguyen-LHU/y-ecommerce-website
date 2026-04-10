import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import * as Yup from "yup";
// internal
import ErrorMsg from "../common/error-msg";
import { useAddReviewMutation } from "@/redux/features/reviewApi";
import { notifyError, notifySuccess } from "@/utils/toast";

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  comment: Yup.string().required().label("Comment"),
});

const ReviewForm = ({ product_id }) => {
  const { user } = useSelector((state) => state.auth);
  const [rating, setRating] = useState(0);
  const [addReview, {}] = useAddReviewMutation();

  const handleRating = (rate) => {
    setRating(rate);
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (!user) {
      notifyError("Vui lòng đăng nhập để đánh giá");
      return;
    }

    addReview({
      userId: user?._id,
      productId: product_id,
      rating: rating,
      comment: data.comment,
    }).then((result) => {
      if (result?.error) {
        notifyError(result?.error?.data?.message);
      } else {
        notifySuccess(result?.data?.message || "Gui danh gia thanh cong");
      }
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="tp-product-details-review-form-rating d-flex align-items-center">
        <p>Đánh giá cua ban:</p>
        <div className="tp-product-details-review-form-rating-icon d-flex align-items-center">
          <Rating onClick={handleRating} allowFraction size={16} initialValue={rating} />
        </div>
      </div>
      <div className="tp-product-details-review-input-wrapper">
        <div className="tp-product-details-review-input-box">
          <div className="tp-product-details-review-input">
            <textarea
              {...register("comment", { required: `Vui lòng nhập nội dung đánh giá` })}
              id="comment"
              name="comment"
              placeholder="Nhập nhận xét của bạn..."
            />
          </div>
          <div className="tp-product-details-review-input-title">
            <label htmlFor="msg">Noi dung danh gia</label>
          </div>
          <ErrorMsg msg={errors.comment?.message} />
        </div>
        <div className="tp-product-details-review-input-box">
          <div className="tp-product-details-review-input">
            <input
              {...register("name", { required: `Vui lòng nhập họ tên` })}
              name="name"
              id="name"
              type="text"
              placeholder="Nguyen Van A"
            />
          </div>
          <div className="tp-product-details-review-input-title">
            <label htmlFor="name">Ho ten</label>
          </div>
          <ErrorMsg msg={errors.name?.message} />
        </div>
        <div className="tp-product-details-review-input-box">
          <div className="tp-product-details-review-input">
            <input
              {...register("email", { required: `Vui lòng nhập email` })}
              name="email"
              id="email"
              type="email"
              placeholder="ban@nymart.vn"
            />
          </div>
          <div className="tp-product-details-review-input-title">
            <label htmlFor="email">Email</label>
          </div>
          <ErrorMsg msg={errors.email?.message} />
        </div>
      </div>
      <div className="tp-product-details-review-btn-wrapper">
        <button type="submit" className="tp-product-details-review-btn">Gui danh gia</button>
      </div>
    </form>
  );
};

export default ReviewForm;


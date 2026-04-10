import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// internal
import ErrorMsg from "../common/error-msg";
import { notifySuccess } from "@/utils/toast";

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().label("Subject"),
  message: Yup.string().required().label("Message"),
  remember: Yup.bool()
    .oneOf([true], "Ban can dong y dieu khoan de tiep tuc.")
    .label("Dieu khoan"),
});

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (data) {
      notifySuccess('Gui tin nhan thanh cong!');
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
      <div className="tp-contact-input-wrapper">
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("name", { required: `Vui lòng nhập họ tên` })} name="name" id="name" type="text" placeholder="Nguyen Van A" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="name">Ho ten</label>
          </div>
          <ErrorMsg msg={errors.name?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("email", { required: `Vui lòng nhập email` })} name="email" id="email" type="email" placeholder="ban@nymart.vn" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="email">Email</label>
          </div>
          <ErrorMsg msg={errors.email?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("subject", { required: `Vui lòng nhập chủ đề` })} name="subject" id="subject" type="text" placeholder="Nhập chủ đề" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="subject">Chu de</label>
          </div>
          <ErrorMsg msg={errors.subject?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <textarea {...register("message", { required: `Vui lòng nhập nội dung` })} id="message" name="message" placeholder="Nhập nội dung..."/>
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="message">Noi dung</label>
          </div>
          <ErrorMsg msg={errors.message?.message} />
        </div>
      </div>
      <div className="tp-contact-suggetions mb-20">
        <div className="tp-contact-remeber">
          <input {...register("remember", { required: `Vui lòng dong y dieu khoan` })} name="remember" id="remember" type="checkbox" />
          <label htmlFor="remember">Lưu thông tin để lần sau liên hệ nhanh hơn.</label>
          <ErrorMsg msg={errors.remember?.message} />
        </div>
      </div>
      <div className="tp-contact-btn">
        <button type="submit">Gửi liên hệ</button>
      </div>
    </form>
  );
};

export default ContactForm;


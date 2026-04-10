import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "@/redux/features/auth/authSlice";

function Language({ active, handleActive }) {
  return (
    <div className="tp-header-top-menu-item tp-header-lang">
      <span
        onClick={() => handleActive("lang")}
        className="tp-header-lang-toggle"
        id="tp-header-lang-toggle"
      >
        Tiếng Việt
      </span>
      <ul className={active === "lang" ? "tp-lang-list-open" : ""}>
        <li><a href="#">English</a></li>
        <li><a href="#">Tiếng Trung</a></li>
        <li><a href="#">Tiếng Nhật</a></li>
      </ul>
    </div>
  );
}

function Currency({ active, handleActive }) {
  return (
    <div className="tp-header-top-menu-item tp-header-currency">
      <span
        onClick={() => handleActive("currency")}
        className="tp-header-currency-toggle"
        id="tp-header-currency-toggle"
      >
        VND
      </span>
      <ul className={active === "currency" ? "tp-currency-list-open" : ""}>
        <li><a href="#">VND</a></li>
        <li><a href="#">USD</a></li>
        <li><a href="#">EUR</a></li>
      </ul>
    </div>
  );
}

function ProfileSetting({ active, handleActive }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push("/");
  };

  return (
    <div className="tp-header-top-menu-item tp-header-setting">
      <span
        onClick={() => handleActive("setting")}
        className="tp-header-setting-toggle"
        id="tp-header-setting-toggle"
      >
        Tài khoản
      </span>
      <ul className={active === "setting" ? "tp-setting-list-open" : ""}>
        <li><Link href="/profile">Hồ sơ của tôi</Link></li>
        <li><Link href="/wishlist">Yêu thích</Link></li>
        <li><Link href="/cart">Giỏ hàng</Link></li>
        <li>
          {!user?.name && <Link href="/login" className="cursor-pointer">Đăng nhập</Link>}
          {user?.name && <a onClick={handleLogout} className="cursor-pointer">Đăng xuất</a>}
        </li>
      </ul>
    </div>
  );
}

const HeaderTopRight = () => {
  const [active, setIsActive] = useState("");

  const handleActive = (type) => {
    if (type === active) {
      setIsActive("");
    } else {
      setIsActive(type);
    }
  };

  return (
    <div className="tp-header-top-menu d-flex align-items-center justify-content-end">
      <Language active={active} handleActive={handleActive} />
      <Currency active={active} handleActive={handleActive} />
      <ProfileSetting active={active} handleActive={handleActive} />
    </div>
  );
};

export default HeaderTopRight;

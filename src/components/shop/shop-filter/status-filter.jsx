import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";

const StatusFilter = ({setCurrPage,shop_right=false}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const status = [
    { label: "Đang giảm giá", value: "on-sale" },
    { label: "Còn hàng", value: "in-stock" },
  ];

  // handle status route 
  const handleStatusRoute = (statusValue) => {
    setCurrPage(1)
    router.push(`/${shop_right?'shop-right-sidebar':'shop'}?status=${statusValue}`)
      dispatch(handleFilterSidebarClose())
  }
  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Tình trạng sản phẩm</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-checkbox">
          <ul className="filter-items filter-checkbox">
            {status.map((s, i) => (
              <li key={i} className="filter-item checkbox">
                <input
                  id={s.value}
                  type="checkbox"
                  checked={router.query.status === s.value ? "checked" : false}
                  readOnly
                />
                <label
                  onClick={() => handleStatusRoute(s.value)}
                  htmlFor={s.value}
                >
                  {s.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatusFilter;

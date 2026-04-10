import React from "react";

const VI_MSG_MAP = {
  "There was an error": "Có lỗi xảy ra",
  "Có lỗi xảy ra": "Có lỗi xảy ra",
  "No Products found!": "Không tìm thấy sản phẩm!",
  "No products found!": "Không tìm thấy sản phẩm!",
  "No products found": "Không tìm thấy sản phẩm!",
  "No Category found!": "Không tìm thấy danh mục!",
  "Không tìm thấy danh mục!": "Không tìm thấy danh mục!",
  "No product found!": "Không tìm thấy sản phẩm!",
  "Không tìm thấy thương hiệu!": "Không tìm thấy thương hiệu!",
};

const ErrorMsg = ({ msg }) => {
  const normalized = VI_MSG_MAP[msg] || msg;
  return <div style={{ color: "red" }}>{normalized}</div>;
};

export default ErrorMsg;


export const formatVND = (value) => {
  const amount = Number(value || 0);
  return `${amount.toLocaleString("vi-VN")} ₫`;
};

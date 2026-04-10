import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "@/utils/localstorage";
import { notifyError, notifySuccess } from "@/utils/toast";
import { localizeProductTitle } from "@/utils/product-title-localization";

const initialState = {
  compareItems: [],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    add_to_compare: (state, { payload }) => {
      const isExist = state.compareItems.some(
        (item) => item._id === payload._id
      );
      if (!isExist) {
        state.compareItems.push(payload);
        notifySuccess(`Đã thêm ${payload.title} vào danh sách so sánh`);
      } else {
        state.compareItems = state.compareItems.filter(
          (item) => item._id !== payload._id
        );
        notifyError(`Đã xóa ${payload.title} khỏi danh sách so sánh`);
      }
      setLocalStorage("compare_items", state.compareItems);
    },
    remove_compare_product: (state, { payload }) => {
      state.compareItems = state.compareItems.filter(
        (item) => item._id !== payload.id
      );
      setLocalStorage("compare_items", state.compareItems);
      notifyError(`Đã xóa ${payload.title} khỏi danh sách so sánh`);
    },
    get_compare_products: (state, { payload }) => {
      const products = getLocalStorage("compare_items") || [];
      state.compareItems = products.map((item) => ({
        ...item,
        title: localizeProductTitle(item.title),
      }));
    },
  },
});

export const { add_to_compare, get_compare_products, remove_compare_product } =
  compareSlice.actions;
export default compareSlice.reducer;

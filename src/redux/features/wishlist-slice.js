import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "@/utils/localstorage";
import { notifyError, notifySuccess } from "@/utils/toast";
import { localizeProductTitle } from "@/utils/product-title-localization";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    add_to_wishlist: (state, { payload }) => {
      const isExist = state.wishlist.some((item) => item._id === payload._id);
      if (!isExist) {
        state.wishlist.push(payload);
        notifySuccess(`Đã thêm ${payload.title} vào danh sách yêu thích`);
      } else {
        state.wishlist = state.wishlist.filter(
          (item) => item._id !== payload._id
        );
        notifyError(`Đã xóa ${payload.title} khỏi danh sách yêu thích`);
      }
      setLocalStorage("wishlist_items", state.wishlist);
    },
    remove_wishlist_product: (state, { payload }) => {
      state.wishlist = state.wishlist.filter((item) => item._id !== payload.id);
      notifyError(`Đã xóa ${payload.title} khỏi danh sách yêu thích`);
      setLocalStorage("wishlist_items", state.wishlist);
    },
    get_wishlist_products: (state, { payload }) => {
      const products = getLocalStorage("wishlist_items") || [];
      state.wishlist = products.map((item) => ({
        ...item,
        title: localizeProductTitle(item.title),
      }));
    },
  },
});

export const {
  add_to_wishlist,
  remove_wishlist_product,
  get_wishlist_products,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;

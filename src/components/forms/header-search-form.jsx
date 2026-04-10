import { Search } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";

const HeaderSearchForm = () => {
  const { setSearchText, setCategory, handleSubmit, searchText } = useSearchFormSubmit();

  const selectCategoryHandle = (e) => {
    setCategory(e.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-header-search-wrapper d-flex align-items-center">
        <div className="tp-header-search-box">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />
        </div>
        <div className="tp-header-search-category">
          <NiceSelect
            options={[
              { value: "Chọn danh mục", text: "Chọn danh mục" },
              { value: "electronics", text: "Công nghệ" },
              { value: "fashion", text: "Thời trang" },
              { value: "beauty", text: "Làm đẹp" },
              { value: "jewelry", text: "Phụ kiện" },
            ]}
            defaultCurrent={0}
            onChange={selectCategoryHandle}
            name="Chọn danh mục"
          />
        </div>
        <div className="tp-header-search-btn">
          <button type="submit">
            <Search />
          </button>
        </div>
      </div>
    </form>
  );
};

export default HeaderSearchForm;

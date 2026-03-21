export default function BackToTop(value) {
  const result = document.querySelector(value);
  if (!result) {
    return () => {};
  }

  const handleScroll = () => {
    if (window.scrollY > 200) {
      result.classList.add("back-to-top-btn-show");
    } else {
      result.classList.remove("back-to-top-btn-show");
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  document.addEventListener("scroll", handleScroll, { passive: true });
  result.addEventListener("click", handleClick);
  handleScroll();

  return () => {
    document.removeEventListener("scroll", handleScroll);
    result.removeEventListener("click", handleClick);
  };
}

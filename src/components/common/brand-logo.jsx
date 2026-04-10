import Image from "next/image";
import Link from "next/link";

const BrandLogo = ({ light = false, compact = false }) => {
  const logoSrc = "/assets/img/logo/logohong.png";
  const size = compact ? 40 : 52;
  const titleColor = light ? "#7B1029" : "#6E0F25";
  const subtitleColor = light ? "#5A0D1D" : "#5A0D1D";

  return (
    <Link
      href="/"
      className="d-inline-flex align-items-center"
      aria-label="NY - MART"
      style={{ gap: compact ? "8px" : "10px" }}
    >
      <Image
        src={logoSrc}
        alt="NY - MART"
        width={size}
        height={size}
        quality={100}
        priority={compact}
        style={{ objectFit: "contain" }}
      />
      <span className="d-inline-flex flex-column" style={{ lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            color: titleColor,
            fontWeight: 800,
            fontSize: compact ? "15px" : "20px",
            letterSpacing: "0.6px",
            textShadow: "0 0 0 rgba(0,0,0,0)",
          }}
        >
          NY - MART
        </span>
        {!compact && (
          <span
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              color: subtitleColor,
              fontWeight: 700,
              fontSize: "10px",
              marginTop: "4px",
            }}
          >
            Sàn TMĐT của Người Việt
          </span>
        )}
      </span>
    </Link>
  );
};

export default BrandLogo;

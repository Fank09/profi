export function LogoProfi() {
  const logoSrc = `${import.meta.env.BASE_URL}images/logo-profi.png`;

  return (
    <div className="logo-profi" aria-label="ProFi">
      <img
        src={logoSrc}
        alt="ProFi Logo"
        width="120"
        height="auto"
        className="logo-profi__image"
      />
    </div>
  );
}

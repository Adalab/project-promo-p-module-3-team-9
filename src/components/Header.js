import logoFontAwesome from '../images/tarjetas-molonas.png';

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__image-brand"
        src={logoFontAwesome}
        alt="imagen awesome profile cards"
      />
    </header>
  );
};

export default Header;

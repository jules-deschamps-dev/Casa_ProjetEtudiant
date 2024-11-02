import './header.scss';

const Header = ({ img, txt = null }) => {
  return (
    <header>
      <img src={img} alt="banière" />
      {txt && <span>{txt}</span>}
    </header>
  );
};

export default Header;

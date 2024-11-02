import { NavLink } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
  return (
    <nav>
      <img src='../../public/logo.svg' alt='logo' />
      <div>
        <NavLink exact to='/' activeClassName='active'> Home </NavLink>
        <NavLink to='/about' activeClassName='active'> A propos </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

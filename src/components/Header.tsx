import { FC } from 'react';
import react from '../assets/react.svg';
import typescript from '../assets/typescript.svg';

const Header: FC = () => {
  return (
    <header className="header">
      <img src={typescript} alt="typescript logo" height="40" width="auto" />
      <span className="plus">+</span>
      <img src={react} alt="react logo" height="40" width="auto" />
    </header>
  )
}
export default Header
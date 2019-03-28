import Link from 'next/link';
import { PREFIX } from '../../constants';
import slashLogo from 'static/images/slash-logo.svg';
import Logo from 'components/Logo';
import './tkheader.scss';

const Header = ({ children }) => (
  <header className={`${PREFIX}-header`}>
    <Link href="/">
      <a>
        <Logo
          icon={slashLogo}
          title="Slash"
          subtitle="Design System"
          classModifier="header"
        />
      </a>
    </Link>
    {children}
  </header>
);

export default Header;

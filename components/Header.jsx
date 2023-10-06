import { AppContext } from 'echess/components';
import { useContext } from 'react';

const Header = () => {
  const { logo, title } = useContext(AppContext);

  return (
    <div className="flex flex-1 flex-wrap items-center space-x-2">
      <img src={logo} alt={title} className="logo-app" />
      <h2 className="hidden md:flex font-semibold text-lg lg:text-xl font-display mt-1">{title}</h2>
      <img className="logo-app" src="/images/kcf-logo-alt.png" alt={title} />
    </div>
  );
};

export default Header;

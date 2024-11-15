import styled from 'styled-components';
import { useNavigate, NavLink } from 'react-router-dom';

const NavItem = styled.li`
  cursor: pointer;
  user-select: none;
  &::before {
    margin-left: auto;
    margin-bottom: 6px;
  }
  &::after {
    margin-top: 6px;
  }
  &::after, &::before {
    content: '';
    
    width: 0%;
    height: 2px;
    background: rgb(234 88 12 / var(--tw-bg-opacity));
    display: block;
    transition: 0.5s;
    }
    
    &:hover::after, &:hover::before {
      width: 100%;
  }
`;

const HeaderStyle = styled.header`
  .header-link .active {
    color: rgb(230, 80, 26);
    & span {
      color: #fff;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyle className="w-full px-6 py-2 bg-sky-700 bg-opacity-95 flex justify-between items-center flex-wrap">
      <h1
        className="text-2xl font-KaushanScripts uppercase italic text-shadow-custom cursor-pointer"
        onClick={() => {
          navigate('/home');
        }}
      >
        <span className="text-rose-600 font-bold">Qr</span>Generator
      </h1>

      <nav className="sm:block sm:w-full sm:mt-4 md:w-auto md:mt-0">
        <ul className="sm:inline-flex md:flex md:items-center space-x-6 uppercase tracking-widest">
          <NavItem className="header-link">
            <NavLink to={'/home'} className="activeNav">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-1"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              Главная
            </NavLink>
          </NavItem>

          <span className="h-full text-gray-400 text-2xl bold">|</span>

          <NavItem className="header-link relative pr-5">
            <NavLink to={'/allSaveQr'} className="activeNav">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-1"
              >
                <path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <circle cx="8" cy="16" r="6" />
                <path d="M9.5 17.5 8 16.25V14" />
              </svg>
              История
              <span className="bg-orange-600 py-1 px-2 rounded-full -mt-10 inline-block absolute bottom-10 right-8">
                0
              </span>
            </NavLink>
          </NavItem>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;

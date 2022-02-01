import { useNavigate } from 'react-router-dom';
import './Header.css';
function Header() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  };
  const toAbout = ()=>{
    navigate('/about')
  }
  return (
    <header>
      <h1 onClick={toHome} className='header__title'>FeedBack App</h1>
      <button className='btn' onClick={toAbout} version={'secoundry'}>
        About
      </button>
    </header>
  );
}
export default Header;

import { useNavigate } from 'react-router-dom';
import Card from '../Card';
import './AboutPage.css';
function AboutPage() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  return (
    <div className='about-page'>
      <h2 className='about-page__title'>About Page</h2>
      <Card>
        <h4>feed back app with json server</h4>
        <button className='btn about-page__button' onClick={goHome}>
          GoHome
        </button>
      </Card>
    </div>
  );
}

export default AboutPage;

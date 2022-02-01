import {useNavigate} from 'react-router-dom';
import Card from '../Card';
import './AboutPage.css'
function AboutPage() {
  const navigate = useNavigate();
  const goHome = ()=>{
    navigate('/');
  }
  return ( 
    <div className="about-page">
      <h2 className='about-page__title'>About Page</h2>
      <Card>
        <h4>rfwegfrg</h4>
        <p>wrefgwrgerg</p>
        <p>2ergergergerg</p>
        <button className='btn' onClick={goHome}>GoHome</button>
      </Card>
      
    </div>
   );
}

export default AboutPage;
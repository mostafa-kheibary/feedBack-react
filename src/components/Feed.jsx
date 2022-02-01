import './Feed.css';
import Card from './Card';
function Feed({ text, rate, HandleDelete }) {
  return (
    <Card>
      <i onClick={HandleDelete} className='far fa-times-circle feed__close'></i>
      <h4 className='feed__rate'>{rate}</h4>
      <p className='feed__content'>{text}</p>
    </Card>
  );
}

export default Feed;

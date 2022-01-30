import './Feed.css';
function Feed({ text, rate, HandleDelete }) {
  return (
    <div className='feed'>
      <i onClick={HandleDelete} className='far fa-times-circle feed__close'></i>
      <h4 className='feed__rate'>{rate}</h4>
      <p className='feed__content'>{text}</p>
    </div>
  );
}

export default Feed;

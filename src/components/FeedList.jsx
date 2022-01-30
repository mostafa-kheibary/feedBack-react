import Feed from './Feed';
import './FeedList.css';
function FeedList({ feeds, HandleDelete }) {
  return (
    <div className='feed-list'>
      {feeds.map((item) => (
        <Feed
          HandleDelete={() => HandleDelete(item.id)}
          key={item.id}
          text={item.text}
          rate={item.rating}
        />
      ))}
    </div>
  );
}

export default FeedList;

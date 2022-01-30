import Header from './components/Header';
import FeedList from './components/FeedList';
import Status from './components/Status';
import { useState } from 'react';
function App() {
  const [feedBack, setFeedBack] = useState([
    {
      id: 1,
      rating: 8,
      text: 'its realy good i love it its realy good i love it its realy good i love it',
    },
    {
      id: 2,
      rating: 7,
      text: 'nice to have this option its realy good i love it its realy good i love it ',
    },
    {
      id: 3,
      rating: 10,
      text: 'good qulity and good product its realy good i love it its realy good i love it',
    },
  ]);
  const delteFeed = (id) => {
    console.log(id);
    setFeedBack(feedBack.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header />
      <Status feedback = {feedBack}/>
      <FeedList HandleDelete={delteFeed} feeds={feedBack} />
    </>
  );
}

export default App;

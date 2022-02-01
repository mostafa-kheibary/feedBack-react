import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddFeed from './components/AddFeed';
import AboutPage from './components/page/AboutPage';
import Header from './components/Header';
import FeedList from './components/FeedList';
import Status from './components/Status';
import { useState } from 'react';
function App() {
  const [feedBack, setFeedBack] = useState([]);
  const [id, setId] = useState(1);
  const delteFeed = (id) => {
    if (window.confirm('are you going to delete this review ?')) {
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };
  const submitText = (text, rate) => {
    const newFeed = {
      id: id,
      rate,
      text,
    };
    setFeedBack([...feedBack, newFeed]);
    setId(id + 1);
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <AddFeed handleSubmitText={submitText} />
              <Status feedback={feedBack} />
              <FeedList HandleDelete={delteFeed} feeds={feedBack} />
            </>
          }
        />
        <Route element={<AboutPage />} path='/about' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddFeed from './components/AddFeed';
import AboutPage from './components/page/AboutPage';
import Header from './components/Header';
import FeedList from './components/FeedList';
import Status from './components/Status';
import { useState, useEffect } from 'react';
function App() {
  const base = 'http://localhost:5000';
  const [feedBack, setFeedBack] = useState([]);
  useEffect(async () => {
    const respone = await fetch(`${base}/feedback`);
    const data = await respone.json();
    setFeedBack(data);
  }, []);
  const delteFeed = (id) => {
    fetch(`${base}/feedback/${id}`, { method: 'DELETE' });
    if (window.confirm('are you going to delete this review ?')) {
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };
  const submitText = async (text, rate) => {
    const newFeed = {
      rate,
      text,
    };
    const respone = await fetch(`${base}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeed),
    });
    const data = await respone.json();
    console.log(data);
    setFeedBack([...feedBack, data]);
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

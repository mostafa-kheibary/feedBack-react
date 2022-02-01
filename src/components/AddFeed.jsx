import { useState } from 'react';
import Rate from './Rate';
import Card from './Card';
import './AddFeed.css';

function AddFeed({ handleSubmitText }) {
  const [text, setText] = useState('');
  const [rate, setRate] = useState(10);
  const [disable, setDisable] = useState(true);
  const handleRate = (rate) => {
    setRate(rate);
  };
  const handleChangeText = (e) => {
    setText(e.target.value.trim());
    if (text.length <= 10) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };
  const hadleClick = (e) => {
    handleSubmitText(text, rate);
    setText('');
    e.target.previousSibling.value = '';
    setDisable(true);
  };
  return (
    <div className='container'>
      <Card>
        <h2 className='container__title'>
          what do you think about our servises ?
        </h2>
        <Rate handleRate={handleRate} />
        <div className='input-group'>
          <input
            onChange={handleChangeText}
            className='input-group__input'
            type='text'
            placeholder='say your opnion'
          />
          <button
            onClick={hadleClick}
            disabled={disable}
            className='input-group__submit'
          >
            Submit
          </button>
        </div>
      </Card>
    </div>
  );
}

export default AddFeed;

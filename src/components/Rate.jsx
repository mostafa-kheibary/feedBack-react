import './Rate.css';
import { useState } from 'react';

function Rate({ handleRate }) {
  const [rate, setRate] = useState(10);
  const handleChangeRate = (e) => {
    setRate(+e.target.value);
    handleRate(+e.target.value)
  };
  return (
    <div className='rate'>
      <div className='rate__radio'>
        <input
          onChange={handleChangeRate}
          type='radio'
          checked={rate === 1}
          value={1}
          id='1'
        />
        <label htmlFor='1'>1</label>
      </div>
      <div className='rate__radio'>
        <input
          onChange={handleChangeRate}
          type='radio'
          checked={rate === 2}
          value={2}
          id='2'
        />
        <label htmlFor='2'>2</label>
      </div>
      <div className='rate__radio'>
        <input
          onChange={handleChangeRate}
          type='radio'
          checked={rate === 3}
          value={3}
          id='3'
        />
        <label htmlFor='3'>3</label>
      </div>
      <div className='rate__radio'>
        <input
          onChange={handleChangeRate}
          type='radio'
          checked={rate === 4}
          value={4}
          id='4'
        />
        <label htmlFor='4'>4</label>
      </div>
      <div className='rate__radio'>
        <input
          onChange={handleChangeRate}
          type='radio'
          checked={rate === 5}
          value={5}
          id='5'
        />
        <label htmlFor='5'>5</label>
      </div>
      <div className='rate__radio'>
        <input
          onChange={handleChangeRate}
          type='radio'
          checked={rate === 6}
          value={6}
          id='6'
        />
        <label htmlFor='6'>6</label>
      </div>
      <div className='rate__radio'>
        <input
          onChange={handleChangeRate}
          type='radio'
          checked={rate === 7}
          value={7}
          id='7'
        />
        <label htmlFor='7'>7</label>
      </div>
      <div className='rate__radio'>
        <input
          onChange={handleChangeRate}
          type='radio'
          checked={rate === 8}
          value={8}
          id='8'
        />
        <label htmlFor='8'>8</label>
      </div>
      <div className='rate__radio'>
        <input
          onChange={handleChangeRate}
          type='radio'
          checked={rate === 9}
          value={9}
          id='9'
        />
        <label htmlFor='9'>9</label>
      </div>
      <div className='rate__radio'>
        <input
          onChange={handleChangeRate}
          type='radio'
          checked={rate === 10}
          value={10}
          id='10'
        />
        <label htmlFor='10'>10</label>
      </div>
    </div>
  );
}

export default Rate;

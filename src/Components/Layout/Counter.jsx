import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count === 0 || count > 5) {
      setMessage('Click exceeded');
    } else {
      setMessage('');
    }
    console.log(`Count: ${count}`);
  }, [count]);

  return (
    <div className='tutorial mt-3'>
      <h1 className="mb-3">Count: {count}</h1>
      {message && <p>{message}</p>}
      <button onClick={() => setCount(count - 1)} className="btn btn-outline btn-ghost">
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)} className="btn btn-outline btn-ghost">
        Increment
      </button>
    </div>
  );
}

export default Counter;

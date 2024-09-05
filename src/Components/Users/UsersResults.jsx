import React, { useEffect, useState } from 'react';

const UsersResults = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count: ${count}`);
  }, [count]);

  return (
    <div className='tutorial mt-3'>
      <h1 className="mb-3">Count: {count}</h1>
      <button onClick={() => setCount(count - 1)} className="btn btn-outline btn-ghost mr-5">
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)} className="btn btn-outline btn-ghost">
        Increment
      </button>
    </div>
  );
}

export default UsersResults;

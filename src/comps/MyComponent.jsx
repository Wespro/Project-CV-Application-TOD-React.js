import React from 'react';

const fetchData = () =>
  new Promise((r) => setTimeout(() => r(Date.now()), 100));

const MyComponent = () => {
  const [result, setResult] = React.useState();
  //     const data = fetchData().then((value) => setResult(value));

  return (
    <div>
      {result === data.toString() ? <div>hello</div> : <div>good bye</div>}
    </div>
  );
};

export default MyComponent;

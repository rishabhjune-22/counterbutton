const { useState } = React;

const CounterButton = () => {
  const [count, setCount] = useState(27);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

ReactDOM.render(<CounterButton />, document.getElementById('root'));

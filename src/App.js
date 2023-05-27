import { useState } from 'react';
import st from './App.module.css';

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', 'c', '='];

function App() {
  let [result, setResult] = useState(0);
  let [final, setFinal] = useState(false);

  function handleClick(val) {
    if (result == 0) {
      if (val == 0 || val == '+' || val == '-' || val == '=' || val == 'c') {
        setResult(0)
      } else {
        setResult(val)
      }
    } else {
      if ((result[result.length - 1] == '+' || result[result.length - 1] == '-') && (val == '+' || val == '-')) {
        return
      } else if (val == 'c') {
        setFinal(false)
        setResult(0)
      } else if (val == '=') {
        setFinal(!final)
        setResult(eval(result));
      } else {
        if (final) {
          setFinal(!final)
        }
        setResult(result += `${val}`)
      }
    }
  }

  return (
    <div className={st.App}>
      <div className={st.container}>
        <p className={final ? st.final : st.result}>{result}</p>

        {nums.map((num) => {
          return <button className={st.btn} onClick={() => handleClick(num)} key={num}>
            {num}
          </button>
        })}
      </div>
    </div>
  );
}

export default App;

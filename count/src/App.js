
import './App.css';

function App() {
  const onClick = () => {
    let n = Number(document.querySelector('.num').innerHTML)
    if(n>-10) {
      var a = n-1;
    }
    else return;
    document.querySelector('.num').innerHTML=a
  }
  const onClick2 = () => {
    let n = Number(document.querySelector('.num').innerHTML)
    if(n<10) {
      var b = n+1;
    }
    else return;
    document.querySelector('.num').innerHTML=b
  }
  return (
    <div className="App">

      <div className='min' onClick={onClick}>-</div>
      <div className='num'>1</div>
      <div className='plus' onClick={onClick2}>+</div>
    </div>
  );
}

export default App;

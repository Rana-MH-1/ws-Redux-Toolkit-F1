import {useSelector, useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Increment,Decrement,Reset,Increment_with_value } from './Redux/CounterSlice';
import { useState } from 'react';


function App() {
  const [nombre, setNombre] = useState(null)
  const dispatch = useDispatch()
  const count = useSelector(state=> state.CounterR.count)
  return (
    <div className="App">
      <h2>{count}</h2>
      <Button onClick={()=> dispatch(Increment())} variant="primary">Increment</Button>
      <Button onClick={()=> dispatch(Decrement())} variant="danger">Decrement</Button>
      <Button onClick={()=> dispatch(Reset())} variant="danger">Reset</Button>
     <hr/>
      <input type='number' onChange={(e)=> setNombre(+e.target.value)} />
      <Button onClick={()=>dispatch(Increment_with_value(nombre))} variant="info">Increment With Value</Button>
    </div>
  );
}

export default App;

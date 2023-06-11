import { useState, useRef, useEffect } from 'react';
import './App.css';
import DesktopSide from './components/DesktopSide';

const App = () => {
  const [rangeVal, setRangeVal] = useState();

  const div = useRef(null);

  useEffect(() => {
    div.current.style.filter = `brightness(${rangeVal}%)`;
  }, [rangeVal]);

  return (
    <div ref={div} className="app">
      <DesktopSide onGetRangeVal={setRangeVal}/>
    </div>
  );
}

export default App;

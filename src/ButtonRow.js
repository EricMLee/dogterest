import React, {useState} from 'react';
import './ButtonRow.css';
import SharedContext from './SharedContext';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

function ButtonRow(){
  const forceUpdate = useForceUpdate();
  const { catergories, setCatergories, toggledButton, toggleButton } = React.useContext(SharedContext);
  return(
    <div className = "bar col-md-11 ">
      {Object.keys(catergories).map((item) => (
        <div className = "barItem" onClick={()=>{
          toggleButton(item);
          forceUpdate();  
        }}>
          {catergories[item]}
        </div>
      ))}
      
    </div>
  );
}
export default ButtonRow;
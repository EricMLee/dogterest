
import React, {useState, useEffect} from 'react';
import './ImageScreen.css';
import SharedContext from './SharedContext';
import { Button } from 'react-bootstrap';
import {SRLWrapper} from 'simple-react-lightbox';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}
function ImageScreen(){
  const {images, setImages, catergories, toggledButton, display, setDisplay} = React.useContext(SharedContext);

  const forceUpdate = useForceUpdate();
  return(
    <SRLWrapper>
    <div className = "col-sm-10 container-fluid">
      <div className = "row">
        {/* {Object.keys(images).map((item) => ( */}
          {images.filter(image => image["catergory"] === catergories[toggledButton] || catergories[toggledButton] === 'All').map((image, item) => (
          <div class="test col-md-6 col-lg-4 col-xl-3"> 
            <a href={image['url']} className="thumbnail">
              <div class="image m-1">
                <img src={image['url']} class="img img-responsive full-width" onClick = {() => {
                  console.log(images);
                }}/>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </SRLWrapper>
  );
}
export default ImageScreen;
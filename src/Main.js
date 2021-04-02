import React from 'react';
import ButtonBar from './ButtonBar';
import ImageSection from './ImageSection';

import './Main.css';

function Main(){
  return(
    <div className = "screen container-fluid">
      
      <div className="test row">
        <div className = "buttonBar col-md-6">
          <ButtonBar></ButtonBar>
        </div>
        <div className = "imageSection col-md-12">
          <ImageSection></ImageSection>
        </div>
      </div>
    </div>
  );
}
export default Main;
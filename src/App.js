import React, { useEffect, useState} from "react";
import './App.css';
import SharedContext from './SharedContext';
import ImageList from './data/images';
import ButtonRow from './ButtonRow';
import ImageScreen from './ImageScreen';
import AddMedia from './AddMedia';


function App() {
  var myList = [];
  var [images, setImages] = React.useState(ImageList);
  var myStorage = window.localStorage;
  var [catergories, setCatergories] = React.useState(myList);
  var [toggledButton, toggleButton] = React.useState(0);
  var [display, setDisplay] = React.useState([]);
  useEffect(()=>{
    // myStorage.removeItem("images");
    // myStorage.removeItem("catergories");
    var myList = myStorage.getItem("catergories");
    if (myList !== null){
      setCatergories(JSON.parse(myList));
      console.log(JSON.parse(myList));
    } else {
      myList = ['All'];
      images.forEach(element => {
        var catergoryName = element['catergory'];
        if (!myList.includes(catergoryName) && catergoryName !== 'misc') {
          myList.push(catergoryName);
        }
      });
      myList.push('misc');
      console.log(myList);
      myStorage.setItem("catergories", JSON.stringify(myList));
      setCatergories(myList);
    }

    myList = myStorage.getItem("images");
    if (myList !== null){
      setImages(JSON.parse(myList));
    } else {
      myStorage.setItem("images", JSON.stringify(ImageList));
      setImages(ImageList);
    }
    console.log(images);

  }, []);

  return (
    <div className = "screen">
      <SharedContext.Provider value= {{
        images, setImages, catergories, setCatergories, toggledButton, toggleButton, display, setDisplay
      }}>

      <div className = "test1 row">
        <a href="https://ericmlee.github.io/" className="backBtn">
          <div className = "title ml-3">
            Eric Lee
          </div>
        </a>
      </div>
        <div className = "test1 row">
          <div className = "col-sm-12 col-md-8">
            <ButtonRow></ButtonRow>
          </div>
          <div className = "col-sm-12 col-md-3">
            <AddMedia></AddMedia>
          </div>
        </div>
        <div className = "imageScreen col-md-12">
          <ImageScreen></ImageScreen>
        </div>
        
      </SharedContext.Provider>
    </div>
  );
}
export default App;
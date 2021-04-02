import React, {useState, useEffect} from 'react';
import SharedContext from './SharedContext';
import './addMedia.css';

import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap'

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

function AddMedia(){
  const forceUpdate = useForceUpdate();
  const { catergories, setCatergories, images, setImages } = React.useContext(SharedContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [urlValue, setUrl] = useState('');
  const [catergoryValue, setCatergory] = useState('');
  var myStorage = window.localStorage;

  
  useEffect(()=>{
    console.log("A");
  }, [images]);

  return(
    <div className = "bar col-md-11">
        <div className = "addMore ml-auto" onClick= {()=>{
          handleShow();
        }}>
          Add +
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add an Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Image url:
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Image url"
              aria-label="url to imgur is ideal"
              value = {urlValue}
              onChange = {e => setUrl(e.target.value)}
            />
          </InputGroup>
          Catergory:
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Catergory"
              aria-label="Default is misc."
              value = {catergoryValue}
              onChange = {e => setCatergory(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{
            handleClose();
          }}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>{
            var cVal = catergoryValue;
            if(catergoryValue === ""){
              cVal = "misc";
            }
            var newItem = {'uid': urlValue, 'url': urlValue, 'catergory': cVal};
            var myList = myStorage.getItem("images");
            myList = JSON.parse(myList);
            myList.unshift(newItem);
            setImages(myList);
            myStorage.setItem("images", JSON.stringify(myList));
            
            var myList = myStorage.getItem("catergories");
            myList = JSON.parse(myList);
            if (!myList.includes(cVal)){
              myList.pop();
              myList.push(cVal);
              myList.push("misc");
              console.log(myList);
              myStorage.setItem("catergories", JSON.stringify(myList));
              setCatergories(myList);
            }
            setCatergory('');
            setUrl('');
            forceUpdate();
            handleClose();
          }}>
            Add Image
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddMedia;
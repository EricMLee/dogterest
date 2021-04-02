function ButtonBar() {
  var catergoryList = ['All', 'Dog', 'Cat'];
  return(
    <div>
      <div className = "row">
        {Object.keys(catergoryList).map((catergory) => (
          <div>
            {catergoryList[catergory]}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ButtonBar;
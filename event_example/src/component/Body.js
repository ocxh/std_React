function Body(props){
    function handleOnClick(e){
        alert(e.target.name);
    }

    return (
      <div className="body">
        <button onClick={handleOnClick} name="click_me_1">Click me 1</button>
        <button onClick={handleOnClick} name="click_me_2">Click me 2</button>
      </div>
    );
  }
  export default Body;
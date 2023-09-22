function Body(props){
    console.log(props);

    return (
      <div className="body">
        <h2>{props.name} lives in {props.location}</h2>
      </div>
    );
  }
  export default Body;
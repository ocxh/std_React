import "./Body.css";

function Body(){
    const number = 1; //number value
    const str = "테스트 문자열"; //string value
    const obj = {
        a: 20,
        b: 30,
    };

    return (
      <div className="body">
        <h1>Body Component</h1>
        <h2>{number}</h2>
        <h2>{str}</h2>
        <h2>{obj.a} and {obj.b}</h2>
      </div>
    );
  }
  export default Body;
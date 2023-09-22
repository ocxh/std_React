import {useState, useRef} from "react";

function Body(){
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick = () => {
        alert(text);
        textRef.current.value = ""; //reset value with useRef
    };

    return (
      <div>
        <input ref={textRef} value={text} onChange={handleOnChange} />
        <button onClick={handleOnClick}>submit</button>
      </div>
    );
  }
  export default Body;
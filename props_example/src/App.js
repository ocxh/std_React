import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function ChildComponent(){
  return <div>child component</div>
}

function App() {
  const name = "Han-gyeol Kim"
  const location = "Seoul"
  return (
    <div className="App">
      <Header name={name} location={location}/>
      <Body name={name} location={location}/>
      <Footer>
        <ChildComponent />
      </Footer>
    </div>
  );
}

export default App;
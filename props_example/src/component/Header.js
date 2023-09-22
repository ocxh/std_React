function Header(props){
    const {name, location} = props;
    return (
      <header>
        <h1>name: {name} location: {location}</h1>
      </header>
    );
  }
  export default Header;
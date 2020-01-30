// https://github.com/delprzemo/react-cheatsheet/blob/master/README.md
const value = "Hello World"
const element = <p>{value}</p>
function addNumbers(x,y){
  return x+y
}      
const element1 = <div>{addNumbers(10,20)}</div>
const img = "https://www.gstatic.com/webp/gallery3/1.png"
const imgElement = <img src={img} />
function Welcome(props){
  return <div>Hello, {props.name}</div>
}
function SomeElement(props){
  const show = props.isShowed
  if(show){
    return <h1>Here is a Element</h1>
  }else {
    return <div></div>
  }
}


class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
    }
    this.textInput = React.createRef()
  }
  focusTextInput=()=>{
        this.textInput.current.focus();
  }
  onClick=(e)=>{
    e.preventDefault()
    console.log(this)
  }
  render(){
    return(
      <div>
        <SomeElement isShowed="" />
        <a href="https://www.w3schools.com" onClick={(e)=>this.onClick(e)} >Click me!</a>
        <Welcome name="venkatesh" />
        <h1>Welcome...123!</h1>
        <p>value:  {value}</p>
        <p>Element : {element}</p>
        <p>Element1:{element1}</p>
        <p>Image: {imgElement}</p>
        <div ref={this.element}>Welcome</div>
        <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
      </div>  
    )
  }
}



ReactDOM.render(<App />, mountNode);
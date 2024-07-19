

function App(props) {
const hello = () => alert("hello react");

  return (
    <>
    <div className="container">
    <h1 className="text-6xl font-bold text-teal-600">Hello world { 5 + "5" }</h1>
    <button onClick={hello} >click me {props.type}</button>
    </div>
    </>
  )
}

export default App

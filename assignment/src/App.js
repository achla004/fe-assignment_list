import './App.css';
import CelebritiesList from "./celebrities";
import celebrities from "./celebrities.json";

console.log("celebrity:",celebrities)

function App() {
  return (
    <div className="App">
      <h1> FactWise Assesment Visual Reference</h1>
      {celebrities?.map((celebrity) => 
        <CelebritiesList celebrity={celebrity}/>
      )}

    
    </div>
  );
}

export default App;

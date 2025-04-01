import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://app7-a9fucccqdua6h4bb.centralindia-01.azurewebsites.net/customerInfo"
      )
      .then((response) => {
        console.log(response.data && response.data.recordset);
        setData(response.data ? response.data.recordset : []);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello Azure Devops</header>

      {data.length > 0 &&
        data.map((ele) => {
          return <text href="#/action-1">{ele.firstName}</text>;
        })}
    </div>
  );
}

export default App;

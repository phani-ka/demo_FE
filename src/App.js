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
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">Customer Information</header>
      
      {data.length > 0 ? (
        <table className="customer-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {data.map((customer, index) => (
              <tr key={index}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No customer data available</p>
      )}
    </div>
  );
}

export default App;

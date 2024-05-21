
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [tema, SetTema] = useState([]);
  const [szavak, SetSzavak] = useState([]);
  const [valasztas, SetValasztas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/szavak")
    .then((response)=> response.json())
      .then((data) => SetSzavak(data))
      .then((error) => console.error("SetSzavak Error",error));
      fetch("http://localhost:8000/api/tema")
      .then((response)=> response.json())
      .then((data) => SetTema(data))
      .then((error) => console.error("SetTema Error",error));
    

  },[]);
  const Valasztas = (e)=>{
    
    SetValasztas(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
    <div className="container mt-3">
      <label htmlFor="tema">Válasz témát!</label>
      <select onChange={Valasztas} name="tema" id="tema">
      <option></option>
      {tema.map((tema) => 
        <option key={tema.id} value={tema.id}>{tema.temanev}</option>
      )}
      </select>
        <div className="col-lg-12">
        <table className="table">
        
        <tbody>
          <tr>
            <th >Angol</th>
            <th >Magyar</th>
            <th >Visszajelzés</th>
          </tr>
          {szavak.filter((value)=>{
            return Number(value.temaId) === Number(valasztas) || Number(valasztas) ===Number(null);
          }).map((szot,key) => 
             <tr key={key}>
              <th>{szot.angol}</th>
              <th><input type="text"  placeholder={szot.magyar}/></th>
              <th> </th>
            </tr>
          )}
          </tbody>
        </table>
        </div>
        </div>
    </div>
  );
}

export default App;

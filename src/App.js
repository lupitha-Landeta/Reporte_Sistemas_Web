import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Pdf from "react-to-pdf";
import './App.css';

const ref = React.createRef();

function App() {
  return (
    <div className="container">
      <h1>Exportando datos en REACT </h1>
      <h2>Agenda</h2>
      <hr/>
      <table class="table" id="table-to-xls">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
            <th scope="col">Dirección</th>
            <th scope="col">Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Guadalupe</td>
            <td>2361037116</td>
            <td>Carretera Tehuacan-Teotitlan </td>
            <td>Familiar </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Samaria</td>
            <td>2369086785</td>
            <td>San José Tilapan</td>
            <td>Amigo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Marcela</td>
            <td>2367802245</td>
            <td>Coxcatlan</td>
            <td>Compañero de trabajo </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Patrick</td>
            <td>2382345632</td>
            <td>Zincatepec</td>
            <td>Amigo</td>
          </tr>
      </tbody>
    </table>

    <div ref={ref}>
     
      <p>Con esta opcion puedes descargar la informacion en formato PDF o Excel</p>
    </div>
    
    <table>
        <tr>
          <td><h3>Exportar en Excel</h3></td> 
          <td><h3>Exportar en PDF</h3></td>
        </tr>
        <tr>
          <td>
          <ReactHTMLTableToExcel 
            id="table-to-xls" //id se le coloca a la tabla
            className="btn btn-success" //es el nombre del boton
            table="table-to-xls" //nombre de la tabla y es igual al del id
            filename="tablexls" //nombre del archivo
            sheet="tablexls" //nombre de la hoja
            //nombre del boton
            buttonText="Descargar .XLS"/>  
            </td>
          <td>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button className="btn btn-danger" onClick={toPdf}>Descargar .PDF</button>}
            </Pdf>

          </td>
        </tr>

      </table>

    </div>
  );
}

export default App;

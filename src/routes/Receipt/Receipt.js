import { React } from "react";
import "./Receipt.css";

function Receipt() {
  return (
    <div className="containerPrincipalReceipt">
      <div className="header">
        <div>
          <h4>ENTRETIEN MÉNAGER</h4>
          <h4>EDNA TRUJILLO</h4>
        </div>
        <div>
          <p>Receipts</p>
          <p>No. 0000002</p>
        </div>
      </div>
      <div className="blue-header">
        <div className="space-between">
          <p className="padding-right">REÇU DE: </p>
          <p>Entretien Ménage Emmanuel</p>
        </div>
        <div className="space-between">
          <p className="padding-right">DATE:</p>
          <p>{today}</p>
        </div>
      </div>
      <br />
      <div className="content">
        <div className="flex">
          <p>MONTANT DÉCAISSÉ:</p>
          <input type="number" name="dollar" className="width-40px margin-left-2" /> 
          <p className="margin-left-2">CAD</p>
        </div>
        <hr />
        <div className="flex">
          <p>EXPÉDIÉ À:</p>
          <input type="text" name="expide" className="width-180px margin-left-2" />
        </div>
        <hr />
        <div className="flex">
          <p>PURPOSE:</p>
          <select className="margin-left-2">
            <option value="">--Please choose an option--</option>
            <option value="25">25 dollars l’heure sans les produits </option>
            <option value="30">30 dollars l’heure avec les produits</option>
          </select>
        </div>
      </div>
    </div>
  );
}

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

export { Receipt };

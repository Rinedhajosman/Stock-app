import React, { Fragment, useState } from "react";
import data from "../drug.json";
import EditRow from "./EditRow";
import ReadRow from "./ReadRow";

function Table() {
const [drugs, setdrugs] = useState(data);

const [addFormData, setaddFormData] = useState({
id: "",
ilac: "",
adet: "",
});

const [editFormData, setEditFormData] = useState({
id: "",
ilac: "",
adet: "",
});

const [editDrugsID, setEditDrugsId] = useState(null);

const handleAddFormChange = (event) => {
event.preventDefault();

const fieldName = event.target.getAttribute("name");
const fieldValue = event.target.value;

const newFormData = { ...addFormData };
newFormData[fieldName] = fieldValue;

setaddFormData(newFormData);
};

const handleEditFormChange = (event) => {
event.preventDefault();

const fieldName = event.target.getAttribute("name");
const fieldValue = event.target.value;

const newFormData = { ...editFormData };

newFormData[fieldName] = fieldValue;
setEditFormData(newFormData);
};

const handleAddFormSubmit = (event) => {
event.preventDefault();

const newDrug = {
    id: addFormData.id,
    ilac: addFormData.ilac,
    adet: addFormData.adet,
};
const newDrugs = [...drugs, newDrug];
setdrugs(newDrugs);
};

const handleEditFormSubmit = (event) => {
event.preventDefault();

const editedDrug = {
    id: editDrugsID,
    ilac: editFormData.ilac,
    adet: editFormData.adet,
};

const newDrugs = [...drugs];

const index = drugs.findIndex((drug) => drug.id === editDrugsID);
newDrugs[index] = editedDrug;
setdrugs(newDrugs);
setEditDrugsId(null);
};

const handleEditClick = (event, drug) => {
event.preventDefault();
setEditDrugsId(drug.id);

const formValues = {
    id: drug.id,
    ilac: drug.ilac,
    adet: drug.adet,
};
setEditFormData(formValues);
};


const handleDeleteClick = (drugId) => {
    const newDrugs = [...drugs];

    const index = drugs.findIndex((drug) => drug.id === drugId);

    newDrugs.splice(index, 1);

    setdrugs(newDrugs);
  };

return (
<div className="app-container">
    <form onSubmit={handleEditFormSubmit}>
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>İLAÇ</th>
            <th>ADET</th>
            <th>Düzenle</th>
            <th>Sil</th>
        </tr>
        </thead>
        <tbody>
        {drugs.map((drug) => (
            <Fragment>
            {editDrugsID === drug.id ? (
                <EditRow
                editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                />
            ) : (
                <ReadRow
                drug={drug}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                ></ReadRow>
            )}
            </Fragment>
        ))}
        </tbody>
    </table>
    </form>

    <h2>Yeni bir ilaç ekle</h2>
    <form onSubmit={handleAddFormSubmit}>
    <input
        type="number"
        name="id"
        required="required"
        placeholder="ID"
        onChange={handleAddFormChange}
    ></input>
    <input
        type="text"
        name="ilac"
        required="required"
        placeholder="İLAÇ"
        onChange={handleAddFormChange}
    ></input>
    <input
        type="number"
        name="adet"
        required="required"
        placeholder="ADET"
        onChange={handleAddFormChange}
    ></input>

    <button type="submit">Ekle</button>
    </form>
</div>
);
}

export { Table };

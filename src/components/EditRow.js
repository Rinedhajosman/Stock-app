import React from "react";

const EditRow = ({editFormData , handleEditFormChange}) => {
    return (
        <tr>
        <td>
            <input
            type="text"
            required="requeired"
            placeholder="ID"
            name="id"
            value={editFormData.id}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <input
            type="text"
            required="requeired"
            placeholder="İLAÇ"
            name="ilac"
            value={editFormData.ilac}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <input
            type="text"
            required="requeired"
            placeholder="ADET"
            name="adet"
            value={editFormData.adet}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <button type="submit">Kaydet</button>
        </td>
        </tr>
    );
};

export default EditRow;

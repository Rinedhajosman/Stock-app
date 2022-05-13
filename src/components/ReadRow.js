import React from 'react'

const ReadRow = ({drug, handleEditClick,handleDeleteClick})=> {
  return (
          <tr>
            <td>{drug.id}</td>
            <td>{drug.ilac}</td>
            <td>{drug.adet}</td>
           
            <td>
              <button type='button' onClick={(event)=>handleEditClick(event,drug)}>Düzenle</button>
            </td>
            <td>
              <button type='button' onClick={()=> handleDeleteClick(drug.id)}>Sil</button>
            </td>
        </tr>
  )
}

export default ReadRow;
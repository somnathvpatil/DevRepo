import React from 'react'
import { useLoaderData, json } from 'react-router-dom';
import data from './../data/Kdata copy.json';

export default function JanamaKDetails() {  
  const dataJanmaKDetails = useLoaderData();
  console.log("dataJanmaKDetails",dataJanmaKDetails);
  return (
    
<>
<div>
           
        </div>
  <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button Hometab" style={{backgroundColor:'#c9c7be', lineHeight: '5px'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Customer Information
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
        <table className="table  table-borderless">
        <tbody>
          <tr>
            <td><b>FirstName :</b>  &emsp;{dataJanmaKDetails[0].firstName}</td>
            <td><b>Gender :</b>  &emsp;{dataJanmaKDetails[0].gender}</td>
            <td><b>Email ID :</b>  &emsp;{dataJanmaKDetails[0].email}</td>
          </tr>
          <tr>
            <td><b>Middle Name :</b>   &emsp;{dataJanmaKDetails[0].middelName}</td>
            <td><b>Birth Place :</b>  &emsp;{dataJanmaKDetails[0].datePlace}</td>
            <td><b>Date & Time :</b>  &emsp;{dataJanmaKDetails[0].dateBirth}</td>
          </tr>
          <tr>
            <td><b>Last Name :</b>  &emsp;{dataJanmaKDetails[0].lastName}</td>
            <td><b>Mobile No :</b>  &emsp;{dataJanmaKDetails[0].mobileNo}</td>
            <td><b>Address :</b>  &emsp;{dataJanmaKDetails[0].address2}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
  {dataJanmaKDetails[1].map((newKunaliGenData,index) => (
         <div className="accordion-item">
         <h2 className="accordion-header">
           <button className="accordion-button collapsed Hometab"  style={{backgroundColor:'#c9c7be', lineHeight: '5px'}} type="button" data-bs-toggle="collapse" 
           data-bs-target={`#panelsStayOpen-${index}`}  aria-expanded="false" aria-controls={`panelsStayOpen-${index}`}>
           {newKunaliGenData.name}
           </button>
         </h2>
        { newKunaliGenData.values.map((k_lbl_dtl) => (
          <div id={`panelsStayOpen-${index}`} className="accordion-collapse collapse">
          <div className="accordion-body">
          <strong>{k_lbl_dtl.label}</strong>
                &emsp;{k_lbl_dtl.details}
              <br />              
            </div>  
          </div>
         ))}
       </div>
  ))}
</div>
</>
  )
}

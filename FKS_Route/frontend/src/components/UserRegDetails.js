import { React, useState} from 'react';
import { Table } from 'react-bootstrap';
import {
    Form,
    useLoaderData    
  } from 'react-router-dom';


export default function UserRegDetails() {
  const resUserRegData = useLoaderData();
  return (
    <>
     <Form method="post">
    <div className="row mt-2">
      <h3 style={{textAlign: 'center'}}> Register Customer Details </h3>
      </div>
      <div className="row mt-2">
      <Table striped bordered hover style={{maxWidth: '100%'}}>
         <thead>
            <tr>
                <th>id</th>
                <th>FirstName</th>
                <th>MiddelName</th>
                <th>LastName</th>
                <th>DateBirth</th>
            </tr>
         </thead>
         <tbody>
         {resUserRegData.map((resUserReg) => (
           <tr>
             <td key={resUserReg.id}>
             <div className="form-check">
              <input className="form-check-input" type="radio" name="resUserReg" id={resUserReg.custId} value={resUserReg.custId}/>             
            </div>
             </td>
            <td>{resUserReg.firstName}</td>
            <td>{resUserReg.middelName}</td>
            <td>{resUserReg.lastName}</td>
            <td>{resUserReg.dateBirth}</td>
          </tr>
        ))}
         </tbody>
      </Table>

    </div>
     <div className="row mt-3">
        <div className="mb-2">
              <div   style={{float: 'right'}}>                      
                  <button  className="btn btn-outline-secondary btn-lg">Generate Kundali</button>
                </div>          
        </div>    
    </div>
    </Form>
    </>
  );
}
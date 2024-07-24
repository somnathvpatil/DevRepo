import { React, useState} from 'react';
import { Table } from 'react-bootstrap';
import {
    Form,
    useLoaderData    
  } from 'react-router-dom';

  import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';
  
export default function BlogPostRegDetails() {
  const resBlogRegData = useLoaderData();
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }
  return (
    <>
     <Form method="post">
    <div className="row mt-2">
      <h3 style={{textAlign: 'center'}}> Blog Post Details </h3>
      </div>
      <div className="row mt-2">
      <Table striped bordered hover style={{maxWidth: '100%'}}>
         <thead>
            <tr>
                <th>Id</th>
                <th>Delete</th>
                <th>Blog Date</th>
                <th>Section</th>
                <th>Blog By Name</th>
                <th>Description</th>
            </tr>
         </thead>
         <tbody>
         {resBlogRegData.map((resBlogReg) => (
           <tr>
             <td key={resBlogReg.blogId}>
             <div className="form-check">
              <input className="form-check-input" type="radio" name="resUserReg" id={resBlogReg.blogId} value={resBlogReg.blogId}/>             
            </div>
             </td>
             
             <td>          <button onClick={startDeleteHandler}>{resBlogReg.title}</button></td>
            <td>{resBlogReg.blogDate}</td>
            <td>{resBlogReg.section}</td>
            <td>{resBlogReg.blogByName}</td>
            
            <td>{resBlogReg.description}</td>
          </tr>
        ))}
         </tbody>
      </Table>

    </div>
     <div className="row mt-3">
        <div className="mb-2">
              <div   style={{float: 'right'}}>                      
                  <button  className="btn btn-outline-secondary btn-lg">Update Blog</button>
                </div>          
        </div>    
    </div>
    </Form>
    </>
  );
}
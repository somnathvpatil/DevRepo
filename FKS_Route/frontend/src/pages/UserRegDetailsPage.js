import React from 'react';
import UserRegDetails from '../components/UserRegDetails';
import {
    json,
    redirect
  } from 'react-router-dom';
export default function UserRegDetailsPage() {
  return (<UserRegDetails/>
  )
}


export async function loader({ request, params }) {
//  const id = params.eventId;

  //const response = await fetch('http://localhost:8080/events/' + id);
  const response = await fetch('http://localhost:3001/getAllCustomer/');
  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resUserRegData = await response.json();
    console.log("resUserRegData",resUserRegData);
    return resUserRegData;
  }
}

export async function action({ request , params }) {
  const data = await request.formData();    
  return redirect('/janmak/'+data.get("resUserReg"));
}

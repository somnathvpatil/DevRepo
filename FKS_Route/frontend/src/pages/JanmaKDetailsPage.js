import React from 'react';
import JanamaKDetails from '../components/JanamaKDetails';
import {
  json
} from 'react-router-dom';

export default function JanmaKDetailsPage() {
  return <JanamaKDetails />
}
export async function loader({ request, params }) {
  let custId =params.custId;
  const responseKKDetails = await fetch('http://localhost:3000/getkundaliAndCustData/'+custId);
  console.log(responseKKDetails) ;
    if (!responseKKDetails.ok) {
      throw json(
        { message: 'Could not fetch details for selected customer K.' },
        {
          status: 500,
        }
      );
    } else {
      
      const resKData = await responseKKDetails.json();    
      console.log(resKData) ;
      return resKData;
    }  
}
  
import React from 'react';
import UserReg from '../components/UserReg';

import { getAuthToken } from '../util/auth';
import {
    json,
    redirect
  } from 'react-router-dom';
  
export default function UserRegPage() {
  return <UserReg/>
}


export async function action({ request , params }) {
    const method = request.method;
    const data = await request.formData();
  
    const customerData = {
      firstName: data.get('firstName'),
      middelName: data.get('middelName'),
      lastName: data.get('lastName'),
      dateBirth: data.get('dateBirth'),
      gender: data.get('gender'),
      userName: data.get('userName'),
      datePlace: data.get('datePlace'),
      email: data.get('email'),
      pwd: data.get('pwd'),
      address1: data.get('address1'),
      mobileNo: data.get('mobileNo'),
      address2: data.get('address2'),
      city: data.get('city'),
      state: data.get('state'),
      zip: data.get('zip')
    };
  
//    let url = 'http://localhost:3000/saveCustomer';
    let url = 'http://localhost:3001/saveCustomer';
  
    if (method === 'PATCH') {
      const eventId = params.eventId;
      url = 'http://localhost:3001/saveCustomer/' + eventId;
    }
  
    const token = getAuthToken();
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(customerData),
    });
  
    if (response.status === 422) {
      return response;
    }
  
    if (!response.ok) {
      throw json({ message: 'Could not save Customer Details.' }, { status: 500 });
    }
  
    return redirect('/googlePay');
  }
  

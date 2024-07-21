import React from 'react'
import GooglePay from '../components/GooglePay'
import {
  json,
  redirect
} from 'react-router-dom';
import { getAuthToken } from '../util/auth';
export default function GooglePayPage() {
  return <GooglePay/>
}
export async function action({ request , params }) {
  //const data = await request.formData();    
  const emailId = params.emailId;
  const mailOptions= {
    from: 'som.vpatil@gmail.com',
    to: emailId,
    subject: 'By Kundali Service',
    text: 'Sending mail you will get Kundali within 15days by courier'
    //html: '<h1>Welcome</h1><p>That was easy!</p>'
};
  let url = 'http://localhost:3001/sendMail';
  const token = getAuthToken();
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(mailOptions),
  });

  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: 'Could not Sent email please check email configuration.' }, { status: 500 });
  }
  return redirect('/');
}

import React from 'react';
import BlogPostRegDetails from '../components/BlogPostRegDetails';
import {
    json,
    redirect
  } from 'react-router-dom';
export default function BlogRegDetailsPage() {
  return (<BlogPostRegDetails/>)
}


export async function loader({ request, params }) {
//  const id = params.eventId;

  //const response = await fetch('http://localhost:8080/events/' + id);
  const response = await fetch('http://localhost:3001/getAllBlogDetails/');
  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resBlogRegData = await response.json();
    console.log("resBlogRegData",resBlogRegData);
    return resBlogRegData;
  }
}

export async function action({ request , params }) {
  const data = await request.formData();    
  return redirect('/blogPost/'+data.get("resUserReg"));
}

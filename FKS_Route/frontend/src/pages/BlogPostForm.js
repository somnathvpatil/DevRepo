import React from 'react';
import NewBlogPostForm from '../components/NewBlogPostForm';
import { getAuthToken } from '../util/auth';
import {
    json,
    redirect
  } from 'react-router-dom';

export default function BlogPostForm() {
  return <NewBlogPostForm/>
}

export async function action({ request , params }) {
  const method = request.method;
  const data = await request.formData();

  const blogData = {
    blogByName:data.get('blogByName'),
	blogDate:data.get('blogDate'),
	title:data.get('title'),
    section:data.get('section'),
    description:data.get('description'),
  };
console.log("blogData",blogData);
//    let url = 'http://localhost:3000/saveCustomer';
  let url = 'http://localhost:3001/saveBlogDetails';


  const token = getAuthToken();
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(blogData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save Customer Details.' }, { status: 500 });
  }

  return redirect('/');  
}
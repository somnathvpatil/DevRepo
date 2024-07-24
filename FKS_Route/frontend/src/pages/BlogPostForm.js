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
  const blogId = params.blogId;
  console.log("blogId",blogId);
  const blogData = {
    blogId:blogId,
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

export async function loader({ request, params }) {
  const blogId = params.blogId;
  console.log("blogId",blogId);
    const response = await fetch('http://localhost:3001/getBlogById/'+blogId);
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
  
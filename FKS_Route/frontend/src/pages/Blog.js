import React,{ Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import BlogForm from '../components/BlogForm'

export default function Blog({sec1,sec2}) {
  const { blogs } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={blogs}>
        {(loadedBlogs) => <BlogForm blogs={loadedBlogs} sec1={sec1} sec2={sec2}/>}
      </Await>
    </Suspense>
  );
}


async function loadBlogs() {
  const response = await fetch('http://localhost:3001/getBlogByDate/2024-07-14');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export function loader() {
  return defer({
    blogs: loadBlogs(),
  });
}
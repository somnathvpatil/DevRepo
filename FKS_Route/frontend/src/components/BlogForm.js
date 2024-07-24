import React from 'react'
import classes from './BlogForm.module.css';
export default function BlogForm({blogs,sec1,sec2}) {
  return (
<>
<div className="col-xl-2 col-lg-2 ">
      <div className="box-wrapper sidebar__widget">
      <div className="sidebar__widget-head">
         <h4 className="sidebar__widget_title">Blog-1</h4>
      </div>
      <div className="sidebar__widget-content">
    {blogs.map((bData) => (
        <article>
        <h5>Title : {bData.title}</h5>
        <p>BlogDate :{bData.blogDate}</p>
        <p>BlogPostBy :{bData.blogByName}</p>
        <p>Section :{bData.section}</p>
        <p>Description :{bData.description}</p>       
      </article>
    ))}
      </div>
      </div>
      <div className="box-wrapper sidebar__widget">
      <div className="sidebar__widget-head">
         <h4 className="sidebar__widget_title">Blog-2</h4>
      </div>
      <div className="sidebar__widget-content">
    {blogs.map((bData) => (
        <article>
        <h5>Title : {bData.title}</h5>
        <p>BlogDate :{bData.blogDate}</p>
        <p>BlogPostBy :{bData.blogByName}</p>
        <p>Section :{bData.section}</p>
        <p>Description :{bData.description}</p>       
      </article>
    ))}
      </div>
      </div>
    </div>
 </>
  )
}

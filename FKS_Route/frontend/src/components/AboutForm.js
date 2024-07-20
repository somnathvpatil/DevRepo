import { React } from 'react';
import classes from './AboutForm.module.css';
import { Table } from 'react-bootstrap';
import {
    Form
  } from 'react-router-dom';

export default function AboutForm() {
  return (
    <>
   
<div className={classes.about_section}>
  <h1>About Us</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 style={{textAlign:'center'}}>Our Team</h2>
<div className={classes.row}>
  <div className={classes.column}>
    <div className={classes.card}>
      <img src="/kimg/team1.jpg" alt="Jane"   style={{width:'100%'}}/>
      <div className={classes.container}>
        <h2>Jane Doe</h2>
        <p className={classes.title}>CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className={classes.button}>Contact</button></p>
      </div>
    </div>
  </div>
  <div className={classes.column}>
    <div className={classes.card}>
      <img src="/kimg/team2.jpg" alt="Mike" style={{width:'100%'}}/>
      <div className={classes.container}>
        <h2>Mike Ross</h2>
        <p className={classes.title}>Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className={classes.button}>Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className={classes.column}>
  <div className={classes.card}>
      <img src="/kimg/team3.jpg" alt="John" style={{width:'100%'}}/>
      <div className={classes.container}>
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className={classes.button}>Contact</button></p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

import React from 'react'
import data from './../data/Kdata.json';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from './../data/sample.pdf'
export default function JanamaKDetails(props) {
  return (
    
<>
<div>
            <Document file={pdfFile}>
                <Page pageNumber={1} />
            </Document>
        </div>
  <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button Hometab" style={{backgroundColor:'#c9c7be', lineHeight: '5px'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Customer Information
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
        <table className="table  table-borderless">
        <tbody>
          <tr>
            <td><b>FirstName :</b> Somnath</td>
            <td><b>Gender :</b> Male</td>
            <td><b>Email ID :</b> mr.somnathvpatil@gmail.com</td>
          </tr>
          <tr>
            <td><b>Middle Name :</b>  Vitthal</td>
            <td><b>Birth Place :</b> Jalgaon</td>
            <td><b>Date & Time :</b> 27thAug1984</td>
          </tr>
          <tr>
            <td><b>Last Name :</b> Patil</td>
            <td><b>Mobile No :</b> 9404494344</td>
            <td><b>Mobile No1 :</b> 9404494344</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed Hometab"  style={{backgroundColor:'#c9c7be', lineHeight: '5px'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      ग्रहफलादेेेश
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
    <div className="accordion-body">
        <strong>रवि फलादेश </strong>
        {
        data.raviphladesh_1.map((raviphladesh) => {
            if(raviphladesh.id===props.jData.suryaK) {
              return  raviphladesh.name;
            }
            return  ''; 
         })}
        <br />
        <br />
        <strong>चंद्रफलादेश.</strong> 
        {data.chandraphladesh_2.map((chndra) => {
            if(chndra.id===props.jData.chndraK) {
              return  chndra.name;
            } 
            return  ''; 
         })}
        <br />
        <br />
        <strong>मंगलफलादेश.</strong> 
        {data.mangalphladesh_3.map((mangal) => {
            if(mangal.id===props.jData.mangalK) {
              return  mangal.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>बुधफलादेश.</strong> 
        {data.budhaphladesh_4.map((budha) => {
            if(budha.id===props.jData.budhaK) {
              return  budha.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>गुरूफलादेश.</strong> 
        {data.guruphladesh_5.map((guru) => {
            if(guru.id===props.jData.guruK) {
              return  guru.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>शुक्रफलादेश.</strong> 
        {data.shukraphladesh_6.map((shukra) => {
            if(shukra.id===props.jData.shukraK) {
              return  shukra.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>शनिफलादेश.</strong> 
        {data.shaniphladesh_7.map((shani) => {
            if(shani.id===props.jData.shaniK) {
              return  shani.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>राहुफलादेश.</strong> 
        {data.rahuphladesh_8.map((rahup) => {
            if(rahup.id===props.jData.rahuK) {
              return  rahup.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>केतूफलादेश.</strong> 
        {data.ketuphladesh_9.map((ketu) => {
            if(ketu.id===props.jData.ketuK) {
              return  ketu.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>हर्शलफलादेश.</strong> 
        {data.harshalphladesh_10.map((harshal) => {
            if(harshal.id===props.jData.harshalK) {
              return  harshal.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>नेपच्यूनफलादेश.</strong> 
        {data.nepphladesh_11.map((nep) => {
            if(nep.id===props.jData.nepK) {
              return  nep.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>प्ल्यूटफलादेश.</strong> 
        {data.phladesh_12.map((plu) => {
            if(plu.id===props.jData.pluK) {
              return  plu.name;
            } 
            return  ''; 
         })}         
      </div>  
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed Hometab"  style={{backgroundColor:'#c9c7be', lineHeight: '5px'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      भावेंशांचे फलादेेेश
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
    <div className="accordion-body">
        <strong>लग्नेशफलविचार </strong>
        {
        data.meshphladesh_1.map((meshphladesh) => {
            if(meshphladesh.id===props.jData.meshK) {
              return  meshphladesh.name;
            }
            return  ''; 
         })}
        <br />
        <br />
        <strong>द्वितीसयेशफलविचार.</strong> 
        {data.rushabhphladesh_2.map((rushabhphladesh) => {
            if(rushabhphladesh.id===props.jData.rushabhK) {
              return  rushabhphladesh.name;
            } 
            return  ''; 
         })}
        <br />
        <br />
        <strong>तृतीयंशफलविचार.</strong> 
        {data.mithuenphladesh_3.map((mithuen) => {
            if(mithuen.id===props.jData.mithuenK) {
              return  mithuen.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>चतुर्थेशफलविचार.</strong> 
        {data.karkaphladesh_4.map((karka) => {
            if(karka.id===props.jData.karkaK) {
              return  karka.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>पंचमेशफलविचार.</strong> 
        {data.seehaphladesh_5.map((seeha) => {
            if(seeha.id===props.jData.seehaK) {
              return  seeha.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>षष्ठेशफलविचार.</strong> 
        {data.kanyaphladesh_6.map((kanya) => {
            if(kanya.id===props.jData.kanyaK) {
              return  kanya.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>सप्तमेशफलविचार.</strong> 
        {data.tulaphladesh_7.map((tula) => {
            if(tula.id===props.jData.tulaK) {
              return  tula.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>अष्ठमेशफलविचार.</strong> 
        {data.vrashukphladesh_8.map((vrashu) => {
            if(vrashu.id===props.jData.vrashukK) {
              return  vrashu.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>नवमेशफलविचार.</strong> 
        {data.dhanuphladesh_9.map((dhanu) => {
            if(dhanu.id===props.jData.dhanuK) {
              return  dhanu.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>दशमेशफलविचार.</strong> 
        {data.makarphladesh_10.map((makar) => {
            if(makar.id===props.jData.makarK) {
              return  makar.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>एकादशेशफलविचार.</strong> 
        {data.kumbhphladesh_11.map((kum) => {
            if(kum.id===props.jData.kumbhK) {
              return  kum.name;
            } 
            return  ''; 
         })}
         
         <br />
        <br />
        <strong>द्वादशेशफलविचार.</strong> 
        {data.minphladesh_12.map((minK) => {
            if(minK.id===props.jData.minK) {
              return  minK.name;
            } 
            return  ''; 
         })}         
      </div>
    </div>
  </div>
</div>
</>
  )
}

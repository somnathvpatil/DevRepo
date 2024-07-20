import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import classes from './JanmaKForm-module.css';
import Alert from './Alert';
export default function Janam(props) {
const [surya, setSurya] = useState('');
const [chndra, setChndra] = useState('');
const [mangal, setMangal] = useState('');
const [budha, setBudha] = useState('');
const [guru, setGuru] = useState('');
const [shukra, setShukra] = useState('');
const [shani, setShani] = useState('');
const [rahu, setRahu] = useState('');
const [ketu, setKetu] = useState('');
const [harshal, setHarshal] = useState('');
const [nep, setNep] = useState('');
const [plu, setPlu] = useState('');

const [mesh, setMesh] = useState('');
const [rushabh, setRushabh] = useState('');
const [mithuen, setMithuen] = useState('');
const [karka, setKarka] = useState('');
const [seeha, setSeeha] = useState('');
const [kanya, setKanya] = useState('');
const [tula, setTula] = useState('');
const [vrashuk, setVrashuk] = useState('');
const [dhanu, setDhanu] = useState('');
const [makar, setMakar] = useState('');
const [kumbh, setKumbh] = useState('');
const [min, setMin] = useState('');
 /*
सूर्य
चंद्र
मंगल
बुध
गुरू
शुक्र
शनि
राहु
केतु
हर्षल
नेप
प्लू
surya
mesh
chndra
rushabh
mangal
mithuen
budha
karka
guru
seeha
shukra
kanya
shani
tula
rahu
vrashuk
ketu
dhanu
harshal
makar
nep
kumbh
plu
min


रविफलादेश
चंद्रफलादेश
मंगलफलदेश
बुधफलादेश
गुरूफलादेश
शुक्रफलादेश
शनिफलादेश
राहुफलादेश
केतूफलादेश
हर्शलफलादेश
नेपच्यूनफलादेश
प्ल्यूटफलादेश
 लग्नेशफलविचार 
 द्वितीसयेशफलविचार 
 तृतीयंशफलविचार 
 चतुर्थेशफलविचार
 पंचमेशफलविचार
 षष्ठेशफलविचार 
 सप्तमेशफलविचार
 अष्ठमेशफलविचार
 नवमेशफलविचार
 दशमेशफलविचार
 एकादशेशफलविचार
 द्वादशेशफलविचार
 */
const [label_1, setlabel_1] = useState('');
const [label_2, setlabel_2] = useState('');
const [label_3, setlabel_3] = useState('');
const [label_4, setlabel_4] = useState('');
const [label_5, setlabel_5] = useState('');
const [label_6, setlabel_6] = useState('');
const [label_7, setlabel_7] = useState('');
const [label_8, setlabel_8] = useState('');
const [label_9, setlabel_9] = useState('');
const [label_10, setlabel_10] = useState('');
const [label_11, setlabel_11] = useState('');
const [label_12, setlabel_12] = useState('');

const [txt_label_1, setTxt_label_1] = useState('');
const [txt_label_2, setTxt_label_2] = useState('');
const [txt_label_3, setTxt_label_3] = useState('');
const [txt_label_4, setTxt_label_4] = useState('');
const [txt_label_5, setTxt_label_5] = useState('');
const [txt_label_6, setTxt_label_6] = useState('');
const [txt_label_7, setTxt_label_7] = useState('');
const [txt_label_8, setTxt_label_8] = useState('');
const [txt_label_9, setTxt_label_9] = useState('');
const [txt_label_10, setTxt_label_10] = useState('');
const [txt_label_11, setTxt_label_11] = useState('');
const [txt_label_12, setTxt_label_12] = useState('');
const [alert, setAlert] = useState(null);
const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5500);
  };

const submitKData = event => {
    props.toggleMode(surya,mesh,chndra,rushabh,mangal,mithuen,budha,karka,guru,seeha,shukra,kanya,shani,tula,rahu,vrashuk,ketu,dhanu,harshal,makar,nep,kumbh,plu,min);
};
const valRangeValidate =(event)=>{
let x=event.target.value;
    if(!(parseInt(x) >=1 && parseInt(x) <= 12)){
        //props.showAlert(event.target.title,"danger");
        //alert(event.target.title);
        event.target.value=""; 
        showAlert(event.target.title+' value is invalid , please enter valid value between 1 to 12', 'danger');
    }
}

const setKundliNo =(event)=>{
    event.preventDefault();
    let x=event.target.value;   
    var a = [];
    if(x >=1 && x <= 12){
        for (let i = 1; i <= 12; i++) {            
            a.push(x); 
            if(x>=12){
                x=1;
            }else{
                x++;
            }
        } 
        setlabel_1(a[0]);        
        setlabel_2(a[1]);
        setlabel_3(a[2]);
        setlabel_4(a[3]);
        setlabel_5(a[4]);
        setlabel_6(a[5]);
        setlabel_7(a[6]);
        setlabel_8(a[7]);
        setlabel_9(a[8]);
        setlabel_10(a[9]);
        setlabel_11(a[10]);
        setlabel_12(a[11]);
    }
    else{
        //props.showAlert(event.target.title,"danger");
        //alert(event.target.title);
        event.target.value=""; 
        showAlert(event.target.title+' Invalid value', 'danger');
        setEmptyLbl();
    }
}
const setKundliText =()=>{
   setTxtEmpty();
    setTxtSurya();
    setTxtChndra();
    setTxtMangal();
    setTxtBudha();
    setTxtGuru();
    setTxtShukra();
    setTxtShani();
    setTxtRahu();
    setTxtKetu();
    setTxtHarshal();
    setTxtNep();
    setTxtPlu();
}
const setTxtSurya =() =>{
    let lbl='सूर्य';
    console.log("surya",surya);
    if(surya==='1'){
        setTxt_label_1(lbl);
    }else if(surya==='2'){        
        setTxt_label_2(lbl);
    }else if(surya==='3'){
        setTxt_label_3(lbl);
    }else if(surya==='4'){
        setTxt_label_4(lbl);
    }else if(surya==='5'){
        setTxt_label_5(lbl);
    }else if(surya==='6'){
        setTxt_label_6(lbl);
    }else if(surya==='7'){
        setTxt_label_7(lbl);
    }else if(surya==='8'){
        setTxt_label_8(lbl);
    }else if(surya==='9'){
        setTxt_label_9(lbl);
    }else if(surya==='10'){
        setTxt_label_10(lbl);
    }else if(surya==='11'){
        setTxt_label_11(lbl);
    }else if(surya==='12'){
        setTxt_label_12(lbl);
    }else{
        showAlert('please enter सूर्य ग्रह value', 'danger');
    }
}
const setTxtChndra =() =>{
   let lbl='चंद्र';
   if(chndra==='1'){
       setTxt_label_1(lbl);
   }else if(chndra==='2'){
       
       setTxt_label_2(lbl);
   }else if(chndra==='3'){
       setTxt_label_3(lbl);
   }else if(chndra==='4'){
       setTxt_label_4(lbl);
   }else if(chndra==='5'){
       setTxt_label_5(lbl);
   }else if(chndra==='6'){
       setTxt_label_6(lbl);
   }else if(chndra==='7'){
       setTxt_label_7(lbl);
   }else if(chndra==='8'){
       setTxt_label_8(lbl);
   }else if(chndra==='9'){
       setTxt_label_9(lbl);
   }else if(chndra==='10'){
       setTxt_label_10(lbl);
   }else if(chndra==='11'){
       setTxt_label_11(lbl);
   }else if(chndra==='12'){
       setTxt_label_12(lbl);
    }else{
        showAlert('please enter चंद्र ग्रह value', 'danger');
    }
}
const setTxtMangal =() =>{
   let lbl='मंगल';
   if(mangal==='1'){
       setTxt_label_1(lbl);
   }else if(mangal==='2'){
       
       setTxt_label_2(lbl);
   }else if(mangal==='3'){
       setTxt_label_3(lbl);
   }else if(mangal==='4'){
       setTxt_label_4(lbl);
   }else if(mangal==='5'){
       setTxt_label_5(lbl);
   }else if(mangal==='6'){
       setTxt_label_6(lbl);
   }else if(mangal==='7'){
       setTxt_label_7(lbl);
   }else if(mangal==='8'){
       setTxt_label_8(lbl);
   }else if(mangal==='9'){
       setTxt_label_9(lbl);
   }else if(mangal==='10'){
       setTxt_label_10(lbl);
   }else if(mangal==='11'){
       setTxt_label_11(lbl);
   }else if(mangal==='12'){
       setTxt_label_12(lbl);
    }else{
        showAlert('please enter मंगल ग्रह value', 'danger');
    }
}
const setTxtBudha =() =>{
   let lbl='बुध';
   if(budha==='1'){
       setTxt_label_1(lbl);
   }else if(budha==='2'){
       
       setTxt_label_2(lbl);
   }else if(budha==='3'){
       setTxt_label_3(lbl);
   }else if(budha==='4'){
       setTxt_label_4(lbl);
   }else if(budha==='5'){
       setTxt_label_5(lbl);
   }else if(budha==='6'){
       setTxt_label_6(lbl);
   }else if(budha==='7'){
       setTxt_label_7(lbl);
   }else if(budha==='8'){
       setTxt_label_8(lbl);
   }else if(budha==='9'){
       setTxt_label_9(lbl);
   }else if(budha==='10'){
       setTxt_label_10(lbl);
   }else if(budha==='11'){
       setTxt_label_11(lbl);
   }else if(budha==='12'){
       setTxt_label_12(lbl);
    }else{
        showAlert('please enter बुध ग्रह value', 'danger');
    }
}
const setTxtGuru =() =>{
   let lbl='गुरू';
   if(guru==='1'){
       setTxt_label_1(lbl);
   }else if(guru==='2'){
       
       setTxt_label_2(lbl);
   }else if(guru==='3'){
       setTxt_label_3(lbl);
   }else if(guru==='4'){
       setTxt_label_4(lbl);
   }else if(guru==='5'){
       setTxt_label_5(lbl);
   }else if(guru==='6'){
       setTxt_label_6(lbl);
   }else if(guru==='7'){
       setTxt_label_7(lbl);
   }else if(guru==='8'){
       setTxt_label_8(lbl);
   }else if(guru==='9'){
       setTxt_label_9(lbl);
   }else if(guru==='10'){
       setTxt_label_10(lbl);
   }else if(guru==='11'){
       setTxt_label_11(lbl);
   }else if(guru==='12'){
       setTxt_label_12(lbl);
    }else{
        showAlert('please enter गुरू ग्रह value', 'danger');
    }
}
const setTxtShukra =() =>{
   let lbl='शुक्र';
   if(shukra==='1'){
       setTxt_label_1(lbl);
   }else if(shukra==='2'){       
       setTxt_label_2(lbl);
   }else if(shukra==='3'){
       setTxt_label_3(lbl);
   }else if(shukra==='4'){
       setTxt_label_4(lbl);
   }else if(shukra==='5'){
       setTxt_label_5(lbl);
   }else if(shukra==='6'){
       setTxt_label_6(lbl);
   }else if(shukra==='7'){
       setTxt_label_7(lbl);
   }else if(shukra==='8'){
       setTxt_label_8(lbl);
   }else if(shukra==='9'){
       setTxt_label_9(lbl);
   }else if(shukra==='10'){
       setTxt_label_10(lbl);
   }else if(shukra==='11'){
       setTxt_label_11(lbl);
   }else if(shukra==='12'){
       setTxt_label_12(lbl);
    }else{
        showAlert('please enter शुक्र ग्रह value', 'danger');
    }
}
const setTxtShani =() =>{
   let lbl='शनि';
   if(shani==='1'){
       setTxt_label_1(lbl);
   }else if(shani==='2'){       
       setTxt_label_2(lbl);
   }else if(shani==='3'){
       setTxt_label_3(lbl);
   }else if(shani==='4'){
       setTxt_label_4(lbl);
   }else if(shani==='5'){
       setTxt_label_5(lbl);
   }else if(shani==='6'){
       setTxt_label_6(lbl);
   }else if(shani==='7'){
       setTxt_label_7(lbl);
   }else if(shani==='8'){
       setTxt_label_8(lbl);
   }else if(shani==='9'){
       setTxt_label_9(lbl);
   }else if(shani==='10'){
       setTxt_label_10(lbl);
   }else if(shani==='11'){
       setTxt_label_11(lbl);
   }else if(shani==='12'){
       setTxt_label_12(lbl);
    }else{
        showAlert('please enter शनि ग्रह value', 'danger');
    }
}
const setTxtRahu =() =>{
   let lbl='राहु';
   if(rahu==='1'){
       setTxt_label_1(lbl);
   }else if(rahu==='2'){       
       setTxt_label_2(lbl);
   }else if(rahu==='3'){
       setTxt_label_3(lbl);
   }else if(rahu==='4'){
       setTxt_label_4(lbl);
   }else if(rahu==='5'){
       setTxt_label_5(lbl);
   }else if(rahu==='6'){
       setTxt_label_6(lbl);
   }else if(rahu==='7'){
       setTxt_label_7(lbl);
   }else if(rahu==='8'){
       setTxt_label_8(lbl);
   }else if(rahu==='9'){
       setTxt_label_9(lbl);
   }else if(rahu==='10'){
       setTxt_label_10(lbl);
   }else if(rahu==='11'){
       setTxt_label_11(lbl);
   }else if(rahu==='12'){
       setTxt_label_12(lbl);
    }else{
        showAlert('please enter राहु ग्रह value', 'danger');
    }
}
const setTxtKetu =() =>{
   let lbl='केतु';
   if(ketu==='1'){
       setTxt_label_1(lbl);
   }else if(ketu==='2'){       
       setTxt_label_2(lbl);
   }else if(ketu==='3'){
       setTxt_label_3(lbl);
   }else if(ketu==='4'){
       setTxt_label_4(lbl);
   }else if(ketu==='5'){
       setTxt_label_5(lbl);
   }else if(ketu==='6'){
       setTxt_label_6(lbl);
   }else if(ketu==='7'){
       setTxt_label_7(lbl);
   }else if(ketu==='8'){
       setTxt_label_8(lbl);
   }else if(ketu==='9'){
       setTxt_label_9(lbl);
   }else if(ketu==='10'){
       setTxt_label_10(lbl);
   }else if(ketu==='11'){
       setTxt_label_11(lbl);
   }else if(ketu==='12'){
       setTxt_label_12(lbl);
    }else{
        showAlert('please enter केतु ग्रह value', 'danger');
    }
}
const setTxtHarshal =() =>{
   let lbl='हर्षल';
   if(harshal==='1'){
       setTxt_label_1(lbl);
   }else if(harshal==='2'){       
       setTxt_label_2(lbl);
   }else if(harshal==='3'){
       setTxt_label_3(lbl);
   }else if(harshal==='4'){
       setTxt_label_4(lbl);
   }else if(harshal==='5'){
       setTxt_label_5(lbl);
   }else if(harshal==='6'){
       setTxt_label_6(lbl);
   }else if(harshal==='7'){
       setTxt_label_7(lbl);
   }else if(harshal==='8'){
       setTxt_label_8(lbl);
   }else if(harshal==='9'){
       setTxt_label_9(lbl);
   }else if(harshal==='10'){
       setTxt_label_10(lbl);
   }else if(harshal==='11'){
       setTxt_label_11(lbl);
   }else if(harshal==='12'){
       setTxt_label_12(lbl);
    }else{
        showAlert('please enter हर्षल ग्रह value', 'danger');
    }
}

const setTxtNep =() =>{
   let lbl='नेप';
   if(nep==='1'){
       setTxt_label_1(lbl);
   }else if(nep==='2'){       
       setTxt_label_2(lbl);
   }else if(nep==='3'){
       setTxt_label_3(lbl);
   }else if(nep==='4'){
       setTxt_label_4(lbl);
   }else if(nep==='5'){
       setTxt_label_5(lbl);
   }else if(nep==='6'){
       setTxt_label_6(lbl);
   }else if(nep==='7'){
       setTxt_label_7(lbl);
   }else if(nep==='8'){
       setTxt_label_8(lbl);
   }else if(nep==='9'){
       setTxt_label_9(lbl);
   }else if(nep==='10'){
       setTxt_label_10(lbl);
   }else if(nep==='11'){
       setTxt_label_11(lbl);
   }else if(nep==='12'){
       setTxt_label_12(lbl);
    }else{
        showAlert('please enter नेप ग्रह value', 'danger');
    }
}
const setTxtPlu =() =>{
   let lbl='प्लू';
   if(plu==='1'){
       setTxt_label_1(lbl);
   }else if(plu==='2'){       
       setTxt_label_2(lbl);
   }else if(plu==='3'){
       setTxt_label_3(lbl);
   }else if(plu==='4'){
       setTxt_label_4(lbl);
   }else if(plu==='5'){
       setTxt_label_5(lbl);
   }else if(plu==='6'){
       setTxt_label_6(lbl);
   }else if(plu==='7'){
       setTxt_label_7(lbl);
   }else if(plu==='8'){
       setTxt_label_8(lbl);
   }else if(plu==='9'){
       setTxt_label_9(lbl);
   }else if(plu==='10'){
       setTxt_label_10(lbl);
   }else if(plu==='11'){
       setTxt_label_11(lbl);
   }else if(plu==='12'){
       setTxt_label_12(lbl);
    }else{
        showAlert('please enter प्लू ग्रह value', 'danger');
    }
}
const setTxtEmpty =()=>{
   setTxt_label_1('');
   setTxt_label_2('');
   setTxt_label_3('');
   setTxt_label_4('');
   setTxt_label_5('');
   setTxt_label_6('');
   setTxt_label_7('');
   setTxt_label_8('');
   setTxt_label_9('');
   setTxt_label_10('');
   setTxt_label_11('');
   setTxt_label_12('');
}
const setEmptyLbl =()=> {
   setlabel_1('');        
   setlabel_1('');        
   setlabel_2('');
   setlabel_3('');
   setlabel_4('');
   setlabel_5('');
   setlabel_6('');
   setlabel_7('');
   setlabel_8('');
   setlabel_9('');
   setlabel_10('');
   setlabel_11('');
   setlabel_12(''); 
}
const setEmptyGraha =()=>{
   setSurya('');
   setChndra('');
   setMangal('');
   setBudha('');
   setGuru('');
   setShukra('');
   setShani('');
   setRahu('');
   setKetu('');
   setHarshal('');
   setNep('');
   setPlu('');
}
const setEmptyRashi =()=>{
   setMesh('');
   setRushabh('');
   setMithuen('');
   setKarka('');
   setSeeha('');
   setKanya('');
   setTula('');
   setVrashuk('');
   setDhanu('');
   setMakar('');
   setKumbh('');
   setMin('');
}
const eraseVal =()=>{
   setTxtEmpty();
   setEmptyLbl();
   setEmptyRashi();
   setEmptyGraha();
}
return (
<>
<Form method="post">
{
     <Alert alert={alert}/>
}
<div className="row" >
   <div className="col-7">
      <div className="ui-content">        
      <div id="tab" className="Hometab"> लग्न आलेख </div>
         
         <div className="ui-form-widget">
            <div className="hero-image">
               <img src="/kimg/KundliForm.jpg" width="100%" height="100%" alt="Vedic Astrology - Horoscope - Online Kundli Software"/>
               <div className="hero-text">
                    <input type="number" id="kNo" min="1" max="12" maxLength="2" onBlur={setKundliNo} tabIndex="27" title="लग्न आलेख" className="form-control  form-control-sm lagnaInput" placeholder="Lagna Kundali" />
                </div>
               <label className="label_common label_1">{label_1}</label>
               <label className="label_common label_2">{label_2}</label>
               <label className="label_common label_3">{label_3}</label>
               <label className="label_common label_4">{label_4}</label>
               <label className="label_common label_5">{label_5}</label>
               <label className="label_common label_6">{label_6}</label>
               <label className="label_common label_7">{label_7}</label>
               <label className="label_common label_8">{label_8}</label>
               <label className="label_common label_9">{label_9}</label>
               <label className="label_common label_10">{label_10}</label>
               <label className="label_common label_11">{label_11}</label>
               <label className="label_common label_12">{label_12}</label>
               
               <label className="label_common txt_label_1">{txt_label_1}</label>
               <label className="label_common txt_label_2">{txt_label_2}</label>
               <label className="label_common txt_label_3">{txt_label_3}</label>
               <label className="label_common txt_label_4">{txt_label_4}</label>
               <label className="label_common txt_label_5">{txt_label_5}</label>
               <label className="label_common txt_label_6">{txt_label_6}</label>
               <label className="label_common txt_label_7">{txt_label_7}</label>
               <label className="label_common txt_label_8">{txt_label_8}</label>
               <label className="label_common txt_label_9">{txt_label_9}</label>
               <label className="label_common txt_label_10">{txt_label_10}</label>
               <label className="label_common txt_label_11">{txt_label_11}</label>
               <label className="label_common txt_label_12">{txt_label_12}</label>
            </div>
         </div>
      </div>
   </div>
   <div className="col-5">
      <div className="ui-content">
         <div id="tab" className="Hometab">ग्रहांची स्थिती</div>
         <div className="ui-form-widget">
            
               <fieldset className="form-box" style={{padding:'5px'}}>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b>ग्रह </b></label>
                     </div>
                     <div className="col-4">
                        <label className="control-label"><b>सी</b></label>
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b>राशी</b></label>
                     </div>
                     <div className="col-4">
                        <label className="control-label"><b>रेखांश</b></label>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b>सूर्य </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" name="surya" id="surya"  onChange={event => setSurya(event.target.value)} value={surya}  onBlur={event => valRangeValidate(event)}  placeholder="सूर्य"  tabIndex="1" data-toggle="tooltip" title="सूर्य"   data-original-title="सूर्य" />
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b> मेष </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setMesh(event.target.value)} value={mesh}  onBlur={event => valRangeValidate(event)} name="mesh" id="mesh" placeholder="मेष"  tabIndex="13" data-toggle="tooltip" title="मेष"   data-original-title="मेष"/>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b>चंद्र</b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setChndra(event.target.value)} value={chndra} onBlur={event => valRangeValidate(event)}  name="chndra" id="chndra" placeholder="चंद्र"  tabIndex="2" data-toggle="tooltip" title="चंद्र"   data-original-title="चंद्र"/>
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b> वृषभ </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setRushabh(event.target.value)} value={rushabh}  onBlur={event => valRangeValidate(event)}  name="rushabh" id="rushabh" placeholder="वृषभ" tabIndex="14" data-toggle="tooltip" title="वृषभ"   data-original-title="वृषभ"/>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"> <b>मंगल </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setMangal(event.target.value)} value={mangal}  onBlur={event => valRangeValidate(event)}  name="mangal" id="mangal" placeholder="मंगल" tabIndex="3" data-toggle="tooltip" title="मंगल"   data-original-title="mangal"/>
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b> मिथुन </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setMithuen(event.target.value)} value={mithuen}  onBlur={event => valRangeValidate(event)}  name="mithuen" id="mithuen" placeholder="मिथुन" tabIndex="15" data-toggle="tooltip" title="मिथुन"   data-original-title="mithen"/>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b>बुध </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setBudha(event.target.value)} value={budha}  onBlur={event => valRangeValidate(event)}  name="budha" id="budha" placeholder="बुध" tabIndex="4" data-toggle="tooltip" title="बुध"   data-original-title="budha"/>
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b> कर्क </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setKarka(event.target.value)} value={karka} onBlur={event => valRangeValidate(event)}   name="karka" id="karka" placeholder="कर्क"  tabIndex="16" data-toggle="tooltip" title="कर्क"   data-original-title="karka"/>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b>गुरू</b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setGuru(event.target.value)} value={guru}  onBlur={event => valRangeValidate(event)}  name="guru" id="guru" placeholder="गुरू" tabIndex="5" data-toggle="tooltip" title="गुरू"   data-original-title="guru"/>
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b> सिंह </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setSeeha(event.target.value)} value={seeha}  onBlur={event => valRangeValidate(event)}  name="seeha" id="seeha" placeholder="सिंह"  tabIndex="17" data-toggle="tooltip" title="सिंह"   data-original-title="seeha"/>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b> शुक्र </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setShukra(event.target.value)} value={shukra}  onBlur={event => valRangeValidate(event)}  name="shukra" id="shukra" placeholder="शुक्र"  tabIndex="6" data-toggle="tooltip" title="शुक्र"   data-original-title="shukra"/>
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b> कन्या </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setKanya(event.target.value)} value={kanya}  onBlur={event => valRangeValidate(event)}  name="kanya" id="kanya" placeholder="कन्या" tabIndex="18" data-toggle="tooltip" title="कन्या"   data-original-title="kanya"/>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b>शनि </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setShani(event.target.value)} value={shani}  onBlur={event => valRangeValidate(event)} name="shani" id="shani" placeholder="शनि" tabIndex="7" data-toggle="tooltip" title="शनि"   data-original-title="shani"/>
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b>तुला</b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setTula(event.target.value)} value={tula}  onBlur={event => valRangeValidate(event)}  name="tula" id="tula" placeholder="तुला" tabIndex="19" data-toggle="tooltip" title="तुला"   data-original-title="tula"/>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b>राहु</b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setRahu(event.target.value)} value={rahu}  onBlur={event => valRangeValidate(event)}  name="rahu" id="rahu" placeholder="राहु" tabIndex="8" data-toggle="tooltip" title="राहु"   data-original-title="rahu"/>
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b> वृश्चिक </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setVrashuk(event.target.value)} value={vrashuk}  onBlur={event => valRangeValidate(event)}  name="vrashuk" id="vrashuk" placeholder="वृश्चिक" tabIndex="20" data-toggle="tooltip" title="वृश्चिक"   data-original-title="vrashuk"/>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b>केतु</b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setKetu(event.target.value)} value={ketu}  onBlur={event => valRangeValidate(event)}  name="ketu" id="ketu" placeholder="केतु" tabIndex="9" data-toggle="tooltip" title="केतु"   data-original-title="ketu"/>
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b>धनु </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setDhanu(event.target.value)} value={dhanu}  onBlur={event => valRangeValidate(event)}  name="dhanu" id="dhanu" placeholder="धनु" tabIndex="21" data-toggle="tooltip" title="धनु"   data-original-title="dhanu"/>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b>हर्षल</b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setHarshal(event.target.value)} value={harshal}  onBlur={event => valRangeValidate(event)} name="harshal" id="harshal" placeholder="हर्षल" tabIndex="10" data-toggle="tooltip" title="हर्षल"   data-original-title="harshal"/>
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b> मकर</b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setMakar(event.target.value)} value={makar}  onBlur={event => valRangeValidate(event)}  name="makar" id="makar" placeholder="मकर" tabIndex="22" data-toggle="tooltip" title="मकर"   data-original-title="makar"/>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b>नेप</b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setNep(event.target.value)} value={nep}  onBlur={event => valRangeValidate(event)}  name="nep" id="nep" placeholder="नेप" tabIndex="11" data-toggle="tooltip" title="नेप"   data-original-title="nep"/>
                     </div>
                     <div className="col-2">
                        <label className="control-label"><b> कुम्भ </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setKumbh(event.target.value)} value={kumbh} onBlur={event => valRangeValidate(event)}   name="kumbh" id="kumbh" placeholder="कुम्भ" tabIndex="23" data-toggle="tooltip" title="कुम्भ"   data-original-title="kumbh"/>
                     </div>
                  </div>
                  <div className="row my-2 ms-1 me-1">
                     <div className="col-2">
                        <label className="control-label"><b>प्लू </b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setPlu(event.target.value)} value={plu}  onBlur={event => valRangeValidate(event)} name="plu" id="plu" placeholder="प्लू" tabIndex="12" data-toggle="tooltip" title="प्लू"   data-original-title="plu"/>
                     </div>
                     <div className="col-2">
                        <label className="control-label"> <b>मीन</b></label>
                     </div>
                     <div className="col-4">
                        <input type="number" className="form-control" min="1" max="12" maxLength="2" onChange={event => setMin(event.target.value)} value={min}  onBlur={event => valRangeValidate(event)}  name="min" id="min" placeholder="मीन" tabIndex="24" data-toggle="tooltip" title="मीन"   data-original-title="min"/>
                     </div>
                  </div>
                  <div className="text-center button-make p-3">
                     <input type="button" value="Set" tabIndex="25" name="set" id="set" onClick={setKundliText} className="btn btn-warning mx-1"/>
                     <input type="button" value="Erase" tabIndex="26" name="Erase" id="Erase" onClick={eraseVal} className="btn btn-warning mx-1"/>
                  </div>
               </fieldset>
              
            
         </div>
      </div>
   </div>
</div>
<div className="row" >
   <div className="text-center button-make" style={{padding:'5px'}}>
        <button  className="btn btn-outline-secondary btn-lg">Get Janam Kundali</button>      
   </div>
</div>
</Form>
</>
)
}
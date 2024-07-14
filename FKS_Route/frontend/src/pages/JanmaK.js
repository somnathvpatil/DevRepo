import React from 'react';
import Janam from '../components/JanmaKForm';
import {
  json,
  redirect,
} from 'react-router-dom';
export default function JanmaK() {
  return <Janam/>
}

export async function action({ request, params }) {
  const data = await request.formData();
  console.log("params",params);
  console.log("data",data);


  const kundaliGenData = {
    custId:parseFloat(params.custId),
    surya:parseInt(data.get('surya')),
    mesh:parseInt(data.get('mesh')),
    chndra:parseInt(data.get('chndra')),
    rushabh:parseInt(data.get('rushabh')),
    mangal:parseInt(data.get('mangal')),
    mithuen:parseInt(data.get('mithuen')),
    budha:parseInt(data.get('budha')),
    karka:parseInt(data.get('karka')),
    guru:parseInt(data.get('guru')),
    seeha:parseInt(data.get('seeha')),
    shukra:parseInt(data.get('shukra')),
    kanya:parseInt(data.get('kanya')),
    shani:parseInt(data.get('shani')),
    tula:parseInt(data.get('tula')),
    rahu:parseInt(data.get('rahu')),
    vrashuk:parseInt(data.get('vrashuk')),
    ketu:parseInt(data.get('ketu')),
    dhanu:parseInt(data.get('dhanu')),
    harshal:parseInt(data.get('harshal')),
    makar:parseInt(data.get('makar')),
    nep:parseInt(data.get('nep')),
    kumbh:parseInt(data.get('kumbh')),
    plu:parseInt(data.get('plu')),
    min:parseInt(data.get('min')),
  };
  let url = 'http://localhost:3001/saveKundaliGen';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(kundaliGenData),
  });
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: 'Could not save event.' }, { status: 500 });
  }
  return redirect('/janamKD/'+params.custId);
}

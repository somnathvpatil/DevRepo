const fs = require('node:fs/promises');

async function readData() {
  const data = await fs.readFile('./jsonData/kundaliGenData.json', 'utf8');
  return JSON.parse(data);
}

async function writeDataKCustData(kunaliGenData) {
  if (kunaliGenData === null ) {
      const msg1={ status:400,message:  'Missing data.' };
      return msg1;
  }
  const newKunaliGenData = {
    ...kunaliGenData,
    id: parseFloat((Math.random() * 1000)),
  };
  const kundaliGenData = await fs.readFile('./jsonData/kundaliGenData.json', 'utf8');
  const allKundaliGenData = JSON.parse(kundaliGenData);
  allKundaliGenData.push(newKunaliGenData);
  await fs.writeFile('./jsonData/kundaliGenData.json', JSON.stringify(allKundaliGenData));
  const msg= { status:201,message: 'Successfully Kundali Gen Deatils Save' };
  return msg;
}

async function readDataKCust(custId) {
  console.log(custId);

  var mergeCustK = new Array();

  const custDetails = await fs.readFile('./jsonData/customers.json', 'utf8');
  const cust_Details=JSON.parse(custDetails);
  let matchCust_Details;

  for (var i = 0; i < cust_Details.length; i++) {
    if (cust_Details[i].custId===parseFloat(custId)) {
      matchCust_Details=cust_Details[i];
      break;
    }
  }
  
  const KDetails = await fs.readFile('./jsonData/kundaliGenData.json', 'utf8');
  const K_Details=JSON.parse(KDetails);
  let matchKDetails;
  for (var j = 0; j < K_Details.length; j++) {
    if (K_Details[j].custId===parseFloat(custId)) {
      matchKDetails=K_Details[j];
      break;
    }
  }

  const KInfo = await fs.readFile('./jsonData/Kdata.json', 'utf8');
  const K_Info=JSON.parse(KInfo);
   /*
  surya: 1,
    mesh: 1,
  chndra: 1,
    rushabh: 1,
  mangal: 1,
    mithuen: 1,
  budha: 1,
    karka: 1,
  guru: 1,
    seeha: 1,
  shukra: 1,
    kanya: 1,
  shani: 11,
    tula: 1,
  rahu: 1,
    vrashuk: 1,
  ketu: 1,
    dhanu: 1,
  harshal: 1,
    makar: 1,
  nep: 1,
    kumbh: 1,
  plu: 1,
    min: 1
  */
const newKunaliGenData =[
  {
    name:K_Info[0].name,
    values :[
      { label : K_Info[1].raviphladesh[0].label,
        details : K_Info[1].raviphladesh[matchKDetails.surya].value
      },
      {
        label : K_Info[2].chandraphladesh[0].label,
        details : K_Info[2].chandraphladesh[matchKDetails.chndra].value
      },
      {
        label : K_Info[3].mangalphladesh[0].label,
        details : K_Info[3].mangalphladesh[matchKDetails.mangal].value
      },
      {
        label : K_Info[4].budhaphladesh[0].label,
        details : K_Info[4].budhaphladesh[matchKDetails.budha].value
      },
      {
        label : K_Info[5].guruphladesh[0].label,
        details : K_Info[5].guruphladesh[matchKDetails.guru].value
      },
      {
        label : K_Info[6].shukraphladesh[0].label,
        details : K_Info[6].shukraphladesh[matchKDetails.shukra].value
      },
      {
        label : K_Info[7].shaniphladesh[0].label,
        details : K_Info[7].shaniphladesh[matchKDetails.shani].value
      },
      {
        label : K_Info[8].rahuphladesh[0].label,
        details : K_Info[8].rahuphladesh[matchKDetails.rahu].value
      },
      {
        label : K_Info[9].ketuphladesh[0].label,
        details : K_Info[9].ketuphladesh[matchKDetails.ketu].value
      },
      {
        label : K_Info[10].harshalphladesh[0].label,
        details : K_Info[10].harshalphladesh[matchKDetails.harshal].value
      },
      {
        label : K_Info[11].nepphladesh[0].label,
        details : K_Info[11].nepphladesh[matchKDetails.nep].value
      },
      {
        label : K_Info[12].phlatudesh[0].label,
        details : K_Info[12].phlatudesh[matchKDetails.plu].value
      }
    ]
  },
  {
    name:K_Info[13].name,
    values :[
      { label : K_Info[14].lagneshphalvichar[0].label,
        details : K_Info[14].lagneshphalvichar[matchKDetails.mesh].value
      },
      {
        label : K_Info[15].dudeshphalvichar[0].label,
        details : K_Info[15].dudeshphalvichar[matchKDetails.rushabh].value
      },
      {
        label : K_Info[16].tuteyashphalvichar[0].label,
        details : K_Info[16].tuteyashphalvichar[matchKDetails.mithuen].value
      }
      ,
      {
        label : K_Info[17].chaturthphalvichar[0].label,
        details : K_Info[17].chaturthphalvichar[matchKDetails.karka].value
      },
      {
        label : K_Info[18].panchameshphalvichar[0].label,
        details : K_Info[18].panchameshphalvichar[matchKDetails.seeha].value
      },
      {
        label : K_Info[19].shashthaphalvichar[0].label,
        details : K_Info[19].shashthaphalvichar[matchKDetails.kanya].value
      },
      {
        label : K_Info[20].sapthmeshphalvichar[0].label,
        details : K_Info[20].sapthmeshphalvichar[matchKDetails.tula].value
      },
      {
        label : K_Info[21].aashthaphalvichar[0].label,
        details : K_Info[21].aashthaphalvichar[matchKDetails.vrashuk].value
      },
      {
        label : K_Info[22].navmeshphalvichar[0].label,
        details : K_Info[22].navmeshphalvichar[matchKDetails.dhanu].value
      },
      {
        label : K_Info[23].dashameshphalvichar[0].label,
        details : K_Info[23].dashameshphalvichar[matchKDetails.makar].value
      },
      {
        label : K_Info[24].ekameshphalvichar[0].label,
        details : K_Info[24].ekameshphalvichar[matchKDetails.kumbh].value
      },
      {
        label : K_Info[25].ekadeshphalvichar[0].label,
        details : K_Info[25].ekadeshphalvichar[matchKDetails.min].value
      }
    ]
  }
]
  mergeCustK.push(matchCust_Details);
  mergeCustK.push(newKunaliGenData);

  //res.json(mergeCustK);
  return mergeCustK;
}
exports.readData = readData;
exports.readDataKCust = readDataKCust;
exports.writeDataKCustData=writeDataKCustData;
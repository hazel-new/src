import React from 'react'

export default function test() {
  //  const BulletValue = {
  //       "tenant": [
  //         "npee",
  //         "lpee",
  //         "npee-dev",
  //         "dnew-staging",
  //         "qwmr",
  //         "wmr",
  //         "xnpee"
  //       ],
  //       "descriptive name": [
  //         "common-gp",
  //         "common-caot",
  //         "common-cnbj",
  //         "common-seki",
  //         "common-seli",
  //         "common-seln",
  //         "common-sero",
  //         "bcss-kaas",
  //         "san-lso",
  //         "ccn-caot",
  //         "ccn-cnbj",
  //         "ccn-seki",
  //         "ccn-seli",
  //         "ccn-seln",
  //         "ccn-sero",
  //         "youlab",
  //         "cloud-ran",
  //         "bbi",
  //         "cds",
  //         "cds-dh-ps-bpd",
  //         "radio-hw",
  //         "radio-ivc",
  //         "radio-sw"
  //       ],
  //       "type": [
  //         "trusted",
  //         "untrusted"
  //       ],
  //       "site": [
  //         "gp",
  //         "caot",
  //         "cnbj",
  //         "cncd",
  //         "cnnj",
  //         "cngz",
  //         "hrsp",
  //         "seli",
  //         "seln",
  //         "seki",
  //         "sero"
  //       ],
  //       "optional": [
  //         "caas",
  //         "daas",
  //         "caas-daas",
  //         "legacy",
  //         "internet",
  //         "RESTRICTED",
  //         "NO-BL",
  //         "NO-INTERNET",
  //         "NO-ECN",
  //         "IN-DECOMMISSION"
  //       ],
  //       "technology": [
  //         "ee",
  //         "tp",
  //         "ops",
  //         "misc",
  //         "2g",
  //         "3g",
  //         "4g",
  //         "5g",
  //         "6g"
  //       ],
  //       "used for": [
  //         "access",
  //         "tools",
  //         "web",
  //         "service",
  //         "ran",
  //         "om-ran",
  //         "lmt",
  //         "pran",
  //         "fronthaul",
  //         "iac",
  //         "gte",
  //         "oob",
  //         "mgmt",
  //         "mgmt-bmc",
  //         "mgmt-cloud",
  //         "mgmt-viavi"
  //       ],
  //       "intended user": [
  //         "eri",
  //         "partner"
  //       ]
  //     }

  //   // console.log(BulletValue.tenant)              

  //   // const value = (b) => {
  //   //     return BulletValue[b]
  //   // }

  //   // var d=value('tenant')
  //   console.log(BulletValue['tenant'])


  //   const f = (value) => {
  //    const d = BulletValue[value]
  //    console.log("bullet_value:", d)
  //     var op = []
  //     for(var i=0;i<d.length;i++) {
  //       var obj = {}
  //       obj["label"]= d[i]
  //       obj["value"]= d[i] 
  //       op[i] = obj     
  //     }

  //     return op
  //   }   
    
  //   const ccc = f('type')

  //   const opp = [{
  //     'l':'dddd',
  //     'v':  ccc
  //   }]  
    
  
  //   console.log("调用获得的值",opp)

  // let userType = 'partner_web'
  // let userDescription = ''
 
  // const intendedUserDescription = [ 
  //   { key: 'eri_access', value: 'Access partition for Ericsson users.' }, 
  //   { key: 'partner_access', value: 'Access partition for users from the specific partner.' }, 
  //   { key: 'eri_tools', value: 'Tools partition for development by Ericsson users.' }, 
  //   { key: 'partner_tools', value: 'Tools partition for development by Ericsson users & partners.' }, 
  //   { key: 'eri_web', value: 'Partition for WEB services that need to access a limited storage area / areas. For Ericsson users only.' }, 
  //   { key: 'partner_web', value: 'Partition for WEB services that need to access a limited storage area / areas. For Ericsson users & partners.' }, 
  //   { key: 'service', value: 'DNEW common services. Can be Global or Site specific partition.' }, 
  //   { key: 'mgmt', value: 'Tools partition for management interfaces console servers and other tools.' }, 
  //   { key: 'mgmt-gte', value: 'Tools partition for management interfaces of GTE (=GPRS Test Environment??).' }, 
  //   { key: 'mgmt-bmc', value: 'Tools partition for management interfaces for BMC.' }, 
  //   { key: 'mgmt-cloud', value: 'Management partiton for Cloud: VIM (openstack).' }, 
  //   { key: 'tools-automation', value: 'Tools partition for equipment used for NW and Zero Day STP automation.' }, 
  //   { key: 'fronthaul', value: 'Fronthaul partition network between RRU and DU.' }, 
  //   { key: 'iac', value: 'IAC - Simulated Internet (Traffic simulators).' }, 
  //   { key: 'pran', value: 'PRAN - RAN Control Plan (CP) and User Plane (UP).' }, 
  //   { key: 'om-ran', value: 'OM-RAN - RAN equipment management.' }, 
  //   { key: 'lmt', value: 'LMT - RAN Local Maintenance Terminal.' }, 
  //   { key: 'oob', value: 'Partitions for OOB equipment. (Out Of Band traffic).' }, 
  //   { key: 'mgmt-oob', value: 'OOB = Out Of Band. Management interface network.' } 
  // ]

  // intendedUserDescription.forEach((item,index) => { 
  //   // console.log("-----UserDescription-----:",index,item.key,item.value) 

  //   if (item.key === userType) { 
  //    userDescription = item.value
  //   } 
  //   // else if(userType !== '' && item.key !== userType){ 
  //   else{ 
  //     userDescription = 'No special description.' 
  //   } 
  // }) 

  // console.log("-----UserDescription-----:", userDescription) 


  let a = ''
  let b = 7
  const arr = [
    {k:1,name:"aaa"},
    {k:2,name:"bbb"},
    {k:3,name:"ccc"},
    {k:4,name:"ddd"},
    {k:4,name:"eee"},
  ]
  const c = arr.find(item => {return item.k === b})
  if(c){
    a = c.name
  }else{
    a = 'No value for a.'
  }
  console.log(a)




  return (
    <div>

    </div>
  )
}

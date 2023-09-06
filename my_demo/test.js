import React from 'react'

export default function test() {
   const BulletValue = {
        "tenant": [
          "npee",
          "lpee",
          "npee-dev",
          "dnew-staging",
          "qwmr",
          "wmr",
          "xnpee"
        ],
        "descriptive name": [
          "common-gp",
          "common-caot",
          "common-cnbj",
          "common-seki",
          "common-seli",
          "common-seln",
          "common-sero",
          "bcss-kaas",
          "san-lso",
          "ccn-caot",
          "ccn-cnbj",
          "ccn-seki",
          "ccn-seli",
          "ccn-seln",
          "ccn-sero",
          "youlab",
          "cloud-ran",
          "bbi",
          "cds",
          "cds-dh-ps-bpd",
          "radio-hw",
          "radio-ivc",
          "radio-sw"
        ],
        "type": [
          "trusted",
          "untrusted"
        ],
        "site": [
          "gp",
          "caot",
          "cnbj",
          "cncd",
          "cnnj",
          "cngz",
          "hrsp",
          "seli",
          "seln",
          "seki",
          "sero"
        ],
        "optional": [
          "caas",
          "daas",
          "caas-daas",
          "legacy",
          "internet",
          "RESTRICTED",
          "NO-BL",
          "NO-INTERNET",
          "NO-ECN",
          "IN-DECOMMISSION"
        ],
        "technology": [
          "ee",
          "tp",
          "ops",
          "misc",
          "2g",
          "3g",
          "4g",
          "5g",
          "6g"
        ],
        "used for": [
          "access",
          "tools",
          "web",
          "service",
          "ran",
          "om-ran",
          "lmt",
          "pran",
          "fronthaul",
          "iac",
          "gte",
          "oob",
          "mgmt",
          "mgmt-bmc",
          "mgmt-cloud",
          "mgmt-viavi"
        ],
        "intended user": [
          "eri",
          "partner"
        ]
      }

    // console.log(BulletValue.tenant)              

    // const value = (b) => {
    //     return BulletValue[b]
    // }

    // var d=value('tenant')
    console.log(BulletValue['tenant'])


    const f = (value) => {
     const d = BulletValue[value]
     console.log("bullet_value:", d)
      var op = []
      for(var i=0;i<d.length;i++) {
        var obj = {}
        obj["label"]= d[i]
        obj["value"]= d[i] 
        op[i] = obj     
      }

      return op
    }   
    
    const ccc = f('type')

    const opp = [{
      'l':'dddd',
      'v':  ccc
    }]  
    
  
    console.log("调用获得的值",opp)



  return (
    <div>

    </div>
  )
}

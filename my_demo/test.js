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

    console.log(BulletValue.tenant)

    const value = (b) => {
        return BulletValue[b]
    }

var d=value('tenant')
console.log(d)

// var obj = {
//     name:"kerwin",
//     age:100,
//     location:'dalian'
// }

// for (var i in obj){
//     // 获取key
//     // console.log(i)
//     // 获取value
//     console.log(obj[i])
//     document.write(i+":"+obj[i])
//     document.write("<br>")
// }

  return (
    <div>
      
    </div>
  )
}

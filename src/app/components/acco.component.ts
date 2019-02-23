import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acco',
  templateUrl: './acco.component.html',
  styleUrls: ['./acco.component.css']
})
export class AccoComponent implements OnInit {

  
  searchText:any="";
  
  checkType:any=[
    { "checkId":1,
      "checkName":"PRACTICE CHECK"
    },
    {
      "checkId":2,
      "checkName":"FINAL CHECK"
    }
  ];
  /* characters=[
    'Divya',
    'Divzz',
    'ABC',
    'ABCD',
    'ABCDE',
    'ABCDEFGH',
    'BalaGovind',
    'BalaG',
    'Bala'
  ]; */
  empData:any=[
    {
        "empId": 1,
        "empName": "Selvi Vishesh P",
        "empSalary": 230000,
        "department": {
            "departmentId": 10,
            "departmentName": "DEV",
            "departmentLocation": "Hyd"
        },
        "address": {
            "addressId": 54,
            "street": "Mg Road",
            "city": "Tuni",
            "state": "Andhra Pradesh",
            "country": "India"
        },
        "skillsList": [
            {
                "skillId": 1,
                "skillName": "JAVA"
            },
            {
                "skillId": 2,
                "skillName": "C"
            },
            {
                "skillId": 3,
                "skillName": "CPP"
            }
        ],
        "skillStr": null
    },
    {
      "empId": 2,
      "empName": "Selvi Mandali",
      "empSalary": 340000,
      "department": {
          "departmentId": 10,
          "departmentName": "DEV",
          "departmentLocation": "Hyd"
      },
      "address": {
          "addressId": 55,
          "street": "Mg Road",
          "city": "Chennai",
          "state": "Tamil Nadu",
          "country": "India"
      },
      "skillsList": [
          {
              "skillId": 1,
              "skillName": "JAVA"
          },
          {
              "skillId": 2,
              "skillName": "C"
          },
          {
              "skillId": 3,
              "skillName": "CPP"
          },
          {
              "skillId": 7,
              "skillName": "ANGULAR"
          }
      ],
      "skillStr": null
    },
    {
        "empId": 3,
        "empName": "Abesh",
        "empSalary": 23000,
        "department": {
            "departmentId": 40,
            "departmentName": "FIN",
            "departmentLocation": "Hyd"
        },
        "address": {
            "addressId": 28,
            "street": "Sholiinganalur",
            "city": "Chennai",
            "state": "Tamil Nadu",
            "country": "India"
        },
        "skillsList": [
            {
                "skillId": 1,
                "skillName": "JAVA"
            },
            {
                "skillId": 2,
                "skillName": "C"
            },
            {
                "skillId": 3,
                "skillName": "CPP"
            },
            {
                "skillId": 4,
                "skillName": "SPRING"
            }
        ],
        "skillStr": null
    },
    {
        "empId": 5,
        "empName": "gharvitr",
        "empSalary": 23000,
        "department": {
            "departmentId": 40,
            "departmentName": "FIN",
            "departmentLocation": "Hyd"
        },
        "address": {
            "addressId": 60,
            "street": "Mgga Road",
            "city": "Tunie",
            "state": "Andhra Pradesh",
            "country": "India"
        },
        "skillsList": [
            {
                "skillId": 1,
                "skillName": "JAVA"
            },
            {
                "skillId": 2,
                "skillName": "C"
            }
        ],
        "skillStr": null
    },
    {
        "empId": 6,
        "empName": "gharvitr",
        "empSalary": 23000,
        "department": {
            "departmentId": 40,
            "departmentName": "FIN",
            "departmentLocation": "Hyd"
        },
        "address": {
            "addressId": 61,
            "street": "Mgga Road",
            "city": "Tunie",
            "state": "Andhra Pradesh",
            "country": "India"
        },
        "skillsList": [
            {
                "skillId": 1,
                "skillName": "JAVA"
            },
            {
                "skillId": 2,
                "skillName": "C"
            }
        ],
        "skillStr": null
    },
    {
        "empId": 10,
        "empName": "gharvitar",
        "empSalary": 23000,
        "department": {
            "departmentId": 40,
            "departmentName": "FIN",
            "departmentLocation": "Hyd"
        },
        "address": {
            "addressId": 65,
            "street": "Mgga Road",
            "city": "Tunie",
            "state": "Andhra Pradesh",
            "country": "India"
        },
        "skillsList": [
            {
                "skillId": 1,
                "skillName": "JAVA"
            },
            {
                "skillId": 2,
                "skillName": "C"
            }
        ],
        "skillStr": null
    },
    {
        "empId": 13,
        "empName": "rishika kiran",
        "empSalary": 23000,
        "department": {
            "departmentId": 40,
            "departmentName": "FIN",
            "departmentLocation": "Hyd"
        },
        "address": {
            "addressId": 76,
            "street": "Mgga Road",
            "city": "Tunie",
            "state": "Andhra Pradesh",
            "country": "India"
        },
        "skillsList": [
            {
                "skillId": 1,
                "skillName": "JAVA"
            }
        ],
        "skillStr": null
    },
    {
        "empId": 14,
        "empName": "rishika kiran",
        "empSalary": 23000,
        "department": {
            "departmentId": 40,
            "departmentName": "FIN",
            "departmentLocation": "Hyd"
        },
        "address": {
            "addressId": 77,
            "street": "Mgga Road",
            "city": "Tunie",
            "state": "Andhra Pradesh",
            "country": "India"
        },
        "skillsList": [
            {
                "skillId": 1,
                "skillName": "JAVA"
            }
        ],
        "skillStr": null
    },
    {
        "empId": 15,
        "empName": "uisdan",
        "empSalary": 23000,
        "department": {
            "departmentId": 30,
            "departmentName": "DEV",
            "departmentLocation": "Hyd"
        },
        "address": {
            "addressId": 78,
            "street": "MgRoad",
            "city": "sadsfga",
            "state": "fxhxdf",
            "country": "India"
        },
        "skillsList": [
            {
                "skillId": 1,
                "skillName": "JAVA"
            },
            {
                "skillId": 3,
                "skillName": "CPP"
            }
        ],
        "skillStr": null
    },
    {
        "empId": 16,
        "empName": "fkhfk",
        "empSalary": 45455,
        "department": {
            "departmentId": 40,
            "departmentName": "FIN",
            "departmentLocation": "Hyd"
        },
        "address": {
            "addressId": 80,
            "street": "hgffgf",
            "city": "ffghf",
            "state": "fghf",
            "country": "ff"
        },
        "skillsList": [
            {
                "skillId": 2,
                "skillName": "C"
            },
            {
                "skillId": 3,
                "skillName": "CPP"
            },
            {
                "skillId": 4,
                "skillName": "SPRING"
            }
        ],
        "skillStr": null
    },
    {
        "empId": 17,
        "empName": "Sonu",
        "empSalary": 10,
        "department": {
            "departmentId": 40,
            "departmentName": "FIN",
            "departmentLocation": "Hyd"
        },
        "address": {
            "addressId": 81,
            "street": "hgffgf",
            "city": "ffghf",
            "state": "fghf",
            "country": "ff"
        },
        "skillsList": [
            {
                "skillId": 2,
                "skillName": "C"
            },
            {
                "skillId": 3,
                "skillName": "CPP"
            },
            {
                "skillId": 4,
                "skillName": "SPRING"
            }
        ],
        "skillStr": null
    }
];

  constructor() { }


  ngOnInit() {
  }

}

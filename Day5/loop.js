//datas
var datas = {
    "firstName":"Mushthaq",
    "lastName":"Ameen",
    "DOB":"30-08-1997",
    "address":{
        "apartment":"6073, Sobha Meritta",
        "street":"kelambakkam vandalur high rd",
        "area":"pudupakkam",
        "city":"chennai",
        "pincode":603103
    },
    "mobile":"8012603733",
    "education":{
        "SSLC":{
            "institution":"Pon vidyashram CBSE school",
            "location":"valasaravakkam",
            "yearOfPassedOut":"2013"
        },
        "HSC":{
            "institution":"Balalok Mat. Hr. Secondary School",
            "location":"Saligramam",
            "yearOfPassedOut":"2015"
        },
        "UG":{
            "course":"B.E.Civil Engineering",
            "institution":"Mohamed Sathak A.J.College of Engineering",
            "location":"Siruseri, OMR",
            "yearOfPassedOut":"2019"
        },
        "PG":{
            "course":"M.E.Structural Engineering",
            "institution":"Mohamed Sathak A.J.College of Engineering",
            "location":"Siruseri, OMR",
            "yearOfPassedOut":"2022"
        }
    },
    "hobbies":["cricket","coding","badmitton"],
    "experience":{
        "1":{
            "fromDate":"Oct22",
            "toDate":"Aug23",
            "workplace":"yuzzworks",
            "yearsOfWorking":1
        },
        "2":{
            "fromDate":"Aug23",
            "toDate":"Present",
            "workplace":"ALPOS ",
            "yearsOfWorking":0.8
        }
    },
    "isMarried":true
    }


    let keyArr = Object.keys(datas);
    
    //for loop
    for(let i=0; i<keyArr.length; i++){
        console.log(datas[keyArr[i]]);
    }

    //foreach loop
    keyArr.forEach(element => {
        console.log(datas[element]);
    });

    //forin loop
    for(el in keyArr){
        console.log(datas[keyArr[el]]);
    }

    //forof loop
    for(el of keyArr){
        console.log(datas[el]);
    }

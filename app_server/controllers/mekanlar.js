var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa', 
    { "baslik": "Anasayfa" ,
      "sayfaBaslik":{
        "siteAd":"Mekanbul",
        "slogan":"Civardaki Mekanlar Keşfet !"
      },
      "mekanlar":[
        {
          "ad":"Barida Kafe",
          "adres":"SDÜ batı kampüsü",
          "puan":"4",
          "mesafe":"2km",
          "imkanlar":["Kahve","Çay","Pasta"]
        },
        {
          "ad":"Gloria Kafe",
          "adres":"SDÜ doğu kampüsü",
          "puan":"2",
          "mesafe":"5km",
          "imkanlar":["Kahve","Çay","Pasta"]
        }

      ]

  });
  }

const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi',
     { "baslik": 'Mekan bilgisi' ,
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
      "ad":"Starbucks",
      "adres":"Centrum Garden",
      "puan":"4",
      "saatler":[
        {
          "gunler":"Pazartesi-Cuma",
          "acilis":"9:00",
          "kapanis":"23:00",
          "kapali":false
        },
        {
          "gunler":"Cumartesi-pazar",
          "acilis":"9:00",
          "kapanis":"22:00",
          "kapali":false
        }

      ],
      "imkanlar":["kahve","çay","kek"],
      "koordinatlar":{ 
        "enlem":"37.7",
        "boylam":"30.5"
      },
      "yorumlar":[
        {
          "yorumYapan":"Sinan",
          "puan":"3",
          "tarih":"20 Ekim 2022",
          "yorumMetni":"Çok berbat"
        },
        {
          "yorumYapan":"Zeynep",
          "puan":"5",
          "tarih":"20 Ekim 2022",
          "yorumMetni":"Süper"
        }
      ]
        


      
    }
  
  });
  }
const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum ekle' });
  }
  
  module.exports={

    anaSayfa,
    mekanBilgisi,
    yorumEkle

  }
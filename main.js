/**
 * ####################################
 * şərti tam tutmadım deyə 2 cürə yazdım 
 *
 * 1 də endirimli qiymət yoxdu daxil etdiyimiz endirim 
 * və endirimdən sonraki qiymət endirim olaraq ekrana çıxır
 * 
 * 2 də qiymət və endirimli qiymət var endirim miqdarına
 * görə endirimli qiymət hesablanır və ekran çıxır
 * üstünlüyü oduki tətbiq edilən endimidə ekrana 
 * çıxara bilirik
 * 
 * ####################################
 */




//1

class Maqaza {
    constructor(ad, muellif, tarix,qiymet,) {
      this.ad = ad;
      this.muellif = muellif;
      this.tarix = tarix;
      this.qiymet = qiymet;
      
    }
    qiymet_iste(endirim) {
      this.endirim=endirim
      this.endirim=(this.qiymet*endirim)/100
    }
  }
  
  
  
  const myClass = new Maqaza("harry poter", "J. K. Rowling", '30 Haziran 1997 ', 30);
  myClass.qiymet_iste(70);

 console.log(myClass.ad,myClass.muellif,myClass.tarix,myClass.qiymet,'$','endirimli qiymeti',myClass.endirim,'$',);



//2

// class Maqaza {
//   constructor(ad, muellif, tarix,qiymet,endirimli_qiymet) {
//     this.ad = ad;
//     this.muellif = muellif;
//     this.tarix = tarix;
//     this.qiymet = qiymet;
//     this.endirimli_qiymet=endirimli_qiymet
//   }
//   show(endirim) {
//     this.endirim=endirim
//     this.endirimli_qiymet=(this.qiymet*endirim)/100
//     return this.ad+this.muellif+this.tarix+this.qiymet+"$ "+'tetbiq edilen endirim '+endirim+"% "+'('+'endirimli qiymeti '+this.endirimli_qiymet+"$ "+')'
//   }
// }



// const myClass = new Maqaza("harry poter", "J. K. Rowling", '30 Haziran 1997 ', 30);
// console.log(myClass.show(70));



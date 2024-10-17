//! Fonksiyonlar (function)
JavaScript te fonksiyonlar, belirli bir görevi yerine getiren kod bloklarıdır. 
Bir fonksiyonu bir kez tanımlayıp, ihtiyaç duyulduğunda tekrar tekrar çalıştırabilirsin. 
Fonksiyonlar JavaScript’in temel yapı taşlarından biridir. Şimdi fonksiyonları ayrıntılı 
olarak inceleyelim.

//! 1. Fonksiyon Tanımlama
Bir fonksiyon, function anahtar kelimesi ile tanımlanır ve isteğe bağlı olarak 
parametreler alabilir.

//? Örnek:

function selamVer() {
  console.log("Merhaba!");
}

selamVer(); // Konsolda "Merhaba!" yazdırır

//! ************************************************

//! 2. Parametreli Fonksiyonlar
Fonksiyonlar parametreler alabilir ve bu parametreleri işleyebilir.

//? Örnek:

function selamla(isim) {
  console.log("Merhaba, " + isim + "!");
}

selamla("Ali"); // Konsolda "Merhaba, Ali!" yazdırı

//! ************************************************

//! 3. Geri Dönüş (Return) Değeri
Fonksiyonlar bir değer döndürebilir. Bunun için return ifadesi kullanılır.

//? Örnek:

function kareAl(sayi) {
  return sayi * sayi;
}
let sonuc = kareAl(5);
console.log(sonuc);

Çıktı:
25

* Fonksiyon bir değer döndürdüğünde, bu değeri başka bir değişkene atayabilir veya başka 
  bir işlemde kullanabilirsin.

//! ************************************************

//! 4. Anonim Fonksiyonlar
Anonim fonksiyonlar bir isim olmadan tanımlanır ve genellikle bir değişkene atanır.

//? Örnek:

let topla = function (a, b) {
  return a + b;
};

console.log(topla(3, 4));

Çıktı:
7

//! ************************************************

//!5. Ok Fonksiyonları (Arrow Functions)
Daha kısa ve modern bir söz dizimi olan ok fonksiyonları, ES6 ile tanıtıldı.

//? Örnek:

const carp = (a, b) => a * b;
console.log(carp(3, 4));

Çıktı:
12

let kareAl = (a) => a * a;
console.log(kareAl(5));

Çıktı;
25

let topla = (a, b) => a + b;

console.log(topla(3, 4));

Çıktı;
7

* Eğer fonksiyon yalnızca bir satırsa ve bir ifade dönüyorsa, süslü parantezler ({}) ve 
  return anahtar kelimesine gerek yoktur. Daha karmaşık fonksiyonlar için ise yine {} kullanılır.

//! ************************************************

//!6. Fonksiyonların Özellikleri
* Fonksiyonlar İlk Sınıf Vatandaşlardır: JavaScript te fonksiyonlar değişkenler gibi taşınabilir. 
  Bir fonksiyonu başka bir fonksiyona parametre olarak verebilir veya geri döndürebilirsin.
* Yeniden Kullanılabilirlik: Fonksiyonlar bir kod parçasını yeniden kullanmayı kolaylaştırır.
* Anonim ve İsimli: Fonksiyonlar anonim olabilir ya da bir isimle tanımlanabilir.

//! ************************************************

//!7. IIFE (Immediately Invoked Function Expression)
Fonksiyonlar tanımlandıkları anda çalıştırılabilir. Buna IIFE denir.

//? Örnek

(function () {
  console.log("Bu bir IIFE!");
})();

Çıktı:
Bu bir IIFE!

Bu fonksiyon tanımlandığı anda çalışır ve Bu bir IIFE! yazdırır.

* Fonksiyonlar, program yapısını düzenlemede ve tekrar eden işlemleri azaltmada çok kullanışlıdır.
  Daha karmaşık senaryolar için fonksiyonlar nesne ve dizilerle birleştirilerek kullanılabilir.

//! ************************************************

//? Soru Yaş Hesapla?
function yasHesapla(dogumYili) {
  return 2021 - dogumYili;
}
let ageSamed = yasHesapla(1990);

console.log(ageSamed);

Çıktı:
31

//! ************************************************

//? Soru Ehliyet Alabilir mi?
function yasHesapla(dogumYili) {
  return 2021 - dogumYili;
}
let yas = yasHesapla(1990);

console.log(yas);

function ehliyetAlabilmeDurumu(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);
  let ehliyet = 18 - yas;

  if (ehliyet > 0) {
    console.log(`${isim} ehliyet alabilmenize ${ehliyet} yılı kaldı.`);
  } else {
    console.log(`${isim} ehliyet alabilirsiniz.`);
  }
}

ehliyetAlabilmeDurumu(1990, "Esra");

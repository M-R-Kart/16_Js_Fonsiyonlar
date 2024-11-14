
# JavaScript Fonksiyonları

JavaScript'te **fonksiyonlar**, belirli bir işlemi veya işlemler grubunu tanımlayarak, bu işlemleri tekrar kullanabilmenizi sağlar. Fonksiyonlar, kodunuzu daha düzenli, modüler ve okunabilir hale getirir. Fonksiyonlar şunlarla tanımlanabilir:

## 1. Fonksiyon Tanımlama

Fonksiyonlar, `function` anahtar kelimesi ile tanımlanır. Fonksiyon tanımında genellikle bir isim, parametreler ve bir dönüş değeri bulunur.

```javascript
function fonksiyonAdi(parametre1, parametre2) {
  // Fonksiyonun çalıştıracağı kod
  return parametre1 + parametre2;
}
```

## 2. Fonksiyon Çağırma

Bir fonksiyonu tanımladıktan sonra, bu fonksiyonu çağırarak kullanabilirsiniz.

```javascript
let sonuc = fonksiyonAdi(5, 10); // 5 ve 10 parametre olarak gönderilir.
console.log(sonuc); // 15 çıktısını verir
```

## 3. Parametresiz Fonksiyon

Fonksiyonlar parametre almayabilir. Bu durumda parametre kısmı boş bırakılır.

```javascript
function selamla() {
  console.log("Merhaba!");
}
selamla(); // Merhaba! yazdırır.
```

## 4. Return Kullanımı

Bir fonksiyon, işlem yaptıktan sonra bir değer döndürebilir. Bu, fonksiyonu çağıran yerin sonuç almasını sağlar.

```javascript
function topla(x, y) {
  return x + y;
}

let sonuc = topla(5, 3);  // 8 değerini döndürür
console.log(sonuc); // 8
```

## 5. Anonim Fonksiyonlar (Bilinmeyen İsimli Fonksiyonlar)

Bazen fonksiyonlara isim vermek yerine anonim fonksiyonlar kullanılır. Bu tür fonksiyonlar genellikle bir değişkene atanır veya doğrudan çağrılır.

```javascript
let sayHello = function() {
  console.log("Merhaba!");
};
sayHello();  // Merhaba!
```

## 6. Ok Fonksiyonları (Arrow Functions)

JavaScript'te, fonksiyonları daha kısa bir şekilde yazmanıza imkan tanır. Bu özellik, ES6 ile gelen **arrow function** (ok fonksiyonu) kullanımıdır.

```javascript
const topla = (x, y) => x + y;
let sonuc = topla(5, 3);
console.log(sonuc);  // 8
```

## 7. Parametreler

Fonksiyonlar, belirli bir sayıda parametre alabilir. Ancak, JavaScript'te parametre sayısının esnekliği vardır. Eğer fonksiyona parametre verilmezse, `undefined` dönebilir. Ayrıca, fonksiyon içinde **rest parametre** kullanarak dinamik sayıda parametre alabilirsiniz.

```javascript
function topla(...sayilar) {
  return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}

console.log(topla(1, 2, 3, 4, 5));  // 15
```

## 8. Fonksiyonlar İçinde Fonksiyonlar

JavaScript fonksiyonları içinde başka fonksiyonlar tanımlanabilir. Bu, bazen iç fonksiyonların yalnızca dış fonksiyon içinde kullanılması gerektiği durumlarda yararlıdır.

```javascript
function disFonksiyon() {
  function icFonksiyon() {
    console.log("Ben iç fonksiyonum!");
  }
  icFonksiyon();  // İç fonksiyon çağrıldı
}

disFonksiyon();
```

---
Fonksiyonlar, JavaScript'in temel yapı taşlarından biridir ve kodunuzu daha modüler, yönetilebilir hale getirmek için önemli araçlardır.

const kelvin = 200;// bu bir sabit değerdir daha sonra değiştirilemez.
const celsius = kelvin-273; // kelvini celsius a dönüştürdük.
let fahrenheit = celsius*(9/5)+32; // fahrenheit değeri.
fahrenheit = Math.round(fahrenheit); // değeri Math.round ile yuvarladık ondalıkları attık.
let newton = celsius * (33/100);

console.log(`Sıcaklık ${fahrenheit} derece Fahrenheit'tir.`);
console.log("Sıcaklık", fahrenheit, "derece Fahrenheit'tir.");
console.log(newton);

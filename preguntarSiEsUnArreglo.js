const autos = ['BMW','Mercedez Benz',"Volvo"];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : '+ autos[i] );
}

autos[1] = "Mercedez Benz";
console.log(autos[1]);

autos.push('Audi');
console.log(autos); 

console.log(autos.length);
autos[autos.length] = 'Cadilllac';

console.log(autos);

autos[6] = 'Porshe';
console.log(autos);

console.log(typeof autos);

console.log(Array.isArray(autos));

console.log( autos instanceof Array);
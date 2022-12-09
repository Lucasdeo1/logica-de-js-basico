/*
//-------------------------- introdução ao js
var s = 'hello word\n'

console.log( s )

var t = 'my friends'

console.log( s + t )




//--------------------------------------------------
// maior e menor 
var s = 9
var t = 22
var maior = 0;

if ( s > t) {
    maior = s
}
else {
     maior = t
}

console.log ( maior )
//-------------------------------------------------




//----------par ou impar------------------

var s = prompt('digite um valor ')

if ( s % 2 == 0) {
    console.log('esse numero e par')
}
else {
    console.log ( 'esse numero nao é par')
}


//--------------------------------------------





            //Faça um programa que leia um número e, caso ele seja positivo, calcule e mostre:
            // O número digitado ao quadrado
            // A raiz quadrada do número digitado

var s = prompt('digte um valor')
var q = s*s 
var r = Math.sqrt(s)

if ( s > 0 ){
    console.log(q)
    console.log(r)
} 
else {
    console.log('esse numero é negativo')
}

*/

//------------------------ CONTA COM MODULOS --------------------------------------------------------------------------------------


                                //Escreva um programa que leia um número inteiro maior do que zero e devolva, na
                                //tela, a soma de todos os seus algarismos. Por exemplo, ao número 2493 corresponderá
                                //o valor 18 (2 + 4 + 9 + 3). Se o número lido não for maior do que zero, o programa
                                //terminará com a mensagem “Número inválido”.


var a  = Math.floor(prompt('insira um numero:')) -1

var b = a / 1000
console.log( Math.floor(b) ) 
var c = a / 100
console.log( Math.floor(c) ) 
var d = c % 10
console.log( Math.floor(d) ) 
var e = a % 100
console.log( Math.floor(e) ) 
var f = e / 10
console.log( Math.floor(f) ) 
var g = e % 10
console.log( Math.floor(g) ) 
var soma = b+d+f+g

console.log( Math.floor(soma) ) 






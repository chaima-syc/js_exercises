// declaration des variable:
let space="--------------------------------------------------------"

let prenom="chaima";
console.log(prenom);

console.log(space);

//manipulation des variables numérique 

let a=10;
let b=2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);

console.log(space);

//Concaténation de chaînes de caractères
let nom='elomrani';
console.log(prenom +" "+ nom);
console.log(space);

//Utilisation des variables booléennes
 let age=23;
 if (age=18) {
    console.log(false);
 }
 else{
    console.log(true);
 }
 console.log(space);

 //Échange de valeurs entre deux variables
  let x=5,y=7;
  console.log("on a x=",x,"et y=",y);
  [x,y]=[y,x];
  console.log("qui devient x=",x ,"et y=",y);
  console.log(space);

  //Calcul de la circonférence d'un cercle
  let rayon=2;
  let π=Math.PI;
  circ=(C = 2 * π * rayon);
  console.log( "la conférence du cercle est:"+circ);
  console.log(space);
 
  //Conversion de température
   const celsius=60;
   const  F = celsius * 9/5 + 32 ;
   console.log("la temperature en F:" +F);
   console.log(space);
   //calcule d'age 
   const anneactuel=2024;
   const annenaissance=2000;
   age = anneactuel-annenaissance;
   console.log(age);
   console.log(space);

   //Calcul du périmètre d'un rectangle
   let longueur=12;
   let largeur=6;
   const P = 2 * (longueur + largeur);
   console.log("le périmetre est: "+P);
   console.log(space);

   //Moyenne de trois nombres
   let note1=12, note2=15,note3=10;
   const moyenne=(note1+note2+note3)/3;
   console.log("la moyenne générale est: "+moyenne);
   console.log(space);
  
  


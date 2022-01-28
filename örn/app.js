const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black","yellow","green","orange","#3903fc","#ff0022","#0026ff"];

button.addEventListener("click",changeBackground);

let sıra = 0;

function changeBackground(){
   // const rastgeleSayi = Math.floor(Math.random() * colors.length);
   // const secilenRenk = colors[rastgeleSayi];
   //console.log('colors');
   // body.style.backgroundColor = "secilenRenk";
   
   // sırayla arkaplan rengi sec
   console.log(sıra);
   if(sıra == 7)sıra = 0;
   const secilenRenk = colors[sıra];
   sıra++;
   body.style.background = secilenRenk;
}

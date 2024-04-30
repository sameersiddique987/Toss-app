// console.log("hello world");

let h2 =document.querySelector("h2")
let image =document.querySelector("img")
function toss(btn) {

    console.log("toss" ,btn );
    let x= (Math.ceil(Math.random()*2));
console.log(x);

if (x===1) {
   image.src="https:i.etsystatic.com/10624150/r/il/6afb4a/4632847187/il_794xN.4632847187_2wot.jpg"
}
else{
   image.src  ="  https://i.etsystatic.com/10624150/r/il/64ede5/4584612212/il_794xN.4584612212_amoo.jpg"
}


if (btn==="Masjid"  && x ===1||btn==="Chand" && x ===2) {
    console.log("Toss geet gay ho");
    h2.innerHTML="you win the toss"
}
else{
    console.log("Toss har gay ho");
    h2.innerHTML="You loss the toss"
}
}

    

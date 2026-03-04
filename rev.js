function rev(){
const original=document.getElementById("in");
const og=original.value;
const dis=document.getElementById("dis");


let rev="";
    for(let i=og.length-1;i>=0;i--)
{
   rev=rev+og[i];
}
dis.innerText=rev;
}
const btn=document.getElementById("ck");
btn.addEventListener("click",rev);
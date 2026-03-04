let input=document.getElementById("in");
const d=document.getElementById("dis");
const btn=document.getElementById("ck");
function ckpd()
{
   let og=input.value;
   let rev="";
   for (let i = og.length - 1; i >= 0; i--)
     {
  rev += og[i];
     }

     if(og!==rev)
     {
        d.innerText = '❌Not a Palindrome❌';
     }
     else if(og==='')
     {
       d.innerText='';
     }
     else
     {
        d.innerText = '✅Is a Palindrome✅';
     }

}

btn.addEventListener("click",ckpd); 

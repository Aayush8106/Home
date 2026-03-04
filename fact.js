const inp=document.getElementById("in");
const dis=document.getElementById("dis");
function fact()
{
    let val=Number(inp.value);
    let out=1;
 if(isNaN(inp.value))
 {
  dis.innerText="❌Only Number❌"; 
  return;
 }
 if(val<0)
 {
   dis.innerText= "❌Only Positive❌"; 
   return;
 }
 if(val===0)
 {
    dis.innerText= "1";
    return;
 }
 else
 {
  for(let i=1;i<=val;i++)
    {
        out=out*i;
    } 
    dis.innerText="Fact:"+out;
 }
}
const btn=document.getElementById("ck");
btn.addEventListener("click",fact);
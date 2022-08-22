function AddWEfield()
{
  let Node=document.createElement("textarea");
  Node.classList.add("form-control");
  Node.classList.add("wefield");
  Node.setAttribute("row",10);
  Node.classList.add("mt-2");
  Node.setAttribute("placeholder","Enter Text")
  let weaddbtnob=document.getElementById("weaddbtn");
  let wfieldo=document.getElementById("wfield");
  wfieldo.insertBefore(Node,weaddbtnob);
}
function Addaqfield()
{
  let Nodeob=document.createElement("textarea");
  Nodeob.classList.add("form-control");
  Nodeob.classList.add("wefield");
  Nodeob.setAttribute("row",10);
  Nodeob.classList.add("mt-2");
  Nodeob.setAttribute("placeholder","Enter Text")
  let aqaddbtnob=document.getElementById("aqaddbtn");
  let afiledob=document.getElementById("afiled");
  afiledob.insertBefore(Nodeob,aqaddbtnob);
}
function generatecv()
{
  document.getElementById('namet1').innerHTML=document.getElementById('namefield').value;
  document.getElementById('contactt1').innerHTML=document.getElementById('contactfield').value;
  document.getElementById('addresst1').innerHTML=document.getElementById('addressfield').value;
  document.getElementById('fblinkt1').innerHTML=document.getElementById('fblink').value;
  document.getElementById('instalinkt1').innerHTML=document.getElementById('instalink').value;
  document.getElementById('linkedinlinkt1').innerHTML=document.getElementById('linkedinlink').value;
  document.getElementById('linkedinlinkt1').innerHTML=document.getElementById('linkedinlink').value;
  document.getElementById('objfieldt1').innerHTML=document.getElementById('objfield').value;
  document.getElementById('namet2').innerHTML=document.getElementById('namefield').value;
  let wes=document.getElementsByClassName('wefield');
  let str="";
  for(let exp of wes)
  {
    str=str+`<li>${exp.value}</li>`
  }
  document.getElementById('wefieldt1').innerHTML=str;
  let aqs=document.getElementsByClassName('aqfield');
  let str1="";
  for(let exp of aqs)
  {
    str1=str1+`<li>${exp.value}</li>`
  }
  document.getElementById('aqfieldt1').innerHTML=str1;
  document.getElementById('rform').style.display='none';
  document.getElementById('rtemplate').style.display='block';
}
function printcv()
{
  window.print();
}
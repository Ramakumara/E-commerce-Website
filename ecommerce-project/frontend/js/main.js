fetch("http://localhost:5000/api/products")
 .then(res=>res.json())
 .then(data=>{
  let html="";
  data.forEach(p=>{
   html+=`<div class='card'><img src='${p.image}' width='120'><h3>${p.name}</h3><p>₹${p.price}</p></div>`;
  });
  document.getElementById("products").innerHTML=html;
 });
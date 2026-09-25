
const menu = document.querySelector(".menu");
const links = document.querySelector(".nav-links");
if(menu) menu.addEventListener("click",()=>links.classList.toggle("open"));

const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(a=>{
  const href=a.getAttribute("href");
  if(href===current || (current==="" && href==="index.html")) a.classList.add("active");
});

document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

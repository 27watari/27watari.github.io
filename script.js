const menuButton=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
menuButton?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open))});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuButton?.setAttribute("aria-expanded","false")}));
const modal=document.querySelector(".modal"),modalImage=document.querySelector(".modal-image");
document.querySelectorAll(".image-button").forEach(b=>b.addEventListener("click",()=>{modalImage.src=b.dataset.image;modalImage.alt=b.dataset.title||"";modal.classList.add("open");modal.setAttribute("aria-hidden","false")}));
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");modalImage.src=""}
document.querySelector(".modal-close")?.addEventListener("click",closeModal);modal?.addEventListener("click",e=>{if(e.target===modal)closeModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.getElementById("year").textContent=new Date().getFullYear();

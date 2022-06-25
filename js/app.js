"use strict";

const openModal = document.querySelectorAll("#open-mobil");
const closeMobil = document.querySelector("#close-mobil");
const mobil = document.querySelector("#show-mobil");
const overlay = document.querySelector(".overlay");

for(let r of openModal){
  r.addEventListener("click", ()=>{
    mobil.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
// openModal.addEventListener("click", ()=>{
//   mobil.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// });
closeMobil.addEventListener("click", ()=>{
    mobil.classList.add("hidden");
    overlay.classList.add("hidden");
});

overlay.addEventListener("click", ()=>{
    mobil.classList.add("hidden");
    overlay.classList.add("hidden");
});

// navbar responsive btn
const navbarBtn = document.querySelector("#navbar-btn");
const navUl = document.querySelector(".nav-ul");
const navbarBtnClose = document.querySelector(".closeX");
const mainUl = document.querySelector(".main-ul");
const headerLine = document.querySelector("#line-header-none");
// const infoNone =  document.querySelector("#id-link-plus");
const sectionLeft = document.querySelectorAll(".info-none");
const infoPlus = document.querySelector(".info-plus");
const infoMinus = document.querySelector(".info-minus");

navbarBtn.addEventListener("click", ()=>{
    navUl.classList.add("nav-ul-res");
    navbarBtn.style.display = "none";
    navbarBtnClose.style.display = "block";
    mainUl.classList.remove("main-ul");
    headerLine.style.border = "none";
});
navbarBtnClose.addEventListener("click", ()=>{
  navUl.classList.remove("nav-ul-res");
    navbarBtn.style.display = "block";
    navbarBtnClose.style.display = "none";
    mainUl.classList.add("main-ul");
    headerLine.style.borderBottom = "1px solid rgba(0, 0, 0, 0.3)";
});

infoPlus.addEventListener("click", ()=>{
     for(let i of sectionLeft){
      i.classList.remove("info-none");
     }
     infoPlus.style.display = "none";
     infoMinus.style.display = "block";
});


infoMinus.addEventListener("click", ()=>{
  for(let a of sectionLeft){
    a.classList.add("info-none");
  }
   infoMinus.style.display = "none";
   infoPlus.style.display = "block";
})


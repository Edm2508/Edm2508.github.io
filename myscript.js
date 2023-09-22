alert ("La creación de este CV Online responde al Trabajo final del curso de Ticmas sobre FrontEnd")

const banner = document.querySelector(".profile");

function reducir() {
  banner.style.transform = "scale(1)";
}

function alargar() {
  banner.style.transform = "scale(1.3)";
}

banner.addEventListener("mouseover", alargar);
banner.addEventListener("mouseleave", reducir);

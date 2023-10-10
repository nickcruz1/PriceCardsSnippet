bronzePlan = () => {
  let bronzeModal = document.querySelector(".bronzeModal");
  
  bronzeModal.style.display = "block";
}

closeBronze = () => {
  let bronzeModal = document.querySelector(".bronzeModal");
  
  bronzeModal.style.display = "none";
}

silverPlan = () => {
 let silverModal = document.querySelector(".silverModal");
  
  silverModal.style.display = "block";
}

closeSilver = () => {
  let silverModal = document.querySelector(".silverModal");
  
  silverModal.style.display = "none";
}

goldPlan = () => {
  let goldModal = document.querySelector(".goldModal");
  
  goldModal.style.display = "block";
}

closeGold = () => {
  let goldModal = document.querySelector(".goldModal");
  
goldModal.style.display = "none";
}


// Event Listener for Gold Modal 
let goldModal = document.querySelector(".goldModal");
goldModal.addEventListener('click', closeGold);

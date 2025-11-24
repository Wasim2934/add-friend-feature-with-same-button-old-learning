let btn = document.querySelector("#btn");
let istatus = document.querySelector("#status");
let friend = false; 

btn.addEventListener("click", () => {
 
  if (friend == false) {
    istatus.textContent = "Friends ✅";
    btn.textContent = "Remove Friend";
    btn.classList.add("remove");
    friend = true;
  } else {
    istatus.textContent = "Stranger";
    btn.textContent = "Add Friend";
    btn.classList.remove("remove");
    friend = false;
  }
});


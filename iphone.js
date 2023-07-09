 function left(){
     document.querySelector(".application-menu").classList.toggle("active-slide");
     document.querySelector(".span1").classList.add("active-screen");
     document.querySelector(".span2").classList.remove("active-screen")


 }

 function right(){
     document.querySelector(".applications").classList.toggle("active-slide");
     document.querySelector(".span1").classList.remove("active-screen");
     document.querySelector(".span2").classList.add("active-screen")

 }

 const openMenu=document.querySelector(".open-button")

 openMenu.addEventListener("click",OpenAppScreen)

 function OpenAppScreen(){
    document.querySelector(".lock-screen").classList.replace("active","animate-lock-screen");
    document.querySelector(".lock-screen").style.height="0";
    document.querySelector(".application-menu").classList.add("active");
 }

const timeElement = document.querySelector('.time h1');

// Function to update the time
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;
  
  // Update the time element
  timeElement.textContent = time;
}

// Function to update the time every second
function startClock() {
  updateTime();
  setInterval(updateTime, 1000);
}

// Start the clock
startClock();

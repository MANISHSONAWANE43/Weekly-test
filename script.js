const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");
const btnincrease=document.getElementById("btn increase")
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
  
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      
      
      count++;
      counter.classList.add("up");

      setTimeout(() => {

        counter.classList.remove("up");

    }, 500);

    } else if (styles.contains("decrease")) {

      count--;

      counter.classList.add("down");

      setTimeout(() => {

        counter.classList.remove("down");

      }, 500);
    } else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "blue";
    }

    if (count < 0) {
      counter.style.color = "orange";
    }

    if (count === 0) {
      counter.style.color = "black";
    }

    counter.textContent = count;
  });
});
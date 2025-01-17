const btnCount = document.getElementById("btnCount");
const txtCounter = document.getElementById("txtCounter");

let counter = 0;

btnCount.addEventListener("click", () => {
    counter++;
    txtCounter.textContent = counter;
    console.log(counter)
    console.log("Clicked")
})
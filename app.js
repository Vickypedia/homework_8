

const selected = document.querySelectorAll(".float");

function selectedNavigation () {
    selected.forEach(float => float.classList.remove("active"));
    this.classList.add("active");
    //const selectedGlaze = document.querySelector(".glaze.active")
    //console.log(selectedGlaze.dataset.name,selectedGlaze.dataset.glaze);
}

selected.forEach(float => float.addEventListener("click",selectedNavigation));
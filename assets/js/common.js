const slider = document.querySelector(".school-wrapper");
const slides = document.querySelectorAll(".school-card");
const dots = document.querySelectorAll(".school-pagination span");

function setActiveDot(index){
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

slider.addEventListener("scroll", () => {

    const index = Math.round(slider.scrollLeft / slides[0].offsetWidth);

    setActiveDot(index);

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        slider.scrollTo({
            left:index * slides[0].offsetWidth,
            behavior:"smooth"
        });

    });

});
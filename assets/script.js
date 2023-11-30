const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slideIndex = 0

const imgSlide = document.querySelector(".banner-img")
const btnNext = document.querySelector(".arrow_right img")
const btnPrev = document.querySelector(".arrow_left")
const dots = document.querySelectorAll(".dot")

btnNext.addEventListener("click", function() {
	slideIndex++
	if(slideIndex >= slides.length) {
		slideIndex = 0
	}
	showSlide(slideIndex)
	updateDot(slideIndex)
})

btnPrev.addEventListener("click", function() {
	slideIndex--
	if(slideIndex < 0) {
		slideIndex = slides.length - 1
	}
	showSlide(slideIndex)
	updateDot(slideIndex)
})

function showSlide(index) {
	imgSlide.src = "./assets/images/slideshow/" + slides[index].image
	const tagLine = slides[index].tagLine;
    document.querySelector('p').innerHTML = tagLine;
}

function updateDot(indexDot) {
	dots.forEach((dot, slideIndex) => { 
		if(slideIndex === indexDot) {
			dot.classList.add('dot_selected')
		} else {
			dot.classList.remove('dot_selected')
		}
	}
)}

function dotOnClick(index) {
	dots.forEach((dot, slideIndex) => {
		dot.addEventListener("click", function(){
			showSlide(slideIndex)
			updateDot(slideIndex)
		})
	}
)}

dotOnClick(slideIndex)
updateDot(slideIndex)
showSlide(slideIndex)
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






























/*let currentIndex = 0

let nextArrow = document.querySelector(".arrow_right img")
let previousArrow = document.querySelector(".arrow_left")

nextArrow.addEventListener("click", function () {
	nextImage()
})

previousArrow.addEventListener("click", function () {
	previousImage()
})

/*for (let i=0; i < slides.length; i++ ) {

	let currentImg = document.querySelector(".banner-img")
	let currentIndex = 0

	let img = document.createElement("img") 
	img.src = "./assets/images/slideshow/" + slides[i]["image"]
	
	let bullet = document.createElement('div')
	bullet.classList.add("dot")

	let dots = document.querySelector(".dots")
	dots.appendChild(bullet)

	if(currentIndex == i) {
		bullet.classList.add("dot_selected")
		dots.appendChild(bullet)
	}
}

let dots = document.querySelector(".dots")
//let dot = document.querySelector(".dot")
let currentDot = 0



function createBullet() {

	for (let i=0; i < slides.length; i++ ) {

		let bullet = document.createElement('div')
		bullet.classList.add("dot")
		dots.appendChild(bullet)

		bullet.addEventListener("click", dotClick.bind(null, i ), false)
	}
}

function changeImage() {
	let currentImg = document.querySelector(".banner-img")
	currentImg.src = "./assets/images/slideshow/" + slides[currentIndex]["image"]
}

function nextImage() {
	currentIndex++
	if(currentIndex >= slides.length) {
		currentIndex = 0
	}	
	changeImage()
}

function previousImage() {
	currentIndex--
	if(currentIndex < 0) {
		currentIndex = slides.length -1
	}	
	changeImage()
}

function dotClick() {
	
	console.log(currentDot)
}

function showSlidebyIndex(index) {

}

createBullet()
*/


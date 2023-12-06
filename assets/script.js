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

/**
 * Création dynamique des dots
 */
const dots = document.querySelector(".dots")

function createBullet() {
	for (let i=0; i < slides.length; i++ ) {
		span = document.createElement("span")
		span.classList.add("dot")
		dots.appendChild(span)
		if (i == 0) {
			span.classList.add('dot_selected')
		}
	}
}

createBullet()

/**
 * Déclaration des variables
 */

let slideIndex = 0

const imgSlide = document.querySelector(".banner-img")
const btnNext = document.querySelector(".arrow_right img")
const btnPrev = document.querySelector(".arrow_left")
const alldots = document.querySelectorAll(".dot")

// Ecouteur d'évenement au clic sur fleche droite
btnNext.addEventListener("click", function() {
	slideIndex++
	if(slideIndex >= slides.length) {
		slideIndex = 0
	}
	showSlide(slideIndex)
	updateDot(slideIndex)
})

// Ecouteur d'évenement au clic sur fleche gauche
btnPrev.addEventListener("click", function() {
	slideIndex--
	if(slideIndex < 0) {
		slideIndex = slides.length - 1
	}
	showSlide(slideIndex)
	updateDot(slideIndex)
})

// Affichage de l'image et tagline correspondant à l'index 
function showSlide(index) {
	imgSlide.src = "./assets/images/slideshow/" + slides[index].image
	const tagLine = slides[index].tagLine;
    document.querySelector('p').innerHTML = tagLine;
}

// Ajouter la class active sur le dot en fonction de la position de l'index dans le tableau
function updateDot(indexDot) {
	alldots.forEach((dot, slideIndex) => { 
		if(slideIndex === indexDot) {
			dot.classList.add('dot_selected')
		} else {
			dot.classList.remove('dot_selected')
		}
	}
)}

// Au clic sur dot on change l'image et tagline ainsi que la position active du dot
function dotOnClick() {
	alldots.forEach((dot, slideIndex) => {
		dot.addEventListener("click", function(){
			showSlide(slideIndex)
			updateDot(slideIndex)
		})
	}
)}

dotOnClick(slideIndex)
updateDot(slideIndex)
showSlide(slideIndex)

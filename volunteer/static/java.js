//Меню 

let mainMenuTriger = document.querySelector('.menu-triger')
let mainMenuContainer = document.querySelector('.main-menu-container')

mainMenuTriger.addEventListener('click', function(){
	mainMenuContainer.classList.toggle('nv-opened')
})


$(document).ready(function(){
	setInterval(function(){
		var rim = new Date()
		var pick = document.querySelector('.timer')
		pick.innerHTML = `${rim.toLocaleTimeString()}`
		},1000)

})
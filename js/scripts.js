var add = document.getElementById('addElem'),
	list = document.getElementById('list');
	

add.addEventListener('click', function(e) {
	var element = document.createElement('li');
	element.innerHTML = 'item ' + document.getElementsByTagName('li').length;
	list.appendChild(element);
});

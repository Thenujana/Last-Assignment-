
const menuBtn = document.getElementById('menu-btn');
const menuDropdown = document.getElementById('menu-dropdown');

menuBtn.addEventListener('click', () => {
    menuDropdown.classList.toggle('show');
});


document.addEventListener('click', (event) => {
    if (!menuBtn.contains(event.target) && !menuDropdown.contains(event.target)) {
        menuDropdown.classList.remove('show');
    }
});


$(document).ready(function (){
    $('.add-to-cart').click(function (){ 
        alert("Successfully added!");
    });
});

 function addItem(){
    alert("Added to the list");
 }


 function addTocart(){
    alert("Added to the cart");
 }

 

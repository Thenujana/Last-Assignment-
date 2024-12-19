
const menuBtn = document.getElementById('menu-btn');
const menuDropdown = document.getElementById('menu-dropdown');

// Toggle the visibility of the menu dropdown
menuBtn.addEventListener('click', () => {
    menuDropdown.classList.toggle('show');
});

// Hide the dropdown when clicking outside
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






 
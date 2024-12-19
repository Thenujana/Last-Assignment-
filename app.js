
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



// Select elements
const form = document.getElementById('add-item-form');
const itemList = document.getElementById('items-list');


let foodItems = [];

function renderItems() {
    itemList.innerHTML = ''; 
    foodItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">
                        <strong>Category:</strong> ${item.category}<br>
                        <strong>Price:</strong> $${item.price}<br>
                        <strong>Quantity:</strong> ${item.quantity}<br>
                        <strong>Expires:</strong> ${item.expiry}
                    </p>
                    <button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">Delete</button>
                </div>
            </div>
        `;
        itemList.appendChild(card);
    });
}

// Function to add a new item
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    const itemImageInput = document.getElementById('item-image');
    const reader = new FileReader();

    reader.onload = function () {
        const newItem = {
            name: document.getElementById('item-name').value,
            category: document.getElementById('item-category').value,
            price: document.getElementById('item-price').value,
            quantity: document.getElementById('item-quantity').value,
            expiry: document.getElementById('item-expiry').value,
            image: reader.result // Store the image as a base64 string
        };

        foodItems.push(newItem);
        renderItems();
        form.reset(); // Clear the form fields
    };

    // Read the uploaded image file
    reader.readAsDataURL(itemImageInput.files[0]);
});

// Function to delete an item
function deleteItem(index) {
    foodItems.splice(index, 1); // Remove item by index
    renderItems();
}

// Initial render
renderItems();

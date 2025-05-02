// Menu Data
const menus = {
  breakfast: {
    "category": "Breakfast",
    "items": [
      {
        "name": "Mushroom OMELETTE",
        "description": "Fluffy omelette stuffed with fresh mushrooms",
        "price": 180,
        "image": "https://i.pinimg.com/736x/f3/60/8c/f3608c478de82dd490c4e6bae6786a1d.jpg",
        "type": "Non-Veg"

      },
      {
        "name": "Cheese OMELETTE",
        "description": "Classic omelette with melted cheese filling",
        "price": 160,
        "image": "https://i.pinimg.com/736x/e4/5d/91/e45d91e93c8ce6dbdcbed3be6efdfd55.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Desi spicy OMELETTE",
        "description": "Indian-style omelette with onions, chilies and spices",
        "price": 150,
        "image": "https://i.pinimg.com/736x/0d/96/7c/0d967ce1fe585db2279da1d76a64221d.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Half Fry Egg",
        "description": "Sunny-side up egg with runny yolk",
        "price": 60,
        "image": "https://i.pinimg.com/736x/a0/f6/50/a0f650bb799fb9b934a2945ef15b63d8.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Full Fry Egg",
        "description": "Fully cooked fried egg",
        "price": 70,
        "image": "https://i.pinimg.com/736x/54/0d/62/540d629b0816d56d6d911a93d85e397d.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Scrambled Egg",
        "description": "Light and fluffy scrambled eggs",
        "price": 90,
        "image": "https://i.pinimg.com/736x/dd/ca/b6/ddcab624594137794a7e8ef3a7117620.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "BREAD Sticks with Butter and Jam",
        "description": "Crispy bread sticks served with portion butter and jam",
        "price": 120,
        "image": "https://i.pinimg.com/736x/7b/d0/04/7bd00446603ea052e649815bb0be8b7e.jpg",
        "type": "Veg"
      },
      {
        "name": "Brown Bread",
        "description": "Healthy whole wheat brown bread",
        "price": 50,
        "image": "https://i.pinimg.com/736x/d7/56/fd/d756fdab0ca2788eb9871d1f53a3da6b.jpg",
        "type": "Veg"
      },
      {
        "name": "White Bread",
        "description": "Classic white bread slices",
        "price": 40,
        "image": "https://i.pinimg.com/736x/0d/35/f1/0d35f19a1e371a7cb9e573936dffb547.jpg",
        "type": "Veg"
      },
      {
        "name": "French Bread",
        "description": "Freshly baked French baguette",
        "price": 80,
        "image": "https://i.pinimg.com/736x/a2/c2/04/a2c2042e411ebf34f1e8dc8219f7380e.jpg",
        "type": "Veg"
      }
    ]
  }
  ,
  // Soups Data
  soups: {
    "category": "Soups",
    "items": [
      {
        "name": "Cream of Chicken Soup",
        "description": "Rich creamy soup served with breadsticks",
        "price": 220,
        "image": "https://i.pinimg.com/736x/c2/c4/05/c2c4054f5052e0a9ae678bc1539b19f2.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Cream of Tomato Soup",
        "description": "Classic tomato soup with croutons",
        "price": 180,
        "image": "https://i.pinimg.com/736x/35/15/1c/35151ceb28e67fc5c4429bef45e10bf1.jpg",
        "type": "Veg"
      },
      {
        "name": "Hot and Sour Soup",
        "description": "Spicy tangy soup with vegetables",
        "price": 160,
        "image": "https://i.pinimg.com/736x/d6/aa/b2/d6aab25613608495acea3e0d44cbdeba.jpg",
        "type": "Veg"
      },
      {
        "name": "Thai Coconut Soup",
        "description": "Aromatic coconut milk soup with lemongrass",
        "price": 250,
        "image": "https://i.pinimg.com/736x/ba/ef/44/baef4413b789465e33a004be5d7bffcb.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Mama Lime Thai Soup",
        "description": "Thai-style soup served in coconut shell",
        "price": 280,
        "image": "https://i.pinimg.com/736x/9f/fa/8e/9ffa8ecba2f0eb75f6025249b5ef3976.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Clear Chicken Soup",
        "description": "Light and healthy chicken broth",
        "price": 190,
        "image": "https://i.pinimg.com/736x/0b/1d/fa/0b1dfa33eff78ee46dea9879fe46fecb.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Sweet Corn Soup",
        "description": "Creamy sweet corn vegetable soup",
        "price": 170,
        "image": "https://i.pinimg.com/736x/f6/c9/96/f6c99690c575c01fed312080ef9eea6e.jpg",
        "type": "Veg"

      },
      {
        "name": "Manchow Soup",
        "description": "Spicy Indo-Chinese soup with crunch",
        "price": 200,
        "image": "https://i.pinimg.com/736x/a1/4d/59/a14d595797bf421cd91cca756d882ca8.jpg",
        "type": "Veg"
      }
    ]
  }
  ,
  // Pastas Data
  pastas: {
    "category": "Pastas",
    "items": [
      {
        "name": "Penne Pasta Alferado Sauce",
        "description": "Classic penne in creamy alfredo sauce",
        "price": 220,
        "image": "https://i.pinimg.com/736x/0b/61/46/0b6146027667ebe08b7e70d904f438f8.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Penne Pasta Pesto Cream Sauce",
        "description": "Penne with fresh basil pesto cream sauce",
        "price": 240,
        "image": "https://i.pinimg.com/736x/8e/1f/02/8e1f029a4bc38121a11f0df34e954484.jpg",
        "type": "Veg"
      },
      {
        "name": "Baked Pasta Marinara Sauce",
        "description": "Oven-baked pasta with rich marinara",
        "price": 260,
        "image": "https://i.pinimg.com/736x/7a/9a/70/7a9a706765e90c50a7ee19392e5eb1a6.jpg",
        "type": "Veg"
      },
      {
        "name": "Baked Beef Lasagne Alforno",
        "description": "Layered pasta with beef and cheese",
        "price": 280,
        "image": "https://i.pinimg.com/736x/6d/31/89/6d3189d24742473a6b3187fc48dffdd6.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Fettuccini Pesto Creamy Mushroom Sauce",
        "description": "Flat pasta with mushroom pesto cream",
        "price": 250,
        "image": "https://i.pinimg.com/736x/76/b9/19/76b9190c55a5cb29738fb55fafe3259c.jpg",
        "type": "Veg"
      },
      {
        "name": "Baked Chicken Enchiladas",
        "description": "Mexican-style pasta with chicken",
        "price": 270,
        "image": "https://i.pinimg.com/736x/43/45/df/4345df599284d7c58bab4baef633dd07.jpg",
        "type": "Non-Veg"
      }
    ]
  },
  // Main Course
  mainCourses: {
    "category": "Main Courses",
    "items": [
      // Asian/International Dishes
      {
        "name": "Assorted Sushi and Sashimi",
        "description": "With Wasabi, pickle Ginger & Soya Sauce",
        "price": 2800,
        "image": "https://i.pinimg.com/736x/1e/4a/f9/1e4af9c365cb6fa652e656d44b86b189.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Jumbo Prawn Tempura",
        "description": "Crispy fried prawns with dipping sauce",
        "price": 2800,
        "image": "https://i.pinimg.com/736x/e0/e5/f2/e0e5f22add68a60b38918ab49bfde8bb.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Thai Chicken Green Curry",
        "description": "Spicy coconut milk based curry",
        "price": 2800,
        "image": "https://i.pinimg.com/736x/bd/aa/88/bdaa889ac3bdbb7907f52d4fcb60fdeb.jpg",
        "type": "Non-Veg"
      },

      // Indian Specialties
      {
        "name": "Mutton Zafrani Biryani",
        "description": "Aromatic saffron-infused biryani",
        "price": 2800,
        "image": "https://i.pinimg.com/736x/e1/e9/a9/e1e9a9bb4458f6cd0f0aba5fe4994f2a.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Chicken Koyla Karahi",
        "description": "Smoky charcoal flavored chicken curry",
        "price": 2400,
        "image": "https://i.pinimg.com/736x/2a/d1/0b/2ad10b21669e9e575be345f0b33f27a9.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Beef Tawa Qeema",
        "description": "Spiced minced beef cooked on griddle",
        "price": 1900,
        "image": "https://i.pinimg.com/736x/cb/73/e9/cb73e96e2898287f3a3c818e0411ed5c.jpg",
        "type": "Non-Veg"
      },

      // Continental Dishes
      {
        "name": "Grilled Fish Lemon Butter Sauce",
        "description": "Fresh fish with citrus butter glaze",
        "price": 1900,
        "image": "https://i.pinimg.com/736x/68/ad/f3/68adf33aeb71bba5462a666a85dd58fc.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Stuffed Chicken Moroccan Sauce",
        "description": "Chicken breast with exotic spices",
        "price": 2000,
        "image": "https://i.pinimg.com/736x/49/58/c0/4958c0beb4e0724974e2a2d58924c5f3.jpg",
        "type": "Non-Veg"
      },
      {
        "name": "Baked Beef Lasagne Alforno",
        "description": "Layered pasta with beef and cheese",
        "price": 2000,
        "image": "https://i.pinimg.com/736x/4b/c0/c7/4bc0c78c62a022536898c6ac54d65c77.jpg",
        "type": "Non-Veg"
      },

      // Vegetarian Options
      {
        "name": "Japanese Garlic Rice",
        "description": "Fragrant rice cooked with garlic",
        "price": 1800,
        "image": "https://i.pinimg.com/736x/df/6e/80/df6e80322136fdb83503f1ca51ef499e.jpg",
        "type": "Veg"
      },
      {
        "name": "Puri Paratha",
        "description": "Flaky layered Indian bread",
        "price": 1800,
        "image": "https://i.pinimg.com/736x/37/88/e0/3788e058e5c021e11117181d5e5d8d96.jpg",
        "type": "Veg"
      },
      {
        "name": "Baked Pasta Marinara Sauce",
        "description": "Classic tomato-based pasta bake",
        "price": 2000,
        "image": "https://i.pinimg.com/736x/21/0f/db/210fdbc00018cb9f7eaa0e0d86f7e0e8.jpg",
        "type": "Veg"
      }
    ]
  },
  // Burgers Data
  burgers: {
    "category": "Burgers",
    "items": [
      {
        "name": "Mini Crispy Burgers Sliders",
        "description": "Bite-sized crispy chicken burgers",
        "price": 1800,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/c0/0f/c7/c00fc7670d4c77b63c73aaf0aa7705d3.jpg"
      },
      {
        "name": "Mini Beef Burgers Sliders",
        "description": "Small beef burgers with cheese",
        "price": 1800,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/8c/69/b2/8c69b2e013d93bc91181cad0952ee0be.jpg"
      },
      {
        "name": "Crispy Chicken Donuts Burgers",
        "description": "Unique donut-shaped chicken burgers",
        "price": 1800,
        "type": "Non-Veg",
        "image": "https://www.washingtonpost.com/wp-apps/imrs.php?src=http://www.washingtonpost.com/news/voraciously/wp-content/uploads/sites/68/2019/09/v-kfcchicken.jpg&w=1800&h=1800"
      },
      {
        "name": "Beef Donuts Burgers",
        "description": "Beef patties in donut buns",
        "price": 1800,
        "type": "Non-Veg",
        "image": "https://whatsfordinner.com/wp-content/uploads/2018/04/Donut_Burger_with_Cheddar__Bacon_Hero.jpg"
      },
      {
        "name": "American Crispy Chicken Finger",
        "description": "Crispy chicken finger burger",
        "price": 1800,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/1f/d2/64/1fd264ec193162fd4ba360cf3f15cf98.jpg"
      }
    ]
  },
  // Pizzas Data
  pizzas: {
    "category": "Pizzas",
    "items": [
      {
        "name": "Pepperoni Pizza",
        "description": "Authentic pepperoni with extra cheese and herbs",
        "price": 850,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/64/0b/7f/640b7f4aa911b6ab1500faf9b7dae73d.jpg"

      },
      {
        "name": "Fajita Pizza",
        "description": "Loaded with grilled veggies, jalapeños and fajita seasoning",
        "price": 700,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/94/17/a1/9417a1e77f97f58e812fdc5b3d198a50.jpg"

      },
      {
        "name": "Cheese Pizza",
        "description": "Mozzarella, cheddar, parmesan and gouda cheese blend",
        "price": 800,
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/b8/d5/52/b8d5529811985454752e1e298b062fd3.jpg"

      },
      {
        "name": "Tikka Pizza",
        "description": "Combination of chicken tikka, pepperoni and fajita veggies",
        "price": 900,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/87/12/2f/87122f54dd2427aebb9fc4098c2010ce.jpg"

      }
    ]
  },
  // Desserts Data
  desserts: {
    "category": "Desserts",
    "items": [
      {
        "name": "Apple Pie with Vanilla Ice Cream",
        "description": "Classic apple pie topped with vanilla ice cream and caramel sauce",
        "price": 350, 
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/c3/98/36/c39836bfb37642d8b159bbff63aef02c.jpg"
      },
      {
        "name": "Moulten Chocolate Lava Cake",
        "description": "Warm chocolate cake with gooey center, served with vanilla ice cream",
        "price": 300,
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/32/32/b3/3232b30401529f3fce3022771324a7ab.jpg"
      },
      {
        "name": "Bread Pudding in Matka",
        "description": "Traditional bread pudding served in clay pot with vanilla ice cream",
        "price": 250,
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/a7/29/a7/a729a7b94fbcf57d83fad66b79bd3036.jpg"
      },
      {
        "name": "Stick Kulfi",
        "description": "Traditional Indian ice cream on stick in various flavors",
             "price": 120,
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/d3/7a/2e/d37a2eb59cb489298b59d1a4de2d10e3.jpg"
      },
      {
        "name": "Deep Fried Ice-cream",
        "description": "Crispy fried ice cream with chocolate sauce",
              "price": 280,
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/2f/de/fc/2fdefc5016b83a6d55d0f66d20aaa984.jpg"
      },
      {
        "name": "Malpura with Rabri Malai",
        "description": "Sweet pancakes with thickened milk and cream",
        "price": 200,
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/63/be/b0/63beb03bfd580495fa7ceada9ff3d348.jpg"
      },
      {
        "name": "Mini Gulab Jamuns",
        "description": "Deep fried milk balls in sugar syrup",
        "price": 150,
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/d5/f8/ba/d5f8bacf04cacb599069be9ca078744e.jpg"
      },
      {
        "name": "Jalebi",
        "description": "Crispy spiral sweets made fresh",
        "price": 180,
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/58/d0/ee/58d0ee20230696987b7fce4a3e56f479.jpg"
      }
    ]
  },
};


// Function to render menu cards
function renderMenu(menuType) {
  const menuContainer = document.getElementById("menu-cards");
  menuContainer.innerHTML = ''; // Clear existing content

  const menuData = menus[menuType];

  menuData.items.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4";

    col.innerHTML = `
          <div class="card h-100" style="border-radius: 20px;">
              <div class="card-body p-2">
                  <img src="${item.image}" class="card-img-top" style="border-radius: 15px; height: 250px; object-fit: cover;" alt="${item.name}">
                  <h5 class="card-title mt-2">${item.name}</h5>
                  <p class="card-text text-muted small">${item.description}</p>
                  <div class="d-flex justify-content-between align-items-center">
                      <span class="text-success fw-bold">₹${item.price}</span>
                      <span class="badge ${item.type === 'Veg' ? 'bg-success' : 'bg-danger'}">${item.type}</span>
                  </div>
              </div>
              <div class="card-footer bg-transparent border-0 pb-2">
                  <button class="btn btn-success w-100 add-to-cart-btn">
                      Add To Cart
                  </button>
                  <div class="quantity-controls d-none d-flex justify-content-between align-items-center mt-2">
                      <button class="btn btn-sm btn-outline-secondary decrease-qty">-</button>
                      <span class="quantity">1</span>
                      <button class="btn btn-sm btn-outline-secondary increase-qty">+</button>
                  </div>
              </div>
          </div>
      `;
    menuContainer.appendChild(col);
  });

  setupCartButtons();
}

// Function to handle cart button interactions
function setupCartButtons() {
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
      const cardFooter = this.closest('.card-footer');
      const quantityControls = cardFooter.querySelector('.quantity-controls');

      this.classList.add('d-none');
      quantityControls.classList.remove('d-none');
    });
  });

  document.querySelectorAll('.increase-qty').forEach(button => {
    button.addEventListener('click', function () {
      const quantityElement = this.parentElement.querySelector('.quantity');
      quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
    });
  });

  document.querySelectorAll('.decrease-qty').forEach(button => {
    button.addEventListener('click', function () {
      const quantityElement = this.parentElement.querySelector('.quantity');
      const currentQuantity = parseInt(quantityElement.textContent);
      if (currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1;
      } else {
        const cardFooter = this.closest('.card-footer');
        const addButton = cardFooter.querySelector('.add-to-cart-btn');
        const quantityControls = cardFooter.querySelector('.quantity-controls');

        addButton.classList.remove('d-none');
        quantityControls.classList.add('d-none');
      }
    });
  });
}

// Event listeners for category clicks
document.getElementById('breakfast').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });
  this.classList.add('active');
  renderMenu('breakfast');
});

document.getElementById('soups').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  renderMenu('soups');
});

document.getElementById('pastas').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  renderMenu('pastas');
});

document.getElementById('mainCourses').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  renderMenu('mainCourses');
});

document.getElementById('burgers').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  renderMenu('burgers');
});

document.getElementById('pizzas').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  renderMenu('pizzas');
});

document.getElementById('desserts').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  renderMenu('desserts');
});
// Initial render
renderMenu('breakfast');

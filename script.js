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
        "image": "https://i.ytimg.com/vi/0rBC0zkhYzM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD1KOAhy9o27LTP2yT-VK2Y4fvkEg",
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
  // Seafood Specials Data
  seafood: {
    "category": "Seafood Specials",
    "items": [
      {
        "name": "Jumbo Prawn Tempura",
        "description": "Crispy fried giant prawns with dipping sauce",
        "price": 1200,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/e0/e5/f2/e0e5f22add68a60b38918ab49bfde8bb.jpg"
      },
      {
        "name": "Grilled Tandoori Prawn",
        "description": "Jumbo prawns marinated in tandoori spices and grilled",
        "price": 1400,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/d6/62/fe/d662fedbe7d70f11b642e4e641913ec0.jpg"
      },
      {
        "name": "Pat Pet Prawn with Basil and Baby Corn",
        "description": "Spicy Thai-style stir-fried prawns",
        "price": 1300,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/95/7a/6f/957a6f977d5876363ebc644516819f46.jpg"
      },
      {
        "name": "Char Coal Spicy Fish",
        "description": "Whole fish grilled with spicy marinade",
        "price": 1100,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/4c/da/31/4cda31de8e06a69b2ce8455d6c0ced60.jpg"
      },
      {
        "name": "Fish Wrapped in Banana Leaf",
        "description": "Steamed fish with herbs in banana leaf",
        "price": 1250,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/15/3d/ea/153deaa32c5747c79e053d6a48c83995.jpg"
      },
      {
        "name": "Whole Baked Red Snapper Fish Tamarind Sauce",
        "description": "Oven-baked snapper with tangy tamarind glaze",
        "price": 1800,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/91/c2/6b/91c26bd40dc0a5e5d058991518feccff.jpg"
      },
      {
        "name": "Dynamite Prawn",
        "description": "Crispy prawns with spicy mayo in elegant presentation",
        "price": 950,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/18/34/9f/18349f67ab8250ab1fed46ae95138431.jpg"
      },
      {
        "name": "Prawn Gambas",
        "description": "Spanish-style garlic prawns in olive oil",
        "price": 1050,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/40/95/11/409511727e06979d72903a757a1a43a3.jpg"
      },
      {
        "name": "Assorted Sushi and Sashimi Platter",
        "description": "Fresh raw fish and seafood with wasabi and soy",
        "price": 1600,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/31/08/ca/3108cae022ffc867357c1be9311cb543.jpg"
      }
    ]
  },
  // Salads Data
  salads: {
    "category": "Salads",
    "items": [
      {
        "name": "Wolderf Walnut Salad",
        "description": "Fresh greens with walnuts, served in melon bowl",
        "price": 350,
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/34/fc/63/34fc63c2ed9d2276b3e15a87a27d23b4.jpg"
      },
      {
        "name": "Futtosh Salad",
        "description": "Middle Eastern bread salad with vegetables",
        "price": 300,
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/e1/e1/e9/e1e1e94d7e37b9ada516b2969800c9a3.jpg"
      },
      {
        "name": "Ceaser Salad with Crouton and Chicken",
        "description": "Classic Caesar with grilled chicken and parmesan",
        "price": 400,
        "type": "Non-Veg",
        "image": "https://i.pinimg.com/736x/f8/e4/b3/f8e4b3ae3af7486de9b264af514e80ad.jpg"
      },
      {
        "name": "Greek Salad with Feta Cheese",
        "description": "Cucumber, tomatoes, olives and feta cheese",
        "price": 380,
        "type": "Veg",
        "image": "https://i.pinimg.com/736x/7e/36/ed/7e36edbc89a77dc8e5fb14e7454faeb9.jpg"
      }
    ]
  },
  // Appetizers Data
  appetizers: {
    "category": "Appetizers",
    "items": [
      {
        "name": "Dynamite Chicken",
        "type": "Non-Veg",
        "description": "Crispy chicken tossed in a spicy mayo sauce, served in a martini glass.",
        "price": "450",
        "image": "https://i.pinimg.com/736x/18/34/9f/18349f67ab8250ab1fed46ae95138431.jpg"
      },
      {
        "name": "Dynamite Prawn",
        "type": "Non-Veg",
        "description": "Spicy prawn bites in creamy sauce, served in a martini or orange glass.",
        "price": 950,
        "image": "https://i.pinimg.com/736x/6d/a2/bd/6da2bde0d4deac64e5af9f27415587cc.jpg"
      },
      {
        "name": "Peri Bites with Tartar Sauce",
        "type": "Non-Veg",
        "description": "Stuffed peri bites served with tangy tartar dip.",
        "price": "300",
        "image": "https://i.pinimg.com/736x/bb/b5/7b/bbb57b3feca164402ab873a4ab219156.jpg"
      },
      {
        "name": "Cheese Ball",
        "type": "Non-Veg",
        "description": "Crispy chicken cheese balls served hot with dip.",
        "price": "350",
        "image": "https://i.pinimg.com/736x/77/93/a7/7793a74dfd917a3f3fc84f23d2e62e05.jpg"
      },
      {
        "name": "Chicken Cheese Spring Rolls",
        "type": "Non-Veg",
        "description": "Golden fried spring rolls stuffed with chicken and cheese.",
        "price": "320",
        "image": "https://i.pinimg.com/736x/22/94/33/229433258830d730d01c714c8a12c52c.jpg"
      },
      {
        "name": "Chicken Stripes with Honey Mustard Sauce",
        "type": "Non-Veg",
        "description": "Crispy chicken strips served with honey mustard sauce.",
        "price": "330",
        "image": "https://i.pinimg.com/736x/1c/9b/7e/1c9b7ec04bb195ca6c519a480dccada5.jpg"
      },
      {
        "name": "Paneer Skewers with Peri Peri Sauce",
        "type": "Veg",
        "description": "Grilled paneer skewers glazed with peri peri sauce.",
        "price": "300",
        "image": "https://i.pinimg.com/736x/49/e5/80/49e5800ada1c3a59021e2c84bf91c457.jpg"
      },
      {
        "name": "Paneer Skewers with Bearnaise Sauce",
        "type": "Veg",
        "description": "Soft paneer cubes grilled and served with creamy bearnaise sauce.",
        "price": "320",
        "image": "https://i.pinimg.com/736x/26/98/08/2698082467d65ed0a59c99f81cea26ff.jpg"
      },
      {
        "name": "Fried Momos with Sweet Chilli Dip",
        "type": "Veg",
        "description": "Crispy dumplings filled with veggies, served with sweet chili dip.",
        "price": "280",
        "image": "https://i.pinimg.com/736x/e6/84/13/e6841381142b18e42d8c094636a3b380.jpg"
      },
      {
        "name": "Wasabi Prawns",
        "type": "Non-Veg",
        "description": "Crispy prawns coated in wasabi mayo, served in an orange shell.",
        "price": "580",
        "image": "https://i.pinimg.com/736x/39/3d/71/393d711153c1d048842ed5f1497ffc2a.jpg"
      },
      {
        "name": "Prawn in Phyllo Paste",
        "type": "Non-Veg",
        "description": "Delicate prawns wrapped in crispy phyllo, served in orange shell.",
        "price": "600",
        "image": "https://cookniche.com/Members/Images/photos/170804-055141-1MichelderGaspard.JPG"
      },
      {
        "name": "Prawn Gambas",
        "type": "Non-Veg",
        "description": "Spanish-style sizzling prawns sautéed in garlic and olive oil.",
        "price": "620",
        "image": "https://www.themediterraneandish.com/wp-content/uploads/2020/11/gambas-al-ajillo-spanish-shrimp-recipe-9.jpg"
      },
      {
        "name": "Chicken Roulade",
        "type": "Non-Veg",
        "description": "Stuffed chicken breast roll, seasoned and grilled to perfection.",
        "price": "480",
        "image": "https://thecozycook.com/wp-content/uploads/2024/01/Chicken-Roulade-1-1.jpg"
      },
      {
        "name": "Beef Nigimiyaki",
        "type": "Non-Veg",
        "description": "Japanese grilled beef rolls with scallions.",
        "price": "550",
        "image": "https://www.seriouseats.com/thmb/VCXOFDvIBtyA6SIvdjIEOKZe508=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__20110215-138071-negimaki-75fe9fc2351f42718b24f495bedae4e7.jpg"
      }
    ]
  },
  // Welcome Drinks Data
  beverages: {
    "category": "Welcome Drinks",
    "items": [
      {
        "name": "Mint Lemonade Crush",
        "type": "Welcome Drink",
        "description": "Refreshing mint and lemon blend served in a grapefruit shell",
        "price": " 350",
        "image": "https://i.pinimg.com/736x/83/bf/b5/83bfb5668177fbc7e2660a08c80a25ee.jpg"
      },
      {
        "name": "Strawberry Lemonade Crush",
        "type": "Welcome Drink",
        "description": "Sweet strawberry infused lemonade served chilled",
        "price": " 400",
        "image": "https://i.pinimg.com/736x/58/a5/2a/58a52a6ba71f59a10f4353bf8b849bd9.jpg"
      },
      {
        "name": "Fresh Pomegranate Juice",
        "type": "Juice",
        "description": "100% pure pomegranate juice with no additives",
        "price": " 450",
        "image": "https://i.pinimg.com/736x/94/cf/ae/94cfae753df5a18765810b5608338fe3.jpg"
      },
      {
        "name": "Peach Juice",
        "type": "Juice",
        "description": "Freshly squeezed peach nectar",
        "price": " 400",
        "image": "https://i.pinimg.com/736x/a4/5a/63/a45a63fb6915cf26a79cd9e23be324ee.jpg"
      },
      {
        "name": "Coconut Milkshake",
        "type": "Shake",
        "description": "Creamy coconut shake served in coconut shell",
        "price": " 500",
        "image": "https://i.pinimg.com/736x/32/59/41/325941aed230a5c3d9a6bb53325af81d.jpg"
      },
      {
        "name": "Pink Mint Lemonade",
        "type": "Welcome Drink",
        "description": "Rosy-hued mint lemonade with special herbs",
        "price": " 400",
        "image": "https://i.pinimg.com/736x/a1/7d/a8/a17da8cd6d6f0fa6df40d46796116187.jpg"
      },
      {
        "name": "Tea & Coffee",
        "type": "Hot Beverage",
        "description": "Traditional karak chai and arabic coffee",
        "price": " 200",
        "image": "https://i.pinimg.com/736x/ae/70/df/ae70df8240fbfe842398aa089c6fb97d.jpg"
      },
      {
        "name": "Mama Lime Thai Coconut Soup",
        "type": "Soup Drink",
        "description": "Aromatic Thai-inspired coconut soup served drinkable in shell",
        "price": " 550",
        "image": "https://www.allrecipes.com/thmb/kPvSC54TM7mio78ADIO3TBncrR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RM-146035-the-best-thai-coconut-soup-ddmfs-3x4-1741-96cd61c69f0b442392f629a0c65809b7.jpg"
      },
      {
        "name": "Rabri Malai",
        "type": "Dessert Drink",
        "description": "Traditional thickened sweet milk dessert",
        "price": " 300",
        "image": "https://i.pinimg.com/736x/66/28/75/662875293d047fde33dd57ce14dc7afe.jpg"
      }
    ]
  },
  // Mini Sandwiches Data
  sandwiches: {
    "category": "Sandwiches",
    "items": [
      {
        "name": "Mini Croissant Sandwich",
        "description": "Delicate croissant filled with assorted fillings",
        "category": "Mini Sandwich",
        "type": "Veg/Non-Veg",
        "price": 250,
        "image": "https://i.pinimg.com/736x/cd/83/fe/cd83feee4a3e89aec5e9f65fa7a8fcf4.jpg"
      },
      {
        "name": "Chicken Club Sandwich",
        "description": "Layered sandwich with chicken, bacon, lettuce, and mayo",
        "category": "Classic Sandwich",
        "type": "Non-Veg",
        "price": 350,
        "image": "https://i.pinimg.com/736x/df/73/bd/df73bde1e590302315682e2f7b4a4726.jpg"
      },
      {
        "name": "Mini Crispy Burger Sliders",
        "description": "Small beef or chicken burgers with crispy patties",
        "category": "Burger Sliders",
        "type": "Non-Veg",
        "price": 300,
        "image": "https://stpierrebakery-com.s3.amazonaws.com/app/uploads/2021/06/Mini_Cheese_Burgers-SB.jpg"
      },
      {
        "name": "Bun Kabab (Burns Road Style)",
        "description": "Street-style spiced kabab served in fresh buns",
        "category": "Street Food",
        "type": "Non-Veg",
        "price": 200,
        "image": "https://i.pinimg.com/736x/0c/fd/d9/0cfdd9afcf906fcc19f673f3b7bd4e14.jpg"
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
          <div class="card h-100 bg-light" style="border-radius: 20px;">
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
                  <button style="border-radius:20px;" class="btn btn-danger w-100 add-to-cart-btn">
                      Add To Cart
                  </button>
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

document.getElementById('seafood').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  renderMenu('seafood');
});

document.getElementById('salads').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  renderMenu('salads');
});

document.getElementById('appetizers').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  renderMenu('appetizers');
});

document.getElementById('beverages').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  renderMenu('beverages');
});

document.getElementById('sandwiches').addEventListener('click', function () {
  document.querySelectorAll('.cat-item').forEach(item => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  renderMenu('sandwiches');
});
// Initial render
renderMenu('breakfast');

// Search functionality
const searchInput = document.querySelector('input[type="text"]');
searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();

  if (searchTerm.length < 2) {
    // If search term is too short, show the current category
    const activeCategory = document.querySelector('.cat-item.active');
    if (activeCategory) {
      const categoryId = activeCategory.id;
      renderMenu(categoryId);
    }
    return;
  }

  // Search across all categories
  searchAllMenus(searchTerm);
});

function searchAllMenus(searchTerm) {
  const menuContainer = document.getElementById("menu-cards");
  menuContainer.innerHTML = ''; // Clear existing content

  let foundItems = false;

  // Loop through all menu categories
  for (const menuType in menus) {
    const menuData = menus[menuType];

    // Filter items that match the search term
    const matchingItems = menuData.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );

    // Display matching items
    matchingItems.forEach(item => {
      foundItems = true;
      const col = document.createElement("div");
      col.className = "col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4";

      col.innerHTML = `
        <div class="card h-100 bg-light" style="border-radius: 20px;">
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
            <button style="border-radius:20px;" class="btn btn-danger w-100 add-to-cart-btn">
              Add To Cart
            </button>
           
          </div>
        </div>
      `;
      menuContainer.appendChild(col);
    });
  }

  if (!foundItems) {
    menuContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <h4 class="text-dark">No items found matching "${searchTerm}"</h4>
      </div>
    `;
  }

  setupCartButtons();
}

// Cart functionality
let cart = {
  items: [],
  subtotal: 0,
  tax: 0,
  total: 0
};

// Function to add item to cart
function addToCart(item, quantity) {
  // Check if item already exists in cart
  const existingItem = cart.items.find(cartItem => cartItem.name === item.name);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({
      ...item,
      quantity: quantity,
      orderType: 'Take Away' // Default order type
    });
  }

  updateCart();
  updateOrderSummaryModal();
}

// Function to update cart totals
function updateCart() {
  cart.subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cart.tax = cart.subtotal * 0.05; // 5% tax
  cart.total = cart.subtotal + cart.tax;
}

// Function to update the order summary modal
function updateOrderSummaryModal() {
  const orderItemsContainer = document.querySelector('.order-items');
  orderItemsContainer.innerHTML = '';

  cart.items.forEach(item => {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item mb-2 pb-2 border-bottom';
    orderItem.innerHTML = `
      <div class="d-flex justify-content-between align-items-start">
        <h6 class="mb-1 flex-grow-1">${item.name} (${item.type})</h6>
        <span class="text-danger ms-2">$${(item.price * item.quantity).toFixed(2)}</span>
        <button class="btn btn-sm btn-outline-danger ms-2 remove-item" data-name="${item.name}">×</button>
      </div>
      <div class="d-flex justify-content-between text-muted mt-1">
        <div class="quantity-controls">
          <button class="btn btn-sm btn-outline-secondary p-0 px-2 decrease-item" data-name="${item.name}">-</button>
          <span class="mx-2">${item.quantity}</span>
          <button class="btn btn-sm btn-outline-secondary p-0 px-2 increase-item" data-name="${item.name}">+</button>
        </div>
        <small>${item.orderType}</small>
      </div>
    `;
    orderItemsContainer.appendChild(orderItem);
  });

  // Update summary totals
  document.querySelector('.order-summary .d-flex:first-child span:last-child').textContent = `$${cart.subtotal.toFixed(2)}`;
  document.querySelector('.order-summary .d-flex:nth-child(2) span:last-child').textContent = `$${cart.tax.toFixed(2)}`;
  document.querySelector('.order-summary .fw-bold span:last-child').textContent = `$${cart.total.toFixed(2)}`;

  // Add event listeners for quantity controls in modal
  setupModalQuantityControls();
}

// Function to setup quantity controls in modal
function setupModalQuantityControls() {
  // Increase quantity
  document.querySelectorAll('.increase-item').forEach(button => {
    button.addEventListener('click', function () {
      const itemName = this.getAttribute('data-name');
      const item = cart.items.find(item => item.name === itemName);
      if (item) {
        item.quantity++;
        updateCart();
        updateOrderSummaryModal();
      }
    });
  });

  // Decrease quantity
  document.querySelectorAll('.decrease-item').forEach(button => {
    button.addEventListener('click', function () {
      const itemName = this.getAttribute('data-name');
      const itemIndex = cart.items.findIndex(item => item.name === itemName);
      if (itemIndex !== -1) {
        const item = cart.items[itemIndex];
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          cart.items.splice(itemIndex, 1);
        }
        updateCart();
        updateOrderSummaryModal();
      }
    });
  });

  // Remove item
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function () {
      const itemName = this.getAttribute('data-name');
      const itemIndex = cart.items.findIndex(item => item.name === itemName);
      if (itemIndex !== -1) {
        cart.items.splice(itemIndex, 1);
        updateCart();
        updateOrderSummaryModal();
      }
    });
  });
}

// Modify the setupCartButtons function to add items to cart
function setupCartButtons() {
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.card');
      const cardBody = card.querySelector('.card-body');

      const item = {
        name: cardBody.querySelector('.card-title').textContent,
        description: cardBody.querySelector('.card-text').textContent,
        price: parseFloat(cardBody.querySelector('.text-success').textContent.replace('₹', '')),
        type: cardBody.querySelector('.badge').textContent,
        image: cardBody.querySelector('img').src
      };

      addToCart(item, 1);

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

// Add event listener for order type buttons
document.querySelectorAll('.btn-group button').forEach(button => {
  button.addEventListener('click', function () {
    // Remove active class from all buttons
    this.parentElement.querySelectorAll('button').forEach(btn => {
      btn.classList.remove('active');
    });

    // Add active class to clicked button
    this.classList.add('active');

    // Update order type for all items in cart
    const orderType = this.textContent.trim();
    cart.items.forEach(item => {
      item.orderType = orderType;
    });

    updateOrderSummaryModal();
  });
});

// Place order button functionality
document.querySelector('.modal-footer .btn-success').addEventListener('click', function () {
  if (cart.items.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  // Here you would typically send the order to your backend
  console.log('Order placed:', cart);
  alert('Order placed successfully!');

  // Clear the cart
  cart = {
    items: [],
    subtotal: 0,
    tax: 0,
    total: 0
  };

  // Update modal and close it
  updateOrderSummaryModal();
  bootstrap.Modal.getInstance(document.getElementById('orderSummaryModal')).hide();

  // Reset all add to cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.classList.remove('d-none');
  });
  document.querySelectorAll('.quantity-controls').forEach(controls => {
    controls.classList.add('d-none');
  });
});

// Cart icon click handler
document.getElementById('cartIcon').addEventListener('click', function () {
  var myModal = new bootstrap.Modal(document.getElementById('orderSummaryModal'));
  myModal.show();
});

// Function to update cart count display
function updateCartCount() {
  const cartCountElement = document.getElementById('cartItemCount');
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems > 0) {
    cartCountElement.textContent = totalItems;
    cartCountElement.style.display = 'block';
  } else {
    cartCountElement.style.display = 'none';
  }
}

// Then modify your updateCart function to call this:
function updateCart() {
  cart.subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cart.tax = cart.subtotal * 0.05; // 5% tax
  cart.total = cart.subtotal + cart.tax;
  updateCartCount(); // Add this line
}


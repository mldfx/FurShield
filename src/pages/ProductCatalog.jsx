"use client"

import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./ProductCatalog.css"
import logo from "../assets/images/furshield-logo.jpg"

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [cart, setCart] = useState([])
  const [priceRange, setPriceRange] = useState([0, 200])

  const categories = [
    { id: "all", name: "All Products", icon: "🛍️" },
    { id: "food", name: "Pet Food", icon: "🥘" },
    { id: "grooming", name: "Grooming", icon: "✂️" },
    { id: "toys", name: "Toys", icon: "🎾" },
    { id: "health", name: "Health & Care", icon: "💊" },
    { id: "accessories", name: "Accessories", icon: "🎀" },
  ]

  const products = [
    // Food Category
    {
      id: 1,
      name: "Premium Dog Food",
      category: "food",
      price: 45.99,
      image: "https://i2.wp.com/ww1.prweb.com/prfiles/2011/12/23/9063345/SuperPremiumNaturalDogFoodinBowl.jpg",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Cat Kibble Deluxe",
      category: "food",
      price: 32.99,
      image: "https://petfoodshop.com/cdn/shop/products/Evolution-Max-Cat-kibble-on-a-plate_dac6ea16-b8de-4651-861f-7ad4b7f556c0_2000x.jpg?v=1569121728",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 3,
      name: "Puppy Training Treats",
      category: "food",
      price: 12.99,
      image: "https://i.pinimg.com/736x/bd/5b/dc/bd5bdce24457b4ebb2785dec95cb9cc3.jpg",
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 4,
      name: "Senior Dog Formula",
      category: "food",
      price: 38.99,
      image: "https://kbdepot.ca/cdn/shop/products/country-vet-natural-senior-dog-resized-1024x1024_1200x1200.jpg",
      rating: 4.7,
      reviews: 78,
    },
    {
      id: 5,
      name: "Grain-Free Cat Food",
      category: "food",
      price: 42.99,
      image: "https://aller-petfood.com/wp-content/uploads/2018/03/ALL-CATS-Grain-free-kibble.jpg",
      rating: 4.5,
      reviews: 92,
    },
    {
      id: 6,
      name: "Wet Dog Food Variety",
      category: "food",
      price: 24.99,
      image: "https://img.freepik.com/premium-photo/wet-dry-pet-food-cat-dog-pate-isolated-white-background_1004691-1105.jpg?semt=ais_hybrid",
      rating: 4.4,
      reviews: 67,
    },
    {
      id: 7,
      name: "Kitten Milk Formula",
      category: "food",
      price: 18.99,
      image: "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Faab93880-7290-4fd0-9b33-53ce012c5a19_3345x2229.jpeg",
      rating: 4.8,
      reviews: 134,
    },
    {
      id: 8,
      name: "Raw Diet Dog Food",
      category: "food",
      price: 55.99,
      image: "https://avatars.mds.yandex.net/i?id=0caa88d2c34b27e6684637b944abd62fbb177120-4809749-images-thumbs&n=13",
      rating: 4.6,
      reviews: 45,
    },
    {
      id: 9,
      name: "Fish-Based Cat Food",
      category: "food",
      price: 36.99,
      image: "https://image.made-in-china.com/2f0j00IsCVTLnMZigl/Natural-Fish-Shape-Bicuits-for-Cats-Pet-Food-Dog-Food.jpg",
      rating: 4.7,
      reviews: 88,
    },
    {
      id: 10,
      name: "Organic Pet Treats",
      category: "food",
      price: 15.99,
      image: "https://media.istockphoto.com/id/115943881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%BA%D0%BE%D1%81%D1%82%D0%B8.jpg?s=612x612&w=0&k=20&c=IqH-7iJMEOdz2V8WBOGNh46260qMMF67nQkKdV1Kn5M=",
      rating: 4.9,
      reviews: 201,
    },

    // Grooming Category
    {
      id: 11,
      name: "Professional Pet Brush",
      category: "grooming",
      price: 19.99,
      image: "http://cdncn.goodao.net/cool-di/f4gwee0atkm.jpg",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 12,
      name: "Dog Shampoo & Conditioner",
      category: "grooming",
      price: 16.99,
      image: "https://i.etsystatic.com/9401864/r/il/5ca3f9/1161787592/il_570xN.1161787592_rsod.jpg",
      rating: 4.5,
      reviews: 89,
    },
    {
      id: 13,
      name: "Nail Clippers Set",
      category: "grooming",
      price: 12.99,
      image: "https://mobi-like.com/uploads/product/6300/6374/b078d6d3f3af11eabc4b080027a41e72_b078d6d6f3af11eabc4b080027a41e72.jpg",
      rating: 4.6,
      reviews: 234,
    },
    {
      id: 14,
      name: "Deshedding Tool",
      category: "grooming",
      price: 24.99,
      image: "http://s7d9.scene7.com/is/image/BedBathandBeyond/17647618354420p?qlt=85,1&op_sharpen=1&resMode=bilin&id=WEVSJ0&fmt=png-alpha&hei=994&wid=994",
      rating: 4.8,
      reviews: 178,
    },
    {
      id: 15,
      name: "Pet Hair Dryer",
      category: "grooming",
      price: 89.99,
      image: "https://cdn1.ozone.ru/s3/multimedia-1-a/7013380618.jpg",
      rating: 4.4,
      reviews: 67,
    },
    {
      id: 16,
      name: "Grooming Table",
      category: "grooming",
      price: 149.99,
      image: "https://www.groomersbest.com/wp-content/uploads/2020/10/GB44LPT-GRAYfront-scaled.jpg",
      rating: 4.6,
      reviews: 45,
    },
    {
      id: 17,
      name: "Ear Cleaning Kit",
      category: "grooming",
      price: 8.99,
      image: "https://i.pinimg.com/474x/94/7c/ad/947cadd95b3a7e54e0086ad27ca16095.jpg",
      rating: 4.7,
      reviews: 123,
    },
    {
      id: 18,
      name: "Dental Care Set",
      category: "grooming",
      price: 22.99,
      image: "https://img.joomcdn.net/520c84cd0dd1972ebf2bf172e6de7f12842db380_original.jpeg",
      rating: 4.5,
      reviews: 98,
    },
    {
      id: 19,
      name: "Flea & Tick Shampoo",
      category: "grooming",
      price: 14.99,
      image: "https://i5.walmartimages.com/seo/Pet-Life-Unlimited-Flea-Tick-Treatment-Shampoo-for-Dogs-16oz_9148b93f-1ffb-4d64-8b40-d68874a0324d.1badb33f8e8523a1015683013fc96a42.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      rating: 4.3,
      reviews: 156,
    },
    {
      id: 20,
      name: "Grooming Scissors",
      category: "grooming",
      price: 28.99,
      image: "https://www.heartpetslocal.co.uk/wp-content/uploads/shop-images/Wahl-Tool-Standard-Scissors-807530.jpg",
      rating: 4.8,
      reviews: 87,
    },

    // Toys Category
    {
      id: 21,
      name: "Interactive Puzzle Toy",
      category: "toys",
      price: 18.99,
      image: "https://media1.popsugar-assets.com/files/thumbor/5ccu9x6LSK-A_owxQv2DhFMhxPM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/05/15/919/n/48166322/ee492dc210d4bf26_148601_MAIN._AC_SL1500_V1558461187_/i/Nina-Ottosson-by-Outward-Hound-Hide-N-Slide-Puzzle-Game-Dog-Toy.jpg",
      rating: 4.9,
      reviews: 267,
    },
    {
      id: 22,
      name: "Rope Chew Toy",
      category: "toys",
      price: 9.99,
      image: "https://cdn1.ozone.ru/s3/multimedia-0/6104203548.jpg",
      rating: 4.6,
      reviews: 189,
    },
    {
      id: 23,
      name: "Squeaky Ball Set",
      category: "toys",
      price: 14.99,
      image: "https://img.joomcdn.net/ccefb0f08935e63dac8ceb606d59faa3b26341e6_original.jpeg",
      rating: 4.7,
      reviews: 234,
    },
    {
      id: 24,
      name: "Cat Feather Wand",
      category: "toys",
      price: 7.99,
      image: "https://m.media-amazon.com/images/I/61YM6frY8HS._AC_UL960_QL65_.jpg",
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 25,
      name: "Treat Dispensing Toy",
      category: "toys",
      price: 22.99,
      image: "https://avatars.mds.yandex.net/i?id=10f1b8d9db785dc5f3d9d69a3b1f1271f93755ae-16855010-images-thumbs&n=13",
      rating: 4.5,
      reviews: 123,
    },
    {
      id: 26,
      name: "Laser Pointer",
      category: "toys",
      price: 12.99,
      image: "https://avatars.mds.yandex.net/i?id=8bad08344a35b079e79c078f079ade0e14df76d8-5155332-images-thumbs&n=13",
      rating: 4.4,
      reviews: 98,
    },
    {
      id: 27,
      name: "Plush Comfort Toy",
      category: "toys",
      price: 16.99,
      image: "https://i5.walmartimages.com/seo/Hugimals-Frankie-the-Cat-4-5lbs-Weighted-Stuffed-Animal-Stress-Relief-Plush-for-Adults-and-Kids_fb02d5b0-2052-4ac9-a40a-6513be684595.6851207d16100775440b834b749feac1.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      rating: 4.7,
      reviews: 178,
    },
    {
      id: 28,
      name: "Frisbee Disc",
      category: "toys",
      price: 11.99,
      image: "https://wham-o.com/cdn/shop/files/75thFrisbeeFrontFlat.jpg?v=1687137960&width=740",
      rating: 4.6,
      reviews: 145,
    },
    {
      id: 29,
      name: "Catnip Mice Set",
      category: "toys",
      price: 8.99,
      image: "https://avatars.mds.yandex.net/i?id=84f9d5b7b79b720d4a5ceb3c4bee2efa0e06eb8c-5235603-images-thumbs&n=13",
      rating: 4.8,
      reviews: 201,
    },
    {
      id: 30,
      name: "Tug of War Rope",
      category: "toys",
      price: 13.99,
      image: "https://i.ebayimg.com/images/g/ULMAAOSwh85i2JHV/s-l1600.jpg",
      rating: 4.5,
      reviews: 167,
    },

    // Health & Care Category
    {
      id: 31,
      name: "Multivitamin Supplements",
      category: "health",
      price: 29.99,
      image: "https://i5.walmartimages.com/asr/5f6ef679-453c-4884-8aff-73f0be18d0f5.a182b7c48bd62c739a53db83fdb3c00f.jpeg",
      rating: 4.6,
      reviews: 134,
    },
    {
      id: 32,
      name: "Joint Support Chews",
      category: "health",
      price: 34.99,
      image: "https://m.media-amazon.com/images/I/711WGKr0N8L._AC_UL960_QL65_.jpg",
      rating: 4.8,
      reviews: 189,
    },
    {
      id: 33,
      name: "Flea Prevention Collar",
      category: "health",
      price: 19.99,
      image: "https://i.pinimg.com/736x/bb/d6/1e/bbd61edc727716f1a10d56630d9fa239.jpg",
      rating: 4.4,
      reviews: 156,
    },
    {
      id: 34,
      name: "Wound Care Spray",
      category: "health",
      price: 12.99,
      image: "https://medikurin.com/wp-content/uploads/2022/06/pettogard-antimicrobial-skincare-spray-cats-500ml-white.jpg",
      rating: 4.7,
      reviews: 98,
    },
    {
      id: 35,
      name: "Digestive Health Treats",
      category: "health",
      price: 24.99,
      image: "https://www.skinners.co.uk/wp-content/uploads/2021/09/WorkingDogDentalDigestiveTreats.jpg",
      rating: 4.5,
      reviews: 123,
    },
    {
      id: 36,
      name: "Eye Care Drops",
      category: "health",
      price: 16.99,
      image: "https://bugalugspetcare.com/cdn/shop/files/Bugalugs-Antiseptic-Eye-Drops-200ml.jpg",
      rating: 4.6,
      reviews: 87,
    },
    {
      id: 37,
      name: "Calming Supplements",
      category: "health",
      price: 27.99,
      image: "https://i5.walmartimages.com/asr/1ccf7786-985b-4f08-9fa4-19a0f1c86e38.506e6da26e91597788c29d255e18cf2a.jpeg",
      rating: 4.8,
      reviews: 167,
    },
    {
      id: 38,
      name: "First Aid Kit",
      category: "health",
      price: 39.99,
      image: "https://image.made-in-china.com/226f3j00UkbovpayYucz/Emergency-Medical-Dog-Bag-First-Aid-Kit-Set.webp",
      rating: 4.7,
      reviews: 145,
    },
    {
      id: 39,
      name: "Skin & Coat Oil",
      category: "health",
      price: 21.99,
      image: "https://i.pinimg.com/originals/a9/3d/ff/a93dffa1afe5d186de0eb3aa7860c3d0.jpg",
      rating: 4.5,
      reviews: 112,
    },
    {
      id: 40,
      name: "Probiotic Powder",
      category: "health",
      price: 32.99,
      image: "https://i.pinimg.com/736x/4b/6b/42/4b6b423cc4de6d81cbbf8a1cc5798b16--powder-vitamins.jpg",
      rating: 4.6,
      reviews: 134,
    },

    // Accessories Category
    {
      id: 41,
      name: "Adjustable Collar",
      category: "accessories",
      price: 15.99,
      image: "https://www.adverti.ru/media/catalog/product/1/4/140275.jpg",
      rating: 4.7,
      reviews: 234,
    },
    {
      id: 42,
      name: "Retractable Leash",
      category: "accessories",
      price: 24.99,
      image: "https://img.joomcdn.net/1b1a6fb34dc749650557ff9b8113aed5b53d0a53_original.jpeg",
      rating: 4.5,
      reviews: 189,
    },
    {
      id: 43,
      name: "Pet Carrier Bag",
      category: "accessories",
      price: 49.99,
    image: "https://i.pinimg.com/originals/1d/18/c4/1d18c4c968534d9b4513f9eba26bdc1b.jpg",
      rating: 4.6,
      reviews: 156,
    },
    {
      id: 44,
      name: "Food & Water Bowls",
      category: "accessories",
      price: 18.99,
      image: "https://i.ebayimg.com/images/g/SxkAAOSwoW5gNiqM/s-l1200.webp",
      rating: 4.8,
      reviews: 267,
    },
    {
      id: 45,
      name: "Pet Bed Cushion",
      category: "accessories",
      price: 35.99,
      image: "https://m.media-amazon.com/images/I/81gRl0FEz4L._AC_UF894,1000_QL80_.jpg",
      rating: 4.7,
      reviews: 178,
    },
    {
      id: 46,
      name: "ID Tag Set",
      category: "accessories",
      price: 8.99,
      image: "https://m.media-amazon.com/images/I/71318GocZJL._AC_UF1000,1000_QL80_.jpg",
      rating: 4.4,
      reviews: 123,
    },
    {
      id: 47,
      name: "Travel Water Bottle",
      category: "accessories",
      price: 16.99,
      image: "https://img.joomcdn.net/cb8fa2d2f0d2c8d8cdc865ba9589dffc0acc32b5_original.jpeg",
      rating: 4.6,
      reviews: 145,
    },
    {
      id: 48,
      name: "Waste Bag Dispenser",
      category: "accessories",
      price: 12.99,
      image: "https://cdn1.ozone.ru/s3/multimedia-1-k/7368855212.jpg",
      rating: 4.5,
      reviews: 198,
    },
    {
      id: 49,
      name: "Car Safety Harness",
      category: "accessories",
      price: 28.99,
      image: "https://i.ebayimg.com/images/g/eZAAAOSwj85YPfVf/s-l500.jpg",
      rating: 4.8,
      reviews: 167,
    },
    {
      id: 50,
      name: "Blanket & Throw",
      category: "accessories",
      price: 22.99,
      image: "https://m.media-amazon.com/images/I/71iDftoIskL._AC_UL800_QL65_.jpg",
      rating: 4.7,
      reviews: 134,
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesCategory && matchesSearch && matchesPrice
  })

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="product-catalog">
      <header className="catalog-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src={logo} alt="FurShield" />
            <span>FurShield</span>
          </Link>
          <nav className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/feedback">Feedback</Link>
          </nav>
          <div className="cart-icon" onClick={() => document.getElementById("cart-sidebar").classList.toggle("open")}>
            🛒 <span className="cart-count">{getTotalItems()}</span>
          </div>
        </div>
      </header>

      <div className="catalog-container">
        <aside className="filters-sidebar">
          <div className="search-section">
            <h3>Search Products</h3>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="categories-section">
            <h3>Categories</h3>
            <div className="category-list">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="price-section">
            <h3>Price Range</h3>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
              />
              <span>to</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 200])}
              />
            </div>
          </div>
        </aside>

        <main className="products-grid">
          <div className="products-header">
            <h1>Pet Products Catalog</h1>
            <p>Showing {filteredProducts.length} products</p>
          </div>

          <div className="products-container">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    <span className="stars">{"★".repeat(Math.floor(product.rating))}</span>
                    <span className="rating-text">({product.reviews} reviews)</span>
                  </div>
                  <div className="product-price">${product.price}</div>
                  <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Cart Sidebar */}
      <div id="cart-sidebar" className="cart-sidebar">
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button
            className="close-cart"
            onClick={() => document.getElementById("cart-sidebar").classList.remove("open")}
          >
            ×
          </button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image || "/placeholder.svg"} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <strong>Total: ${getTotalPrice()}</strong>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCatalog

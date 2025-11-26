import React, { useState, useEffect } from 'react';
import { 
  Container, Carousel, Card, Row, Col, Button, Form, Badge 
} from 'react-bootstrap';
import { 
  FaShoppingCart, FaStar, FaHeart, FaPhone, FaEnvelope, 
  FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaTruck, FaLeaf, 
  FaHeadset, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay,
  FaArrowRight, FaClock, FaShieldAlt, FaBolt, FaGift, FaCrown, FaEye
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

// Import local images
import freshVegetablesBanner from '../assets/images/fresh-vegetables.jpg';
import organicfruitesBanner from '../assets/images/organic-fru.jpg';
import placeholder from '../assets/images/placeholder-category.jpg';

// Import category images
import bakery from '../assets/images/bakery.jpg';
import dairyEgg from '../assets/images/dairy_egg.webp';
import beverages from '../assets/images/beverages.png';
import fishMeat from '../assets/images/fish-meat.jpg';
import fruitsVeggies from '../assets/images/fruite_vege.png';
import snacks from '../assets/images/snacks.jpg';

// Import product images
import freshApples from '../assets/images/products/fresh-apples.jpg';
import organicMilk from '../assets/images/products/organic-milk.jpg';
import largeEggs from '../assets/images/products/eggs-dozen.jpg';
import wholeWheatBread from '../assets/images/products/whole-wheat-bread.jpg';
import chickenBreast from '../assets/images/products/chicken-breast.jpg';
import basmatiRice from '../assets/images/products/rice-cakes.jpg';
import freshTomatoes from '../assets/images/products/organic-tomatoes.jpg';
import potatoChips from '../assets/images/products/potato-chips.jpg';
import avocado from '../assets/images/products/avocados.jpg';
import greekYogurt from '../assets/images/products/greek-yogurt.jpg';
import freshSalmon from '../assets/images/products/fresh-salmon.jpg';
import orangeJuice from '../assets/images/products/orange-juice.jpg';
import chocolateCookies from '../assets/images/products/chocolate-chip-cookies.jpg';
import bananas from '../assets/images/products/bananas.jpg';
import pasta from '../assets/images/products/pasta-pack.jpg';
import cheeseBlock from '../assets/images/products/sharp-cheddar.jpg';


import Header from '../Layout/Header';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import EnhancedNewsletter from '../components/EnhancedNewsletter';
const parentCategories = [
  {
    name: "Bakery",
    slug: "bakery",
    image: bakery,
    subcategories: []
  },
  {
    name: "Dairy & Eggs",
    slug: "dairy-eggs",
    image: dairyEgg,
    subcategories: []
  },
  {
    name: "Beverages",
    slug: "beverages",
    image: beverages,
    subcategories: []
  },
  {
    name: "Fish & Meat",
    slug: "meat-fish",
    image: fishMeat,
    subcategories: []
  },
  {
    name: "Fruits & Vegetables",
    slug: "fruits-vegetables",
    image: fruitsVeggies,
    subcategories: []
  },
  {
    name: "Snacks",
    slug: "snacks",
    image: snacks,
    subcategories: []
  }
];

const GroceryHome = () => {
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [specialOffers, setSpecialOffers] = useState([]);
  const navigate = useNavigate();

  const { user, isAuthenticated } = useAuth();
  const { addToCart, getTotalItems } = useCart();

  // Initialize enhanced data with LOCAL images
  useEffect(() => {
    // Featured Products with LOCAL images
    const enhancedFeatured = [
      {
        id: 1,
        name: "Organic Apples",
        price: 120,
        oldPrice: 150,
        rating: 4.5,
        category: "Fruits",
        image: freshApples,
        tag: "BEST SELLER",
        tagColor: "#dc3545",
        deliveryTime: "15 min",
        unit: "1 kg"
      },
      {
        id: 2,
        name: "Fresh Milk",
        price: 60,
        oldPrice: 70,
        rating: 4.8,
        category: "Dairy",
        image: organicMilk,
        tag: "POPULAR",
        tagColor: "#198754",
        deliveryTime: "20 min",
        unit: "1 liter"
      },
      {
        id: 3,
        name: "Farm Eggs",
        price: 80,
        oldPrice: 90,
        rating: 4.6,
        category: "Dairy",
        image: largeEggs,
        tag: "FRESH",
        tagColor: "#0dcaf0",
        deliveryTime: "25 min",
        unit: "12 pieces"
      },
      {
        id: 4,
        name: "Whole Wheat Bread",
        price: 45,
        oldPrice: 55,
        rating: 4.3,
        category: "Bakery",
        image: wholeWheatBread,
        tag: "HEALTHY",
        tagColor: "#ffc107",
        deliveryTime: "30 min",
        unit: "1 loaf"
      },
      {
        id: 5,
        name: "Fresh Chicken",
        price: 220,
        oldPrice: 250,
        rating: 4.7,
        category: "Meat",
        image: chickenBreast,
        tag: "PREMIUM",
        tagColor: "#6f42c1",
        deliveryTime: "35 min",
        unit: "1 kg"
      },
      {
        id: 6,
        name: "Basmati Rice",
        price: 90,
        oldPrice: 110,
        rating: 4.4,
        category: "Grains",
        image: basmatiRice,
        tag: "QUALITY",
        tagColor: "#fd7e14",
        deliveryTime: "20 min",
        unit: "1 kg"
      },
      {
        id: 7,
        name: "Fresh Tomatoes",
        price: 40,
        oldPrice: 50,
        rating: 4.2,
        category: "Vegetables",
        image: freshTomatoes,
        tag: "ORGANIC",
        tagColor: "#20c997",
        deliveryTime: "15 min",
        unit: "1 kg"
      },
      {
        id: 8,
        name: "Potato Chips",
        price: 30,
        oldPrice: 40,
        rating: 4.1,
        category: "Snacks",
        image: potatoChips,
        tag: "CRUNCHY",
        tagColor: "#e83e8c",
        deliveryTime: "25 min",
        unit: "1 pack"
      }
    ];
    
    // Trending products with LOCAL images
    const trending = [
      {
        id: 9,
        name: "Avocado",
        price: 80,
        rating: 4.9,
        category: "Fruits",
        image: avocado,
        rank: 1,
        orders: 450,
        ratingCount: 180
      },
      {
        id: 10,
        name: "Greek Yogurt",
        price: 120,
        rating: 4.7,
        category: "Dairy",
        image: greekYogurt,
        rank: 2,
        orders: 380,
        ratingCount: 150
      },
      {
        id: 11,
        name: "Salmon Fillet",
        price: 350,
        rating: 4.8,
        category: "Fish",
        image: freshSalmon,
        rank: 3,
        orders: 320,
        ratingCount: 120
      },
      {
        id: 12,
        name: "Orange Juice",
        price: 85,
        rating: 4.5,
        category: "Beverages",
        image: orangeJuice,
        rank: 4,
        orders: 290,
        ratingCount: 95
      },
      {
        id: 13,
        name: "Chocolate Cookies",
        price: 55,
        rating: 4.6,
        category: "Snacks",
        image: chocolateCookies,
        rank: 5,
        orders: 420,
        ratingCount: 160
      },
      {
        id: 14,
        name: "Bananas",
        price: 35,
        rating: 4.4,
        category: "Fruits",
        image: bananas,
        rank: 6,
        orders: 510,
        ratingCount: 200
      },
      {
        id: 15,
        name: "Pasta",
        price: 65,
        rating: 4.3,
        category: "Grains",
        image: pasta,
        rank: 7,
        orders: 270,
        ratingCount: 85
      },
      {
        id: 16,
        name: "Cheese Block",
        price: 180,
        rating: 4.7,
        category: "Dairy",
        image: cheeseBlock,
        rank: 8,
        orders: 340,
        ratingCount: 130
      }
    ];

    // Special offers data
    const offers = [
      {
        id: 1,
        title: "Weekend Special",
        description: "Get 30% off on all fresh fruits",
        discount: "30% OFF",
        code: "FRUIT30",
        color: "linear-gradient(135deg, #28a745, #20c997)",
        icon: FaGift,
        expiry: "2 days left"
      },
      {
        id: 2,
        title: "First Order Bonus",
        description: "Flat ₹100 off on first purchase",
        discount: "₹100 OFF",
        code: "WELCOME100",
        color: "linear-gradient(135deg, #007bff, #6f42c1)",
        icon: FaCrown,
        expiry: "New users only"
      },
      {
        id: 3,
        title: "Free Delivery",
        description: "Free delivery on orders above ₹199",
        discount: "FREE DELIVERY",
        code: "FREESHIP",
        color: "linear-gradient(135deg, #fd7e14, #e83e8c)",
        icon: FaTruck,
        expiry: "Limited time"
      },
      {
        id: 4,
        title: "Snack Time",
        description: "Buy 2 get 1 free on all snacks",
        discount: "B2G1 FREE",
        code: "SNACKTIME",
        color: "linear-gradient(135deg, #6f42c1, #e83e8c)",
        icon: FaBolt,
        expiry: "1 week left"
      }
    ];

    setFeaturedProducts(enhancedFeatured);
    setTrendingProducts(trending);
    setSpecialOffers(offers);
  }, []);

  const handleAddToCart = async (product) => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: '/' } } });
      return;
    }

    try {
      const result = await addToCart(product, 1);
      if (result.success) {
        console.log('Product added to cart successfully');
      } else {
        console.error('Failed to add to cart:', result.message);
        alert(result.message || 'Failed to add to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart. Please try again.');
    }
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const cartItemsCount = getTotalItems();

  return (
    <div className="grocery-home">
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #1c51d8ff 0%, #764ba2 100%);
          min-height: 60vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.3);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
        }
        
        .floating-card {
          animation: float 6s ease-in-out infinite;
          box-shadow: 0 20px 40px rgba(120, 243, 26, 0.1);
          transition: all 10s ease;
        }
        
        .floating-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(12, 57, 238, 0.15);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .category-card {
          transition: all 0.3s ease;
          border: none;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(145deg, #55aaa4ff, #b1efedff);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          will-change: transform; 
          backface-visibility: hidden;
        }
        
        .category-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .category-card img {
          image-rendering: auto;
          object-fit: cover;
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease;
        }
        
        .product-card {
          transition: all 0.3s ease;
          border: none;
          border-radius: 15px;
          overflow: hidden;
          position: relative;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #66eacdff 0%, #c2a8a8ff 100%);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(-10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .neon-text {
          color: #00ff88;
          text-shadow: 0 0 10px #00ff88;
        }
        
        .pulse-button {
          animation: pulse 5s infinite;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); }
          100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
        }
        
        .top-bar {
          background: linear-gradient(90deg, #1e3c72 0%, #2a5298 100%);
          color: white;
        }
        
        .navbar-brand h2 {
          background: linear-gradient(45deg, #4a945bff, #20c997);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .deals-timer {
          background: linear-gradient(45deg, #ff6b6b, #ee5a52);
          color: white;
          padding: 5px 8px;
          border-radius: 25px;
          display: inline-block;
          animation: glow 10s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from { box-shadow: 0 0 10px #f99a9aff; }
          to { box-shadow: 0 0 20px #0b0a0aff; }
        }
        
        .feature-icon {
          background: linear-gradient(135deg, #a1abd6ff 0%, #764ba2 100%);
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto 20px;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }
        
        .newsletter-section {
          background: linear-gradient(135deg, #b6c0ebff 10%, #95d2d4ff 50%);
          color: black;
        }
        
        .footer-dark {
          background: linear-gradient(135deg, #b6c0ebff 10%, #95d2d4ff 50%);
        }

        /* Enhanced styles */
        .product-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 10px;
          color: white;
        }

        .trending-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: linear-gradient(45deg, #FF6B6B, #FF8E8E);
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .offer-card {
          border: none;
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
        }

        .offer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .product-image-container {
          height: 200px;
          overflow: hidden;
          position: relative;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }
      `}</style>

      {/* Enhanced Top Bar */}
      <div className="top-bar py-2 d-none d-md-block">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-center">
                <FaPhone className="me-2" />
                <span className="me-3">+91 7092980042</span>
                <FaEnvelope className="me-2" />
                <span>Freshmart@gmail.com</span>
              </div>
            </Col>
            <Col md={6} className="text-end">
              <span className="me-3">🎉 Free delivery on orders over  ₹ 150!</span>
              {!isAuthenticated && (
                <>
                  <Link to="/login" className="text-white text-decoration-none me-3">Login</Link>
                  <Link to="/register" className="text-white text-decoration-none">Register</Link>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      {/* Enhanced Navigation */}
      <Header 
        cartItems={cartItemsCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Hero Carousel */}
      <Carousel fade className="mb-5">
        <Carousel.Item>
          <div style={{ height: '400px', overflow: 'hidden' }}>
            <img
              className="d-block w-100 h-100"
              src={freshVegetablesBanner}
              alt="Fresh Vegetables"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <Carousel.Caption className="text-start" style={{ bottom: '30%', left: '10%', right: 'auto' }}>
            <h2 className="display-4 fw-bold">Fresh Vegetables</h2>
            <p className="lead">Get 20% off on your first order</p>
            <Link to='/shop'><Button variant="success" size="lg">Shop Now</Button></Link>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: '400px', overflow: 'hidden' }}>
            <img
              className="d-block w-100 h-100"
              src={organicfruitesBanner}
              alt="Organic Fruits"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <Carousel.Caption className="text-start" style={{ bottom: '30%', left: '10%', right: 'auto' }}>
            <h2 className="display-4 fw-bold">Organic Fruits</h2>
            <p className="lead">Farm to table in 24 hours</p>
            <Link to='/shop'><Button variant="success" size="lg">Shop Now</Button></Link>  
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Enhanced Categories Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">🛒 Shop by Categories</h2>
            <p className="lead text-muted">Discover fresh products across all categories</p>
          </div>
          
          <Row className="g-4">
            {parentCategories.map((category, index) => (
              <Col key={category.slug} xs={6} sm={4} md={3} lg={2} className="d-flex">
                <Link 
                  to={`/category/${category.slug}`}
                  className="text-decoration-none w-100"
                  aria-label={`Browse ${category.name} category`}
                >
                  <Card className="category-card h-100 w-100 border-0 shadow-sm hover-shadow">
                    <div 
                      className="ratio ratio-1x1 position-relative overflow-hidden"
                      style={{ minHeight: '150px' }}
                    >
                      <Card.Img
                        variant="top"
                        src={category.image || placeholder}
                        alt={category.name}
                        className="object-fit-cover"
                        style={{ 
                          transition: 'transform 0.3s ease',
                          animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                          width: '100%',
                          height: '100%',
                          objectPosition: 'center'
                        }}
                        onError={(e) => { 
                          e.target.src = placeholder;
                        }}
                      />
                      <div className="position-absolute bottom-0 start-0 end-0 glass-effect p-2">
                        <small className="text-white fw-bold">
                          {category.subcategories.length} items
                        </small>
                      </div>
                    </div>
                    <Card.Body className="text-center p-3">
                      <Card.Title className="fs-6 mb-1 text-dark fw-bold">
                        {category.name}
                      </Card.Title>
                      <small className="text-success">
                        Fresh & Quality ✨
                      </small>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
           
          <div className="text-center mt-5">
           <Button 
              variant="outline-success" 
              size="lg" 
              className="rounded-pill px-4"
              as={Link} 
              to="/shop"
            >
              <FaArrowRight className="me-2" />
              Explore All Categories
            </Button>
          </div>
        </Container>
      </section>

      {/* Enhanced Featured Products */}
      <section className="py-2  ">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <h2 className="display-6 fw-bold mb-2">⭐ Featured Products</h2>
              <p className="text-muted">Handpicked fresh items just for you</p>
            </div>
           <Link to='/shop'><Button variant="success"  className="rounded-pill">
              View All <FaArrowRight className="ms-2" />
            </Button></Link>
          </div>
          <Row className="g-4">
            {featuredProducts.map((product, index) => (
              <Col key={product.id} xs={6} md={4} lg={3} className="mb-4">
                <Card className="product-card h-100 border-0 shadow-sm">
                  <div className="position-relative">
                    {/* Product Tag */}
                    
                    
                    <div className="position-absolute end-0 top-0 p-3 z-3">
                      <Button 
                        variant="link" 
                        className="p-0 rounded-circle bg-white shadow-sm" 
                        style={{ width: '40px', height: '40px' }}
                        onClick={() => toggleWishlist(product.id)}
                        aria-label={wishlist.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        <FaHeart 
                          size={18} 
                          color={wishlist.includes(product.id) ? '#dc3545' : '#6c757d'} 
                        />
                      </Button>
                    </div>
                    
                    {product.oldPrice && (
                      <Badge bg="danger" className="position-absolute start-0 top-0 m-2 z-3">
                        {Math.round((1 - product.price/product.oldPrice) * 100)}% OFF
                      </Badge>
                    )}
                    
                    <div className="product-image-container">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="product-image"
                        onError={(e) => {
                          e.target.src = placeholder;
                        }}
                      />
                    </div>
                  </div>
                  
                  <Card.Body className="p-3">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="text-success small fw-bold">{product.category}</span>
                      <small className="text-muted">{product.unit}</small>
                    </div>
                    
                    <Card.Title className="fs-6 fw-bold mb-2">{product.name}</Card.Title>
                    
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-flex text-warning me-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} size={12} className={i < Math.floor(product.rating) ? '' : 'text-muted'} />
                        ))}
                      </div>
                      <span className="small text-muted">({product.rating})</span>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <span className="fw-bold fs-5 text-success">₹{product.price}</span>
                        {product.oldPrice && (
                          <span className="text-decoration-line-through text-muted small ms-2">
                            ₹{product.oldPrice}
                          </span>
                        )}
                      </div>
                      <small className="text-info">
                        <FaClock className="me-1" />
                        {product.deliveryTime}
                      </small>
                    </div>
                    
                    <Button 
                      variant="success" 
                      size="sm"
                      className="w-100 rounded-pill"
                      onClick={() => handleAddToCart(product)}
                      disabled={!isAuthenticated}
                    >
                      <FaShoppingCart className="me-1" />
                      {isAuthenticated ? 'Add to Cart' : 'Login to Buy'}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* New Trending Products Section */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
               <h2 className="display-6 fw-bold mb-2">Trending Now</h2>
            <p className="lead text-muted">Products everyone is loving right now</p>
            </div>
           <Link to='/shop'><Button variant="success"  className="rounded-pill">
              View All <FaArrowRight className="ms-2" />
            </Button></Link>
          </div>
          <Row className="g-4">
            {trendingProducts.map((product) => (
              <Col key={product.id} xs={6} md={4} lg={3} className="mb-4">
                <Card className="product-card h-100 border-0 shadow-sm position-relative">
                  {/* Trending Badge */}
                  <div className="trending-badge">
                    #{product.rank}
                  </div>
                  
                  <div className="product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image"
                      onError={(e) => {
                        e.target.src = placeholder;
                      }}
                    />
                  </div>
                  
                  <Card.Body className="p-3">
                    <Card.Title className="fs-6 fw-bold mb-2">{product.name}</Card.Title>
                    
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-bold text-success">₹{product.price}</span>
                      <span className="views-count small">
                        <FaEye className="me-1" />
                        {product.orders}+ orders
                      </span>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <div className="d-flex text-warning me-1">
                          <FaStar size={12} />
                        </div>
                        <small className="text-muted">({product.ratingCount})</small>
                      </div>
                      <small className="text-success fw-semibold">
                        {product.category}
                      </small>
                    </div>
                    
                    <Button 
                      variant="outline-success" 
                      size="sm"
                      className="w-100 rounded-pill"
                      onClick={() => handleAddToCart(product)}
                      disabled={!isAuthenticated}
                    >
                      <FaShoppingCart className="me-1" />
                      {isAuthenticated ? 'Add to Cart' : 'Login to Buy'}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Special Offers Section */}
      <section className="py-5 ">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <h2 className="display-6 fw-bold ">🎁 Special Offers</h2>
            <p className="lead text-muted">Don't miss these exclusive deals and discounts</p>
           </div>
          </div>
          
          
          <Row className="g-4">
            {specialOffers.map((offer) => {
              const IconComponent = offer.icon;
              return (
                <Col key={offer.id} xs={12} sm={6} lg={3} className="mb-4">
                  <Card 
                    className="offer-card shadow border-0 text-white position-relative"
                    style={{ background: offer.color, minHeight: '200px' }}
                  >
                    <Card.Body className="p-4 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <IconComponent size={32} />
                          <Badge bg="light" text="dark" className="fs-6 px-3">
                            {offer.discount}
                          </Badge>
                        </div>
                        <Card.Title className="h5 fw-bold mb-2">{offer.title}</Card.Title>
                        <Card.Text className="mb-3 small opacity-90">
                          {offer.description}
                        </Card.Text>
                      </div>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <code className="bg-dark bg-opacity-50 px-3 py-2 rounded text-white small">
                            {offer.code}
                          </code>
                          <small className="opacity-90">{offer.expiry}</small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-1">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">🌟 Why Choose FreshMart</h2>
            <p className="lead text-muted">Experience the difference with our premium service</p>
          </div>
          <Row className="g-4">
            <Col md={3} className="text-center mb-4">
              <div className="feature-icon">
                <FaTruck size={35} className="text-white" />
              </div>
              <h5 className="fw-bold mb-3">⚡ Lightning Fast Delivery</h5>
              <p className="text-muted">Get your order delivered in just 30 minutes with our express service</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="feature-icon">
                <FaLeaf size={35} className="text-white" />
              </div>
              <h5 className="fw-bold mb-3">🌱 Farm Fresh Products</h5>
              <p className="text-muted">Direct from organic farms to your table within 24 hours</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="feature-icon">
                <FaShieldAlt size={35} className="text-white" />
              </div>
              <h5 className="fw-bold mb-3">🛡️ Quality Guarantee</h5>
              <p className="text-muted">100% satisfaction guaranteed or your money back</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="feature-icon">
                <FaHeadset size={35} className="text-white" />
              </div>
              <h5 className="fw-bold mb-3">💬 24/7 Support</h5>
              <p className="text-muted">Our dedicated team is always here to help you</p>
            </Col>
          </Row>
        </Container>
      </section>

        <EnhancedNewsletter />
      {/* Enhanced Footer */}

      <footer className="footer-dark text-black py-5">
        <Container>
          <Row>
            <Col lg={4} className="mb-4">
              <h3 className="fw-bold mb-4">FreshMart</h3>
              <p className="text-black-70">
                Your one-stop shop for fresh, organic groceries delivered fast to your doorstep. 
                Quality you can trust, service you'll love.
              </p>
              <div className="d-flex gap-3 mt-4">
  {/* Facebook */}
  <Button
    variant="outline-light"
    size="sm"
    className="rounded-circle"
    as="a"
    href="https://www.facebook.com/share/1DQ1KvjTpy/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook />
  </Button>

  {/* Instagram */}
  <Button
    variant="outline-light"
    size="sm"
    className="rounded-circle"
    as="a"
    href="https://www.instagram.com/_vishva_07_._?igsh=YzZrbzdhdXZleTg3"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </Button>

  <Button
    variant="outline-light"
    size="sm"
    className="rounded-circle"
    as="a"
    href="https://x.com/TVishva3006"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter /> 
  </Button>
</div>

            </Col>
            <Col md={4} lg={2} className="mb-4">
              <h5 className="fw-bold mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
                <li className="mb-2"><Link to="/shop" className="text-white-50 text-decoration-none">Shop</Link></li>
                <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none">About Us</Link></li>
                <li className="mb-2"><Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
                <li className="mb-2"><Link to="/faq" className="text-white-50 text-decoration-none">FAQs</Link></li>
              </ul>
            </Col>
            <Col md={4} lg={2} className="mb-4">
              <h5 className="fw-bold mb-4">Categories</h5>
              <ul className="list-unstyled">
                {parentCategories.slice(0, 5).map(category => (
                  <li key={category.name} className="mb-2">
                    <Link 
                      to={`/category/${category.slug}`} 
                      className="text-black-70 text-decoration-none"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={4} lg={4} className="mb-4">
              <h5 className="fw-bold mb-4">Contact Us</h5>
              <ul className="list-unstyled text-black-100">
                <li className="mb-3 d-flex align-items-start">
                  <FaMapMarkerAlt className="me-2 mt-1" />
                  <span>123 Fresh Street, Chennai City, Chennai 632001</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaPhone className="me-2" />
                    <a href="tel:+917092980042">
                     +91 70929 80042
                    </a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaEnvelope className="me-2" />
                  <span>Freshmart@gmail.com</span>
                </li>
              </ul>
            </Col>
          </Row>
          <hr className="my-1" />
          <Row className="align-items-center">
            <Col md={6} className="mb-3 mb-md-0">
              <p className="mb-0 small">&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="d-flex justify-content-md-end gap-3">
                <FaCcVisa size={24} />
                <FaCcMastercard size={24} />
                <FaCcPaypal size={24} />
                <FaCcApplePay size={24} />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default GroceryHome;

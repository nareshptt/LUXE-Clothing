import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide for hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Winter Collection 2025",
      subtitle: "Embrace the season with style",
      cta: "Shop Winter"
    },
    {
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      title: "Sustainable Fashion",
      subtitle: "Eco-friendly luxury for modern life",
      cta: "Discover More"
    },
    {
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Premium Essentials",
      subtitle: "Timeless pieces, endless possibilities",
      cta: "Shop Essentials"
    }
  ];

  const features = [
    {
      icon: <span style={{fontSize: '2.5rem'}}>🚛</span>,
      title: "Free Shipping",
      description: "Free worldwide shipping on orders over $100. Fast and reliable delivery to your doorstep."
    },
    {
      icon: <span style={{fontSize: '2.5rem'}}>🔒</span>,
      title: "Secure Payment",
      description: "Your payment information is protected with bank-level security and encryption."
    },
    {
      icon: <span style={{fontSize: '2.5rem'}}>↩️</span>,
      title: "Easy Returns",
      description: "30-day hassle-free returns. Not satisfied? We'll make it right, guaranteed."
    }
  ];

  const collections = [
    {
      name: "Women's Collection",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      itemCount: "150+ Items"
    },
    {
      name: "Men's Collection",
      image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      itemCount: "120+ Items"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      itemCount: "80+ Items"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Classic Trench Coat",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Minimalist Sweater",
      price: 89,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      badge: "New"
    },
    {
      id: 3,
      name: "Designer Handbag",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      badge: "Sale"
    },
    {
      id: 4,
      name: "Premium Denim",
      price: 129,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      badge: "Limited"
    }
  ];

  const testimonials = [
    {
      name: "Emma Wilson",
      role: "Fashion Blogger",
      content: "LUXE has completely transformed my wardrobe. The quality is exceptional and the style is unmatched.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "James Rodriguez",
      role: "Creative Director",
      content: "Finally found a brand that understands modern fashion. Every piece is a statement of quality and style.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>
      
      <style>{`
        .hero-slide {
          height: 100vh;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
        }
        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        .gradient-text {
          background: linear-gradient(to right, #212529, #6c757d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .collection-img {
          aspect-ratio: 4/5;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .collection-img:hover {
          transform: scale(1.1);
        }
        .product-img {
          aspect-ratio: 1;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .product-img:hover {
          transform: scale(1.1);
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        .carousel-indicators {
          bottom: 2rem;
        }
        .carousel-indicators button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
        }
        .carousel-indicators button.active {
          background-color: white;
        }
        .fade-slide {
          transition: opacity 1s ease-in-out;
        }
        .badge-new { background-color: #198754 !important; }
        .badge-sale { background-color: #dc3545 !important; }
        .badge-bestseller { background-color: #0d6efd !important; }
        .badge-limited { background-color: #6f42c1 !important; }
      `}</style>
      
      <div className="min-vh-100 bg-white text-dark">
        {/* Navigation */}
        <nav className={`navbar navbar-expand-lg fixed-top transition-all ${
          scrollY > 50 ? 'navbar-scrolled' : ''
        }`} style={{backgroundColor: scrollY > 50 ? '' : 'rgba(255, 255, 255, 0.8)'}}>
          <div className="container-xl">
            <a className="navbar-brand fw-bold fs-2 gradient-text" href="#">
              LUXE
            </a>
            
            <div className="d-none d-lg-flex">
              <ul className="navbar-nav me-auto">
                {['Home', 'Women', 'Men', 'Accessories', 'Sale'].map((item) => (
                  <li className="nav-item" key={item}>
                    <a 
                      className="nav-link fw-medium text-dark mx-2"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="d-none d-lg-flex align-items-center">
              <span className="fs-4 me-3" style={{cursor: 'pointer'}}>🔍</span>
              <span className="fs-4 me-3" style={{cursor: 'pointer'}}>👤</span>
              <span className="fs-4 me-3" style={{cursor: 'pointer'}}>❤️</span>
              <div className="position-relative">
                <span className="fs-4" style={{cursor: 'pointer'}}>🛍️</span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  2
                </span>
              </div>
            </div>

            <button
              className="navbar-toggler d-lg-none"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="fs-4">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="d-lg-none border-top bg-white">
              <div className="container p-4">
                {['Home', 'Women', 'Men', 'Accessories', 'Sale'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="d-block py-2 text-decoration-none fw-medium text-dark"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section with Carousel */}
        <section className="position-relative overflow-hidden" style={{height: '100vh'}}>
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`position-absolute w-100 h-100 fade-slide ${
                index === currentSlide ? '' : 'd-none'
              }`}
            >
              <div 
                className="hero-slide d-flex align-items-center"
                style={{backgroundImage: `url(${slide.image})`}}
              >
                <div className="hero-overlay"></div>
                <div className="container position-relative text-center text-white">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-1 fw-bold mb-4 lh-1">
                        {slide.title}
                      </h1>
                      <p className="fs-3 mb-5 opacity-75">
                        {slide.subtitle}
                      </p>
                      <button className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-semibold">
                        {slide.cta} <span className="ms-2">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Indicators */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
            <div className="d-flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`border-0 rounded-circle ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                  style={{width: '12px', height: '12px'}}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-light">
          <div className="container-xl py-5">
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-lg-4">
                  <div className="card h-100 border-0 shadow card-hover">
                    <div className="card-body text-center p-5">
                      <div className="mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="card-title h4 fw-bold mb-3">
                        {feature.title}
                      </h3>
                      <p className="card-text text-muted lh-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section className="py-5">
          <div className="container-xl py-5">
            <div className="text-center mb-5">
              <h2 className="display-3 fw-bold mb-4 text-dark">
                Shop by Category
              </h2>
              <p className="fs-4 text-muted col-lg-8 mx-auto">
                Discover our curated collections designed for the modern lifestyle
              </p>
            </div>

            <div className="row g-4">
              {collections.map((collection, index) => (
                <div key={index} className="col-lg-4">
                  <div className="position-relative overflow-hidden rounded-3" style={{cursor: 'pointer'}}>
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-100 collection-img"
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-dark p-4">
                      <div className="text-white">
                        <h3 className="h3 fw-bold mb-2">{collection.name}</h3>
                        <p className="mb-0 text-white-50">{collection.itemCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-5 bg-light">
          <div className="container-xl py-5">
            <div className="text-center mb-5">
              <h2 className="display-3 fw-bold mb-4 text-dark">
                Featured Products
              </h2>
              <p className="fs-4 text-muted col-lg-8 mx-auto">
                Handpicked favorites from our latest collection
              </p>
            </div>

            <div className="row g-4">
              {featuredProducts.map((product) => (
                <div key={product.id} className="col-sm-6 col-xl-3">
                  <div className="card border-0 shadow card-hover h-100" style={{cursor: 'pointer'}}>
                    <div className="position-relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="card-img-top product-img"
                      />
                      {product.badge && (
                        <span className={`position-absolute top-0 start-0 m-3 badge badge-${product.badge.toLowerCase()}`}>
                          {product.badge}
                        </span>
                      )}
                      <button className="position-absolute top-0 end-0 m-3 btn btn-light btn-sm rounded-circle p-2 opacity-0 hover-opacity-100">
                        <span className="text-danger">❤️</span>
                      </button>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-semibold mb-2">{product.name}</h5>
                      <div className="d-flex align-items-center mb-3">
                        <div className="d-flex me-2">
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i} 
                              className={`fs-6 ${
                                i < Math.floor(product.rating) 
                                  ? 'text-warning' 
                                  : 'text-muted'
                              }`}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                        <small className="text-muted">({product.rating})</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="h5 fw-bold text-dark me-2">${product.price}</span>
                        {product.originalPrice && (
                          <small className="text-muted text-decoration-line-through">${product.originalPrice}</small>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-5">
          <div className="container-xl py-5">
            <div className="text-center mb-5">
              <h2 className="display-3 fw-bold mb-4 text-dark">
                What Our Customers Say
              </h2>
            </div>

            <div className="row g-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="col-lg-6">
                  <div className="card border-0 shadow h-100">
                    <div className="card-body p-5">
                      <div className="d-flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-warning fs-5">⭐</span>
                        ))}
                      </div>
                      <p className="card-text fs-5 text-muted mb-4 lh-lg">
                        "{testimonial.content}"
                      </p>
                      <div className="d-flex align-items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="rounded-circle me-3"
                          style={{width: '48px', height: '48px', objectFit: 'cover'}}
                        />
                        <div>
                          <div className="fw-semibold text-dark">{testimonial.name}</div>
                          <small className="text-muted">{testimonial.role}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-5 bg-dark text-white">
          <div className="container py-5">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <div className="mb-4">
                  <span className="display-1 d-block mb-4">🏆</span>
                  <h2 className="display-3 fw-bold mb-4">
                    Join the LUXE Community
                  </h2>
                  <p className="fs-4 text-light mb-5 opacity-75">
                    Be the first to know about new collections, exclusive sales, and style tips from our fashion experts.
                  </p>
                </div>
                
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="d-flex gap-3">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="form-control rounded-pill px-4 py-3"
                      />
                      <button className="btn btn-light rounded-pill px-4 py-3 fw-semibold text-nowrap">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-5 bg-white border-top">
          <div className="container-xl">
            <div className="row g-4 mb-4">
              <div className="col-lg-3">
                <h4 className="fw-bold text-dark mb-3">LUXE</h4>
                <p className="text-muted mb-4">Premium fashion for the modern lifestyle. Quality, style, and sustainability in every piece.</p>
              </div>
              <div className="col-lg-3">
                <h5 className="fw-semibold text-dark mb-3">Shop</h5>
                <div className="d-flex flex-column gap-2">
                  <a href="#" className="text-muted text-decoration-none">Women's Collection</a>
                  <a href="#" className="text-muted text-decoration-none">Men's Collection</a>
                  <a href="#" className="text-muted text-decoration-none">Accessories</a>
                  <a href="#" className="text-muted text-decoration-none">Sale Items</a>
                </div>
              </div>
              <div className="col-lg-3">
                <h5 className="fw-semibold text-dark mb-3">Customer Care</h5>
                <div className="d-flex flex-column gap-2">
                  <a href="#" className="text-muted text-decoration-none">Contact Us</a>
                  <a href="#" className="text-muted text-decoration-none">Size Guide</a>
                  <a href="#" className="text-muted text-decoration-none">Shipping Info</a>
                  <a href="#" className="text-muted text-decoration-none">Returns</a>
                </div>
              </div>
              <div className="col-lg-3">
                <h5 className="fw-semibold text-dark mb-3">Company</h5>
                <div className="d-flex flex-column gap-2">
                  <a href="#" className="text-muted text-decoration-none">About Us</a>
                  <a href="#" className="text-muted text-decoration-none">Careers</a>
                  <a href="#" className="text-muted text-decoration-none">Sustainability</a>
                  <a href="#" className="text-muted text-decoration-none">Press</a>
                </div>
              </div>
            </div>
            <div className="border-top pt-4 d-md-flex justify-content-between align-items-center">
              <div className="text-muted mb-3 mb-md-0">
                © 2025 LUXE. Crafted with passion for fashion.
              </div>
              <div className="d-flex gap-4">
                <a href="#" className="text-muted text-decoration-none">Privacy Policy</a>
                <a href="#" className="text-muted text-decoration-none">Terms of Service</a>
                <a href="#" className="text-muted text-decoration-none">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Clock, MapPin, Phone, Heart, Users, Leaf, Star, Award, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoffeeShopLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sage-green/20">
      {/* Header */}
      <header className="bg-dark-brown/95 backdrop-blur-sm text-white shadow-2xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-warm-orange p-2 rounded-full">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Vintage Bistro</h1>
                <p className="text-warm-orange text-sm font-medium">Est. 2020</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#home"
                className="text-white hover:text-warm-orange transition-all duration-300 font-medium text-lg"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-warm-orange transition-all duration-300 font-medium text-lg"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-warm-orange transition-all duration-300 font-medium text-lg"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-warm-orange transition-all duration-300 font-medium text-lg"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-24 bg-gradient-to-br from-dark-brown via-dark-brown/90 to-warm-orange/80 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-warm-orange/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-warm-orange/30">
                <Star className="h-4 w-4 mr-2" />
                Brewing Excellence Since 1952
              </div>
              <h2 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                Where Every Cup
                <span className="block text-warm-orange">Tells a Story</span>
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
                Step into our vintage world of carefully crafted coffee, where tradition meets passion in every single
                brew. Experience the warmth of community, one cup at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button className="bg-warm-orange hover:bg-warm-orange/90 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-warm-orange/25 transition-all duration-300 transform hover:scale-105">
                  Order Now
                </Button>
    
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl transform rotate-2 border border-white/20">
                <Image
                  src="/hero.webp"
                  alt="Vintage coffee shop interior"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-sage-green text-white p-6 rounded-full shadow-2xl">
                <Coffee className="h-10 w-10" />
              </div>
              <div className="absolute -top-4 -right-4 bg-warm-orange text-white p-4 rounded-full shadow-xl">
                <Award className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-sage-green/10 text-sage-green px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Heritage
            </div>
            <h3 className="text-5xl font-bold text-dark-brown mb-6 tracking-tight">Our Story</h3>
            <div className="w-32 h-1 bg-gradient-to-r from-warm-orange to-sage-green mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-dark-brown/70 max-w-3xl mx-auto leading-relaxed">
              Three generations of coffee passion, served with love and tradition in every single cup
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-sage-green/20 to-warm-orange/20 p-4 rounded-3xl">
                <Image
                  src="/about.webp"
                  alt="Coffee roasting process"
                  width={700}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-dark-brown text-white p-4 rounded-full shadow-2xl">
                <Heart className="h-8 w-8" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-sage-green/10 to-sage-green/5 p-8 rounded-2xl border border-sage-green/20 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-sage-green text-white p-2 rounded-full mr-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-dark-brown">Born from Passion</h4>
                </div>
                <p className="text-dark-brown/80 leading-relaxed text-lg">
                  Founded in 1952 by Giuseppe Moretti, Vintage Brew began as a small neighborhood coffee roastery.
                  Giuseppe's dream was simple: to bring the authentic taste of Italian coffee culture to our community.
                </p>
              </div>

              <div className="bg-gradient-to-br from-warm-orange/10 to-warm-orange/5 p-8 rounded-2xl border border-warm-orange/20 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-warm-orange text-white p-2 rounded-full mr-4">
                    <Coffee className="h-6 w-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-dark-brown">Crafted with Care</h4>
                </div>
                <p className="text-dark-brown/80 leading-relaxed text-lg">
                  Today, we continue his legacy by sourcing the finest beans from sustainable farms worldwide, roasting
                  them to perfection using traditional methods passed down through generations.
                </p>
              </div>

              <div className="flex items-center space-x-6 bg-dark-brown/5 p-6 rounded-2xl">
                <div className="bg-warm-orange text-white p-3 rounded-full">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark-brown">10,000+</p>
                  <p className="text-dark-brown/70 font-medium">Happy customers served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-sage-green/5 to-cream/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-warm-orange/10 text-warm-orange px-6 py-2 rounded-full text-sm font-semibold mb-6">
              What We Offer
            </div>
            <h3 className="text-5xl font-bold text-dark-brown mb-6 tracking-tight">Our Services</h3>
            <div className="w-32 h-1 bg-gradient-to-r from-warm-orange to-sage-green mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-dark-brown/70 max-w-3xl mx-auto leading-relaxed">
              From expertly crafted beverages to memorable experiences that bring our community together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-warm-orange to-warm-orange/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-dark-brown mb-4">Artisan Coffee</h4>
                <p className="text-dark-brown/70 leading-relaxed text-lg">
                  Hand-crafted espresso drinks, pour-overs, and specialty blends made by our skilled baristas using
                  premium beans.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-sage-green to-sage-green/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-dark-brown mb-4">Fresh Pastries</h4>
                <p className="text-dark-brown/70 leading-relaxed text-lg">
                  Daily-baked croissants, muffins, and artisanal breads made with organic ingredients and traditional
                  recipes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-dark-brown to-dark-brown/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-dark-brown mb-4">Private Events</h4>
                <p className="text-dark-brown/70 leading-relaxed text-lg">
                  Host your special occasions in our cozy space. Perfect for book clubs, business meetings, and
                  celebrations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-warm-orange to-warm-orange/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-dark-brown mb-4">Coffee Roasting</h4>
                <p className="text-dark-brown/70 leading-relaxed text-lg">
                  Take home our signature blends or create your custom roast. We offer beans from around the world.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-sage-green to-sage-green/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-dark-brown mb-4">Coffee Classes</h4>
                <p className="text-dark-brown/70 leading-relaxed text-lg">
                  Learn the art of coffee making with our hands-on workshops. From brewing basics to latte art mastery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-dark-brown to-dark-brown/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-dark-brown mb-4">Catering</h4>
                <p className="text-dark-brown/70 leading-relaxed text-lg">
                  Bring our coffee experience to your office or event. Full-service catering with professional setup.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-dark-brown via-dark-brown/95 to-warm-orange/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Get In Touch
            </div>
            <h3 className="text-5xl font-bold text-white mb-6 tracking-tight">Visit Us Today</h3>
            <div className="w-32 h-1 bg-gradient-to-r from-warm-orange to-sage-green mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Come experience the warmth and flavor that has made us a community favorite for over 70 years
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex items-start space-x-6">
                  <div className="bg-warm-orange text-white p-3 rounded-full">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Location</h4>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Djoe prod, M4F2+6MP <br /> Avenue Hamda Laâouani <br /> Kairouan
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex items-start space-x-6">
                  <div className="bg-sage-green text-white p-3 rounded-full">
                    <Clock className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Hours</h4>
                    <div className="text-white/90 text-lg space-y-2">
                      <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p>Saturday: 7:00 AM - 9:00 PM</p>
                      <p>Sunday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex items-start space-x-6">
                  <div className="bg-warm-orange text-white p-3 rounded-full">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Contact</h4>
                    <div className="text-white/90 text-lg space-y-2">
                      <p>Phone: +216 52486841</p>
                      <p>Email: montassarhadiji2@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 shadow-2xl">
              <h4 className="text-3xl font-bold text-white mb-8">Get Directions</h4>
              <div className="rounded-2xl overflow-hidden mb-8 border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1590711566196!2d10.1013723!3d35.673085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fdc5b8a6c318f9%3A0x87395556f51bd935!2sVintage%20bistro!5e0!3m2!1sen!2stn!4v1750347713975!5m2!1sen!2stn" width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-80"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-warm-orange to-warm-orange/90 hover:from-warm-orange/90 hover:to-warm-orange text-white font-semibold py-4 text-lg rounded-full shadow-2xl hover:shadow-warm-orange/25 transition-all duration-300 transform hover:scale-105">
                <MapPin className="h-5 w-5 mr-2" />
                Open in Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-brown text-white py-16 border-t border-warm-orange/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-warm-orange p-2 rounded-full">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h5 className="text-2xl font-bold text-white">Vintage Bistro</h5>
                  <p className="text-warm-orange text-sm font-medium">Est. 2020</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">
                Crafting exceptional coffee experiences since 2020. Where tradition meets passion in every cup.
              </p>
            </div>

            <div>
              <h5 className="text-xl font-bold text-white mb-6">Quick Links</h5>
              <div className="space-y-3">
                <Link href="#home" className="block text-white/80 hover:text-warm-orange transition-colors text-lg">
                  Home
                </Link>
                <Link href="#about" className="block text-white/80 hover:text-warm-orange transition-colors text-lg">
                  About Us
                </Link>
                <Link href="#services" className="block text-white/80 hover:text-warm-orange transition-colors text-lg">
                  Services
                </Link>
                <Link href="#contact" className="block text-white/80 hover:text-warm-orange transition-colors text-lg">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h5 className="text-xl font-bold text-white mb-6">Connect With Us</h5>
              <p className="text-white/80 text-lg mb-6">Follow our coffee journey</p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-warm-orange/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-warm-orange/30 hover:bg-warm-orange transition-colors cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-12 h-12 bg-warm-orange/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-warm-orange/30 hover:bg-warm-orange transition-colors cursor-pointer">
                  <span className="text-white font-bold">@</span>
                </div>
                <div className="w-12 h-12 bg-warm-orange/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-warm-orange/30 hover:bg-warm-orange transition-colors cursor-pointer">
                  <span className="text-white font-bold">in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-warm-orange/20 mt-12 pt-8 text-center">
            <p className="text-white/70 text-lg">
              © {new Date().getFullYear()} Vintage Bistro Coffee Shop. All rights reserved. | Made with ❤️ and lots of
              coffee
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

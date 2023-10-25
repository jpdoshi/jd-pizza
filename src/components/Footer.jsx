import logo from '../assets/logo.png'

export default function Footer() {
  return (
  	<footer class="bg-light border-top py-4">
  	  <div class="container">
  	  	<div class="mb-4">
  	  	  <img src={logo} height="64" class="d-block mx-auto" />
  	  	</div>
  	  	<ul class="nav nav-pills mb-4">
		  <li class="ms-auto"><a href="/" class="footer-link">Home</a></li>
		  <li><a href="#offers" class="footer-link">Offers</a></li>
		  <li><a href="#about" class="footer-link">Our Story</a></li>
		  <li><a href="/menu" class="footer-link">Order Now</a></li>
		  <li class="me-auto"><a href="/account" class="footer-link">Login</a></li>
		</ul>
		<p class="text-center">Copyright ©2023 All rights reserved | JD Pizza</p>
  	  </div>
  	</footer>
  )
}
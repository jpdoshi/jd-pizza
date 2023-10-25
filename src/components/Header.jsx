import logo from '../assets/logo.png'

export default function Header() {
  return (
	<header>
	  <div class="container d-flex flex-wrap justify-content-center py-3">
	    <a href="/" class="d-flex align-items-center me-md-auto link-body-emphasis text-decoration-none">
	      <img src={logo} height="48px" />
			</a>

			<ul class="nav nav-pills my-auto">
			  <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
			  <li class="nav-item"><a href="#offers" class="nav-link">Deals & Offers</a></li>
			  <li class="nav-item"><a href="#about" class="nav-link">About Us</a></li>
			  <li class="nav-item"><a href="/menu" class="nav-link">Our Menu</a></li>
			  <li class="nav-item"><a href="/account" class="nav-link text-white" style={{ background: "var(--primary)" }}>Account</a></li>
			</ul>
	  </div>
	</header>
  )
}
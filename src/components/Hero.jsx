import pizza from '../assets/hero-pizza.png'

export default function Hero() {
  return (
    <div class="container my-4">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-3 py-lg-5">
        <div class="col-10 col-lg-5 mx-auto">
          <img src={pizza} class="d-block img-fluid" loading="lazy" />
        </div>
        <div class="col-lg-7">
          <h1 class="display-4 mb-4 fw-bold">Order Your Favourite Pizza Now!</h1>
          <p class="mb-4 lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar metus vitae varius interdum. Morbi egestas ante id sem facilisis, a pulvinar massa porttitor.</p>
          <a href="/menu" class="btn btn-lg btn-primary">Order Now!</a>
        </div>
      </div>
    </div>
  )
}
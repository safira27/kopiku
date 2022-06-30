import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  return (
<div>
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="#page-top">Kopi - KU</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#about">{props.web.kopi[0].navbar.list[0].name}</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">{props.web.kopi[0].navbar.list[1].name}</a></li>
          <li className="nav-item"><a className="nav-link" href="#signup">{props.web.kopi[0].navbar.list[2].name}</a></li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Masthead*/}
  <header className="masthead">
    <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <h1 className="mx-auto my-0 text-uppercase">KOPI</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">kopi digunakan sebagai makanan berenergi tinggi. Kata qahwahkembali mengalami perubahan menjadi kahveh yang berasal dari bahasa Turki dan kemudian berubah lagi menjadi koffie dalam bahasa Belanda.</h2>
          <a className="btn btn-primary" href="#about">Get Started</a>
        </div>
      </div>
    </div>
  </header>
  {/* About*/}
  <section className="about-section text-center" id="about">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-white mb-4">{props.web.kopi[0].home.name}</h2>
          <p className="text-white-50">
            {props.web.kopi[0].about.deskripsi}
            <a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
              Selanjutnya
            </a></p><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
          </a></div><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
        </a></div><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
        <img className="img-fluid" src="assets/img/4.png" alt="..." />
      </a></div><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
    </a></section><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
    {/* Projects*/}
    <section className="projects-section bg-light" id="projects">
      <div className="container px-4 px-lg-5">
        {/* Featured Project Row*/}
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="assets/img/34.jpeg" alt="..." /></div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Coffeku</h4>
              <p className="text-black-50 mb-0">{props.web.kopi[0].project.list[0].deskripsi}</p>
            </div>
          </div>
        </div>
        {/* Project One Row*/}
        <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
          <div className="col-lg-6"><img className="img-fluid" src={props.web.kopi[0].project.list[0].img} alt="..." /></div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Coffeku</h4>
                  <p className="mb-0 text-white-50">My coffe</p>
                  <hr className="d-none d-lg-block mb-0 ms-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project Two Row*/}
        <div className="row gx-0 justify-content-center">
          <div className="col-lg-6"><img className="img-fluid" src="assets/img/2.jpg" alt="..." /></div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Coffeku</h4>
                  <p className="mb-0 text-white-50">My coffe</p>
                  <hr className="d-none d-lg-block mb-0 me-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Signup*/}
  </a><section className="signup-section" id="signup"><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
    </a><div className="container px-4 px-lg-5"><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
      </a><div className="row gx-4 gx-lg-5"><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
        </a><div className="col-md-10 col-lg-8 mx-auto text-center"><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
            <i className="far fa-paper-plane fa-2x mb-2 text-white" />
            <h2 className="text-white mb-5">{props.web.kopi[0].contact.title}</h2>
          </a><form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN"><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
              {/* Email address input*/}
              <div className="row input-group-newsletter">
                <div className="col"><input className="form-control" id="emailAddress" type="email" placeholder={props.web.kopi[0].contact.button[0].title} aria-label="Your Email" data-sb-validations="required,email" /></div>
                <div className="col-auto"><button className="btn btn-primary disabled" id="submitButton" type="submit">{props.web.kopi[0].contact.button[0].send}</button></div>
              </div>
              <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.</div>
              <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div>
              {/* Submit success message*/}
              {/**/}
              {/* This is what your users will see when the form*/}
              {/* has successfully submitted*/}
            </a><div className="d-none" id="submitSuccessMessage"><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
              </a><div className="text-center mb-3 mt-2 text-white"><a href="https://www.indonesiastudents.com/pengertian-kopi-dan-sejarah-dan-jenisnya/">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                </a><a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>
            {/* Submit error message*/}
            {/**/}
            {/* This is what your users will see when there is*/}
            {/* an error submitting the form*/}
            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Contact*/}
  <section className="contact-section bg-black">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5">
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-map-marked-alt text-primary mb-2" />
              <h4 className="text-uppercase m-0">{props.web.kopi[0].footer[0].title}</h4>
              <hr className="my-4 mx-auto" />
              <div className="small text-black-50">{props.web.kopi[0].footer[0].deskripsi}</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-envelope text-primary mb-2" />
              <h4 className="text-uppercase m-0">{props.web.kopi[0].footer[1].title}</h4>
              <hr className="my-4 mx-auto" />
              <div className="small text-black-50"><a href="#!">{props.web.kopi[0].footer[1].deskripsi}</a></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-mobile-alt text-primary mb-2" />
              <h4 className="text-uppercase m-0">{props.web.kopi[0].footer[2].title}</h4>
              <hr className="my-4 mx-auto" />
              <div className="small text-black-50">{props.web.kopi[0].footer[2].deskripsi}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="social d-flex justify-content-center">
        <a className="mx-2" href="#!"><i className="fab fa-twitter" /></a>
        <a className="mx-2" href="#!"><i className="fab fa-facebook-f" /></a>
        <a className="mx-2" href="#!"><i className="fab fa-github" /></a>
      </div>
    </div>
  </section>
  {/* Footer*/}
  <footer className="footer bg-black small text-center text-white-50"><div className="container px-4 px-lg-5">About coffe</div></footer>
  {/* Bootstrap core JS*/}
</div>
)
}

export async function getServerSideProps(context){
  const localhink ="https://kopiku-fira.herokuapp.com/"
  const onelineLink=""
  const dataRespone=await fetch(localhink);
  const dataJson=await dataRespone.json();
  return{
    props:{
      web:dataJson
    }
  }
}

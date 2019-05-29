import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './App.css';

const divStyle = {

}
function App() {
  return (
    <div>
    <nav className="site-header sticky-top py-1">
  <div className="container d-flex flex-column flex-md-row justify-content-between">
    <a className="py-2" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
    </a>
    <a className="py-2 d-none d-md-inline-block" href="/">Home</a>
    <a className="py-2 d-none d-md-inline-block" href="/About">About</a>
    {/* <a className="py-2 d-none d-md-inline-block" href="#">About</a> */}
    <a className="py-2 d-none d-md-inline-block" href="/Donate">Donate</a>

  </div>
</nav>

<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
  <div className="col-md-5 p-lg-5 mx-auto my-5">
    <img src= "bug.jpg" fluid/>
    <h1 className="display-4 font-weight-normal">Bedbugs</h1>
    <p className="lead font-weight-normal">About The Plague Among Us</p>
    {/* <a className="btn btn-outline-secondary" href="#">Coming soon</a> */}
    {/* <div className= "side">  */}

{/* </div> */}
  </div>
  {/* <div className="product-device shadow-sm d-none d-md-block"></div>
  <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div> */}
</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    <div className="my-3 py-3">
      <h2 className="display-5">Dark Origins</h2>
      <p className="lead">Bedbugs are a scourge on society, one of humanity's ancient enemies, it is believed that they originated in caves in the middle east, when humans lived in caves. They have continued to plague us over tens of thousands of years.
      They have followed us to Hunter. </p>
      <p className="lead">We stand against these vermin; a light in the dark.
      </p>
    </div>
    {/* <div className="bg-light shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div> */}
  </div>
  {/* <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-dark shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
  </div> */}
</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      <h2 className="display-5">Spotted</h2>
      <p className="lead">Location: Comfy Chairs in the Library</p>
    </div>
    <div className="bg-dark shadow-sm mx-auto" style={{width:'80%', height: '550px', borderRadius: '21px 21px 0 0'}}>
    <img src="bedbugs2.png" fluid />;
    </div>
  </div>
  <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    <div className="my-3 py-3">
      <h2 className="display-5">Donate Now</h2>
      <p className="lead">Save lives</p>
    </div>
    <div className="bg-light shadow-sm mx-auto" style={{width:'80%', height: '550px', borderRadius: '21px 21px 0 0'}}>
    <Link to="/Donate">
    <Button variant="danger" size="lg" block>
    Donate!
  </Button>
  </Link>
  <div class="fill">
 <img src ="bugz.jpg" fill class="cover-image" />
 </div>
    {/* <Button variant="danger">Donate!</Button></Link> */}
    </div>
  </div>
</div>

{/* <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-white shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
  </div>
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 py-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-white shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
  </div>
</div> */}

{/* <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-white shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
  </div>
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 py-3">
      <h2 className="display-5">A*AE(Fjlikdjala) headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-white shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
  </div>
</div> */}

<footer className="container py-5">
  <div className="row">
    <div className="col-12 col-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
      <small className="d-block mb-3 text-muted">&copy, 2017-2019</small>
    </div>
    <div className="col-6 col-md">
      <h5>Features</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Cool stuff</a></li>
        <li><a className="text-muted" href="#">Random feature</a></li>
        <li><a className="text-muted" href="#">Team feature</a></li>
        <li><a className="text-muted" href="#">Stuff for developers</a></li>
        <li><a className="text-muted" href="#">Another one</a></li>
        <li><a className="text-muted" href="#">Last time</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Resource</a></li>
        <li><a className="text-muted" href="#">Resource name</a></li>
        <li><a className="text-muted" href="#">Another resource</a></li>
        <li><a className="text-muted" href="#">Final resource</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Business</a></li>
        <li><a className="text-muted" href="#">Education</a></li>
        <li><a className="text-muted" href="#">Government</a></li>
        <li><a className="text-muted" href="#">Gaming</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>About</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Team</a></li>
        <li><a className="text-muted" href="#">Locations</a></li>
        <li><a className="text-muted" href="#">Privacy</a></li>
        <li><a className="text-muted" href="#">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>
</div>
  );
}

export default App;

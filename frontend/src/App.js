import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
    <nav className="site-header sticky-top py-1">
  <div className="container d-flex flex-column flex-md-row justify-content-between">
    <a className="py-2" href="#">
      <Logo />    
    </a>
    <a className="py-2 d-none d-md-inline-block" href="#">History</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Solutions</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Donation</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
  </div>
</nav>

<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
  <div className="col-md-5 p-lg-5 mx-auto my-5">
    <h1 className="display-4 font-weight-bold">Bedbug Removal Fund</h1>
    <p className="lead font-weight-normal">Meet every Hunter College students least favorite study buddy: the bedbug. Bedbugs made their homes in our libraries and we want to take it back! </p>
    
  </div>
  <div className= "side"> 
  <img src= "bug.jpg"/>

  </div>
 <button type="button" class="btn btn-primary btn-lg btn-block "> Help our students study. DONATE NOW!</button>

</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    <div className="my-3 py-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-light shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
  </div>
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-dark shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
  </div>
</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-dark shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
  </div>
  <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    <div className="my-3 py-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-light shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
  </div>
</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      
    </div>
    <div className="bg-white shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
  </div>
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 py-3">
      
    </div>
    <div className="bg-white shadow-sm mx-auto" style={{width:'80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
  </div>
</div>



<footer className="container py-5">
  <div className="row">
    <div className="col-12 col-md">
<Logo />
      <small className="d-block mb-3 text-muted">&copy, 2017-2019</small>
    </div>
    <div className="col-6 col-md">
      <h5>Features</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Cool stuff</a></li>
        <li><a className="text-muted" href="#">Random feature</a></li>
        <li><a className="text-muted" href="#">Team feature</a></li>
        <li><a className="text-muted" href="#">Stuff for developers</a></li>
    
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Resource</a></li>
        <li><a className="text-muted" href="#">Resource name</a></li>
        <li><a className="text-muted" href="#">Another resource</a></li>
    
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

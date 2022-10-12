import React from 'react';
import img1 from '../img/slide-img1.png';
import img2 from '../img/slide-img2.png';
import img3 from '../img/slide-img3.png';
import img4 from '../img/slide-img4.png';
import img5 from '../img/slide-img5.png';
import img6 from '../img/slide-img6.png';
import img7 from '../img/slide-img7.png';
import img8 from '../img/slide-img8.png';
import img0 from '../img/mobile-flot.png';
import  Carousel  from 'react-bootstrap/Carousel';
import {Button} from 'react-bootstrap';
import './component.css';

const Home=()=>{
    return(
        <div>
            <section id="Home" className="banner image-bg">
              <div id="#ReactBackgroundSlider">
                <figure className="fig"></figure>
              </div>
             <div className="container">
                <div className="row ">
                <div className="col-md-6 ">
                  <div className="fadeInUp">
                  <h1 className="text-white">Showcase your <br /> App in one place</h1>
                  <br />
                  <p className="text-white"> Duis facilisis sem sed metus malesuada rhoncus. Nulla tincidunt tincidunt lectus at lacinia. Pellentesque ullamcorper arcu id rutrum volutpat. Donec suscipit auctor enim vel dignissim.</p>
                  <Button className="homeBtn m-2 fs-4"><i class="bi bi-google-play me-3"></i> Available on <br /> Google Play</Button>
                  <Button className="homeBtn m-2 fs-4"> <i class="bi bi-apple me-3"> </i>  Available on <br /> Apple Store</Button>
                  </div>
                </div>
                <div className="col-md-6">
                <div className="banner-image  " >
                <img src={img0} alt="" className="img-fluid bounce-effect" /></div>
                </div>
              </div>
              </div>      
<div class="wave-effect wave-anim">
  <div class="waves-shape shape-one">
    <div class="wave wave-one"></div>
      </div>
      <div class="waves-shape shape-two">
        <div class="wave wave-two"></div>
          </div>
          <div class="waves-shape shape-three">
            <div class="wave wave-three"></div>
            </div>
            </div>
                  </section>
                  <section>
              <div className="container">
              <div className="row">
                 <div className="col-md-12">
                  <div className="lowerslide my-5">
                   <Carousel  variant="dark" controls={false} indicators={false}  className="position-relative">
                    <Carousel.Item interval={1000}>
                     <div className="row">
                      <div className="col">
                       <img
                         className="d-block  img-fluid"
                              src={img1}
                          alt="First slide"
                       />
                       </div>
                      <div className="col">
                      <img
                     className="d-block  img-fluid"
                     src={img2}
                      alt="First slide"
                        />
                       </div>
                      <div className="col">
                      <img
                         className="d-block  img-fluid"
                          src={img3}
                           alt="First slide"
                              />
                       </div>
                      <div className="col">
                      <img
                         className="d-block  img-fluid"
                          src={img4}
                            alt="First slide"
                             />
                       </div>
                      <div className="col">
                        <img
                             className="d-block  img-fluid"
                             src={img5}
                             alt="First slide"
                             />
                       </div>
                      </div>
                     </Carousel.Item>
                    <Carousel.Item interval={1500}>
      <div className="row">
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img2}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img3}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img4}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img5}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img6}
          alt="First slide"
        />
                      </div>
                    </div>
                     </Carousel.Item>
                    <Carousel.Item interval={1500}>
      <div className="row">
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img3}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img4}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img5}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img6}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img7}
          alt="First slide"
        />
                      </div>
                    </div>
                     </Carousel.Item>
                    <Carousel.Item interval={1500}>
      <div className="row">
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img4}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img5}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img6}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img7}
          alt="First slide"
        />
                      </div>
                      <div className="col">
                      <img
          className="d-block  img-fluid"
          src={img8}
          alt="First slide"
        />
                      </div>
                    </div>
                     </Carousel.Item>
                    </Carousel>
                   </div>
                  </div>
                 </div>
              </div>
            </section>
        </div>
    );
}
export default Home;
import React from 'react';
import img1 from '../img/SRL-image-0.jfif';
import img2 from '../img/SRL-image-1.jfif';
import img3 from '../img/SRL-image-2.jfif';
import img4 from '../img/SRL-image-3.jfif';
import img5 from '../img/SRL-image-4.jfif';
import img6 from '../img/SRL-image-5.jfif';
import img7 from '../img/SRL-image-6.jfif';
import img8 from '../img/SRL-image-7.jfif';
import post1 from '../img/post-1.jpg';
import post2 from '../img/post-2.jpg';
import post3 from '../img/post-3.jpg';
import { Card, Carousel } from 'react-bootstrap';
import Button  from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import './component.css';
const Screenshot =()=>{
    return(
        <div>
            <section id="Screenshot" className="bg-grey mt-5">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-12">
                            <div className="tittle my-5 text-center">
                            <h3>App ScreenShot</h3>
                            <p>Morbi velit leo, sodales in purus eu, pretium accumsan nunc. Praesent eu diam ut ante consequat euismod.</p>
                            </div>
                            <div className="my-5">
                            <Carousel   controls={false}   className="position-relative">
                    <Carousel.Item interval={3000}>
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
                    </div>
                     </Carousel.Item>
                     <Carousel.Item interval={1500}>
      <div className="row">
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
            <section className="parallax3">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tittle text-center white">
                      <h3 className="text-white">
                      Subscribe To Newsletter
                      </h3>
                      <p className="text-white">Vivamus ornare feugiat orci eu faucibus. Phasellus nulla arcu, pharetra nec laoreet in, scelerisque a lectus.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-10 col-lg-6 col">
                  <div className="form">
                      <Form>
                        <Form.Control type="email" placeholder ="Enter your E-mail" className="mb-3" /> 
                        <Button className="formBtn w-100">Suscribe</Button>
                      </Form>
                    </div>
                    <div className="text-white text-center">
                      <p className="text-white">We don't share your personal information with anyone or company. Check out our <Card.Link href="#">Privacy Policy</Card.Link>   for more information.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section  id="Blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tittle row mt-5 text-center p-3 ">
              <h2>Blog Posts</h2>
              <p className="fs-5">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>  
            <div className="row">
              <div className="col-md-4">
                <div className="blog-post position-relative mb-5">
                <Card >
                <div classNameName="card-img-top">
                    <Card.Img src={post1} alt="post-1" />
                <div className="overlay"></div>
                <span className="blog-type">Photography</span>
                    </div>
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted"><b> AthenaStudio </b>   April 16, 2022</Card.Subtitle>
        <Card.Title>Carousel of Colours in Cinque Terre Beach</Card.Title>
        <Card.Text>
        Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
        </Card.Text>
        <Card.Link href="#">Read More</Card.Link>
      </Card.Body>
    </Card>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog-post position-relative">
                <Card >
                <div className="card-img-top">
                    <Card.Img src={post2} alt="post-2" />
                <div className="overlay"></div>
                <span className="blog-type">LIFESTYLE</span>
                    </div>
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted"><b> AthenaStudio </b>   March 30, 2022</Card.Subtitle>
        <Card.Title>Grass and Tree Covered Village Luzern</Card.Title>
        <Card.Text>
        Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
        </Card.Text>
        <Card.Link href="#">Read More</Card.Link>
      </Card.Body>
    </Card>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog-post position-relative">
                <Card >
                    <div className="card-img-top">
                    <Card.Img src={post3} alt="post-3" />
                <div className="overlay"></div>
                <span className="blog-type">DEVLOPMENT</span>
                    </div>
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted"><b> AthenaStudio </b>   Feb 12, 2022</Card.Subtitle>
        <Card.Title>Forest Highway With Green Leaves</Card.Title>
        <Card.Text>
        Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
        </Card.Text>
        <Card.Link href="#">Read More</Card.Link>
      </Card.Body>
    </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="Contact">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="row">
              <div className="tittle text-center mt-5">
                <h3 style={{color: '#7c4fe0'}}>Contact us</h3>
                <h2>Get IN Touch</h2>
                <p className="fs-5">Mauris at tempus mi, ut iaculis dui. Integer laoreet mattis justo nec pretium. Ut nibh elit, <br/>
                   fermentum vel hendrerit vel, dictum nec velit. Morbi volutpat suscipit.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="contact-details">
                  <h1>Get answers and advices from professional consultants.</h1>
                  <br/>
                  <div className="row">
                    <div className="col-md-2 fs-2 text-center " style={{color: '#7c4fe0'}}>
                      <i className="bi bi-map"></i>
                    </div>
                    <div className="col-md-10">
                      <h4>Address</h4>
                      <p>1650 Lombard Street,
                        <br/>
                        San Francisco, CA 94123</p>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-md-2 fs-2 text-center "style={{color: '#7c4fe0'}}>
                      <i className="bi bi-phone"></i>
                    </div>
                    <div className="col-md-10">
                      <h4>Phone</h4>
                      <p>+1 (415) 876-3250
                        <br/>
                        +1 (415) 876-3251</p>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-md-2 fs-2 text-center "style={{color: '#7c4fe0'}}>
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="col-md-10">
                      <h4>Say Hello</h4>
                      <p>email@sitename.com</p>
                    </div>
                  </div>
                  <hr/>
                  </div>
                </div>
                <div className="col-md-6 contactForm" >
                  <form className="fs-3 p-3">
                    <div className="mt-5 mx-3 mb-3">
                       <Form.Control type="text" placeholder="Name" />
                    </div>
                    <div className="m-3">
                    <Form.Control type="email" placeholder="E-mail" />
                     
                    </div>
                    <div className="m-3">
                    <Form.Control type="text" placeholder="Subject" />
                      
                    </div>
                    <div className="m-3">
                    <Form.Control as ="textarea" rows={5}   placeholder="Message" />
                    </div>
                    <div className="m-3">
                    <Button variant="success" className="conatctFormBtn" type="submit">Submit</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 p-5">
            <div className="row">
              <div className="col-md-4">
                <div className="company text-white">
                  <h2 className="text-white">Nexos</h2>
                  <p>Sena is a clean and modern one
                    <br/> page multipurpose theme.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="company text-white">
                  <h3 className="text-white">Contact Info</h3>
                  <p><i className="bi bi-geo-alt-fill "style={{color: '#7c4fe0'}}></i>1650 Lombard Street, <br/>
                    San Francisco, CA 94123</p>
                    <p><i className="bi bi-telephone-fill" style={{color: '#7c4fe0'}}></i>+1 (415) 876-3250</p>
                    <p><i className="bi bi-envelope" style={{color: '#7c4fe0'}}></i> email@sitename.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="company text-white">
                  <h3 className="text-white">Useful Links</h3>
                  <Card.Link href="#">Support</Card.Link>
                    <br/>
                    <Card.Link href="#">Privacy Policy</Card.Link>
                    <br/>
                    <Card.Link href="#">Terms & Conditions</Card.Link>
                    <br/>
                    <Card.Link href="#"> Affiliate Program</Card.Link>
                    <br/>
                    <Card.Link href="#">Careers</Card.Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}
export default Screenshot;
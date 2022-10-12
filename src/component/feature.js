import React from 'react';
import img from '../img/feature-img.png';
import img1 from '../img/track-time.png';
import img2 from '../img/track-time2.png';
import member1 from '../img/member-1.jpg';
import member2 from '../img/member-2.jpg';
import member3 from '../img/member-3.jpg';
import member4 from '../img/member-4.jpg';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './component.css';

const Feature = ()=>{
    return (
        <div>
            <section id="Feature">
                <div className="container mb-5">
                    <div className="row" mt-5>
                        <div className="col-md-12 text-center" >
                            <h3>Awesome Features</h3>
                            <p>Sed laoreet diam sagittis tempus convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 mt-3">
                            <div className="feature mt-5">
                            <div className="featureBox d-flex ">
                            <div className="featureIcon ">
                            <i class="bi bi-gear"></i>
                            </div>
                            <div className="featureText align-self-center align-self-md-start">
                            <h4>Custom Shortcuts</h4>
                                <p>Semper a augue suscipit, luctus neque purus <br /> ipsum neque dolor primis libero tempus velna <br /> culpa expedita.</p>
                            </div>
                           </div>
                            <div className="featureBox d-flex ">
                            <div className="featureIcon ">
                            <i class="bi bi-lock"></i>
                            </div>
                            <div className="featureText align-self-center align-self-md-start">
                            <h4>Secure Integration</h4>
                                 <p>Semper a augue suscipit, luctus neque purus <br /> ipsum neque dolor primis libero tempus velna <br /> culpa expedita.</p>
                            </div>
                            </div>
                            <div className="featureBox d-flex ">
                            <div className="featureIcon ">
                            <i class="bi bi-chat-left-text"></i>
                            </div>
                            <div className="featureText align-self-center align-self-md-start">
                            <h4>Free Live Chat</h4>
                                 <p>Semper a augue suscipit, luctus neque purus <br /> ipsum neque dolor primis libero tempus velna <br /> culpa expedita.</p>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-img">
                                <img src={img} alt="featureImg" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="feature mt-5">
                            <div className="featureBox d-flex ">
                            <div className="featureIcon ">
                            <i class="bi bi-share"></i>
                            </div>
                            <div className="featureText align-self-center align-self-md-start">
                            <h4>Social Share</h4>
                                 <p>Semper a augue suscipit, luctus neque purus <br /> ipsum neque dolor primis libero tempus velna <br /> culpa expedita.</p>
                            </div>
                           </div>
                            <div className="featureBox d-flex ">
                            <div className="featureIcon ">
                            <i class="bi bi-files"></i>
                            </div>
                            <div className="featureText align-self-center align-self-md-start">
                            <h4>Merge Files</h4>
                                 <p>Semper a augue suscipit, luctus neque purus <br /> ipsum neque dolor primis libero tempus velna <br /> culpa expedita.</p>
                            </div>
                            </div>
                            <div className="featureBox d-flex ">
                            <div className="featureIcon ">
                            <i class="bi bi-alarm"></i>
                            </div>
                            <div className="featureText align-self-center align-self-md-start">
                            <h4>Action Reminder</h4>
                                 <p>Semper a augue suscipit, luctus neque purus <br /> ipsum neque dolor primis libero tempus velna <br /> culpa expedita.</p>
                            </div>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className="parallax">
                <div className="parallaxOverlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                       <div className="row"><i class="bi bi-play-circle-fill text-center"></i>
                       <h2 className="text-center">Watch This Video</h2></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="tittle text-center mt-5">
                            <h3>How It Works?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br /> justo. Nullam dictum felis eu pede mollis pretium.</p>
                            </div>
                            <div className="row">
                            <div className="col-md-4">
                                        <div className="cardBox">
                                            <div className="iconBox">
                                            <i class="bi bi-server"></i>
                                            </div>
                                            <div className="content text-center">
                                                <h3>Your Data In Cloud</h3>
                                                <p>Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="cardBox">
                                            <div className="iconBox">
                                            <i class="bi bi-headset"></i>
                                            </div>
                                            <div className="content text-center">
                                                <h3>24/7 Support</h3>
                                                <p>Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="cardBox">
                                            <div className="iconBox">
                                            <i class="bi bi-vector-pen"></i>
                                            </div>
                                            <div className="content text-center">
                                                <h3>Exclusive Design</h3>
                                                <p>Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </section>
            <section className="overview ">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-5">
                            <img src={img1} alt="track-time" className="img-fluid" />
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <div className="tittle ">
                                <h3>Track Time From Anywhere</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                            </div>
                            <div className="overviewBox d-flex pt-3 ps-4 ">
                                <div className="overviewBoxIcon ">
                                <i class="bi bi-compass"></i>
                                </div>
                                <div className="overviewBoxContent">
                                    <h6 className="font-weight-bold mb-2">Easy to Use</h6>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                                </div>
                            </div>
                            <div className="overviewBox d-flex pt-3 ps-4 ">
                                <div className="overviewBoxIcon ">
                                <i class="bi bi-asterisk"></i>
                                </div>
                                <div className="overviewBoxContent">
                                    <h6 className="font-weight-bold mb-2">Monitar & Manage</h6>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                                </div>
                            </div>
                            <div className="overviewBox d-flex pt-3 ps-4 ">
                                <div className="overviewBoxIcon ">
                                <i class="bi bi-link-45deg"></i>
                                </div>
                                <div className="overviewBoxContent">
                                    <h6 className="font-weight-bold mb-2">Stay Connected</h6>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 pt-5">
                            <div className="col-md-6">
                                <div className="tittle ">
                                   <h3>Built For Your Daily Schedule</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                                </div>
                                <div className="overviewList">
                                    <ul>
                                        <li>
                                            <p>
                                                Ut fringilla est at nunc suscipit dictum. Nulla facilisi. Phasellus dignissim nibh eget imperdiet venenatis
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Nullam egestas tincidunt lectus, sagittis eros vestibulum in. Vestibulum finibus iaculis sagittis. Suspendisse viverra luctus.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Suspendisse at volutpat magna, vitae mattis metus. Integer posuere eu erat at pharetra. Aliquam ut pharetra diam.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Donec luctus, sem vel molestie efficitur, metus libero mollis neque, sed scelerisque arcu nisl eu lectus.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Fusce neque magna, fringilla ac vulputate at, venenatis a eros. Donec accumsan commodo tortor sed fringilla.
                                            </p>
                                        </li>
                                    </ul>
                                    <Button className="overviewButton p-2">Learn More</Button>
                                </div>
                            </div>
                            <div className="col-md-5 offset-md-1">
                                <img src={img2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="parallax1">
                <div className="parallax1Overlay"></div>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-3">
                            <div className="parallax1Box fadeInUp">
                                <div className="icon">
                                <i class="bi bi-box-arrow-down"></i>
                                </div>
                                <h5 className="text-center">2067</h5>
                                <p className="text-center">Total Download</p>
                            </div>   
                        </div>
                        <div className="col-md-3">
                            <div className="parallax1Box fadeInUp">
                                <div className="icon">
                                <i class="bi bi-bag-plus"></i>
                                </div>
                                <h5 className="text-center">982</h5>
                                <p className="text-center">Happy Clients</p>
                            </div>   
                        </div>
                        <div className="col-md-3">
                            <div className="parallax1Box fadeInUp">
                                <div className="icon">
                                <i class="bi bi-phone"></i>
                                </div>
                                <h5 className="text-center">890</h5>
                                <p className="text-center">Active User</p>
                            </div>   
                        </div>
                        <div className="col-md-3">
                            <div className="parallax1Box fadeInUp">
                                <div className="icon">
                                <i class="bi bi-star"></i>
                                </div>
                                <h5 className="text-center">537</h5>
                                <p className="text-center">App Rates</p>
                            </div>   
                        </div>
                    </div>
                </div>
            </section>
            <section className="team">
                <div className="container">
                    <div className="row mt-5 pt-3">
                        <div className="col-md-12">
                            <div className="tittle text-center">
                                <h3>Our Team</h3>
                                <p>Aliquam at tortor sit amet eros bibendum faucibus quis nec arcu. Quisque <br /> lobortis lectus vitae lectus aliquet leo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
              <div className="col-md-3">
                <div className="member">
                  <div className="member-pic">
                    <img src={member1} alt=""  />
                    <div className="social">
                      <div className="social-link">
                        
                      <Card.Link href="#"><i className="bi bi-facebook"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-twitter"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-linkedin"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-dribbble"></i></Card.Link>
                      </div>
                    </div>
                  </div>
                  <div className="memberinfo text-center mt-2 " >
                  <h5><Card.Link href="#"><b> Michael Broad </b></Card.Link></h5>
                    <p>Web Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="member">
                  <div className="member-pic">
                  <img src={member2} alt="" />
                    <div className="social">
                      <div className="social-link">
                      <Card.Link href="#"><i className="bi bi-facebook"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-twitter"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-linkedin"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-dribbble"></i></Card.Link>
                      </div>
                    </div>
                  </div>
                  <div className="memberinfo text-center mt-2 " >
                  <h5><Card.Link href="#"><b> Jeannette Crow </b></Card.Link></h5>
                    <p>CEO Founder</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="member">
                  <div className="member-pic">
                  <img src={member3} alt="" />
                    <div className="social">
                      <div className="social-link">
                      <Card.Link href="#"><i className="bi bi-facebook"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-twitter"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-linkedin"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-dribbble"></i></Card.Link>
                      </div>
                    </div>
                  </div>
                  <div className="memberinfo text-center mt-2 " >
                  <h5><Card.Link href="#"><b> Martin Lawrence </b></Card.Link></h5>
                    <p>App Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="member">
                  <div className="member-pic">
                  <img src={member4} alt="" />
                    <div className="social">
                      <div className="social-link">
                      <Card.Link href="#"><i className="bi bi-facebook"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-twitter"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-linkedin"></i></Card.Link>
                        <Card.Link href="#"><i className="bi bi-dribbble"></i></Card.Link>
                      </div>
                    </div>
                  </div>
                  <div className="memberinfo text-center mt-2 " >
                    <h5><Card.Link href="#"><b> Isabella Dowson </b></Card.Link></h5>
                    <p>Creative Director</p>
                  </div>
                </div>
              </div>
              
              </div>
                </div>
            </section>
        </div>
    );
}
export default Feature;
import React from 'react'
import './index.scss'
import $ from 'jquery'

class Sassexample extends React.Component {

    constructor(){
        super();
        this.state ={

        }
    }
    onTab1 =(e)=>{
    
        document.getElementById("tab1").style.display = 'block'
        document.getElementById("tab2").style.display = 'none'
        document.getElementById("tab3").style.display = 'none'
        document.getElementById("tab4").style.display = 'none'
    }
    onTab2 =(e)=>{
        
        document.getElementById("tab1").style.display = 'none'
        document.getElementById("tab2").style.display = 'block'
        document.getElementById("tab3").style.display = 'none'
        document.getElementById("tab4").style.display = 'none'
    }
    onTab3 =(e)=>{
        
        document.getElementById("tab1").style.display = 'none'
        document.getElementById("tab2").style.display = 'none'
        document.getElementById("tab3").style.display = 'block'
        document.getElementById("tab4").style.display = 'none'
    }
    onTab4 =(e)=>{
        
        document.getElementById("tab1").style.display = 'none'
        document.getElementById("tab2").style.display = 'none'
        document.getElementById("tab3").style.display = 'none'
        document.getElementById("tab4").style.display = 'block'
    }

    render() {
        return (
            <div>
                <div className="fixed-side-navbar">
                    <ul className="nav flex-column">
                        <li class="nav-item"><a class="nav-link" href="#home"><span>Intro</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="#services"><span>Services</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio"><span>Portfolio</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="#our-story"><span>Our Story</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact-us"><span>Contact Us</span></a></li>

                    </ul>
                </div>

                <div className="headerClass baner-content" id="home">
                    <div className="container">
                        <div class="first-content">
                            <h1>vanilla</h1>
                            <span><em>Bootstrap</em> v4.2.1 Theme</span>
                            <div className="primary-button">
                                <a href="#service">Discover More</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="service-content" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="left-text">
                                    <h4>More About Vanilla</h4>
                                    <div class="line-dec"></div>
                                    <p>Vanilla is free HTML CSS template with Bootstrap v4.2.1 and you can apply this theme for your sites.
                                Please share our <a rel="nofollow" href="https://templatemo.com">website</a> to your friends or collegues. Thank you.</p>
                                    <ul>
                                        <li>-  Praesent porta urna id eros</li>
                                        <li>-  Curabitur consectetur malesuada</li>
                                        <li>-  Nam pretium imperdiet enim</li>
                                        <li>-  Sed viverra arcu non nisi efficitur</li>
                                    </ul>
                                    <div class="primary-button">
                                        <a href="#portfolio">Learn More About Us</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="service-item">
                                            <h4>Classic Modern Design</h4>
                                            <div class="line-dec"></div>
                                            <p>Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-item">
                                            <h4>Unique &amp; Creative Ideas</h4>
                                            <div class="line-dec"></div>
                                            <p>Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-item">
                                            <h4>Effective Team Work</h4>
                                            <div class="line-dec"></div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-item">
                                            <h4>Fast Support 24/7</h4>
                                            <div class="line-dec"></div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="parallax-content projects-content" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="owl-testimonials" className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="testimonials-item">
                                            <a href="img/1st-big-item.jpg" data-lightbox="image-1">
                                                <img src={require("./img/1st-big-item.jpg")} alt=""/>
                                            </a>
                                            <div className="text-content">
                                                <h4>Awesome Note Book</h4>
                                                <span>$18.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-item">
                                            <a href="img/1st-big-item.jpg" data-lightbox="image-1">
                                                <img src={require("./img/1st-big-item.jpg")} alt=""/>
                                            </a>
                                            <div className="text-content">
                                                <h4>Awesome Note Book</h4>
                                                <span>$18.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-item">
                                            <a href="img/1st-big-item.jpg" data-lightbox="image-1">
                                                <img src={require("./img/1st-big-item.jpg")} alt=""/>
                                            </a>
                                            <div className="text-content">
                                                <h4>Awesome Note Book</h4>
                                                <span>$18.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div> */}
            <div className="tabs-content" id="our-story">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="wrapper">
                                <section id="first-tab-group" className="tabgroup">
                                <div id="tab1">
                                    <img src={require('./img/1st-tab.jpg')}  alt="" style={{}}/>
                                    <p>Please do not re-distribute our template ZIP file on your template collection sites. You can make a screenshot and a link back to our website. This template can be used for personal or commercial purposes by end-users.</p>
                                </div>
                                <div id="tab2">
                                    <img  src={require('./img/2nd-tab.jpg')}  alt="" />
                                    <p>Aliquam eu ultrices risus, sed condimentum diam. Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique dui tempor venenatis.</p>
                                </div>
                                <div id="tab3">
                                    <img  src={require('./img/3rd-tab.jpg')}  alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque, sed cursus diam iaculis.</p>
                                </div>
                                <div id="tab4">
                                    <img  src={require('./img/4th-tab.jpg')} alt="" />
                                    <p>Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique.</p>
                                </div> 
                                </section>
                                <ul class="tabs clearfix"  data-tabgroup="first-tab-group">
                                    <li><a href="#tab1" className="active" onClick={this.onTab1}>2008-2014</a></li>
                                    <li><a href="#tab2" className="" onClick={this.onTab2} >2014-2016</a></li>
                                    <li><a href="#tab3" onClick={this.onTab3}>2016-2019</a></li>
                                    <li><a href="#tab4" onClick={this.onTab4}>2019-Now</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="parallax-contact contact-content" id="contact-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-from">
                                    <div className="row">
                                        <form action="" id="contact" method="post">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <fieldset>
                                                        <input type="text" className="form-control"
                                                            id="name" placeholder="your name ..." required=""
                                                            name="name" />
                                                    </fieldset>
                                                </div>
                                                <div class="col-md-12">
                                                    <fieldset>
                                                        <input name="email" type="email"
                                                            class="form-control" id="email"
                                                            placeholder="Your email..." required="" />
                                                    </fieldset>
                                                </div>
                                                <div class="col-md-12">
                                                    <fieldset>
                                                        <textarea name="message"
                                                            rows="6" class="form-control"
                                                            id="message" placeholder="Your message..."
                                                            required=""></textarea>
                                                    </fieldset>
                                                </div>
                                                <div class="col-md-12">
                                                    <fieldset>
                                                        <button type="submit" id="form-submit" class="btn">Send Message</button>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d951.7468189378537!2d78.41962448810706!3d17.41239827889988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1575529991018!5m2!1sen!2sin" width="500" height="400" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="primary-button">
                                    <a href="#home" id="href">Back to Top</a>
                                </div>
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                </ul>
                                <p>Copyright &copy; 2019 Company Name
            		- Design: <a rel="nofollow noopener" href="https://templatemo.com"><em>TemplateMo</em></a></p>
                            </div>
                        </div>
                    </div>
                </footer>




            </div>
        )
    }
}

export default Sassexample;
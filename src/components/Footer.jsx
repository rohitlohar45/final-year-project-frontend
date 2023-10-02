import React from "react";

const Footer = () => {
	return (
		<footer class="footer footer--bg">
			<div class="container">
				<div class="page-section">
					<div class="row gutters-100">
						<div class="col-md-4 col-lg-3">
							<div class="footer__first">
								<h2 class="footer__title">E-WASTE MANAGEMENT SYSTEM</h2>
								<p class="footer-first__paragraph">
									Together lets reduce the production of E-waste by recycling them.
								</p>
								<ul class="footer-first__social-icons">
									<li>
										<a href="#">
											<i class="flaticon-facebook-letter-logo"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i class="flaticon-twitter-logo"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i class="flaticon-dribbble-logo"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i class="flaticon-behance-logo"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="col-md-6 col-lg-2">
							<div class="footer__second">
								<h2 class="footer__title">QUICK LINK</h2>
								<ul>
									<li>
										<a href="#hme">Home</a>
									</li>
									<li>
										<a href="#serv">Services</a>
									</li>
									<li>
										<a href="#reg">Register</a>
									</li>
									<li>
										<a href="#lgn">Login</a>
									</li>
									<li>
										<a href="#cont">Contact</a>
									</li>
									<li>
										<a href="#abt">About</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="col-md-6 col-lg-3">
							<div class="footer__third">
								<h2 class="footer__title">CONTACT US</h2>
								<ul>
									<li>
										<span class="glyphicon glyphicon-envelope"></span>{" "}
										<a href="#">ewastemanagementsystem@gmail.com</a>
									</li>
									<li>
										<span class="glyphicon glyphicon-earphone"></span>{" "}
										<a href="#">+0123-345-6789</a>
									</li>
								</ul>
								<h4 class="footer__subscribe__title">Subscribe</h4>
								<div class="subscribe-section">
									<input
										type="email"
										class="form-control"
										size="50"
										placeholder="Enter Your Email"
										required
									/>
									<button class="subscribe-section__button" type="button">
										<img src="assets/images/send-icon.png" alt="" />
									</button>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="footer__fourth">
								<h4 class="footer__title">INSTAGRAM</h4>
								<div class="row">
									<ul>
										<li>
											<a href="#">
												<img src="assets/images/instagram-pic1.png" alt="" />
											</a>
										</li>
										<li>
											<a href="#">
												<img src="assets/images/instagram-pic2.png" alt="" />
											</a>
										</li>
										<li>
											<a href="#">
												<img src="assets/images/instagram-pic3.png" alt="" />
											</a>
										</li>
									</ul>
								</div>
								<div class="row">
									<ul>
										<li>
											<a href="#">
												<img src="assets/images/instagram-pic4.png" alt="" />
											</a>
										</li>
										<li>
											<a href="#">
												<img src="assets/images/instagram-pic5.png" alt="" />
											</a>
										</li>
										<li>
											<a href="#">
												<img src="assets/images/instagram-pic6.png" alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

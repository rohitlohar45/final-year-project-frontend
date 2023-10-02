import React from "react";

export const RecyclingUnitProfile = () => {
	return (
		<div>
			<div className="loader">
				<h4 id="loaderText" className="w3-blue">
					Loading...
				</h4>
			</div>

			<div className="container" style={{ width: "100%" }}>
				<nav className="navbar navbar-dark bg-primary navbar-fixed-top">
					<div className="container-fluid">
						<ul className="nav navbar-nav" style={{ float: "left" }}>
							<li>
								<a className="accountaddress navbar-dark bg-primary"></a>
							</li>
						</ul>

						<ul className="nav navbar-nav" style={{ float: "right" }}>
							<li>
								<a href="index.html" className="navbar-dark bg-primary">
									HOME
								</a>
							</li>
							<li>
								<a href="#addformtitle" className="navbar-dark bg-primary">
									ADD PRODUCT
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<br />
				<br />
				<div className="mainbox" style={{ marginBottom: "100px" }}>
					<div className="form-div" style={{ width: "100%" }}>
						<div
							id="addformtitle"
							style={{
								textAlign: "center",
								fontSize: "30px",
								width: "50%",
								margin: "auto 25% auto 25%",
							}}
						>
							Add Product Form
						</div>
						<form onSubmit={() => RecycApp.addPercentage()}>
							<div className="formclass" style={{ width: "50%", margin: "auto 25% auto 25%" }}>
								<label htmlFor="id">Product Id</label>
								<input
									type="number"
									id="productid"
									name="productid"
									placeholder="Enter ID"
									min="0"
								/>

								<label htmlFor="weight">Reused Weight Of Glass</label>
								<input
									type="number"
									id="weightglass"
									name="weightglass"
									placeholder="Weight(Grams)"
									min="0"
								/>

								<label htmlFor="weight">Reused Weight Of Plastic</label>
								<input
									type="number"
									id="weightplastic"
									name="weightplastic"
									placeholder="Weight(Grams)"
									min="0"
								/>

								<label htmlFor="weight">Reused Weight Of Nickel</label>
								<input
									type="number"
									id="weightnickel"
									name="weightnickel"
									placeholder="Weight(Grams)"
									min="0"
								/>

								<label htmlFor="weight">Reused Weight Of Aluminium</label>
								<input
									type="number"
									id="weightaluminium"
									name="weightaluminium"
									placeholder="Weight(Grams)"
									min="0"
								/>

								<label htmlFor="weight">Reused Weight Of Copper</label>
								<input
									type="number"
									id="weightcopper"
									name="weightcopper"
									placeholder="Weight(Grams)"
									min="0"
								/>

								<label htmlFor="weight">Reused Weight Of Magnesium</label>
								<input
									type="number"
									id="weightmagnesium"
									name="weightmagnesium"
									placeholder="Weight(Grams)"
									min="0"
								/>

								<label htmlFor="weight">Reused Weight Of Lead</label>
								<input
									type="number"
									id="weightlead"
									name="weightlead"
									placeholder="Weight(Grams)"
									min="0"
								/>
							</div>
							<button type="submit" className="button1 btn-add">
								Submit
							</button>
						</form>
					</div>
				</div>

				<footer className="footer footer--bg">
					<div className="container">
						<div className="page-section">
							<div className="row gutters-100">
								<div className="col-md-4 col-lg-3">
									<div className="footer__first">
										<h2 className="footer__title">E-WASTE MANAGEMENT SYSTEM</h2>
										<p className="footer-first__paragraph">
											Together let's reduce the production of E-waste by recycling them.
										</p>
										<ul className="footer-first__social-icons">
											<li>
												<a href="#">
													<i className="flaticon-facebook-letter-logo"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="flaticon-twitter-logo"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="flaticon-dribbble-logo"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="flaticon-behance-logo"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-md-6 col-lg-2">
									<div className="footer__second">
										<h2 className="footer__title">QUICK LINK</h2>
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
								<div className="col-md-6 col-lg-3">
									<div className="footer__third">
										<h2 className="footer__title">CONTACT US</h2>
										<ul>
											<li>
												<span className="glyphicon glyphicon-envelope"></span>{" "}
												<a href="#">ewastemanagementsystem@gmail.com</a>
											</li>
											<li>
												<span className="glyphicon glyphicon-earphone"></span>{" "}
												<a href="#">+0123-345-6789</a>
											</li>
										</ul>
										<h4 className="footer__subscribe__title">Subscribe</h4>
										<div className="subscribe-section">
											<input
												type="email"
												className="form-control"
												size="50"
												placeholder="Enter Your Email"
												required
											/>
											<button className="subscribe-section__button" type="button">
												<img src="assets/images/send-icon.png" alt="" />
											</button>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4">
									<div className="footer__fourth">
										<h4 className="footer__title">INSTAGRAM</h4>
										<div className="row">
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
										<div className="row">
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
			</div>

			<script src="js/jquery.min.js"></script>
			<script src="js/web3.min.js"></script>
			<script src="js/truffle-contract.js"></script>
			<script src="js/app.js"></script>
			<script src="js/recycling_app.js"></script>
		</div>
	);
};

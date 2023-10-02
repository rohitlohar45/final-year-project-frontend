import React from "react";

export const AdminProfile = () => {
	return (
		<div>
			<div className="container" style={{ width: "100%" }}>
				<nav className="navbar navbar-dark bg-primary navbar-fixed-top">
					<div className="container-fluid">
						<ul className="nav navbar-nav" style={{ float: "right" }}>
							<li>
								<a className="adminaddress navbar-dark bg-primary"></a>
							</li>
						</ul>
						<ul className="nav navbar-nav" style={{ float: "left" }}>
							<li>
								<a href="index.html" className="navbar-dark bg-primary">
									HOME
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<br />
				<br />
				<div className="mainbox">
					<div className="form-div1" style={{ width: "100%" }}>
						<div
							id="addformtitle"
							style={{
								textAlign: "center",
								fontSize: "20px",
								width: "50%",
								margin: "auto 25% auto 25%",
							}}
						>
							Get Analysis
						</div>
						<form onSubmit={() => adminApp.displayData()} style={{ marginBottom: "100px" }}>
							<div className="formclass1" style={{ width: "50%", margin: "auto 25% auto 25%" }}>
								<label htmlFor="producer">Select Producer</label>
								<select id="producerSelect">
									<option value="NULL" disabled selected>
										Select an option
									</option>
								</select>
							</div>
							<button type="submit" className="button1 btn-add">
								Submit
							</button>
						</form>
					</div>
				</div>
				<div id="chart"></div>
				<div className="list-content">
					<br />
					<br />
					<div
						style={{
							textAlign: "center",
							fontSize: "20px",
							width: "50%",
							margin: "auto 25% auto 25%",
						}}
						id="stockproducttile"
					>
						Recent Products
					</div>
					<table
						className="w3-table-all w3-hoverable w3-card"
						style={{ width: "50%", margin: "auto 25% auto 25%" }}
					>
						<thead>
							<tr className="w3-blue">
								<th scope="col">ID</th>
								<th scope="col">Name</th>
								<th scope="col">Type</th>
								<th scope="col">Percentage</th>
							</tr>
						</thead>
						<tbody id="productList"></tbody>
					</table>
				</div>
				<div className="form-div2" style={{ width: "100%", marginBottom: "100px" }}>
					<br />
					<br />
					<div
						style={{
							textAlign: "center",
							fontSize: "20px",
							width: "50%",
							margin: "auto 25% auto 25%",
						}}
						id="retformtitle"
					>
						Assessment Of Production
					</div>
					<form onSubmit={() => adminApp.assessment()}>
						<div className="formclass2" style={{ width: "50%", margin: "auto 25% auto 25%" }}>
							<label htmlFor="type">Type</label>
							<select id="performanceType" name="performanceType">
								<option value="Incentive">Incentive</option>
								<option value="Penalize">Penalize</option>
							</select>
							<label htmlFor="amount">Amount</label>
							<input
								type="number"
								id="amount"
								name="amount"
								placeholder="Enter amount(ethers)"
								min="1"
							/>
						</div>
						<button type="submit" className="button1 btn-add">
							Submit
						</button>
					</form>
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
			<script src="https://cdn.plot.ly/plotly-latest.min.js" charSet="utf-8"></script>
			<script src="js/app.js"></script>
			<script src="js/admin.js"></script>
		</div>
	);
};

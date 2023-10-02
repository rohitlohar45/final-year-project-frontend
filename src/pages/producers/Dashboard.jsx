import React from "react";

const ProducerProfile = () => {
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
							<li>
								<a href="#stockproducttile" className="navbar-dark bg-primary">
									PRODUCT STOCK
								</a>
							</li>
							<li>
								<a href="#returnedproducttile" className="navbar-dark bg-primary">
									RETURNED PRODUCT LIST
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<br />
				<br />
				<div className="mainbox" style={{ width: "50%", marginTop: "20%" }}>
					<div className="form-div">
						<div
							id="addformtitle"
							style={{
								textAlign: "center",
								fontSize: "20px",
								width: "50%",
								margin: "auto 25% auto 25%",
							}}
						>
							<h3>Add Product Form</h3>
						</div>
						<form onSubmit={() => ProApp.addProduct()}>
							<div className="formclass1" style={{ width: "50%", margin: "auto 25% auto 25%" }}>
								<label htmlFor="pname">Name</label>
								<input type="text" id="productname" name="productname" placeholder="Product Name" />

								<label htmlFor="weight">Weight Of Glass</label>
								<input
									type="number"
									id="weightglass"
									name="weightglass"
									placeholder="Weight(Grams)"
									min="1"
								/>

								<label htmlFor="weight">Weight Of Plastic</label>
								<input
									type="number"
									id="weightplastic"
									name="weightplastic"
									placeholder="Weight(Grams)"
									min="1"
								/>

								<label htmlFor="weight">Weight Of Nickel</label>
								<input
									type="number"
									id="weightnickel"
									name="weightnickel"
									placeholder="Weight(Grams)"
									min="1"
								/>

								<label htmlFor="weight">Weight Of Aluminium</label>
								<input
									type="number"
									id="weightaluminium"
									name="weightaluminium"
									placeholder="Weight(Grams)"
									min="1"
								/>

								<label htmlFor="weight">Weight Of Copper</label>
								<input
									type="number"
									id="weightcopper"
									name="weightcopper"
									placeholder="Weight(Grams)"
									min="1"
								/>

								<label htmlFor="weight">Weight Of Magnesium</label>
								<input
									type="number"
									id="weightmagnesium"
									name="weightmagnesium"
									placeholder="Weight(Grams)"
									min="1"
								/>

								<label htmlFor="weight">Weight Of Lead</label>
								<input
									type="number"
									id="weightlead"
									name="weightlead"
									placeholder="Weight(Grams)"
									min="1"
								/>

								<label htmlFor="price">Price</label>
								<input type="number" id="price" name="price" placeholder="Price(ethers)" min="1" />

								<label htmlFor="type">Type</label>
								<select id="producttype" name="producttype">
									<option value="Mobile">Mobile</option>
									<option value="Television">Television</option>
									<option value="Laptop">Laptop</option>
									<option value="Speaker">Speaker</option>
								</select>

								<label htmlFor="quantity">Quantity</label>
								<input
									type="number"
									id="quantity"
									name="quantity"
									placeholder="Number of products"
									min="1"
								/>
							</div>
							<button type="submit" className="button1 btn-add">
								Add product
							</button>
						</form>
					</div>

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
							<h3>Product Stock</h3>
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
								</tr>
							</thead>
							<tbody id="productList"></tbody>
						</table>
					</div>

					<div className="list-content" style={{ marginBottom: "100px" }}>
						<br />
						<br />
						<div
							style={{
								textAlign: "center",
								fontSize: "20px",
								width: "50%",
								margin: "auto 25% auto 25%",
							}}
							id="returnedproducttile"
						>
							<h3>List of Unprocessed Returned Product</h3>
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
								</tr>
							</thead>
							<tbody id="returnedProductList">
								<tr>
									<td style={{ textAlign: "center" }} id="returnProductText" colSpan="3">
										No return products received yet
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div className="penalizeform">
				<p>You are penalized by admin. Pay the penalty amount to continue the services</p>
				<form onSubmit={() => ProApp.payPenalty()}>
					<button type="submit" className="button1 btn-add">
						Pay
					</button>
				</form>
			</div>

			<footer className="footer footer--bg">
				<div className="container">
					<div className="page-section">
						<div className="row gutters-100">
							<div className="col-md-4 col-lg-3">
								<div className="footer__first">
									<h3 className="footer__title">E-WASTE MANAGEMENT SYSTEM</h3>
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
									<h3 className="footer__title">QUICK LINK</h3>
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
									<h3 className="footer__title">CONTACT US</h3>
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
	);
};

export default ProducerProfile;

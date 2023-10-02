import React from "react";

const Main = () => {
	return (
		<div className="main-wrapper">
			<header className="header header--bg" id="hme">
				<div className="container">
					<nav className="navbar">
						<div className="navbar-header">
							<button
								type="button"
								className="navbar-toggle"
								data-toggle="collapse"
								data-target="#myNavbar"
							>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">
								E-WASTE MANAGEMENT SYSTEM
							</a>
						</div>
						<div className="collapse navbar-collapse" id="myNavbar">
							<ul className="nav navbar-nav pull-right">
								<li>
									<a href="#">HOME</a>
								</li>
								<li>
									<a href="#serv">FEATURES</a>
								</li>
								<li>
									<a href="#prod">PRODUCTS</a>
								</li>
								<li>
									<a href="#reg">REGISTER</a>
								</li>
								<li>
									<a href="#lgn">LOGIN</a>
								</li>
								<li>
									<a href="#cont">CONTACT</a>
								</li>
								<li>
									<a href="#abt">ABOUT US</a>
								</li>
							</ul>
						</div>
					</nav>
					<div className="header__content text-center">
						<h1 className="header__content__title text-4xl font-bold">E-WASTE MANAGEMENT SYSTEM</h1>
						<p className="header__content__paragraph text-lg">
							A blockchain-based approach is used in our implementation for E-Waste Management.
							{/* ... Rest of your content */}
						</p>
						<a
							className="button button--margin-right button--hover bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
							href="#reg"
						>
							CREATE ACCOUNT
						</a>
						<a
							className="button button--hover bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
							href="#lgn"
						>
							ALREADY HAVE AN ACCOUNT?
						</a>
					</div>
				</div>
			</header>

			{/* ... Rest of your sections and content */}
		</div>
	);
};

export default Main;

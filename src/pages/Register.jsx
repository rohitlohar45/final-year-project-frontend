import React, { useState } from "react";

export const Register = () => {
	const [name, setName] = useState("");
	const [accountType, setAccountType] = useState("NULL");

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleAccountTypeChange = (e) => {
		setAccountType(e.target.value);
	};

	const addUser = () => {};

	return (
		<div>
			<div className="loader w3-blue">
				<h4 id="loaderText" className="w3-blue">
					Loading...
				</h4>
			</div>
			<div className="container" style={{ width: "100%" }}>
				<nav className="navbar navbar-dark bg-primary navbar-fixed-top">
					<div className="container-fluid">
						<ul className="nav navbar-nav">
							<li>
								<a href="index.html" className="navbar-dark bg-primary">
									HOME
								</a>
							</li>
							<li>
								<a href="#" className="navbar-dark bg-primary">
									REGISTER USER
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div className="mainbox" style={{ marginBottom: "100px" }}>
					<div className="form-div" style={{ width: "100%" }}>
						<h3 style={{ marginTop: "50px" }}>Register</h3>
						<div className="formclass1" style={{ width: "50%", margin: "auto 25% auto 25%" }}>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Enter Name"
								value={name}
								onChange={handleNameChange}
							/>
							<label htmlFor="address">Your Account Address</label>
							<input
								type="text"
								id="accountAddress"
								name="accountAddress"
								placeholder="Account Address"
								disabled
							/>
							<label htmlFor="type">Register As</label>
							<select
								id="accountType"
								name="accountType"
								value={accountType}
								onChange={handleAccountTypeChange}
							>
								<option value="NULL" disabled>
									Select an option
								</option>
								<option value="Producer">Producer</option>
								<option value="Retailer">Retailer</option>
								<option value="Consumer">Consumer</option>
								<option value="RecyclingUnit">RecyclingUnit</option>
							</select>
						</div>
						<button type="submit" className="button1 btn-add" onClick={addUser}>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

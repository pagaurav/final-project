import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
	return (
		<>
			<nav className="navbar  navbar-expand-md bg-body-tertiary fixed-top navbar-dark bg-dark" >
				<div className="container-fluid">
					<Link className="navbar-brand navbar-brand" to='/'>Login System</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to='/' className="nav-link active" aria-current="page">Home</Link>
							</li>
							<li className="nav-item">
								<Link to='./SignIn' className="nav-link" >Sing In</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link " to='./SignUp'>Sing Up</Link>
							</li>
						</ul>

					</div>
				</div>
			</nav>
		</>
	)
}

import React from "react";
import Navbar from "./Navbar.jsx"
import rigoImage from "../../img/rigo-baby.jpg";
import {Footer} from "./Footer.jsx"
// 1. include images into your bundle


//  2. create your first component with PascalCase name.
const Home = () => {

	// 3. Code JS
	return (
		<div className="text-center">
			<Navbar/>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			
		</div>
	);
};

export default Home;

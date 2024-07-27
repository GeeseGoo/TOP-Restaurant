import cakeImage from "./cake.png";

const homePage = document.createElement("div");
homePage.innerHTML = `<div class="homepage groovy">
				<img class="home-cake" src=${cakeImage} alt="" />
				<div class="cake-title">
					<span class="animate spin-in welcome">WELCOME TO</span>
					<h1 class="animate bounce-in">anthony's</h1>
				</div>
				<div class="description">
					<span class="animate bounce-during">Big</span>
					<span class="animate bounce-during">Beautiful</span>
					<span class="animate bounce-during">Cakery</span>
				</div>
			</div>
`;

export default homePage;

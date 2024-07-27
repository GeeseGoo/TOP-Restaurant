import homepage from "./homepage.js";
import menu from "./menu.js";
import contact from "./contact.js";
import "./style.css";

const pages = [homepage, menu, contact];
const content = document.querySelector("#content");
document.querySelectorAll("nav>button").forEach((button, index) => {
	console.log(index);
	button.addEventListener("click", () => {
		content.innerHTML = "";
		content.appendChild(pages[index]);
	});
});
document.querySelector("#content").appendChild(homepage);

import { renderHeader } from "./components/header.js";
import { renderNav } from "./components/nav.js";
import { renderHome } from "./pages/home.js";
import { renderIcozhagender } from "./pages/icozhagender.js";
import { renderAhicozgender } from "./pages/ahicozgender.js";

const routes = {
	"/": { render: renderHome, activePage: "Home" },
	"/icozhagender": { render: renderIcozhagender, activePage: "Icozhagender" },
	"/ahicozgender": { render: renderAhicozgender, activePage: "Ahicozgender" }
};

export function initRouter() {
	window.addEventListener("hashchange", () => renderPage());
	renderPage();
}

function renderPage() {
	const hash = window.location.hash.replace("#", "") || "/";
	const route = routes[hash] || routes["/"];
	const page = route.render();
	const activePage = route.activePage;

	document.title = page.title || "LGBTKD+ Wiki";
	document.body.className = `skin--responsive skin-vector skin-vector-search-vue mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject ${page.bodyClass} skin-vector-2022 action-view`;

	const existingCSS = document.getElementById("dynamic-page-css");
	if (existingCSS) existingCSS.remove();
	if (page.extraCSS) {
		const style = document.createElement("style");
		style.id = "dynamic-page-css";
		style.textContent = page.extraCSS;
		document.head.appendChild(style);
	}

	const app = document.getElementById("app");
	app.innerHTML = `
	<a class="mw-jump-link" href="#bodyContent">Jump to content</a>
	${renderHeader()}
	<div class="mw-page-container">
		<div class="mw-page-container-inner">
			${renderNav(activePage)}
			<div class="mw-content-container">
				<main id="content" class="mw-body">
					<header class="mw-body-header vector-page-titlebar no-font-mode-scale">
						<h1 id="firstHeading" class="firstHeading mw-first-heading"><span class="mw-page-title-main">${activePage === "Home" ? "Home" : activePage}</span></h1>
					</header>
					<div id="bodyContent" class="vector-body">
						<div id="siteSub" class="noprint">From LGBTKD+ Wiki</div>
						<div id="mw-content-text" class="mw-body-content">
							<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">
								${page.content}
							</div>
						</div>
						${page.categories ? renderCategories(page.categories) : ""}
					</div>
				</main>
			</div>
		</div>
	</div>`;

	window.scrollTo(0, 0);
}

function renderCategories(cats) {
	const items = cats.map(c => `<li><a href="#">${c}</a></li>`).join("");
	return `
					<div id="catlinks" class="catlinks">
						<div id="mw-normal-catlinks" class="mw-normal-catlinks">
							<a href="#">Categories</a>:
							<ul>${items}</ul>
						</div>
					</div>`;
}

if (!window.location.hash || window.location.hash === "#") {
	window.location.replace("#/");
} else {
	initRouter();
}
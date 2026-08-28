export function renderNav(activePage) {
	const pages = [
		{ id: "Home", label: "Home", hash: "#/" },
		{ id: "Icozhagender", label: "Icozhagender", hash: "#/icozhagender" },
		{ id: "Ahicozgender", label: "Ahicozgender", hash: "#/ahicozgender" }
	];

	const items = pages.map((p, i) => {
		const active = p.id === activePage ? " vector-toc-list-item-active" : "";
		return `
							<li id="toc-${p.id}" class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded${active}">
								<a href="${p.hash}" class="vector-toc-link">
									<div class="vector-toc-text">
										<span class="vector-toc-numb">${i + 1}</span>
										<span>${p.label}</span>
									</div>
								</a>
							</li>`;
	}).join("");

	return `
		<div class="vector-column-start">
			<div class="vector-sticky-pinned-container">
				<nav id="mw-panel-toc" aria-label="Contents" class="mw-table-of-contents-container vector-toc-landmark">
					<div id="vector-toc-pinned-container" class="vector-pinned-container">
						<div id="vector-toc" class="vector-toc vector-pinnable-element">
							<div class="vector-pinnable-header vector-toc-pinnable-header vector-pinnable-header-pinned">
								<h2 class="vector-pinnable-header-label">Navigation</h2>
							</div>
							<ul class="vector-toc-contents" id="mw-panel-toc-list">
								${items}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>`;
}
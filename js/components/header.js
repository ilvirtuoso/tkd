export function renderHeader() {
	return `
	<div class="vector-header-container">
		<header class="vector-header mw-header no-font-mode-scale">
			<div class="vector-header-start">
				<nav class="vector-main-menu-landmark" aria-label="Site">
					<div id="vector-main-menu-dropdown" class="vector-dropdown vector-main-menu-dropdown vector-button-flush-left vector-button-flush-right" title="Main menu">
						<input type="checkbox" id="vector-main-menu-dropdown-checkbox" role="button" aria-haspopup="true" class="vector-dropdown-checkbox" aria-label="Main menu">
						<label id="vector-main-menu-dropdown-label" for="vector-main-menu-dropdown-checkbox" class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only" aria-hidden="true"><span class="vector-icon mw-ui-icon-menu mw-ui-icon-wikimedia-menu"></span>
						<span class="vector-dropdown-label-text">Main menu</span>
						</label>
					</div>
				</nav>
				<a href="#/" class="mw-logo">
					<img class="mw-logo-icon" src="https://static.wikitide.net/lgbtawiki/f/f8/Favicon_new.ico" alt="" aria-hidden="true" height="50" width="50">
					<span class="mw-logo-container skin-invert">
						<strong class="mw-logo-wordmark">LGBTKD+ Wiki</strong>
					</span>
				</a>
			</div>
			<div class="vector-header-end">
				<div id="p-search" role="search" class="vector-search-box-vue vector-search-box-collapses vector-search-box-show-thumbnail vector-search-box-auto-expand-width vector-search-box">
					<div class="vector-typeahead-search-container">
						<div class="cdx-typeahead-search cdx-typeahead-search--show-thumbnail cdx-typeahead-search--auto-expand-width">
							<form action="#" id="searchform" class="cdx-search-input cdx-search-input--has-end-button">
								<div id="simpleSearch" class="cdx-search-input__input-wrapper">
									<div class="cdx-text-input cdx-text-input--has-start-icon">
										<input class="cdx-text-input__input mw-searchInput" autocomplete="off" type="search" name="search" placeholder="Search LGBTKD+ Wiki" aria-label="Search LGBTKD+ Wiki" id="searchInput">
										<span class="cdx-text-input__icon cdx-text-input__start-icon"></span>
									</div>
								</div>
								<button class="cdx-button cdx-search-input__end-button">Search</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>`;
}
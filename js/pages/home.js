export function renderHome() {
	return {
		title: "Home",
		bodyClass: "page-Home rootpage-Home",
		content: `
						<p>Welcome to the LGBTKD+ Wiki. Explore the sections of the Icozhagender system below:</p>
						<div class="grid">
							<a class="card" href="#/icozhagender">
								<img alt="Icozhagender flag" src="phpmyadmin/icozhagender.png">
								<h2>Icozhagender Section</h2>
								<p>Icozhagender (also known as Icozhasexual or Icozhaspecific) is a micro-identity and xenogender term centered around the Icozha Minecraft skin.</p>
							</a>
							<a class="card" href="#/ahicozgender">
								<img alt="Ahicozgender flag" src="phpmyadmin/ahicozgender.png">
								<h2>Ahicozgender Section</h2>
								<p>Ahicozgender is the son-gender of Icozhagender &mdash; a sub-gender within the Icozhagender system.</p>
							</a>
						</div>`,
		categories: false,
		extraCSS: `
	<style>
	.grid { margin-top: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
	.card { display: block; background: #fff; border: 1px solid #a2a9b1; border-radius: 8px; padding: 16px; text-align: center; text-decoration: none; color: #202122; }
	.card:hover { border-color: #72777d; box-shadow: 0 4px 16px rgba(0,0,0,.15); }
	.card img { width: 100%; border: 1px solid #c8ccd1; border-radius: 6px; }
	.card h2 { font-size: 1.2rem; margin: 12px 0 6px; border-bottom: 0; }
	.card p { color: #54595d; font-size: .9rem; margin: 0; }
	</style>`
	};
}
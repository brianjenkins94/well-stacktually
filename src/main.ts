import createAuth0Client from "@auth0/auth0-spa-js"; // "@auth0/auth0-spa-js/src/index";

document.addEventListener("DOMContentLoaded", async function(event) {

	const auth0Client = await createAuth0Client({
		"client_id": "Y8ZTjeZQp6wuGYidADfU7ubTe3nWjBLY",
		"domain": "brianjenkins94.auth0.com",
		//"redirect_uri": location.origin + location.pathname,
		"useRefreshTokens": true,
		"cacheLocation": "localstorage"
	});

	console.log(await auth0Client.isAuthenticated());

	document.getElementById("login").addEventListener("click", function() {
		console.log("`login` clicked.");

		auth0Client.loginWithRedirect().catch(function(error) {
			alert(error);
		});
	});

	document.getElementById("logout").addEventListener("click", function() {
		console.log("`logout` clicked.");

		auth0Client.logout();
	});

	document.getElementById("getInfo").addEventListener("click", async function() {
		console.log("`getInfo` clicked.");

		document.body.append(JSON.stringify(await auth0Client.getUser(), undefined, 4));
	});

	auth0Client.handleRedirectCallback().then(function(redirectResult) {
		console.log(redirectResult);

		window.history.replaceState({}, document.title, window.location.pathname);
	});

});

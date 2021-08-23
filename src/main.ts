import createAuth0Client from "@auth0/auth0-spa-js"; // "@auth0/auth0-spa-js/src/index";

document.addEventListener("DOMContentLoaded", async function(event) {

	const auth0Client = await createAuth0Client({
		"client_id": "Y8ZTjeZQp6wuGYidADfU7ubTe3nWjBLY",
		"domain": "brianjenkins94.auth0.com",
		"redirect_uri": location.origin + location.pathname,
		"useRefreshTokens": true,
		"cacheLocation": "localstorage"
	});

	document.getElementById("login").addEventListener("click", function() {
		auth0Client.loginWithRedirect().catch(function(error) {
			alert(error);
		});
	});

	document.getElementById("logout").addEventListener("click", function() {
		auth0Client.logout();
	});

	auth0Client.handleRedirectCallback().then(function(redirectResult) {
		window.history.replaceState({}, document.title, window.location.pathname);
	});

});

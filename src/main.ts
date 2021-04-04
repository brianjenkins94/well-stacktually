import createAuth0Client from "@auth0/auth0-spa-js"; // "@auth0/auth0-spa-js/src/index";

document.addEventListener("DOMContentLoaded", async function(event) {

	const auth0Client = await createAuth0Client({
		"domain": "brianjenkins94.auth0.com",
		"client_id": "Y8ZTjeZQp6wuGYidADfU7ubTe3nWjBLY",
		"redirect_uri": location.origin + location.pathname
	});

	const user = await auth0Client.getUser();

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

	document.getElementById("getInfo").addEventListener("click", function() {
		console.log("`getInfo` clicked.");

		document.body.append(JSON.stringify(user, undefined, 4));
	});

	auth0Client.handleRedirectCallback().then(function(redirectResult) {
		console.log("Logged in.");
	});

});

import createAuth0Client from "@auth0/auth0-spa-js"; // "@auth0/auth0-spa-js/src/index";

document.addEventListener("DOMContentLoaded", async function(event) {

	const auth0Client = await createAuth0Client({
		"domain": "brianjenkins94.auth0.com",
		"client_id": "Y8ZTjeZQp6wuGYidADfU7ubTe3nWjBLY"
	});

	document.getElementById("login").addEventListener("click", function() {
		auth0Client.loginWithRedirect().catch(function(error) {
			alert(error);
		});
	});

	auth0Client.handleRedirectCallback().then(function(redirectResult) {

		console.log("Logged in.");

		auth0Client.getUser().then(function(user) {
			console.log(user);
		});

	});

});

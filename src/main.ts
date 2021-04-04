import createAuth0Client from "@auth0/auth0-spa-js"; // "@auth0/auth0-spa-js/src/index";

let user;

document.addEventListener("DOMContentLoaded", async function(event) {

	const auth0Client = await createAuth0Client({
		"domain": "brianjenkins94.auth0.com",
		"client_id": "Y8ZTjeZQp6wuGYidADfU7ubTe3nWjBLY",
		"redirect_uri": location.origin + location.pathname
	});

	user = await auth0Client.getUser();

	document.getElementById("login").addEventListener("click", function() {
		console.log(user);

		auth0Client.loginWithRedirect().catch(function(error) {
			alert(error);
		});
	});

	document.getElementById("logout").addEventListener("click", function() {
		console.log(user);

		auth0Client.logout();
	});

	document.getElementById("getInfo").addEventListener("click", async function() {
		console.log(user);

		document.body.innerHTML += JSON.stringify(user, undefined, 4);
	});

	auth0Client.handleRedirectCallback().then(async function(redirectResult) {

		console.log("Logged in.");

		user = await auth0Client.getUser();

	});

});

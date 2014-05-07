var Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('0.0.0.0', 5859);

// Add the route
server.route({
	method: "*",
	path: "/{path*}",
	config: {
		handler: {
			directory: {
				path: "./static/",
				listing: false,
				redirectToSlash:true
			}
		},
		auth: false
	}
});

// Start the server
server.start();

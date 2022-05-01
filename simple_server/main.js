  const getJSONString = obj => {
    return JSON.stringify(obj , null ,2);
	};

  const port = 3000,
	http = require("http")
        httpStatus = require("http-status-codes")
  app = http.createServer();


  app.on("request", (req,res) => {
  var body = [];
	req.on("data", (bodyData) => {
		body.push(bodyData);
	});

	req.on("end", () => {
    body = Buffer.concat(body).toString();
		console.log(`request body contents ${body}`)
	});

	// console.log(body)
	console.log(`Method: ${getJSONString(req.method)}`)
	console.log(`URL: ${getJSONString(req.url)}`)
	console.log(`Headers: ${getJSONString(req.headers)}`)

  res.writeHead(httpStatus.OK, {
		"Content~Type" : "text/html"
	});

  let responseMessage = "<h1>This will show on the screen.</h1>"
	res.end(responseMessage);

	});

	app.listen(port);
	console.log(`the server has started and is listeninng on port number: ${port}`);

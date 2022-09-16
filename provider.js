class AsyncProvider {
    // constructor
    constructor(httpProvider) {
        this.withCredentials = httpProvider.withCredentials;
        this.timeout = httpProvider.timeout || 0;
        this.headers = httpProvider.headers;
        this.agent = httpProvider.agent;
        this.connected = false;
        this.host = httpProvider.host || 'http://localhost:8545';
        this.agent = httpProvider.agent;
    }

    async send(payload) {
        var options = {
            method: 'POST',
            body: JSON.stringify(payload)
        };
        var headers = {};

        // https://github.com/node-fetch/node-fetch#custom-agent
        var agents = { httpsAgent: this.httpsAgent, httpAgent: this.httpAgent };

        if (this.agent) {
            agents.httpsAgent = this.agent.https;
            agents.httpAgent = this.agent.http;
        }

        if (this.host.substring(0, 5) === "https") {
            options.agent = agents.httpsAgent;
        } else {
            options.agent = agents.httpAgent;
        }

        if (this.headers) {
            this.headers.forEach(function (header) {
                headers[header.name] = header.value;
            });
        }

        // Default headers
        if (!headers['Content-Type']) {
            headers['Content-Type'] = 'application/json';
        }

        // As the Fetch API supports the credentials as following options 'include', 'omit', 'same-origin'
        // https://developer.mozilla.org/en-US/docs/Web/API/fetch#credentials
        // To avoid breaking change in 1.x we override this value based on boolean option.
        if (this.withCredentials) {
            options.credentials = 'include';
        } else {
            options.credentials = 'omit';
        }

        options.headers = headers;
        var resp = await fetch(this.host, options);
        var result = await resp.json();
        return result;
    }



    async debug_traceTransaction(hash) {
        return await this.send({
            jsonrpc: "2.0",
            id: 1,
            method: "debug_traceTransaction",
            params: [hash, { tracer: "callTracer" }]
        });
    }
}

module.exports.AsyncHttpProvider = AsyncProvider
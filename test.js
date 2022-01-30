import http from "http";
import test from "ava";
import app from "./index.js";

test.before(async t => {
    t.context.server = http.createServer(app).listen(80, 'localhost');
});

test.after.always(t => {
    t.context.server.close();
});

const reqst = async (endpoint) => {
    return await new Promise(resolve => {
        const req = http.request({
            host: 'localhost',
            path: endpoint,
            port: 80,
            method: 'GET'
        });
        req.end();
        req.on("response", (res) => {
            res.body = '';
            res.on('data', chunk => {
                res.body += chunk;
            });
            resolve(res);
        });
    });
};

test('User test', async t => {
    const res = await reqst('/users');
    t.is(res.statusCode, 200);
    t.truthy(typeof res.body === 'string');
    t.is(res.body, 'Users page');
});



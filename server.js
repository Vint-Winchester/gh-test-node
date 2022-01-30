import http from "http";
import app from "./index.js";

http.createServer(app).listen(80, () => {
    console.log('server');
});

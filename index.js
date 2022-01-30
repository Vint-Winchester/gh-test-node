

export const app = (req, res) => {
    console.log(`${req.socket.remoteAddress}`);
    console.log(`${req.url}`);
    if (req.url === '/') {
        res.writeHead(200);
        res.end('Main page');
    }
    if (req.url === '/users') {
        res.writeHead(200);
        res.end('Users page');
    }
}

export default app;

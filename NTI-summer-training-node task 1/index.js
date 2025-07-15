const fs = require('fs');
const http = require('http');
const url = require('url');
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: false,
});

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const posts = JSON.parse(data);

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (pathname === '/' || pathname === '/home') {
        const html = nunjucks.render('home.html', { posts });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);

    } else if (pathname === '/post') {
        const post = posts.find(p => p.id == query.id);
        if (!post) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>Post Not Found</h1>');
            return;
        }
        const html = nunjucks.render('post.html', post);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    } else if (pathname === '/api') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            if (query.id) {
                const post = posts.find(p => p.id == query.id);
                if (!post) {
                    res.statusCode = 404;
                    res.end(JSON.stringify({ error: 'Post Not Found' }));
                } else {
                    res.end(JSON.stringify(post));
                }
            } else {
                // all posts
                res.end(JSON.stringify(posts));
            }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log(" Listening on 8000");
});

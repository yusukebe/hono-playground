# Hono Playground

The Hono Playground is a web page that allows you to run a Hono app in your browser without a server.

We know that Hono works on server sides - Cloudflare Workers, Fastly Compute@Edge, Deno, Bun, and Node.js. However, Hono also works on browsers as it is composed of only Web-standards APIs.

This may seem obvious, but it's exciting to see it actually work in this manner. You can experience it at this URL: <https://playground.hono.dev/>

## Screenshots

![SS](https://github.com/yusukebe/hono-playground/assets/121654029/8432b75b-c482-4ba4-ba60-a156391f2fb5)


## The minimal code

This is a minimal code to run a Hono app on browsers.

```html
<html>
  <head>
    <script type="module">
      import { Hono } from 'https://esm.sh/hono'
      const app = new Hono()
      app.get('*', (c) => c.text(`You are accessing ${c.req.path}`))
      const res = await app.request(location.href)
      document.getElementById('result').innerText = await res.text()
    </script>
  </head>
  <body>
    <div id="result"></div>
  </body>
</html>
```

## Author

Yusuke Wada <https://github.com/yusukebe>

## License

MIT

---

```txt
Monaco Editor

The MIT License (MIT)

Copyright (c) 2016 - present Microsoft Corporation
```

const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const fs = require('fs');
const isProduction = process.env.NODE_ENV === 'production';
const { createProxyMiddleware } = require('http-proxy-middleware');
if (!isProduction) {
  app.use(
    '/react-app',
    createProxyMiddleware({
      target: 'http://localhost:3001/vite', // Vite dev server port
      changeOrigin: true,
    })
  );
  // app.use(express.static(path.join(__dirname, 'react-app')));
  // app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, 'react-app', 'index.html'))
  // })

} 
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
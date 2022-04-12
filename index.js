// inisiasi penggunaan konfigurasi dari file .env
require('dotenv').config();

// import express
const express = require('express');

// import route
const route = require('./route');

// import middleware
const errorMiddleware = require('./middlewares/error');
const notFoundMiddleware = require('./middlewares/notfound');

// inisiasi express
const app = express();

// konfigurasi port
const port = process.env.PORT;

// sajikan folder public secara statis
app.use(express.static('public'));

// atur ejs sebagai view engine
app.set('view engine', 'ejs');

// terapkan middleware pembaca body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// terapkan route di aplikasi
app.use(route);

// terapkan error & not found middleware
app.use(errorMiddleware.error);
app.use(notFoundMiddleware.notFound);

// jalankan server express
app.listen(port);
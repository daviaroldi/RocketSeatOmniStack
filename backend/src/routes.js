const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router();
const upload = multer(uploadConfig)

//Sessions
routes.post('/sessions', SessionController.store);

//Spots
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

//Dashboard
routes.get('/dashboard', DashboardController.show);

//Booking
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
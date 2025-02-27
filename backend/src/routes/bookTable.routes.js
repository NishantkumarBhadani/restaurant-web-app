import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { createTableBooking, deleteBooking, getAllBookings, getBookingById, updateBooking } from "../controllers/bookTable.controllers.js";

const router = Router();

router.route("/createTableBooking").post(verifyJWT, createTableBooking); // Create a booking
router.route("/getAllBookings").get(verifyJWT, getAllBookings); // Get all bookings
router.route("/getBooking/:id").get(verifyJWT, getBookingById); // Get booking by ID
router.route("/updateBooking/:id").put(verifyJWT, updateBooking); // Update booking by ID
router.route("/deleteBooking/:id").delete(verifyJWT, deleteBooking); // Delete booking by ID


module.exports = router;
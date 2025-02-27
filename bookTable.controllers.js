const TableBooking = require("../models/TableBooking"); 
//new table booking
const createTableBooking = async (req, res) => {
  try {
    const { userId, name, phone, guests } = req.body;
 // a new booking instance
    const newBooking = new TableBooking({
      userId,
      name,
      phone,
      guests,
      status: "Pending",
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ message: "Failed to create booking. Please try again later." });
  }
};

 
 // Fetch all bookings from the database
const getAllBookings = async (req, res) => {
  try {
    const bookings = await TableBooking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve bookings. Please try again later." });
  }
};

// Fetch booking by ID from the database
 // If booking exists, return it; otherwise, return an error
const getBookingById = async (req, res) => {
  try {
    const booking = await TableBooking.findById(req.params.id);

    if (booking) {
      res.json(booking);
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error retrieving booking. Please try again later." });
  }
};

// Update a table booking by ID
// If booking exists, update it; otherwise, return an error
const updateBooking = async (req, res) => {
  try {
    const { userId, name, phone, guests, status } = req.body;

    const updatedBooking = await TableBooking.findByIdAndUpdate(
      req.params.id,
      { userId, name, phone, guests, status },
      { new: true } // Return the updated document
    );

    if (updatedBooking) {
      res.json({ message: "Booking updated successfully", booking: updatedBooking });
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update booking. Please try again later." });
  }
};

// Delete a table booking by ID
// If booking exists, delete it; otherwise, return an error
const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await TableBooking.findByIdAndDelete(req.params.id);

    if (deletedBooking) {
      res.json({ message: "Booking deleted successfully" });
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete booking. Please try again later." });
  }
};

// Export all controller functions to be used in routes
module.exports = {
  createTableBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};

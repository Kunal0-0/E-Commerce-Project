const Address = require("../models/address");

// Add a new address
async function addAddress(req, res, next) {
  const {
    userId,
    fullName,
    phone,
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    postalCode,
  } = req.body;

  if (
    !userId ||
    !fullName ||
    !phone ||
    !addressLine1 ||
    !addressLine2 ||
    !city ||
    state ||
    country ||
    !postalCode
  ) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    return next(error);
  }
  const address = new Address({
    userId,
    fullName,
    phone,
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    postalCode,
  });
  await address.save();
  res.status(201).json({ success: true, message: "Address added", address });
}

// Get all addresses for a user
async function getAddress(req, res, next) {
  const addresses = await Address.findById(req.params.id);
  if (!addresses) {
    const error = new Error("Address not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json(addresses);
}

// Update an address
async function updateAddress(req, res, next) {
  const updatedAddress = await Address.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!updatedAddress) {
    const error = new Error("Address not found");
    error.statusCode = 404;
    return next(error);
  }
  res
    .status(200)
    .json({ success: true, message: "Address updated", updatedAddress });
}

// Delete an address
async function deleteAddress(req, res, next) {
  const deletedAddress = await User.findByIdAndDelete(req.params.id);
  if (!deletedAddress) {
    const error = new Error("Address not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ message: "Address deleted" });
}

module.exports = {
  addAddress,
  getAddress,
  updateAddress,
  deleteAddress,
};

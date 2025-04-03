const Favorites = require("../models/favorites");

// addToFavorites
async function addToFavorites(req, res, next) {
  const { userId, product  } = req.body;

  if (!userId || !product) {
    const error = new Error("User ID and Product ID are required");
    error.statusCode = 400;
    return next(error);
  }

  let favorite = await Favorites.findOne({ userId });

  if (!favorite) {
    // Create a new favorite document if the user doesn't have one
    favorite = new Favorites({ userId, products: [product] });
  } else {
    // Prevent adding duplicate products
    if (favorite.products.includes(product)) {
      const error = new Error("Product is already in favorites");
      error.statusCode = 400;
      return next(error);
    }
    favorite.products.push(product);
  }
  await favorite.save();
  res.status(201).json({ message: "Added to favorites", favorite });
}

// Get all Favorites
async function getFavorites(req, res, next) {
  const { userId } = req.params;

  const favorite = await Favorites.findOne({ userId }).populate("products");

  if (!favorite || favorite.products.length === 0) {
    return res
      .status(200)
      .json({ message: "No favorites found", favorites: [] });
  }

  res.status(200).json(favorite);
}

// Delete Favorite
async function removeFromFavorites(req, res, next) {
  const { userId, product } = req.body;

  const favorite = await Favorites.findOne({ userId });

  if (!favorite) {
    const error = new Error("User has no favorite products");
    error.statusCode = 404;
    return next(error);
  }

  // Remove the product from the array
  favorite.products = favorite.products.filter((id) => id.toString() !== product);

  if (favorite.products.length === 0) {
    await Favorites.findByIdAndDelete(favorite._id);
    return res.status(200).json({ message: "All favorite products removed" });
  }

  await favorite.save();
  res.status(200).json({ message: "Product removed from favorites", favorite });
}

module.exports = {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
};

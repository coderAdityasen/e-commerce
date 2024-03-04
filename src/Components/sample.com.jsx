import React, { useState } from "react";

const Product = ({ product, isInWishlist, addToWishlist, removeFromWishlist }) => {
    const [isInWishlistLocal, setIsInWishlistLocal] = useState(isInWishlist);

    const handleToggleWishlist = () => {
        if (isInWishlistLocal) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product.id);
        }
        setIsInWishlistLocal(!isInWishlistLocal);
    };

    return (
        <div>
            <h3>{product.name}</h3>
            {/* Render toggle button based on wishlist status */}
            <button onClick={handleToggleWishlist}>
                {isInWishlistLocal ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
        </div>
    );
};
export default Product;



import React, { useState } from "react";
import Product from "./Product";

const ParentComponent = () => {
    // Assume wishlistItems is an array of objects with a structure like { id: ..., name: ..., wishlist: true/false }
    const [wishlistItems, setWishlistItems] = useState([...]); // Initialize with your wishlist items

    const addToWishlist = (productId) => {
        // Add logic to update wishlistItems array by setting wishlist flag to true for the specified product
    };
}

const removeFromWishlist = (productId) => {
	// Add logic to update wishlistItems array by setting wishlist flag to false for the specified product
};

return (
	<div>
		{/* Iterate through wishlistItems and render each product */}
		{wishlistItems.map((product) => (
			<Product
				key={product.id}
				product={product}
				isInWishlist={product.wishlist}
				addToWishlist={addToWishlist}
				removeFromWishlist={removeFromWishlist}
			/>
		))}
	</div>
);

export default ParentComponent;



import React from "react";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Mens Oversized Tshirts",
    image: "https://stylepress.in/wp-content/uploads/2025/09/black-oversize-tshirt-with-musculer-male-model-bac-1.png",
    price: 399,
    oldPrice: 599,
    description: "Premium cotton oversized fit t-shirt perfect for casual and gym wear.",
  },
  {
    id: 2,
    name: "Stylepress Goku",
    image: "https://stylepress.in/wp-content/uploads/2025/05/goku-stylepress-2.png",
    price: 499,
    oldPrice: 699,
    sale: true,
    description: "Anime-inspired Goku design with superior fabric and print quality.",
  },
  {
    id: 3,
    name: "God of War OverSized TShirts",
    image: "https://stylepress.in/wp-content/uploads/2025/04/god-of-war.png",
    price: 599,
    oldPrice: 799,
    description: "Limited edition God of War design with bold graphic print.",
  },
  {
    id: 4,
    name: "Zym Rat Oversized Tshirts",
    image: "https://stylepress.in/wp-content/uploads/2025/04/white-oversize-tshirt-on-hanger-back-view.jpg",
    price: 449,
    oldPrice: 600,
    description: "Minimalist gym wear with breathable cotton fabric.",
  },
  {
    id: 5,
    name: "Vintage Hoodie",
    image: "https://stylepress.in/wp-content/uploads/2025/03/black-oversize-tshirt-on-hanger-back-view.webp",
    price: 699,
    oldPrice: 799,
    sale: true,
    description: "Vintage-style hoodie with premium fleece comfort.",
  },
  {
    id: 6,
    name: "Dragon Ball Goku Inspired",
    image: "https://stylepress.in/wp-content/uploads/2025/09/Gemini_Generated_Image_20s03z20s03z20s0-1.png",
    price: 699,
    oldPrice: 799,
    description: "Dragon Ball Z inspired streetwear oversized t-shirt.",
  },
];

export default function OverSizedTshirts() {
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <section className="py-20 bg-[#f8f8f8] text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-black">OverSized Tshirts</h2>
      <div className="w-24 h-[2px] bg-black mx-auto my-4"></div>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Explore our exclusive collection of stylish oversized t-shirts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 md:px-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer relative"
            onClick={() => handleClick(product)}
          >
            {product.sale && (
              <div className="absolute top-2 right-2 bg-black text-white text-xs uppercase px-3 py-1 rounded-sm">
                Sale
              </div>
            )}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex justify-center items-center space-x-3">
                <span className="text-gray-400 line-through text-sm">₹{product.oldPrice}</span>
                <span className="text-black text-lg font-bold">₹{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

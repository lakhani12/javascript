function Userdata() {
  fetch("https://dummyjson.com/products?limit=50")
    .then(function (rawData) {
      console.log(rawData);
      return rawData.json();
    })
    .then((data) => {
      console.log("Final Data Step 1", data);
      console.log("Final Data Step 2", data.products);

      if (!data?.products || !Array.isArray(data.products)) return;
      data.products.forEach((product) => {
        RenderUI(product);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

Userdata();

function RenderUI(product) {
  if (!product) return;
  let card = document.querySelector(".card");
  if (!card) return;

  const discount =
    typeof product.discountPercentage === "number"
      ? product.discountPercentage.toFixed(2)
      : "0.00";
  const price =
    typeof product.price === "number" ? product.price.toFixed(2) : "0.00";
  const originalPrice =
    typeof product.price === "number" &&
    typeof product.discountPercentage === "number"
      ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
      : price;
  const stock = product.stock ?? "N/A";
  const weight = product.weight ?? "N/A";
  const category = product.category ?? "Product";
  const sku = product.sku ?? "N/A";
  const title = product.title ?? "Untitled";
  const description = product.description ?? "No description available.";
  const image =
    product.thumbnail || (Array.isArray(product.images) ? product.images[0] : "");
  const ratingValue = product.rating ?? 0;
  const ratingRounded = Math.round(ratingValue);
  const stars = "★".repeat(Math.max(0, Math.min(5, ratingRounded))).padEnd(5, "☆");

  card.innerHTML += `<div class="relative group max-w-4xl w-full bg-[#1a1a1a] rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
        
        <div class="md:w-1/2 relative overflow-hidden bg-gradient-to-br from-pink-900/20 to-black">
            <div class="absolute top-10 -left-10 text-9xl font-black text-white/5 select-none uppercase rotate-90">${category.slice(0, 10)}</div>
            
            <div class="relative z-10 h-full flex items-center justify-center p-12">
                <img src="${image}" 
                     alt="${title}" 
                     class="w-full h-auto drop-shadow-[0_35px_35px_rgba(236,72,153,0.3)] transition-transform duration-700 group-hover:scale-110">
            </div>

            <div class="absolute top-6 left-6 bg-white text-black px-4 py-1 rounded-full text-sm font-bold tracking-tighter shadow-xl">
                SAVE ${discount}%
            </div>
        </div>

        <div class="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            
            <div class="reveal-item flex items-center space-x-2 text-[10px] text-pink-500 font-bold uppercase tracking-[0.2em] mb-4">
                <span>${category}</span>
                <span class="text-white/20">•</span>
                <span>SKU: ${sku}</span>
            </div>

            <div class="reveal-item delay-1">
                <h1 class="text-4xl md:text-5xl font-light text-white leading-tight">${title}</h1>
                
                <div class="mt-6 flex items-baseline space-x-4">
                    <span class="text-4xl font-light text-white">$${price}</span>
                    <span class="text-white/40 line-through text-lg">$${originalPrice}</span>
                </div>
            </div>

            <p class="reveal-item delay-2 mt-6 text-gray-400 leading-relaxed text-sm">
                ${description}
            </p>

            <div class="reveal-item delay-2 mt-8 grid grid-cols-2 gap-4 border-y border-white/10 py-6">
                <div>
                    <span class="block text-[10px] text-gray-500 uppercase tracking-widest">Availability</span>
                    <span class="text-white text-sm">${stock} in stock</span>
                </div>
                <div>
                    <span class="block text-[10px] text-gray-500 uppercase tracking-widest">Weight</span>
                    <span class="text-white text-sm">${weight} grams</span>
                </div>
            </div>

            <div class="reveal-item delay-2 mt-8 space-y-4">
                <div class="flex space-x-3">
                    <button class="flex-1 bg-white hover:bg-pink-500 hover:text-white text-black transition-colors duration-300 font-bold py-4 rounded-full uppercase text-xs tracking-widest">
                        Add to Bag
                    </button>
                    <button class="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </button>
                </div>
                <p class="text-center text-[10px] text-gray-600 font-medium">Minimum order quantity: ${product.minimumOrderQuantity ?? "N/A"} units</p>
            </div>
        </div>

        <div class="absolute bottom-4 right-4 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl hidden lg:block max-w-[200px] hover:translate-y-[-5px] transition-transform">
            <div class="flex text-yellow-500 text-[8px] mb-1">${stars}</div>
            <p class="text-white text-[10px] italic">"${title}"</p>
            <p class="text-gray-500 text-[8px] mt-1">Rating: ${ratingValue}</p>
        </div>
    </div>`;
}

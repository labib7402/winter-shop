
    // Initialize Lucide Icon    lucide.createIcons();

    // 50 COMPLETE WINTER PRODUCTS (10 in Men, 10 in Women, 10 in Kids, 10 in Teens, 10 in Accessories)
    const products = [
      // MEN (1-10)
      { id: 1, name: "Men Arctic Puffer Jacket", category: "Men", price: 2850, oldPrice: 3500, img: "https://www.featurestores.de/cdn/shop/files/9071-BR-1405-10007-003-ICB-Arctic-Puffer-Jacket2345678909.jpg?v=1792761668&width=700", colors: ["#1e293b", "#0369a1", "#047857", "#991b1b"] },
      { id: 2, name: "Men Fleece Zip Hoodie", category: "Men", price: 1650, oldPrice: 2100, img: "https://terraboundoutdoor.com/cdn/shop/files/3652548646.jpg?v=1790605133&width=1600", colors: ["#334155", "#475569", "#0f172a", "#7c2d12"] },
      { id: 3, name: "Men Knit Wool Sweater", category: "Men", price: 1950, oldPrice: 2400, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80", colors: ["#0284c7", "#1e293b", "#d97706", "#059669"] },
      { id: 4, name: "Men Thermal Innerwear Set", category: "Men", price: 1250, oldPrice: 1600, img: "https://static-01.daraz.com.bd/p/8da7a57af92e9c7b4b545f5d0ad7ffcd.jpg", colors: ["#0f172a", "#334155", "#e2e8f0", "#1e3a8a"] },
      { id: 5, name: "Men Classic Trench Coat", category: "Men", price: 4200, oldPrice: 5200, img: "https://content.gapinc.com/b/0059/676/061/cn59676061.jpg?width=960", colors: ["#78350f", "#1e293b", "#334155", "#065f46"] },
      { id: 6, name: "mablar", category: "Men", price: 3100, oldPrice: 3800, img: "https://static-01.daraz.com.bd/p/3e168b94530dcdaaa16d947a8d7580c5.jpg", colors: ["#065f46", "#1e293b", "#7c2d12", "#0284c7"] },
      { id: 7, name: "Men Denim Sherpa Jacket", category: "Men", price: 2950, oldPrice: 3600, img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=600&q=80", colors: ["#0284c7", "#1e3a8a", "#334155", "#0f172a"] },
      { id: 8, name: "Men Turtleneck Pullover", category: "Men", price: 1450, oldPrice: 1800, img: "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw494f96bf/KNR/KNR0007NAV/KNR0007NAV_MODEL_FRONT_01.jpg?sw=430&sh=538&sm=fit", colors: ["#1e293b", "#991b1b", "#047857", "#d97706"] },
      { id: 9, name: "Men Quilted Gilet Vest", category: "Men", price: 1800, oldPrice: 2200, img: "https://cdn00.nnnow.com/web-images/large/styles/FNE8R76PX3W/1784196259213/1.jpg", colors: ["#0369a1", "#0f172a", "#334155", "#059669"] },
      { id: 10, name: "hand glaps", category: "Men", price: 3800, oldPrice: 4600, img: "https://www.chuchesmoto.com/cdn/shop/products/41-2joOwOaL.jpg?v=1697910207", colors: ["#1e293b", "#334155", "#1e3a8a", "#78350f"] },

      // WOMEN (11-20)
      { id: 11, name: "Women Cashmere Long Coat", category: "Women", price: 4500, oldPrice: 5500, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80", colors: ["#991b1b", "#1e293b", "#d97706", "#0284c7"] },
      { id: 12, name: "Women Oversized Knit Cardigan", category: "Women", price: 2100, oldPrice: 2600, img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80", colors: ["#f59e0b", "#0284c7", "#1e293b", "#059669"] },
      { id: 13, name: "Women Fleece Parka Jacket", category: "Women", price: 3200, oldPrice: 3900, img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=600&q=80", colors: ["#047857", "#0369a1", "#1e293b", "#991b1b"] },
      { id: 14, name: "Women Soft Wool Sweater", category: "Women", price: 1750, oldPrice: 2200, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80", colors: ["#e11d48", "#0284c7", "#334155", "#059669"] },
      { id: 15, name: "Women Cropped Puffer Jacket", category: "Women", price: 2600, oldPrice: 3200, img: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=600&q=80", colors: ["#0284c7", "#0f172a", "#991b1b", "#d97706"] },
      { id: 16, name: "Women Thermal Velvet Top", category: "Women", price: 1350, oldPrice: 1700, img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80", colors: ["#1e293b", "#991b1b", "#047857", "#0284c7"] },
      { id: 17, name: "Women High-Neck Poncho", category: "Women", price: 2250, oldPrice: 2800, img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80", colors: ["#78350f", "#334155", "#1e293b", "#059669"] },
      { id: 18, name: "Women Fluffy Teddy Coat", category: "Women", price: 3600, oldPrice: 4400, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80", colors: ["#d97706", "#0f172a", "#0284c7", "#991b1b"] },
      { id: 19, name: "Women Woolen Leggings", category: "Women", price: 950, oldPrice: 1200, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80", colors: ["#0f172a", "#334155", "#1e3a8a", "#047857"] },
      { id: 20, name: "Women Stylish Trench Vest", category: "Women", price: 2400, oldPrice: 3000, img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=600&q=80", colors: ["#334155", "#78350f", "#0284c7", "#1e293b"] },

      // KIDS (21-30)
      { id: 21, name: "Kids Cute Bear Ear Hoodie", category: "Kids", price: 1100, oldPrice: 1400, img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80", colors: ["#0284c7", "#f59e0b", "#e11d48", "#059669"] },
      { id: 22, name: "Kids Fleece Puffer Suit", category: "Kids", price: 1850, oldPrice: 2300, img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80", colors: ["#0369a1", "#991b1b", "#d97706", "#1e293b"] },
      { id: 23, name: "Kids Cartoon Knit Sweater", category: "Kids", price: 950, oldPrice: 1200, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80", colors: ["#e11d48", "#0284c7", "#f59e0b", "#047857"] },
      { id: 24, name: "Kids Soft Thermal Set", category: "Kids", price: 850, oldPrice: 1100, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80", colors: ["#334155", "#0284c7", "#e11d48", "#0f172a"] },
      { id: 25, name: "Kids Winter Wool Cap Set", category: "Kids", price: 550, oldPrice: 750, img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80", colors: ["#d97706", "#0284c7", "#991b1b", "#047857"] },
      { id: 26, name: "Kids Padded Windbreaker", category: "Kids", price: 1600, oldPrice: 2000, img: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=600&q=80", colors: ["#047857", "#0369a1", "#1e293b", "#f59e0b"] },
      { id: 27, name: "Kids Denim Fleece Jacket", category: "Kids", price: 1750, oldPrice: 2200, img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=600&q=80", colors: ["#0284c7", "#1e3a8a", "#334155", "#0f172a"] },
      { id: 28, name: "Kids Soft Woolen Mittens", category: "Kids", price: 350, oldPrice: 500, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80", colors: ["#e11d48", "#0284c7", "#f59e0b", "#334155"] },
      { id: 29, name: "Kids Animal Pattern Pullover", category: "Kids", price: 1150, oldPrice: 1500, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80", colors: ["#f59e0b", "#047857", "#0284c7", "#991b1b"] },
      { id: 30, name: "Kids Quilted Warm Vest", category: "Kids", price: 1250, oldPrice: 1600, img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80", colors: ["#0369a1", "#1e293b", "#059669", "#d97706"] },

      // TEENS (31-40)
      { id: 31, name: "Teen Streetwear Heavy Hoodie", category: "Teens", price: 1850, oldPrice: 2300, img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80", colors: ["#0f172a", "#0284c7", "#991b1b", "#047857"] },
      { id: 32, name: "Teen Colorblock Windbreaker", category: "Teens", price: 2100, oldPrice: 2600, img: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=600&q=80", colors: ["#0369a1", "#d97706", "#059669", "#1e293b"] },
      { id: 33, name: "Teen Oversized Denim Jacket", category: "Teens", price: 2400, oldPrice: 3000, img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=600&q=80", colors: ["#0284c7", "#1e3a8a", "#334155", "#0f172a"] },
      { id: 34, name: "Teen Graphic Fleece Sweatshirt", category: "Teens", price: 1450, oldPrice: 1800, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80", colors: ["#334155", "#991b1b", "#0284c7", "#059669"] },
      { id: 35, name: "Teen Crop Puffer Coat", category: "Teens", price: 2300, oldPrice: 2900, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80", colors: ["#e11d48", "#0f172a", "#0284c7", "#d97706"] },
      { id: 36, name: "Teen Thermal Cargo Joggers", category: "Teens", price: 1550, oldPrice: 1950, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80", colors: ["#0f172a", "#334155", "#047857", "#1e3a8a"] },
      { id: 37, name: "Teen High-Zip Varsity Jacket", category: "Teens", price: 2750, oldPrice: 3400, img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=600&q=80", colors: ["#1e293b", "#991b1b", "#0284c7", "#78350f"] },
      { id: 38, name: "Teen Knit Beanie & Scarf Set", category: "Teens", price: 850, oldPrice: 1100, img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80", colors: ["#d97706", "#0f172a", "#0284c7", "#047857"] },
      { id: 39, name: "Teen Soft Fleece Vest", category: "Teens", price: 1350, oldPrice: 1700, img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80", colors: ["#0369a1", "#059669", "#1e293b", "#334155"] },
      { id: 40, name: "Teen Fleece Lined Plaid Shirt", category: "Teens", price: 1650, oldPrice: 2100, img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80", colors: ["#991b1b", "#0284c7", "#0f172a", "#047857"] },

      // ACCESSORIES (41-50)
      { id: 41, name: "Thermal Touchscreen Gloves", category: "Accessories", price: 650, oldPrice: 850, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80", colors: ["#0f172a", "#334155", "#991b1b", "#0284c7"] },
      { id: 42, name: "Soft Cashmere Winter Scarf", category: "Accessories", price: 950, oldPrice: 1250, img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=600&q=80", colors: ["#d97706", "#0284c7", "#0f172a", "#059669"] },
      { id: 43, name: "Fleece Lined Beanie Hat", category: "Accessories", price: 450, oldPrice: 600, img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80", colors: ["#1e293b", "#0369a1", "#991b1b", "#047857"] },
      { id: 44, name: "Heavy Woolen Winter Socks (3-Pack)", category: "Accessories", price: 550, oldPrice: 750, img: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=600&q=80", colors: ["#334155", "#0f172a", "#0284c7", "#d97706"] },
      { id: 45, name: "Plush Velvet Ear Warmers", category: "Accessories", price: 380, oldPrice: 500, img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80", colors: ["#e11d48", "#0f172a", "#0284c7", "#059669"] },
      { id: 46, name: "Insulated Thermal Neck Gaiter", category: "Accessories", price: 480, oldPrice: 650, img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=600&q=80", colors: ["#0f172a", "#0369a1", "#334155", "#991b1b"] },
      { id: 47, name: "Leather Fur-Lined Gloves", category: "Accessories", price: 1250, oldPrice: 1600, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80", colors: ["#1e293b", "#78350f", "#0f172a", "#0284c7"] },
      { id: 48, name: "Chunky Knit infinity Scarf", category: "Accessories", price: 880, oldPrice: 1150, img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=600&q=80", colors: ["#0284c7", "#d97706", "#0f172a", "#047857"] },
      { id: 49, name: "Padded Water Resistant Balaclava", category: "Accessories", price: 750, oldPrice: 980, img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80", colors: ["#0f172a", "#1e293b", "#0369a1", "#059669"] },
      { id: 50, name: "Thermal Fleece Insoles Pair", category: "Accessories", price: 290, oldPrice: 400, img: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=600&q=80", colors: ["#334155", "#0f172a", "#d97706", "#0284c7"] }
    ];

    // APP STATE
    let activeCategory = "All";
    let cart = JSON.parse(localStorage.getItem('winter_shop_bd_cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('winter_shop_bd_wishlist')) || [];
    let activeModalProduct = null;
    let selectedColor = null;
    let selectedSize = null;

    // RENDER PRODUCTS ON GRID
    function renderProducts() {
      const grid = document.getElementById("productGrid");
      grid.innerHTML = "";

      const filtered = products.filter(p => {
        const matchesCat = activeCategory === "All" || p.category === activeCategory;
        const query = document.getElementById("searchInput")?.value.toLowerCase() || "";
        const matchesSearch = p.name.toLowerCase().includes(query);
        return matchesCat && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-16 text-center text-slate-400">No items found matching your search.</div>`;
        return;
      }

      filtered.forEach(p => {
        const discountPct = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
        const isWishlisted = wishlist.some(item => item.id === p.id);

        const card = document.createElement("div");
        card.className = "bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between relative";
        
        card.innerHTML = `
          <div>
            <!-- Image & Badge Container -->
            <div class="relative overflow-hidden aspect-square bg-slate-100 cursor-pointer" onclick="openProductModal(${p.id})">
              <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <span class="absolute top-2.5 left-2.5 bg-red-500 text-white font-black text-[10px] px-2 py-0.5 rounded-full shadow-sm">-${discountPct}%</span>
              
              <button onclick="event.stopPropagation(); toggleWishlist(${p.id})" class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-700 flex items-center justify-center backdrop-blur-md shadow-sm transition">
                <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'fill-amber-500 text-amber-500' : ''}"></i>
              </button>
            </div>

            <!-- Card Content (Clean Fabrilife Style - Colors/Sizes Hidden Initially) -->
            <div class="p-3.5 space-y-1.5">
              <span class="text-[9px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2 py-0.5 rounded">${p.category}</span>
              <h3 onclick="openProductModal(${p.id})" class="text-xs font-bold text-slate-800 line-clamp-1 hover:text-sky-600 cursor-pointer transition">${p.name}</h3>
              <div class="flex items-center gap-1.5 text-xs">
                <span class="font-black text-slate-900">৳${p.price}</span>
                <span class="text-slate-400 line-through text-[10px]">৳${p.oldPrice}</span>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Button -->
          <div class="p-3.5 pt-0">
            <button onclick="openProductModal(${p.id})" class="w-full bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white font-bold py-2 rounded-xl text-xs transition flex items-center justify-center gap-1 border border-sky-200/60">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i>
              <span>Select Options</span>
            </button>
          </div>
        `;
        grid.appendChild(card);
      });

      lucide.createIcons();
    }

    // CATEGORY FILTER
    function filterCategory(cat) {
      activeCategory = cat;
      document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.classList.remove("bg-sky-600", "text-white", "active");
        btn.classList.add("bg-white", "text-slate-700");
      });
      event.target.classList.remove("bg-white", "text-slate-700");
      event.target.classList.add("bg-sky-600", "text-white", "active");
      
      renderProducts();
    }

    // SEARCH FILTER
    function handleSearch() {
      renderProducts();
    }

    // PRODUCT MODAL LOGIC (With Color & Size Selectors)
    function openProductModal(id) {
      activeModalProduct = products.find(p => p.id === id);
      if (!activeModalProduct) return;

      selectedColor = activeModalProduct.colors[0];
      selectedSize = null;

      document.getElementById("modalMainImg").src = activeModalProduct.img;
      document.getElementById("modalTitle").innerText = activeModalProduct.name;
      document.getElementById("modalCategory").innerText = activeModalProduct.category;
      document.getElementById("modalCurrentPrice").innerText = `৳${activeModalProduct.price}`;
      document.getElementById("modalOldPrice").innerText = `৳${activeModalProduct.oldPrice}`;
      
      const pct = Math.round(((activeModalProduct.oldPrice - activeModalProduct.price) / activeModalProduct.oldPrice) * 100);
      document.getElementById("modalDiscountBadge").innerText = `-${pct}%`;

      // Render Colors Swatches
      const colorBox = document.getElementById("modalColorContainer");
      colorBox.innerHTML = "";
      activeModalProduct.colors.forEach((c, index) => {
        const btn = document.createElement("button");
        btn.style.backgroundColor = c;
        btn.className = `w-7 h-7 rounded-full border-2 ${index === 0 ? 'border-sky-600 ring-2 ring-sky-300' : 'border-white'} shadow-sm transition transform hover:scale-110`;
        btn.onclick = () => {
          selectedColor = c;
          Array.from(colorBox.children).forEach(child => child.className = `w-7 h-7 rounded-full border-2 border-white shadow-sm transition transform hover:scale-110`);
          btn.className = `w-7 h-7 rounded-full border-2 border-sky-600 ring-2 ring-sky-300 shadow-sm transition transform hover:scale-110`;
        };
        colorBox.appendChild(btn);
      });

      // Render Sizes Pills
      const sizes = ["S", "M", "L", "XL", "XXL"];
      const sizeBox = document.getElementById("modalSizeContainer");
      sizeBox.innerHTML = "";
      sizes.forEach(s => {
        const btn = document.createElement("button");
        btn.innerText = s;
        btn.className = `px-3.5 py-1.5 text-xs font-bold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition`;
        btn.onclick = () => {
          selectedSize = s;
          document.getElementById("sizeError").classList.add("hidden");
          Array.from(sizeBox.children).forEach(child => child.className = `px-3.5 py-1.5 text-xs font-bold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition`);
          btn.className = `px-3.5 py-1.5 text-xs font-bold rounded-lg border-2 border-sky-600 bg-sky-50 text-sky-800 transition`;
        };
        sizeBox.appendChild(btn);
      });

      const modal = document.getElementById("productModal");
      modal.classList.remove("hidden");
      setTimeout(() => modal.classList.remove("opacity-0"), 10);
    }

    function closeProductModal() {
      const modal = document.getElementById("productModal");
      modal.classList.add("opacity-0");
      setTimeout(() => modal.classList.add("hidden"), 300);
    }

    function confirmAddToCart() {
      if (!selectedSize) {
        document.getElementById("sizeError").classList.remove("hidden");
        return;
      }

      const existingIndex = cart.findIndex(item => item.id === activeModalProduct.id && item.color === selectedColor && item.size === selectedSize);
      if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
      } else {
        cart.push({
          ...activeModalProduct,
          color: selectedColor,
          size: selectedSize,
          qty: 1
        });
      }

      saveCart();
      closeProductModal();
      showToast(`${activeModalProduct.name} (${selectedSize}) added to bag!`);
      openCartDrawer();
    }

    // WISHLIST LOGIC
    function toggleWishlist(id) {
      const prod = products.find(p => p.id === id);
      const index = wishlist.findIndex(item => item.id === id);

      if (index > -1) {
        wishlist.splice(index, 1);
        showToast("Removed from wishlist.");
      } else {
        wishlist.push(prod);
        showToast("Added to wishlist!");
      }

      saveWishlist();
      renderProducts();
    }

    function saveWishlist() {
      localStorage.setItem('winter_shop_bd_wishlist', JSON.stringify(wishlist));
      document.getElementById("wishlistBadge").innerText = wishlist.length;
      renderWishlistDrawer();
    }

    function renderWishlistDrawer() {
      const container = document.getElementById("wishlistItemsContainer");
      container.innerHTML = "";

      if (wishlist.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-slate-400 text-xs">Your wishlist is empty.</div>`;
        return;
      }

      wishlist.forEach(item => {
        const div = document.createElement("div");
        div.className = "flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100";
        div.innerHTML = `
          <img src="${item.img}" class="w-12 h-12 rounded-lg object-cover">
          <div class="flex-1">
            <h4 class="text-xs font-bold text-slate-800">${item.name}</h4>
            <span class="text-xs font-black text-sky-600">৳${item.price}</span>
          </div>
          <button onclick="toggleWishlist(${item.id})" class="text-slate-400 hover:text-red-500">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        `;
        container.appendChild(div);
      });
      lucide.createIcons();
    }

    function openWishlistDrawer() {
      renderWishlistDrawer();
      document.getElementById("wishlistDrawer").classList.remove("hidden");
    }
    function closeWishlistDrawer() {
      document.getElementById("wishlistDrawer").classList.add("hidden");
    }

    // CART DRAWER LOGIC
    function saveCart() {
      localStorage.setItem('winter_shop_bd_cart', JSON.stringify(cart));
      updateCartUI();
    }

    function updateCartUI() {
      const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
      document.getElementById("cartBadge").innerText = totalCount;

      const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
      const discount = subtotal > 0 ? Math.round(subtotal * 0.20) : 0;
      const total = subtotal - discount;

      document.getElementById("cartSubtotal").innerText = `৳${subtotal}`;
      document.getElementById("cartDiscount").innerText = `-৳${discount}`;
      document.getElementById("cartTotal").innerText = `৳${total}`;

      // Free shipping progress calculation (target ৳1999)
      const target = 1999;
      const pct = Math.min(Math.round((subtotal / target) * 100), 100);
      document.getElementById("shippingBar").style.width = `${pct}%`;
      document.getElementById("shippingPercent").innerText = `${pct}%`;
      
      if (subtotal >= target) {
        document.getElementById("shippingText").innerText = "🎉 Congratulations! FREE Shipping Unlocked!";
      } else {
        document.getElementById("shippingText").innerText = `Spend ৳${target - subtotal} more for FREE Shipping`;
      }

      renderCartItems();
    }

    function renderCartItems() {
      const container = document.getElementById("cartItemsContainer");
      container.innerHTML = "";

      if (cart.length === 0) {
        container.innerHTML = `<div class="text-center py-16 text-slate-400 text-xs">Your shopping bag is empty.</div>`;
        return;
      }

      cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "flex items-center gap-3 p-3 bg-sky-50/50 rounded-2xl border border-sky-100";
        div.innerHTML = `
          <img src="${item.img}" class="w-14 h-14 rounded-xl object-cover">
          <div class="flex-1">
            <h4 class="text-xs font-bold text-slate-800 line-clamp-1">${item.name}</h4>
            <div class="flex items-center gap-2 text-[10px] text-slate-500 my-0.5">
              <span>Size: <strong class="text-slate-800">${item.size}</strong></span>
              <span>Color: <span class="inline-block w-2.5 h-2.5 rounded-full border" style="background-color:${item.color}"></span></span>
            </div>
            <span class="text-xs font-black text-slate-900">৳${item.price}</span>
          </div>
          <div class="flex items-center gap-2 bg-white rounded-lg px-2 py-1 border border-slate-200">
            <button onclick="changeQty(${index}, -1)" class="text-xs font-bold text-slate-600">-</button>
            <span class="text-xs font-bold w-4 text-center">${item.qty}</span>
            <button onclick="changeQty(${index}, 1)" class="text-xs font-bold text-slate-600">+</button>
          </div>
        `;
        container.appendChild(div);
      });
    }

    function changeQty(index, delta) {
      cart[index].qty += delta;
      if (cart[index].qty <= 0) {
        cart.splice(index, 1);
      }
      saveCart();
    }

    function openCartDrawer() {
      updateCartUI();
      document.getElementById("cartDrawer").classList.remove("hidden");
    }
    function closeCartDrawer() {
      document.getElementById("cartDrawer").classList.add("hidden");
    }

    // TOAST LOGIC
    function showToast(msg) {
      const toast = document.getElementById("toast");
      document.getElementById("toastMsg").innerText = msg;
      toast.classList.remove("translate-y-20", "opacity-0");
      setTimeout(() => {
        toast.classList.add("translate-y-20", "opacity-0");
      }, 3000);
    }

    // OFFER COUNTDOWN TIMER LOGIC
    function startOfferTimer() {
      let duration = 8 * 3600 + 42 * 60 + 19; // 8 hours 42 mins 19 secs
      setInterval(() => {
        if (duration <= 0) duration = 24 * 3600;
        duration--;
        const hrs = Math.floor(duration / 3600);
        const mins = Math.floor((duration % 3600) / 60);
        const secs = duration % 60;
        const ms = Math.floor(Math.random() * 90) + 10;

        document.getElementById("timerHours").innerText = hrs.toString().padStart(2, '0');
        document.getElementById("timerMins").innerText = mins.toString().padStart(2, '0');
        document.getElementById("timerSecs").innerText = secs.toString().padStart(2, '0');
        document.getElementById("timerMs").innerText = ms.toString();
      }, 1000);
    }

    // LIVE SNOW CANVAS ANIMATION
    let snowActive = true;
    const canvas = document.getElementById("snowCanvas");
    const ctx = canvas.getContext("2d");
    let flakes = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function initSnow() {
      flakes = [];
      for (let i = 0; i < 60; i++) {
        flakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 3 + 1,
          d: Math.random() * 1 + 0.5
        });
      }
    }

    function drawSnow() {
      if (!snowActive) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(drawSnow);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
      ctx.beginPath();
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      updateSnow();
      requestAnimationFrame(drawSnow);
    }

    function updateSnow() {
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        f.y += Math.pow(f.d, 2) + 1;
        f.x += Math.sin(f.y / 30);
        if (f.y > canvas.height) {
          flakes[i] = { x: Math.random() * canvas.width, y: 0, r: f.r, d: f.d };
        }
      }
    }

    function toggleSnow() {
      snowActive = !snowActive;
      document.getElementById("snowStatus").innerText = snowActive ? "ON" : "OFF";
      document.getElementById("snowStatus").className = snowActive ? "font-bold text-emerald-300" : "font-bold text-red-300";
    }

    // INITIALIZATION ON PAGE LOAD
    window.onload = () => {
      renderProducts();
      saveWishlist();
      saveCart();
      startOfferTimer();
      initSnow();
      drawSnow();
    };
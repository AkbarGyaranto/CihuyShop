// Mendefinisikan variabel keranjang belanja
var cart = [];

// Fungsi untuk menambahkan barang ke keranjang
function addToCart(item) {
  // Mengecek apakah barang sudah ada di keranjang
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === item.name) {
      found = true;
      cart[i].quantity++;
      break;
    }
  }
  
  // Jika barang belum ada di keranjang, tambahkan barang baru
  if (!found) {
    item.quantity = 1;
    cart.push(item);
  }
  

  
  // Memperbarui tampilan keranjang belanja
  updateCart();
}

// Fungsi untuk memperbarui tampilan keranjang belanja
function updateCart() {
  // Mendapatkan elemen HTML yang menampilkan jumlah item di keranjang
  var cartItemCount = document.getElementById('cart-item-count');
  
  // Menampilkan jumlah item di keranjang
  cartItemCount.innerHTML = cart.length;
}

// Inisialisasi keranjang belanja
var cart = [];

// Fungsi untuk menambahkan item ke keranjang belanja
function addToCart(item) {
  // Cek apakah item sudah ada di keranjang
  var existingItem = cart.find(function(i) {
    return i.name === item.name;
  });

  if (existingItem) {
    // Jika item sudah ada, tambahkan jumlahnya
    existingItem.quantity += item.quantity;
  } else {
    // Jika item belum ada, tambahkan ke keranjang
    cart.push(item);
  }

  // Perbarui jumlah item pada ikon keranjang
  updateCartItemCount();


  // Tampilkan notifikasi bahwa item telah ditambahkan ke keranjang
  var itemName = item.name; // Simpan nama item
  var message = itemName + " berhasil ditambahkan ke keranjang!"; // Buat teks notifikasi
  alert("Item berhasil ditambahkan ke keranjang!");

  
}
// Fungsi untuk memperbarui jumlah item pada ikon keranjang
function updateCartItemCount() {
  var itemCount = 0;
  cart.forEach(function(item) {
    itemCount += item.quantity;
  });
  document.getElementById("cart-item-count").innerHTML = itemCount;
}

// Fungsi untuk menghitung total harga
function calculateTotalPrice() {
  var totalPrice = 0;
  cart.forEach(function(item) {
    totalPrice += item.price * item.quantity;
  });
  return totalPrice;
}
// Menampilkan item di keranjang belanja
var cartItems = document.getElementById("cart-items");

cart.forEach(function(item) {
  var li = document.createElement("li");
  li.textContent = item.name + " x " + item.quantity;
  cartItems.appendChild(li);
});

// Menghitung total harga
var cartTotal = document.getElementById("cart-total");
cartTotal.textContent = calculateTotal();

// ambil elemen ul dengan id cart-items
var cartItemsList = document.getElementById("cart-items");

// tambahkan item baru ke dalam elemen ul
var newItem = document.createElement("li");
newItem.innerText = name + " - $" + price;
cartItemsList.appendChild(newItem);



// Fungsi konversi tinggi badan
function konversiTinggiBadan(cm) {
  let m = 100;
  let hasilKonversi = cm / m;
  return hasilKonversi;
}

// Event listener untuk tombol konversi
document.getElementById("btnKonversi").addEventListener("click", function () {
  let masukkan_tinggi_cm = parseInt(
    document.getElementById("tinggiBadan").value
  );

  // Validasi input
  if (isNaN(masukkan_tinggi_cm) || masukkan_tinggi_cm <= 0) {
    alert("Masukkan tinggi badan yang valid (angka positif)!");
    return;
  }

  if (masukkan_tinggi_cm > 300) {
    alert("Tinggi badan tidak mungkin lebih dari 300 cm!");
    return;
  }

  // Lakukan konversi
  let hasil = konversiTinggiBadan(masukkan_tinggi_cm);

  // Tampilkan hasil di modal
  document.getElementById("hasilKonversi").textContent = hasil.toFixed(2);
  document.getElementById("tinggiCm").textContent = masukkan_tinggi_cm + " cm";
  document.getElementById("tinggiM").textContent = hasil.toFixed(2) + " m";

  // Tampilkan modal
  let hasilModal = new bootstrap.Modal(document.getElementById("hasilModal"));
  hasilModal.show();
});

// Event listener untuk tombol konversi lagi
document
  .getElementById("btnKonversiLagi")
  .addEventListener("click", function () {
    // Tutup modal
    let hasilModal = bootstrap.Modal.getInstance(
      document.getElementById("hasilModal")
    );
    hasilModal.hide();

    // Kosongkan input
    document.getElementById("tinggiBadan").value = "";

    // Fokus ke input
    document.getElementById("tinggiBadan").focus();
  });

// Event listener untuk tombol enter di input
document
  .getElementById("tinggiBadan")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("btnKonversi").click();
    }
  });

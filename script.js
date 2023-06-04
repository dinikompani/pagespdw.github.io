function tampilkanWaktu() {
    // Membuat objek Date untuk mendapatkan waktu saat ini
    var waktu = new Date();

    // Mengambil jam, menit, dan detik dari objek Date
    var jam = waktu.getHours();
    var menit = waktu.getMinutes();
    var detik = waktu.getSeconds();

    // Menampilkan waktu dalam format hh:mm:ss
    var teksWaktu = jam + ":" + menit + ":" + detik;

    // Menampilkan teks waktu di dalam tombol
    document.querySelector("button").innerHTML = teksWaktu;
}
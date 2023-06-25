<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "bmi";

// Buat koneksi
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Periksa koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Ambil data dari form
$nama = $_POST['nama'];
$berat = $_POST['berat'];
$tinggi = $_POST['tinggi'];
$hasil = $_POST['hasil'];
$kategori = $_POST['kategori'];

// Masukkan data ke dalam database
$sql = "INSERT INTO bmi_data (nama, berat, tinggi, hasil, kategori) VALUES ('$nama', '$berat', '$tinggi', '$hasil', '$kategori')";
if (mysqli_query($conn, $sql)) {
    echo "Data BMI berhasil disimpan ke database";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Tutup koneksi
mysqli_close($conn);
?>

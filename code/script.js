document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var berat = document.getElementById("berat").value;
    var tinggi = document.getElementById("tinggi").value;

    var beratKg = berat;
    var tinggiCm = tinggi;

    var bmi = hitungBMI(beratKg, tinggiCm);
    var kategori = "";

    if (bmi < 18.5) {
        kategori = "Kurus";
    } else if (bmi < 25) {
        kategori = "Normal";
    } else if (bmi < 30) {
        kategori = "Kelebihan Berat Badan";
    } else {
        kategori = "Obesitas";
    }

    var result = document.getElementById("result");
    result.innerHTML = "<h3>Hasil BMI</h3><p>Nama: " + nama + "</p><p>Berat: " + beratKg + " kg</p><p>Tinggi: " + tinggiCm + " cm</p><p>BMI: " + bmi.toFixed(2) + "</p><p>Kategori: " + kategori + "</p>";

    // Mengirim data BMI ke server menggunakan AJAX
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Data BMI berhasil disimpan ke database");
        }
    };
    xhr.open("POST", "save_bmi.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("nama=" + encodeURIComponent(nama) + "&berat=" + encodeURIComponent(beratKg) + "&tinggi=" + encodeURIComponent(tinggiCm) + "&hasil=" + encodeURIComponent(bmi.toFixed(2)) + "&kategori=" + encodeURIComponent(kategori));
});

function hitungBMI(berat, tinggi) {
    var tinggiM = tinggi / 100;
    var bmi = berat / (tinggiM * tinggiM);
    return bmi;
}

document.getElementById("infoBtn").addEventListener("click", function() {
    var infoMessage = "Body Mass Index (BMI) adalah angka yang digunakan untuk mengevaluasi apakah seseorang memiliki berat badan yang sehat berdasarkan tinggi badan dan berat badan. BMI dihitung dengan membagi berat badan (dalam kilogram) dengan kuadrat tinggi badan (dalam meter persegi).\n\nRumus untuk menghitung BMI adalah sebagai berikut:\nBMI = berat badan (kg) / (tinggi badan (m) * tinggi badan (m))\n\nSetelah BMI dihitung, hasilnya digunakan untuk mengkategorikan status berat badan seseorang. Berikut adalah kategori BMI yang umum digunakan:\n\n- Kurang dari 18.5: Berat badan kurang (underweight)\n- 18.5 - 24.9: Berat badan normal (normal weight)\n- 25.0 - 29.9: Kelebihan berat badan (overweight)\n- 30.0 - 34.9: Obesitas tingkat 1 (obese class I)\n- 35.0 - 39.9: Obesitas tingkat 2 (obese class II)\n- Lebih dari atau sama dengan 40.0: Obesitas tingkat 3 (obese class III)\n\nNamun, penting untuk diingat bahwa BMI hanyalah sebuah indikator kasar dan tidak memperhitungkan komposisi tubuh yang lebih rinci seperti lemak tubuh dan otot. BMI juga tidak mempertimbangkan perbedaan individu seperti tingkat massa otot, tulang, dan distribusi lemak dalam tubuh.\n\nDalam praktiknya, BMI digunakan sebagai alat awal untuk menilai status berat badan seseorang. Namun, untuk evaluasi yang lebih komprehensif dan akurat, sebaiknya konsultasikan dengan profesional medis dan perhatikan faktor-faktor lain seperti komposisi tubuh, riwayat kesehatan, dan gaya hidup secara keseluruhan.";

    var infoParagraph = document.createElement("p");
    infoParagraph.textContent = infoMessage;

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    resultDiv.appendChild(infoParagraph);
});

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

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("bmiForm").reset();
    document.getElementById("result").innerHTML = "";
});

document.getElementById("showDataBtn").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var output = "<h3>Data BMI</h3><table><tr><th>Nama</th><th>Berat (kg)</th><th>Tinggi (cm)</th><th>BMI</th><th>Kategori</th></tr>";
            for (var i = 0; i < data.length; i++) {
                output += "<tr><td>" + data[i].nama + "</td><td>" + data[i].berat + "</td><td>" + data[i].tinggi + "</td><td>" + data[i].hasil + "</td><td>" + data[i].kategori + "</td></tr>";
            }
            output += "</table>";
            document.getElementById("result").innerHTML = output;
        }
    };
    xhr.open("GET", "get_bmi.php", true);
    xhr.send();
});

function hitungBMI(berat, tinggi) {
    var tinggiM = tinggi / 100;
    var bmi = berat / (tinggiM * tinggiM);
    return bmi;
}

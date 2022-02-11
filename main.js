// Jadwal
const jadwalJSON = [
  {
    hari: "Ahad",
    jadwal: "libur",
  },
  {
    hari: "Senin",
    jadwal: ["Matematika", "BK", "Bahasa Bali"],
  },
  {
    hari: "Selasa",
    jadwal: ["Bahasa Inggris", "PPKn", "PAI"],
  },
  {
    hari: "Rabu",
    jadwal: ["IPS", "Seni Budaya", "Prakarya"],
  },
  {
    hari: "Kamis",
    jadwal: ["Bahasa Arab", "Kemuhammadiyahan", "IPA"],
  },
  {
    hari: "Jum'at",
    jadwal: ["Penjaskes", "Bahasa Indonesia", "Bacaan Shalat & Shalat Jum'at"],
  },
  {
    hari: "Sabtu",
    jadwal: "libur",
  },
];

// Nama dan index hari
const namaHari = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
const indexHari = new Date().getDay();

// Inisialisasi #tempatRingkasanJadwal
var tempatRingkasanJadwal = document.getElementById("tempatRingkasanJadwal");

// Hari Ini
var hariIniRingkasanJadwal = document.createElement("p");
hariIniRingkasanJadwal.style.fontWeight = "bold";
if (jadwalJSON[indexHari].jadwal == "libur") {
  hariIniRingkasanJadwal.textContent = "Hari ini libur, tidak ada pelajaran!";
} else {
  hariIniRingkasanJadwal.textContent = "Jadwal hari ini: " + jadwalJSON[indexHari].jadwal.join(", ");
}

// Besok
besokRingkasanJadwal = document.createElement("p");
if (indexHari + 1 == 6) {
  besokLiburRingkasanJadwal = document.createElement("p");
  besokLiburRingkasanJadwal.style.fontStyle = "italic";
  besokLiburRingkasanJadwal.textContent = "Besok dan Ahad libur, tidak ada pelajaran!";

  besokRingkasanJadwal.textContent = "Jadwal minggu depan: " + jadwalJSON[1].jadwal.join(", ");
} else {
  besokRingkasanJadwal.textContent = "Jadwal besok: " + jadwalJSON[indexHari].jadwal.join(", ");
}

// Append hari ini + besok
tempatRingkasanJadwal.appendChild(hariIniRingkasanJadwal);

if (indexHari + 1 == 6) {
  tempatRingkasanJadwal.appendChild(besokLiburRingkasanJadwal);
}

tempatRingkasanJadwal.appendChild(besokRingkasanJadwal);

// -------------------------------------------------------------- //

// Inisialisasi #badanTabel
var badanTabel = document.getElementById("badanTabel");

jadwalJSON.forEach(function fungsiJSON(item, index, arr) {
  if (index != 0 && index != 6) {
    var rowJadwal = document.createElement("tr");

    // Hari
    var dataHariJadwal = document.createElement("td");
    dataHariJadwal.innerHTML = arr[index].hari;
    rowJadwal.appendChild(dataHariJadwal);
    badanTabel.appendChild(rowJadwal);

    //   Jadwal
    for (var i = 0; i < 3; i++) {
      var semuaJadwal = document.createElement("td");
      semuaJadwal.innerHTML = arr[index].jadwal[i];
      rowJadwal.appendChild(semuaJadwal);
    }
    badanTabel.appendChild(rowJadwal);
  }
});

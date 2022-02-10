// Jadwal
const jadwalJSON = [
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
];

// Nama dan index hari
const namaHari = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
const indexHari = new Date().getDay();

// Inisialisasi #tempatRingkasanJadwal
var tempatRingkasanJadwal = document.getElementById("tempatRingkasanJadwal");

// Hari Ini
var hariIniRingkasanJadwal = document.createElement("p");
hariIniRingkasanJadwal.style.fontWeight = "bold";
hariIniRingkasanJadwal.textContent = "Jadwal hari ini: " + jadwalJSON[indexHari - 1].jadwal.join(", ");

// Besok
besokRingkasanJadwal = document.createElement("p");
besokRingkasanJadwal.textContent = "Jadwal besok: " + jadwalJSON[indexHari].jadwal.join(", ");

// Append hari ini + besok
tempatRingkasanJadwal.appendChild(hariIniRingkasanJadwal);
tempatRingkasanJadwal.appendChild(besokRingkasanJadwal);

// -------------------------------------------------------------- //

// Inisialisasi #badanTabel
var badanTabel = document.getElementById("badanTabel");

jadwalJSON.forEach(function fungsiJSON(item, index, arr) {
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
});

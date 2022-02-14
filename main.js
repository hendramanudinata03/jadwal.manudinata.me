// Jadwal
const jadwalJSON = [
  {
    kelas: "9A",
    listJadwal: [
      {
        hari: "Ahad",
        jadwal: "libur",
      },
      {
        hari: "Senin",
        jadwal: ["Matematika", "BK", "Bahasa Bali", null],
      },
      {
        hari: "Selasa",
        jadwal: ["Bahasa Inggris", "PPKn", "PAI", null],
      },
      {
        hari: "Rabu",
        jadwal: ["IPS", "Seni Budaya", "Prakarya", null],
      },
      {
        hari: "Kamis",
        jadwal: ["Bahasa Arab", "Kemuhammadiyahan", "IPA", null],
      },
      {
        hari: "Jum'at",
        jadwal: ["Penjaskes", "Bahasa Indonesia", "Bacaan Shalat & Shalat Jum'at", null],
      },
      {
        hari: "Sabtu",
        jadwal: "libur",
      },
    ],
  },
  {
    kelas: "9B",
    listJadwal: [
      {
        hari: "Ahad",
        jadwal: "libur",
      },
      {
        hari: "Senin",
        jadwal: ["Penjas", "BK", "Matematika", null],
      },
      {
        hari: "Selasa",
        jadwal: ["Bahasa Indonesia", "PAI", "PPKn", null],
      },
      {
        hari: "Rabu",
        jadwal: ["Bahasa Bali", "Bahasa Arab", "IPA", null],
      },
      {
        hari: "Kamis",
        jadwal: ["Seni Budaya", "Prakarya", "Bahasa Inggris", null],
      },
      {
        hari: "Jum'at",
        jadwal: ["IPS", "Kemuhammadiyahan", "Bacaan Shalat & Shalat Jum'at", null],
      },
      {
        hari: "Sabtu",
        jadwal: "libur",
      },
    ],
  },
  {
    kelas: "9C",
    listJadwal: [
      {
        hari: "Ahad",
        jadwal: "libur",
      },
      {
        hari: "Senin",
        jadwal: ["Bahasa Indonesia", "Bahasa Arab", "Kemuhammadiyahan", null],
      },
      {
        hari: "Selasa",
        jadwal: ["Matematika", "IPS", null, null],
      },
      {
        hari: "Rabu",
        jadwal: ["IPA", "Bahasa Inggris", null, null],
      },
      {
        hari: "Kamis",
        jadwal: ["BK", "Penjaskes", "PPKn", "PAI"],
      },
      {
        hari: "Jum'at",
        jadwal: ["Senbud", "Prakarya", "Bahasa Bali", "Bacaan Shalat & Shalat Jum'at"],
      },
      {
        hari: "Sabtu",
        jadwal: "libur",
      },
    ],
  },
  {
    kelas: "9D",
    listJadwal: [
      {
        hari: "Ahad",
        jadwal: "libur",
      },
      {
        hari: "Senin",
        jadwal: ["BK", "Penjaskes", "IPA", null],
      },
      {
        hari: "Selasa",
        jadwal: ["Senbud", "Prakarya", "Matematika", null],
      },
      {
        hari: "Rabu",
        jadwal: ["Bahasa Inggris", "PPKn", "PAI", null],
      },
      {
        hari: "Kamis",
        jadwal: ["Bahasa Indonesia", "IPS", null, null],
      },
      {
        hari: "Jum'at",
        jadwal: ["Bahasa Bali", "Kemuhammadiyahan", "Bahasa Arab", "Shalat Dhuha & Bacaan Shalat"],
      },
      {
        hari: "Sabtu",
        jadwal: "libur",
      },
    ],
  },
  {
    kelas: "9E",
    listJadwal: [
      {
        hari: "Ahad",
        jadwal: "libur",
      },
      {
        hari: "Senin",
        jadwal: ["IPS", "Bahasa Inggris", null, null],
      },
      {
        hari: "Selasa",
        jadwal: ["Penjaskes", "Bahasa Arab", "Seni Budaya", "Prakarya"],
      },
      {
        hari: "Rabu",
        jadwal: ["Bahasa Indonesia", "Bahasa Bali", "BK", null],
      },
      {
        hari: "Kamis",
        jadwal: ["Matematika", "PAI", "Kemuhammadiyahan", null],
      },
      {
        hari: "Jum'at",
        jadwal: ["PPKN", "IPA", "Shalat Dhuha & Bacaan Shalat", null],
      },
      {
        hari: "Sabtu",
        jadwal: "libur",
      },
    ],
  },
  {
    kelas: "9F",
    listJadwal: [
      {
        hari: "Ahad",
        jadwal: "libur",
      },
      {
        hari: "Senin",
        jadwal: ["Bahasa Inggris", "Bahasa Indonesia", null, null],
      },
      {
        hari: "Selasa",
        jadwal: ["IPS", "BK", "Bahasa Arab", null],
      },
      {
        hari: "Rabu",
        jadwal: ["PPKN", "Seni Budaya", "Prakarya", "Kemuhammadiyahan"],
      },
      {
        hari: "Kamis",
        jadwal: ["Penjaskes", "Bahasa Bali", "IPA", null],
      },
      {
        hari: "Jum'at",
        jadwal: ["PAI", "Matematika", "Shalat Dhuha & Bacaan Shalat", null],
      },
      {
        hari: "Sabtu",
        jadwal: "libur",
      },
    ],
  },
];

// Nama dan index hari
const namaHari = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
const indexHari = new Date().getDay();

function main() {
  // Inisialisasi #tempatRingkasanJadwal
  var tempatRingkasanJadwal = document.getElementById("tempatRingkasanJadwal");

  // Inisialisasi #ddPilihanKelas
  var ddPilihanKelas = document.getElementById("ddPilihanKelas");

  // Hari Ini
  var hariIniRingkasanJadwal = document.createElement("p");
  hariIniRingkasanJadwal.style.fontWeight = "bold";
  if (jadwalJSON[ddPilihanKelas.value].listJadwal[indexHari].jadwal == "libur") {
    hariIniRingkasanJadwal.textContent = "Hari ini libur, tidak ada pelajaran!";
  } else {
    hariIniRingkasanJadwal.textContent =
      "Jadwal hari ini: " + jadwalJSON[ddPilihanKelas.value].listJadwal[indexHari].jadwal.filter(Boolean).join(", ");
  }

  // Besok
  besokRingkasanJadwal = document.createElement("p");
  if (indexHari + 1 == 6 || indexHari + 1 == 7) {
    besokLiburRingkasanJadwal = document.createElement("p");
    besokLiburRingkasanJadwal.style.fontStyle = "italic";
    besokLiburRingkasanJadwal.textContent = "Besok libur, tidak ada pelajaran!";

    besokRingkasanJadwal.textContent = "Jadwal minggu depan: " + jadwalJSON[ddPilihanKelas.value].listJadwal[1].jadwal.filter(Boolean).join(", ");
  } else {
    besokRingkasanJadwal.textContent =
      "Jadwal besok: " + jadwalJSON[ddPilihanKelas.value].listJadwal[indexHari + 1].jadwal.filter(Boolean).join(", ");
  }

  // Append hari ini + besok
  tempatRingkasanJadwal.appendChild(hariIniRingkasanJadwal);

  if (indexHari + 1 == 6 || indexHari + 1 == 7) {
    tempatRingkasanJadwal.appendChild(besokLiburRingkasanJadwal);
  } else {
    tempatRingkasanJadwal.appendChild(besokRingkasanJadwal);
  }

  // -------------------------------------------------------------- //

  // Inisialisasi #badanTabel
  var badanTabel = document.getElementById("badanTabel");

  jadwalJSON[ddPilihanKelas.value].listJadwal.forEach(function fungsiJSON(item, index, arr) {
    if (index != 0 && index != 6) {
      var rowJadwal = document.createElement("tr");

      // Hari
      var dataHariJadwal = document.createElement("td");
      dataHariJadwal.innerHTML = arr[index].hari;
      rowJadwal.appendChild(dataHariJadwal);
      badanTabel.appendChild(rowJadwal);

      // Jadwal
      for (var i = 0; i < 4; i++) {
        var semuaJadwal = document.createElement("td");
        semuaJadwal.innerHTML = arr[index].jadwal[i];
        rowJadwal.appendChild(semuaJadwal);
      }
      badanTabel.appendChild(rowJadwal);
    }
  });
}

// Bersihkan semua child element sebelum mengganti jadwal
function bersihbersih() {
  // Bersihkan #tempatRingkasanJadwal
  tempatRingkasanJadwal.innerHTML = "";

  // Bersihkan #badanTabel
  badanTabel.innerHTML = "";
}

// Saat user mengganti kelas
function saatBerubah() {
  bersihbersih();
  main();
}

// Mulai saat baru load
main();

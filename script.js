// DATA ARRAY (CPMK 5)
let data = [
    { nama: "Wedding Organizer" },
    { nama: "Seminar" },
    { nama: "Concert" },
    { nama: "Birthday Party" }
];

// TAMPILKAN DATA
function tampilData() {
    const container = document.getElementById("cardContainer");
    container.innerHTML = "";

    data.forEach((item, index) => {
        container.innerHTML += `
            <div class="card">
                <h3>${item.nama}</h3>
                <button onclick="hapusItem(${index})">Hapus</button>
            </div>
        `;
    });
}

// TAMBAH ITEM
function tambahItem() {
    const input = document.getElementById("newItem");

    if (input.value.trim() === "") {
        alert("Isi dulu nama layanan!");
        return;
    }

    // tambah ke array
    data.push({ nama: input.value });

    // reset input
    input.value = "";

    // render ulang
    tampilData();
}
tampilData();

// HAPUS ITEM
function hapusItem(index) {
    data.splice(index, 1);
    tampilData();
}

// VALIDASI FORM (CPMK 4)
document.getElementById("formDaftar").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let hp = document.getElementById("hp").value;
    let event = document.getElementById("event").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    // RESET ERROR
    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    if (nama === "") {
        document.getElementById("errNama").innerText = "Nama wajib diisi";
        valid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("errEmail").innerText = "Email tidak valid";
        valid = false;
    }

    if (hp <= 0) {
        document.getElementById("errHp").innerText = "Nomor harus positif";
        valid = false;
    }

    if (event === "") {
        document.getElementById("errEvent").innerText = "Pilih event";
        valid = false;
    }

    if (!gender) {
        document.getElementById("errGender").innerText = "Pilih gender";
        valid = false;
    }

    if (valid) {
        alert("Pendaftaran berhasil!");
    }
});

// LOAD AWAL
tampilData();
// ANIMASI SCROLL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("fade-in");
    observer.observe(sec);
});
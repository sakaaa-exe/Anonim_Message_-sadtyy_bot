const form = document.getElementById("messageForm");
const messageInput = document.getElementById("message");

const statusText = document.getElementById("status");

// Mengatur tinggi viewport yang dinamis menggunakan Javascript
const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Menangani fokus pada textarea agar tidak menggeser halaman
messageInput.addEventListener("focus", () => {
    document.body.style.overflow = "hidden"; // Menonaktifkan scroll saat mengetik
});

messageInput.addEventListener("blur", () => {
    document.body.style.overflow = "auto"; // Mengaktifkan kembali scroll setelah selesai
});

// Menangani resize dan memperbarui tinggi viewport
window.addEventListener('resize', setViewportHeight);
setViewportHeight(); // Panggil sekali di awal

// Array pesan acak
const randomMessages = [
    "Lagi pengen nonton film atau ada series baru yang lagi hits?",
    "Eh, pernah nggak sih lo mikir kalau gue diem-diem suka sama lo?",
    "Gue nggak tau sih ini bakal cringe atau nggak, tapi… gue suka lo!",
    "Sebenernya udah lama gue pengen ngomong, tapi baru sekarang gue berani. Gue suka sama lo.",
    "Lo sadar nggak sih, setiap lo senyum tuh dunia gue auto cerah?",
    "Gue nggak tau ini bakal aneh apa enggak, tapi jujur aja, gue ngerasa nyaman banget sama lo.",
    "Kalo dibilang jatuh cinta, ya mungkin ini yang gue rasain ke lo.",
    "Jujur aja, tiap lo deket gue, gue ngerasa jantung gue ngebeat lebih cepat.",
    "Gue sering mikir, gimana ya rasanya jadi orang yang lo suka? Eh tapi, bisa nggak gue aja?",
    "Lo sadar nggak sih, gue tuh selalu nyari alasan buat ngobrol sama lo?",
    "Kalo ini sinetron, gue tuh pemeran yang diem-diem naksir pemeran utamanya, dan itu lo.",
    "Gue nggak tahu ini bakal ngeganggu lo atau nggak, tapi gue nggak bisa nutupin ini lagi: gue suka lo.",
    "Pernah nggak lo ngerasa nyaman banget sama seseorang? Karena gue ngerasain itu ke lo.",
    "Lo tuh kayak playlist favorit gue. Nggak pernah bosen buat gue ulang-ulang.",
    "Sebenernya ini rahasia sih, tapi gue nggak tahan lagi nyimpen. Gue suka sama lo.",
    "Lo percaya nggak, ada orang yang tiap malam mikirin lo? Itu gue.",
    "Gue nggak tau kenapa, tapi lo tuh selalu berhasil bikin hari gue lebih berwarna.",
    "Lo tau nggak? Gue udah lama suka lo, tapi baru sekarang punya nyali buat ngomong.",
    "Gue nggak tau ini bakal diterima apa nggak, tapi gue rasa gue harus jujur. Gue suka lo.",
    "Lo sadar nggak sih? Lo tuh kayak rumah buat gue, nyaman banget buat disinggahi.",
    "Gue pengen jadi alasan lo senyum tiap hari. Boleh nggak?",
    "Lo tuh kayak alarm pagi gue, selalu bikin gue semangat bangun dan jalanin hari.",
    "Sumpah, gue nggak pernah nemu orang yang bikin gue senyaman ini selain lo.",
    "Gue selalu mikir, lo tuh sadar nggak sih kalau gue suka banget sama lo?",
    "Tiap kali lo muncul, gue tuh lupa gimana caranya cool. Lo bikin gue lemes!",
    "Kalo gue boleh jujur, gue suka banget cara lo bikin semuanya jadi lebih indah.",
    "Lo tau nggak? Tiap kali lo ketawa, hati gue tuh auto melt.",
    "Gue nggak tau gimana caranya ngomong ini, tapi lo harus tau… gue suka sama lo.",
    "Gue nggak tau sih ini perasaan apa, tapi tiap deket lo, gue nggak mau pergi.",
    "Boleh nggak gue jujur? Gue pengen banget jadi alasan lo bahagia.",
    "Weekend nanti mau ngapain, nih? Ada rencana seru atau cuma rebahan?",
    "Kalo lagi gabut, biasanya ngapain? Pasti ada cara seru buat ngilangin bosen!",
    "Pernah nggak sih tiba-tiba dapet ide gila dan langsung dieksekusi? Cerita dong!",
    "Mau ngobrolin hal random yang nggak ada ujungnya atau lebih serius? Pilih yang mana?",
    "Gimana rasanya jadi orang yang punya banyak pengalaman hidup? Ada tips buat yang baru mulai?",
    "Banyak orang bilang, hidup itu soal timing. Tapi, kadang kita harus usaha juga, kan?",
    "Kalo lagi di rumah, lebih milih rebahan sambil main game atau lebih produktif?",
    "Biasanya kalo ngerasa stres, cara apa yang dipake buat relaksasi?",
    "Ada tempat khusus yang bikin merasa tenang dan nyaman? Share dong!",
    "Coba deh ceritain, ada momen seru yang baru aja terjadi? Pasti asik banget!",
    "Rencana besar apa yang lagi dikejar? Pasti seru kalau diceritain!",
    "Kadang, hidup terasa cepat banget. Punya cara biar bisa nikmatin tiap momennya nggak?",
    "Kalo lagi ngerasa stuck, gimana cara keluar dari situasi itu?",
    "Percaya nggak kalau kita harus keluar dari zona nyaman buat berkembang?",
    "Gimana sih cara ningkatin mood kalo lagi down? Ada tips praktis?",
    "Kalo pengen lebih produktif, biasanya apa yang harus dilakuin duluan?",
    "Suka banget nggak sih sama hal-hal baru yang bisa nambah pengalaman hidup?",
    "Kadang, hidup tuh kayak rollercoaster, penuh tantangan. Gimana cara lo ngadepinnya?",
    "Sering banget ngerasa hidup itu penuh kejutan, kan? Kadang bikin takjub banget!",
    "Bingung nggak sih kadang mau ngelakuin apa? Kayak semuanya harus serba tepat waktu.",
    "Waktu lagi butuh semangat, biasanya apa yang lo lakuin biar bisa lebih kuat?",
    "Ada nggak sih hal kecil yang bisa bikin hari-hari lo lebih cerah?",
    "Tiap orang punya cara sendiri buat atasi tekanan. Punya cara unik nggak?",
    "Kadang-kadang butuh waktu buat diri sendiri. Kapan terakhir lo ambil waktu buat itu?",
    "Pernah nggak sih ngerasa jalan hidup lo udah on track, tapi masih ada yang kurang?",
    "Hidup penuh pilihan. Tapi, kadang kebanyakan pilihan malah bikin bingung. Lo pernah ngerasa gitu nggak?",
    "Pernah nggak sih kepikiran buat coba hal baru, tapi ragu? Gimana caranya meyakinkan diri buat coba?",
    "Sering ngerasa waktu itu berjalan terlalu cepat, nggak sih? Ada tips biar bisa nikmatin waktu?",
    "Pengen banget nggak sih punya hari-hari yang nggak stres, cuma happy aja?",
    "Apa yang biasanya bikin lo merasa hidup itu lebih menyenangkan?",
    "Kalo lo lagi butuh inspirasi, biasanya nyari dari mana?",
    "Ngomongin soal passion, lo lebih suka ngikutin hati atau mengikuti alur hidup?",
    "Kadang, hidup itu penuh tantangan. Tapi, lo nggak pernah takut kan?",
    "Kalo lagi capek, gimana cara lo recharge diri supaya siap ngadepin hari lagi?",
    "Apa sih yang bikin lo terus semangat dan nggak gampang nyerah?",
    "Kadang-kadang, hal-hal kecil bisa bikin hari lebih berwarna. Apa yang bikin lo happy?",
    "Gimana sih caranya tetep fokus di tengah banyaknya gangguan?",
    "Lo punya cara jitu nggak sih biar bisa terus produktif meski lagi malas?",
    "Kadang, kita harus ngelawan rasa malas. Apa sih yang biasanya bikin lo lebih semangat?",
    "Banyak banget hal seru yang bisa dilakukan, cuma kadang waktu nggak pernah cukup. Apa yang selalu lo utamakan?",
    "Lagi dengerin lagu apa yang bisa ngebuat mood lo naik?",
    "Apa sih yang lagi jadi topik seru di obrolan lo belakangan ini?",
    "Lo tim nonton film atau series, sih? Ada rekomendasi nggak?",
    "Lagi mikirin apa yang bisa nambah skill atau hobi baru?",
    "Lagi seneng banget sama tren atau challenge terbaru? Share dong!",
    "Ada tempat makan baru yang baru lo coba? Enak nggak?",
    "Lo lebih suka kerja bareng temen atau lebih fokus sendiri?",
    "Kadang butuh banget waktu buat diri sendiri, kan? Kapan terakhir lo recharge?",
    "Pernah gak sih ngerasa waktu itu cepat banget lewat? Pasti sering deh!",
    "Gimana sih cara lo nge-handle stres biar nggak nambah berat?",
    "Pernah ada ide gila yang langsung lo coba? Cerita dong, seru pasti!",
    "Lagi hype banget tentang apa? Share dong tips atau trik yang lagi lo coba!",
    "Kalo lagi malas banget, gimana sih cara lo biar bisa balik semangat?",
    "Lagi ngerasain banyak pressure nggak? Gimana cara lo ngadepinnya?",
    "Lo lebih suka nonton film yang bikin baper atau yang penuh action?",
    "Pernah nggak sih lo ngerasa hidup itu kayak di film, penuh drama?",
    "Kalo lo bisa ngobrol sama diri lo yang lebih muda, apa yang bakal lo bilang?",
    "Sering banget nggak sih kita ngerasa butuh waktu santai, kadang cuma buat napas?",
    "Lo lebih suka jalan-jalan di mall atau jalan-jalan ke alam bebas?",
    "Pernah nggak sih lo mikirin, ‘Ini semua bakal worth it, kok’?",
    "Kalo lagi butuh semangat, biasanya lo ngelakuin apa supaya mood langsung berubah?",
    "Lagi ngerasa kayak perlu waktu buat sendiri atau malah butuh teman ngobrol?",
    "Lagi suka banget sama kegiatan yang bikin fokus atau yang fun banget?",
    "Lo lebih suka challenge diri sendiri atau mengikuti alur yang udah ada?",
    "Kalo dihadapkan dengan masalah besar, lo lebih pilih hadapin langsung atau mikir dulu?",
    "Sering banget kan kita ngejalanin rutinitas, tapi kadang rasa bosen datang?",
    "Lo ngerasa semakin dewasa makin banyak yang dipikirin? Gimana cara lo atasi itu?",
    "Kadang kita perlu keluar dari zona nyaman, kan? Kapan terakhir lo coba sesuatu yang baru?",
    "Ada nggak sih hal kecil yang kadang bikin lo terkejut, kayak tiba-tiba bisa ketawa sendiri?",
    "Lagi coba ngejar goal apa nih? Pasti penuh tantangan, ceritain dong!",
    "Pernah nggak sih ngerasa nggak ada yang ngerti perasaan lo, tapi tetap maju terus?",
    "Kalo lagi galau, lo lebih suka nyendiri dulu atau cari temen buat curhat?",
    "Buat lo, apa sih hal yang bikin hidup lo lebih berwarna akhir-akhir ini?",
    "Lo pernah coba ngelakuin hal yang keluar dari kebiasaan lo? Seru nggak?",
    "Ada nggak hal yang pengen lo capai tahun ini? Ayo share dong, siapa tau bisa saling support!",
    "Kalo lo lagi pengen relax, apa sih yang paling bikin lo nyaman?",
    "Ngerasa nggak sih kalau kadang hidup itu penuh kejutan? Kadang malah lebih seru begitu!",
    "Lo lebih suka yang spontaneous atau lebih nyaman sama plan yang udah disiapin?",
    "Kadang kita butuh beberapa detik buat menenangkan diri, lo biasanya ngapain?"
];

// Fungsi untuk mengirim pesan
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();

    if (message === "") {
        showMessage("Tolong tulis pesan!", "error");
        return;
    }

    // Proses kirim ke Telegram
    sendToTelegram(message);
});

const randomMessageButton = document.getElementById("randomMessage");
const dice = document.getElementById("dice");

// Simpan pesan yang sudah ditampilkan
let displayedMessages = [];
let isAnimating = false; // Status untuk mencegah animasi berulang

// Event listener untuk tombol pesan acak
randomMessageButton.addEventListener("click", function () {
    if (isAnimating) return; // Cegah jika animasi sedang berjalan

    // Tandai animasi dimulai
    isAnimating = true;

    // Pilih pesan acak
    let randomIndex;
    let randomMessage;

    // Cari pesan yang belum ditampilkan
    do {
        randomIndex = Math.floor(Math.random() * randomMessages.length);
        randomMessage = randomMessages[randomIndex];
    } while (displayedMessages.includes(randomMessage));

    // Tampilkan pesan baru
    messageInput.value = randomMessage;

    // Simpan pesan yang sudah ditampilkan
    displayedMessages.push(randomMessage);

    // Jika semua pesan sudah ditampilkan, reset daftar yang sudah ditampilkan
    if (displayedMessages.length === randomMessages.length) {
        displayedMessages = [];
    }

    // Tambahkan animasi dice
    dice.style.animation = "rollDice 1s infinite";
    setTimeout(() => {
        dice.style.animation = "none"; // Hentikan animasi setelah selesai
        isAnimating = false; // Tandai animasi selesai
    }, 800);
});

// Fungsi untuk mengirim pesan ke Telegram dengan format yang lebih baik
function sendToTelegram(message) {
    const botToken = "7654564974:AAEEruGqvu69kvkDT36kTXi5mxYLnwUjsOg"; // Ganti dengan token bot Telegram Anda
    const chatId = "981879069"; // Ganti dengan chat ID Anda

    // URL gambar (pastikan sudah diupload dan dapat diakses)
    const photoUrl = "https://drive.google.com/uc?id=1TLs6lI1fOhKPVBaaCYyBPflcUob3VtTC"; // Ganti dengan URL foto Anda

    // Dapatkan tanggal dan waktu saat ini
    const now = new Date();
    const optionsDate = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = now.toLocaleDateString("id-ID", optionsDate);
    const formattedTime = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    // Format pesan yang lebih elegan dengan kredit bot
    const formattedMessage = `
📬 *Pesan Anonim Baru Diterima!* 📬

📩 *Detail Pesan*  
━━━━━━━━━━━━━━━━━━━━━━━━━
💬 *Isi Pesan:*  
➤  _"${message}"_

📅 *Date:* ${formattedDate}
⏰ *Time:* ${formattedTime}
🌍 *Sent From:* Web Anonim
━━━━━━━━━━━━━━━━━━━━━━━━━

🔒 *Pesan ini diterima secara anonim.*

━━━━━━━━━━━━━━━━━━━━━━━━━

╾════╼ @*sadtyy_bot* ╾════╼
`;

    // Buat link balasan untuk halaman NGL atau situs balasan
    const replyLink = `https://sakaaa-exe.github.io/reply-ngl/index.html?message=${encodeURIComponent(message)}`;

    // Menambahkan inline button untuk balasan
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;
    const payload = {
        chat_id: chatId,
        photo: photoUrl, // Kirim foto
        caption: formattedMessage, // Pesan teks dengan foto
        parse_mode: "Markdown", // Gunakan Markdown untuk format teks
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: "Balas Pesan",
                        url: replyLink, // Arahkan ke halaman balasan
                    },
                ],
            ],
        }),
    };

    fetch(telegramUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.ok) {
                showMessage("Pesan berhasil dikirim!", "success");
                messageInput.value = "";
            } else {
                showMessage("Gagal mengirim pesan.", "error");
            }
        })
        .catch(() => {
            showMessage("Terjadi kesalahan. Coba lagi.", "error");
        });
}


/// Elemen modal
const modal = document.getElementById("statusModal");
const modalIcon = document.getElementById("modal-icon");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const closeModalBtn = document.querySelector(".close-btn");

function showMessage(message, type) {
    showModal(message, type); // Gunakan modal untuk menampilkan pesan
}

// Fungsi untuk menampilkan modal
function showModal(message, type) {
    modal.classList.add(type === "success" ? "modal-success" : "modal-error");
    modalTitle.textContent = type === "success" ? "Berhasil!" : "Gagal!";
    modalMessage.textContent = message;

    modal.style.display = "flex"; // Tampilkan modal
    setTimeout(() => {
        modal.style.opacity = "1"; // Fade-in
    }, 50);

    // Otomatis tutup modal setelah 3 detik
    setTimeout(closeModal, 3000);
}

// Fungsi untuk menutup modal
function closeModal() {
    modal.style.animation = "fadeOut 0.5s forwards"; // Animasi keluar
    setTimeout(() => {
        modal.style.display = "none"; // Sembunyikan modal
        modal.classList.remove("modal-success", "modal-error"); // Hapus tema
        modal.style.animation = ""; // Reset animasi
    }, 500);
}

// Event listener tombol close
closeModalBtn.addEventListener("click", closeModal);

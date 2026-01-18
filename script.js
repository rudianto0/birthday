function generateMessage() {
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const result = document.getElementById("result");
    const music = document.getElementById("bgMusic");

    if (!name || !birthdate) {
        alert("Silakan isi nama dan tanggal lahir terlebih dahulu.");
        return;
    }

    const today = new Date();
    const birth = new Date(birthdate);

    const age = today.getFullYear() - birth.getFullYear();

    const birthdayThisYear = new Date(
        today.getFullYear(),
        birth.getMonth(),
        birth.getDate()
    );

    today.setHours(0, 0, 0, 0);
    birthdayThisYear.setHours(0, 0, 0, 0);

    let extraMessage = "";

    if (today.getTime() === birthdayThisYear.getTime()) {
        extraMessage = "";
    } else if (today < birthdayThisYear) {
        extraMessage = "Sepertinya aku terlalu cepat mengucapkannya, tapi doanya tetap tulus 🤍";
    } else {
        extraMessage = "Maaf ya, aku terlambat mengucapkannya 🙏";
    }

    result.innerHTML = `
        <h2>Selamat Ulang Tahun, ${name} 🎂</h2>
        <p>Di tahun ini, usiamu adalah <strong>${age} tahun</strong>.</p>
        ${extraMessage ? `<p>${extraMessage}</p>` : ``}
        <p>
            Semoga selalu diberikan kesehatan, kebahagiaan, serta
            kelancaran dalam setiap langkah hidupmu.
            Semoga semua doa baikmu dikabulkan dan
            hari-harimu selalu dipenuhi cinta dan ketenangan.
        </p>
        <p>🌸 Tetaplah menjadi pribadi yang indah luar dan dalam 🌸</p>
    `;

    result.classList.remove("hidden");

    // === PLAY MUSIC 10 DETIK ===
    music.currentTime = 0;
    music.volume = 0.6;

    music.play().then(() => {
        setTimeout(() => {
            music.pause();
            music.currentTime = 0;
        }, 20000);  // Hanya 10 detik
    }).catch(error => {
        console.log("Music playback blocked:", error);
    });
}

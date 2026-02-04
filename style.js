function nextPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById("page" + num).classList.add('active');
}

function showMessage() {
    document.getElementById("finalMessage").innerHTML = `
        💜 Hlo bestie... 💜<br><br>
        Naa enakum una maraka matte 🤍<br>
        Unoda naa spend panna days la<br>
        enaku romba special ✨<br><br>
        U stand with me in hard time 🫂<br>
        Thankyou for all tha<br>
        and sorry for many things 💗<br><br>
        I miss u so much 😔<br><br>
        Always be happy as ur ✨
    `;
    nextPage(3);
}

/* Heavy sparkles */
for (let i = 0; i < 120; i++) {
    let s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(s);
}

/* Stars from bottom to top */
for (let i = 0; i < 60; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "

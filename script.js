// ⭐ جعل القائمة تتغير عند التمرير (Sticky Navbar)
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});

// ⭐ زر العودة للأعلى (Scroll to Top)
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerText = "↑";
scrollTopBtn.classList.add("scroll-top");
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ⭐ تأثير الظهور عند التمرير (Reveal on Scroll)
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    for (let el of revealElements) {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        let revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // استدعاء أولي لضمان أن العناصر الموجودة بالفعل تظهر بشكل صحيح

// ⭐ تأثير الانتقال السلس عند الضغط على الروابط
document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// ⭐ تأثير عند تمرير الماوس فوق الأزرار
document.querySelectorAll(".main-btn").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.boxShadow = "0 0 15px rgba(255, 255, 0, 0.8)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.boxShadow = "none";
    });
});

const toggleBtn = document.querySelectorAll('.toggle-btn');
const faqAns = document.querySelectorAll('.faq-answer-hidden');
const faqQuestion = document.querySelectorAll('.faq-question--text');
console.log("start of js")
for (let i = 0; i < toggleBtn.length; i++) {
    console.log("click");
    toggleBtn[i].onclick = function () {

        for (let j = 0; j < toggleBtn.length; j++) {
            console.log("in for loop")
            if (toggleBtn[j] != this) {
                console.log("in if case");
                toggleBtn[j].classList.remove('rotated');
                faqAns[j].classList.add("hidden");
                faqQuestion[j].classList.remove("active");
            }
        }
        console.log("outside for loop");
        faqAns[i].classList.toggle("hidden");
        toggleBtn[i].classList.toggle("rotated");
        faqQuestion[i].classList.toggle("active");
    };
}
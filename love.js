
const loveText = document.getElementById("loveText");
const nextBtn = document.getElementById("nextBtn");

const text = `عيزاك تبقى عارف اني مبحبش حد ف الدنيا قدك و انك اغلى حاجه عندي ف الدنيا كلها و عملت الفكره دي عشان تبقى كل ذكراياتنا مع بعض و مهما زعل او حصل بينا اي حاجه نشوفها و نفتكر ان ملناش غير بعض❤️ ❤️ `;
const words = text.trim().split(/\s+/);

let index = 0;

function typeWord() {

    if (index < words.length) {

        loveText.textContent += words[index] + " ";

        index++;

        setTimeout(typeWord, 250);

    } else {

        nextBtn.style.display = "block";

    }
}

typeWord();


nextBtn.addEventListener("click", function () {

    window.location.href = "Photo.html";

});
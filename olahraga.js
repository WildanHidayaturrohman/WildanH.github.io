const text = "OLAHRAGA";
const typingText = document.getElementById("nama");
let index = 0;

function typeWriter() {
    typingText.innerHTML = ""; // Mengosongkan isi elemen
    function typeNextCharacter() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeNextCharacter, 150); 
        } else {
            index = 0;
            setTimeout(typeWriter, 500); 
        }
    }
    typeNextCharacter(); // Memanggil fungsi untuk mulai mengetik
}

window.onload = typeWriter;
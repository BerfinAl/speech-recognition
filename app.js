if ("webkitSpeechRecognition" in window) {
  const btn = document.querySelector("button");

  let speechRecognition = new webkitSpeechRecognition();
  speechRecognition.continuous = true;
  speechRecognition.lang = "en-US";
  speechRecognition.interimResults = true;

  btn.addEventListener("click", () => {
    if (btn.innerText === "Start") {
      speechRecognition.start();
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
</svg> Stop`;
    } else if (btn.innerText === "Stop") {
      speechRecognition.stop();
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg> Start`;
    }
  });

  speechRecognition.onresult = (e) => {
    const para = document.querySelector("p");
    para.innerHTML = "";

    for (let i = 0; i < e.results.length; i++) {
      para.innerHTML += e.results[i][0].transcript;
    }
  }
} else {
  console.log("Speech Recognition Not Available");
}

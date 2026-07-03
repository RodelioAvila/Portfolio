const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        document.body.style.background="#f5f5f5";
        document.body.style.color="#111";
        themeBtn.textContent="☀️";
    }else{
        document.body.style.background="#0f172a";
        document.body.style.color="#fff";
        themeBtn.textContent="🌙";
    }
});

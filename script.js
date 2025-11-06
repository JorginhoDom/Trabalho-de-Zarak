document.getElementById("formLogin").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const nome = document.getElementById("nome").value.trim();
  const CPF = document.getElementById("CPF").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (nome === "Zarak" && CPF === "12345678900" && senha === "12345678900") {
    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.style.color = "green";

    setTimeout(() => {
  window.location.href = "perguntas.html";
}, 1000);

    document.getElementById("formLogin").reset();

  } else {
    alert("Login incorreto! Tente novamente.");
    }

});
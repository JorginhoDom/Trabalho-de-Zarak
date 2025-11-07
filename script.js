console.log("✅ script.js carregado");

document.getElementById("formLogin").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const nome = document.getElementById("nome").value.trim();
  const CPF = document.getElementById("CPF").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (nome === "1234" && CPF === "1234" && senha === "1234") {
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
document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (nome === "" || email === "" || senha === "") {
    mensagem.textContent = "Preencha todos os campos!";
    mensagem.style.color = "red";
    return;
  }

  console.log("Dados enviados:", { nome, email, senha });

  mensagem.textContent = "Cadastro realizado com sucesso!";
  mensagem.style.color = "green";

    
  document.getElementById("formCadastro").reset();
});

document.getElementById("formLogin").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const nome = document.getElementById("nome").value.trim();
  const CPF = document.getElementById("CPF").value.trim();

  
  const senha = document.getElementById("senha").value.trim();

  const mensagem = document.getElementById("mensagem");

  if (nome === "" || CPF === "" || senha === "") {
    mensagem.textContent = "Preencha todos os campos!";
    mensagem.style.color = "red";
    return;
  }

  

  console.log("Dados enviados:", { nome, CPF, senha });

  mensagem.textContent = "Login realizado com sucesso!";
  mensagem.style.color = "green";

    
  document.getElementById("formLogin").reset();


  
});

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#btnSolid");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function Alertar() {
  confirm("Você está prestes a fazer uma alteração no banco de dados do aprova-fácil, deseja prosseguir?")
}



var valorVenda = document.getElementById('valor1')
var proSolut = document.getElementById('solut1')


function Calcular() {

const Result = parseFloat(valorVenda) + (parseFloat(proSolut) / 100) * parseFloat(valorVenda) || 0

document.getElementById('resultado1').innerHTML(Result)


}
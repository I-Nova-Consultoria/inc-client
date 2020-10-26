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


function Calc(){

  
  var n1=parseFloat(document.getElementById("valor1").value);
  var n2=parseFloat(document.getElementById("solut1").value);

  var op = (n1 * n2) / 100

  var result = document.getElementById("resultado")
  console.log(result)
  console.log(op)

  document.getElementById("resultado").innerHTML = op

}
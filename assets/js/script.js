function initForm() {
  const formImc = document.querySelector("#form-imc");
  const inputAlturaImc = formImc.querySelector("#altura-imc");
  const inputPesoImc = formImc.querySelector("#peso-imc");

  formImc.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputAlturaImcValue = Number.parseFloat(inputAlturaImc.value);
    const inputPesoImcValue = Number.parseFloat(inputPesoImc.value);
    validaEResponde(inputAlturaImcValue, inputPesoImcValue);
  });
}

initForm();

function calculaImc(altura, peso) {
  return peso / (altura * altura);
}

function selecionaNivelImc(resultadoImc) {
  const niveisImc = [
    "Abaixo do peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade Grau 1",
    "Obesidade Grau 2",
    "Obesidade Grau 3",
  ];

  if (resultadoImc > 0 && resultadoImc < 18.5) {
    limparCssLinhasTabela();
    const linhaTabela = document.querySelector("#abaixo-do-peso");
    linhaTabela.classList.add("nivelIMC");
    return niveisImc[0];
  } else if (resultadoImc < 24.9) {
    limparCssLinhasTabela();
    const linhaTabela = document.querySelector("#peso-normal");
    linhaTabela.classList.add("nivelIMC");
    return niveisImc[1];
  } else if (resultadoImc < 29.9) {
    limparCssLinhasTabela();
    const linhaTabela = document.querySelector("#sobrepeso");
    linhaTabela.classList.add("nivelIMC");
    return niveisImc[2];
  } else if (resultadoImc < 34.9) {
    limparCssLinhasTabela();
    const linhaTabela = document.querySelector("#obesidade-1");
    linhaTabela.classList.add("nivelIMC");
    return niveisImc[3];
  } else if (resultadoImc < 39.9) {
    limparCssLinhasTabela();
    const linhaTabela = document.querySelector("#obesidade-2");
    linhaTabela.classList.add("nivelIMC");
    return niveisImc[4];
  } else if (resultadoImc > 40) {
    limparCssLinhasTabela();
    const linhaTabela = document.querySelector("#obesidade-3");
    linhaTabela.classList.add("nivelIMC");
    return niveisImc[5];
  }
}

function criaElemento(elemento) {
  const elementoCriado = document.createElement(elemento);
  return elementoCriado;
}

function escreverNoElemento(elemento, texto) {
  const divResposta = document.querySelector(".resultado-imc");
  divResposta.innerHTML = "";
  elemento.innerHTML = texto;
}

function inserirElementoNaDivResposta(elemento) {
  const divResposta = document.querySelector(".resultado-imc");
  divResposta.appendChild(elemento);
}

function validaEResponde(inputAlturaImcValue, inputPesoImcValue) {
  if (Number.isNaN(inputAlturaImcValue) && Number.isNaN(inputPesoImcValue)) {
    limparCssLinhasTabela();
    const paragrafo = criaElemento("p");
    escreverNoElemento(
      paragrafo,
      `O valor da altura e do peso estão inválidos!.`
    );
    inserirElementoNaDivResposta(paragrafo);
  } else if (Number.isNaN(inputAlturaImcValue)) {
    limparCssLinhasTabela();
    const paragrafo = criaElemento("p");
    escreverNoElemento(paragrafo, `O valor da altura está inválido!.`);
    inserirElementoNaDivResposta(paragrafo);
  } else if (Number.isNaN(inputPesoImcValue)) {
    limparCssLinhasTabela();
    const paragrafo = criaElemento("p");
    escreverNoElemento(paragrafo, `O valor do peso está inválido!.`);
    inserirElementoNaDivResposta(paragrafo);
  } else {
    limparCssLinhasTabela();
    const resultadoImc = calculaImc(inputAlturaImcValue, inputPesoImcValue);
    const paragrafo = criaElemento("p");
    const nivelDeImc = selecionaNivelImc(resultadoImc);
    escreverNoElemento(
      paragrafo,
      `O seu IMC é: ${resultadoImc.toFixed(
        2
      )} e está no nível de: ${nivelDeImc}.`
    );
    inserirElementoNaDivResposta(paragrafo);
  }
}

function limparCssLinhasTabela() {
  const linhaTabela1 = document.querySelector("#abaixo-do-peso");
  const linhaTabela2 = document.querySelector("#peso-normal");
  const linhaTabela3 = document.querySelector("#sobrepeso");
  const linhaTabela4 = document.querySelector("#obesidade-1");
  const linhaTabela5 = document.querySelector("#obesidade-2");
  const linhaTabela6 = document.querySelector("#obesidade-3");

  if (linhaTabela1.classList.contains("nivelIMC")) {
    linhaTabela1.classList.remove("nivelIMC");
  } else if (linhaTabela2.classList.contains("nivelIMC")) {
    linhaTabela2.classList.remove("nivelIMC");
  } else if (linhaTabela3.classList.contains("nivelIMC")) {
    linhaTabela3.classList.remove("nivelIMC");
  } else if (linhaTabela4.classList.contains("nivelIMC")) {
    linhaTabela4.classList.remove("nivelIMC");
  } else if (linhaTabela5.classList.contains("nivelIMC")) {
    linhaTabela5.classList.remove("nivelIMC");
  } else if (linhaTabela6.classList.contains("nivelIMC")) {
    linhaTabela6.classList.remove("nivelIMC");
  }
}

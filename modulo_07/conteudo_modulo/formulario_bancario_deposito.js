document.querySelector("form").addEventListener("submit", function (event) {
     event.preventDefault();

     const form_data = new FormData(event.target);

     const nome_beneficiario = form_data.get("nome_beneficiario");
     const agencia_bancaria_beneficiario = form_data.get("agencia_bancaria_beneficiario");
     const conta_bancaria_beneficiario = form_data.get("conta_bancaria_beneficiario");
     const valor_deposito_beneficiario = form_data.get("valor_deposito_beneficiario");

     if (validar_dados_formulario(nome_beneficiario)) {
          this.reset();
          bloquear_inputs_formulario();
          criar_resultado_com_deposito(nome_beneficiario, agencia_bancaria_beneficiario, conta_bancaria_beneficiario, valor_deposito_beneficiario);
     }
});

function validar_dados_formulario(nome_beneficiario) {
     if (!nome_beneficiario) {
          document.getElementById("nome_beneficiario").className = "input_error";
     } else {
          document.getElementById("nome_beneficiario").className = "";
     }
     // * Segui o processo de validar apenas o nome do formulário, conforme foi desenvovlido durante a aula.
     // * Futuramente, planejo efetuar um processo de validação de todo o formulário. Como a maneira atual, será mais fácil validar o retorno da função, para trabalhar com algum resultado Boolean.

     /* if (!agencia_bancaria_beneficiario) {
          document.getElementById("agencia_bancaria_beneficiario").className = "input_error";
     } else {
          document.getElementById("agencia_bancaria_beneficiario").className = "";
     }
     if (!conta_bancaria_beneficiario) {
          document.getElementById("conta_bancaria_beneficiario").className = "input_error";
     } else {
          document.getElementById("conta_bancaria_beneficiario").className = "";
     }
     if (!valor_deposito_beneficiario) {
          document.getElementById("valor_deposito_beneficiario").className = "input_error";
     } else {
          document.getElementById("valor_deposito_beneficiario").className = "";
     } */

     return true ? !document.getElementById("nome_beneficiario").className : false;
}

function criar_resultado_com_deposito(nome_beneficiario, agencia_bancaria_beneficiario, conta_bancaria_beneficiario, valor_deposito_beneficiario) {
     const button_novo_deposito = document.createElement("button");

     button_novo_deposito.textContent = "Novo deposito";
     button_novo_deposito.setAttribute("type", "submit");
     button_novo_deposito.onclick = () => {
          window.location.reload();
     };

     const container_resultado_deposito = document.createElement("div");
     const titulo_dados_deposito = document.createElement("h2");
     const paragrafo_deposito_nome_beneficiario = document.createElement("p");
     const paragrafo_deposito_agencia_beneficiario = document.createElement("p");
     const paragrafo_deposito_conta_beneficiario = document.createElement("p");
     const paragrafo_deposito_valor_deposito = document.createElement("p");

     container_resultado_deposito.style.borderTop = "solid 0.500rem #B2D2A4";
     container_resultado_deposito.style.margin = "0rem auto";
     container_resultado_deposito.style.textAlign = "center";
     container_resultado_deposito.style.width = "50%";

     titulo_dados_deposito.textContent = `Dados do depósito`;
     paragrafo_deposito_nome_beneficiario.textContent = `Beneficiário(a): ${nome_beneficiario}`;
     paragrafo_deposito_agencia_beneficiario.textContent = `Agência: ${agencia_bancaria_beneficiario}`;
     paragrafo_deposito_conta_beneficiario.textContent = `Conta: ${conta_bancaria_beneficiario}`;
     paragrafo_deposito_valor_deposito.textContent = `Valor: R$ ${parseFloat(valor_deposito_beneficiario).toFixed(2)}`;

     container_resultado_deposito.appendChild(titulo_dados_deposito);
     container_resultado_deposito.appendChild(paragrafo_deposito_nome_beneficiario);
     container_resultado_deposito.appendChild(paragrafo_deposito_agencia_beneficiario);
     container_resultado_deposito.appendChild(paragrafo_deposito_conta_beneficiario);
     container_resultado_deposito.appendChild(paragrafo_deposito_valor_deposito);
     container_resultado_deposito.appendChild(button_novo_deposito);

     document.querySelector("main").appendChild(container_resultado_deposito);
}

function bloquear_inputs_formulario() {
     document.getElementById("nome_beneficiario").setAttribute("disabled", "");
     document.getElementById("agencia_bancaria_beneficiario").setAttribute("disabled", "");
     document.getElementById("conta_bancaria_beneficiario").setAttribute("disabled", "");
     document.getElementById("valor_deposito_beneficiario").setAttribute("disabled", "");
     document.getElementById("button_enviar_deposito").setAttribute("disabled", "");
}

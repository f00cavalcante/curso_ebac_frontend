const formulario = document.getElementById("section_formulario");
const formularioResposta = document.getElementById("section_formulario_resposta");

// * Evento do botão submit "bnt_submit_form"
document.getElementById("bnt_submit_form").addEventListener("click", function () {
     let inputNome = document.getElementById("input_nome");
     let textareaMessage = document.getElementById("textarea_message");

     let messageAlert = `Olá ${inputNome.value.toUpperCase()}! 😁
          \n\nEsta seria uma forma de processar os dados inseridos nos inputs do formulário que preencheu. Neste caso, estou utilizando parte do conteúdo para direcionar a este pop-up que está lendo, e o restante conseguirá visualizar nas opções a seguir, basta clicar para fechar esta caixa.
          \nVamos seguir?!
     `;

     window.alert(messageAlert);

     criarRespostaFormularioEmSection(textareaMessage.value);
});

function criarRespostaFormularioEmSection(textareaMessage) {
     formulario.style.display = "none";
     formularioResposta.style.display = "block";

     let sectionRespostaFormulario_tituloH2 = document.createElement("h2");
     // let sectionRespostaFormulario_paragrafo = document.createElement("p");
     let sectionRespostaFormulario_button = document.createElement("button");

     sectionRespostaFormulario_tituloH2.className = "section_resultado_formulario__titulo";
     sectionRespostaFormulario_tituloH2.textContent = "Dados do Formulário";

     /* 
     ! 
     Tentei efetuar a criação do elemento da forma abaixo, aproveitando a referencia do processo de criar o elemento do parágrafo, alterando apenas o nome da variável que seria com a mesma tag alterando apenas seu conteúdo, mas o JavaScript não permite.      Ainda não sei o motivo, mas irei pesquisar melhor.

     let paragrafoUau = sectionRespostaFormulario_paragrafo,
          paragrafoInicial = sectionRespostaFormulario_paragrafo,
          paragrafoComTextarea = sectionRespostaFormulario_paragrafo; 
     */

     let paragrafoUau = document.createElement("p");
     let paragrafoInicial = document.createElement("p");
     let paragrafoComTextarea = document.createElement("p");

     paragrafoUau.textContent = "UAU";
     paragrafoUau.style.cssText = `
          color: pink;
          font-size: 2rem;
          margin: 1.5rem;
          padding: 0.75rem;
          text-align: center;
          text-transform: uppercase;
     `;

     paragrafoInicial.textContent =
          "Abaixo, encontra-se a mensagem que preencher no TextArea. Está estilizada botinha para ganhar um destaque e demonstrar a aplicabilidade e alguns conhecimentos de JavaScript. Caso queira saber mais sobre, poderá consultar o projeto que está hospedado no GitHub.";

     paragrafoComTextarea.className = "section_resultado_formulario__conteudo_do_textarea_convertido_em_paragrafo";
     paragrafoComTextarea.textContent = textareaMessage;

     sectionRespostaFormulario_button.className = "section_resultado_formulario__button";
     sectionRespostaFormulario_button.setAttribute("type", "button");
     sectionRespostaFormulario_button.style.cssText = `
          display: block;
          margin: 0.75rem auto;
          padding: 0.50rem;
          text-align: center;
     `;
     sectionRespostaFormulario_button.addEventListener("click", function () {
          window.alert(`Pronto! Nesta página foram aplicados os conceitos de:
               \n1 - Um tema livre escolha;
               \n2 - Adicionado imagem;
               \n3 - Customizado títulos e parágrafos;
               \n4 - Capturado o conteúdo do formulário;
               \n5 - Retornado o conteúdo dos inputs (enquanto carregados na memória) em conteúdos da página.
               `);
          window.location.reload();
     });
     sectionRespostaFormulario_button.textContent = "Refrescar a página!";

     document.getElementById("footer").style.position = "relative";

     formularioResposta.appendChild(sectionRespostaFormulario_tituloH2).after(document.getElementById("tenor-gif-embed"));
     formularioResposta.appendChild(paragrafoUau);
     formularioResposta.appendChild(paragrafoInicial);
     formularioResposta.appendChild(paragrafoComTextarea);
     formularioResposta.appendChild(sectionRespostaFormulario_button);
}

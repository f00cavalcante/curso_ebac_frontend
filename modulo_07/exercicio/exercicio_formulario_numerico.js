const formulario_campos_numericos = document.querySelector("form#formulario_campos_numericos");
const formulario_campo_a = document.querySelector("input#campo_a");
const formulario_campo_b = document.querySelector("input#campo_b");
const formulario_campos_numericos__button_alguma_coisa = document.querySelector("button#formulario_campos_numericos__button_alguma_coisa");

formulario_campos_numericos.addEventListener("submit", function (event) {
     event.preventDefault();

     const form_data = new FormData(event.target);

     const campo_a = form_data.get("campo_a");
     const campo_b = form_data.get("campo_b");
     const button_formulario = form_data.get("button_formulario");

     // const comparar_inputs = true ? campo_a > campo_b : false;

     desabilitar_itens_formulario();

     criar_div_com_resposta_do_formulario(campo_a, campo_b);

     this.reset();
});

// * A criação desta função apenas para gerar um retorno boolean seria para práticas e demonstração dos processos relacionados à validação
// * Este processo poderia ser muito bem reduzido por meio de uma validação dentro da própria variável

// function comparar_dados_dos_inputs(campo_a, campo_b) {
//      return true ? campo_a > campo_b : false;
// }

function desabilitar_itens_formulario() {
     formulario_campo_a.setAttribute("disabled", "");
     formulario_campo_b.setAttribute("disabled", "");
     formulario_campos_numericos__button_alguma_coisa.setAttribute("disabled", "");
}

function criar_div_com_resposta_do_formulario(campo_a, campo_b) {
     const container_resposta_formulario = document.querySelector("div#container_resposta_formulario");
     container_resposta_formulario.classList.remove("ocultar_container");
     container_resposta_formulario.classList.add("exibir_container");

     const lista_com_resultados = document.createElement("ul");

     const lista_com_resultados__item_a = document.createElement("li");
     const lista_com_resultados__item_b = document.createElement("li");
     lista_com_resultados__item_a.textContent = `Valor do campo A: ${campo_a}`;
     lista_com_resultados__item_b.textContent = `Valor do campo B: ${campo_b}`;

     lista_com_resultados.appendChild(lista_com_resultados__item_a);
     lista_com_resultados.appendChild(lista_com_resultados__item_b);

     container_resposta_formulario.appendChild(lista_com_resultados);

     const lista_com_respostas_do_formulario = document.createElement("ul");
     const lista_com_respostas_do_formulario__item_um = document.createElement("li");
     const lista_com_respostas_do_formulario__item_dois = document.createElement("li");
     const lista_com_respostas_do_formulario__item_tres = document.createElement("li");

     lista_com_respostas_do_formulario__item_dois.innerHTML = `<p>Exibir uma mensagem positiva quando o formulário for válido, e negativa, quando for inválido:</p>`;

     if (campo_a > campo_b) {
          lista_com_respostas_do_formulario__item_um.innerHTML = `<p><strong>O campo B é maior que o campo A?</strong> Não!</p>`;
          lista_com_respostas_do_formulario__item_dois.innerHTML += `<p style="color: red; font-weight: 700">Mensagem Negativa! O campo B NÃO é maior que o campo A!<p>`;
     } else if (campo_a === campo_b) {
          /*
           * Implementei este método forçado para os valores quando forem iguais (correspondentes), pois, apensar de estabelecer a condição diretamente no if() ou pela função criada, quando os valores eram iguais, mesmo retornando false, o resultado acusava como se o campo B fosse maior que o A
           * Depois irei validar melhor o motivo
           */
          lista_com_respostas_do_formulario__item_um.innerHTML = `<p><strong>O campo B é maior que o campo A?</strong> Não!</p>`;
          lista_com_respostas_do_formulario__item_dois.innerHTML += `<p style="color: red; font-weight: 700">Mensagem Negativa! O campo B NÃO é maior que o campo A!<p>`;
     } else {
          lista_com_respostas_do_formulario__item_um.innerHTML = `<p><strong>O campo B é maior que o campo A?</strong> Sim!</p>`;
          lista_com_respostas_do_formulario__item_dois.innerHTML += `<p style="color: green; font-weight: 700">Mensagem Positiva! O campo B é maior que o campo A!<p>`;
     }

     lista_com_respostas_do_formulario__item_tres.innerHTML = `
          <p>Publicar no GitHub através de uma branch chamada <strong>exercicio_html_js</strong>.</p>
          <p>Esta branch poderá ser acessada através deste <a href="https://github.com/f00cavalcante/curso_ebac_frontend/commit/7634aab487d559a88d11060177100abea37d74fc" target="_blank">link</a></p>
     `;

     lista_com_respostas_do_formulario.appendChild(lista_com_respostas_do_formulario__item_um);
     lista_com_respostas_do_formulario.appendChild(lista_com_respostas_do_formulario__item_dois);
     lista_com_respostas_do_formulario.appendChild(lista_com_respostas_do_formulario__item_tres);

     container_resposta_formulario.appendChild(lista_com_respostas_do_formulario);

     const um_paragrafo_qualquer = document.createElement("p");
     um_paragrafo_qualquer.textContent = `Abaixo, as respostas do exercício proposto:`;

     container_resposta_formulario.appendChild(um_paragrafo_qualquer).after(lista_com_respostas_do_formulario);

     const button_refrescar_pagina = document.createElement("button");

     button_refrescar_pagina.textContent = `Novos dados`;
     button_refrescar_pagina.onclick = () => {
          window.location.reload();
     };

     container_resposta_formulario.appendChild(button_refrescar_pagina);
}

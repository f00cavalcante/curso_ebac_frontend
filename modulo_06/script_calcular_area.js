const section_resultado = document.getElementById("section_resultado");

const altura = document.getElementById("altura"),
     base = document.getElementById("base");

const section_resultado__container_02 = document.getElementById("section_resultado__container_02"),
     section_resultado__container_03 = document.getElementById("section_resultado__container_03");

const section_resultado__container_02__paragrafo_resultado = document.getElementById("section_resultado__container_02__paragrafo_resultado"),
     section_resultado__container_03__paragrafo_altura = document.getElementById("section_resultado__container_03__paragrafo_altura"),
     section_resultado__container_03__paragrafo_base = document.getElementById("section_resultado__container_03__paragrafo_base");

document.getElementById("button_calcularArea").addEventListener("click", function () {
     section_resultado.style.display = "block";

     multiplicarValoresArea();
     enableAndDisabledItensDoForm(false);
});

document.getElementById("button_novo_calculo").addEventListener("click", function () {
     section_resultado.style.display = "none";

     enableAndDisabledItensDoForm(true);
});

function multiplicarValoresArea() {
     section_resultado__container_02__paragrafo_resultado.textContent = `Resultado do cálculo: ${altura.value * base.value}`;

     section_resultado__container_03__paragrafo_altura.style.marginLeft = "0.125rem";
     section_resultado__container_03__paragrafo_altura.textContent = altura.value;

     section_resultado__container_03__paragrafo_base.style.textAlign = "center";
     section_resultado__container_03__paragrafo_base.textContent = base.value;
}

function enableAndDisabledItensDoForm(enabled) {
     const button_calcularArea = document.getElementById("button_calcularArea");

     if (!enabled) {
          altura.setAttribute("disabled", "");
          altura.style.backgroundColor = "var(--silver)";

          base.setAttribute("disabled", "");
          base.style.backgroundColor = "var(--silver)";

          button_calcularArea.setAttribute("disabled", "");
     } else {
          altura.value = "";
          altura.removeAttribute("disabled");
          altura.style.backgroundColor = "#ffffff";

          base.value = "";
          base.removeAttribute("disabled");
          base.style.backgroundColor = "#ffffff";

          button_calcularArea.removeAttribute("disabled");
     }
}

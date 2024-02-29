const foods = [
  {
    tipo: "Principal",
    nome: "Salmão Grelhado",
    valor: 59.9,
    foto: "assets/salmao-grelhado.jpg",
    texto:
      "Delicioso salmão grelhado ao ponto, acompanhado de um molho de maracujá agridoce e risoto de limão siciliano.",
  },

  {
    tipo: "Entrada",
    nome: "Carpaccio de Salmão",
    valor: 29.9,
    foto: "assets/carpaccio-salmão.jpeg",
    texto:
      "Fatias finas de salmão cru marinadas em azeite e limão siciliano, acompanhadas de rúcula e alcaparras.",
  },

  {
    tipo: "Principal",
    nome: "Risoto de Camarão com Aspargo",
    valor: 48.9,
    foto: "assets/risoto-de-camarao.jpeg",
    texto:
      "Cremoso risoto italiano preparado com arroz arbóreo, camarões frescos e aspargos verdes.",
  },

  {
    tipo: "Sobremesa",
    nome: "Mousse de Chocolate",
    valor: 22.9,
    foto: "assets/mousse-de-chocolate.jpeg",
    texto:
      "Cremosa mousse de chocolate com uma deliciosa calda de frutas vermelhas.",
  },

  {
    tipo: "Principal",
    nome: "Medalhão de Filé Mignon",
    valor: 65.9,
    foto: "assets/medalhões-de-filé-mignon.jpeg",
    texto:
      "Medalhão de filé mignon envolto em bacon, acompanhado de molho funghi e purê de batatas com especiarias.",
  },

  {
    tipo: "Entrada",
    nome: "Sopa de Creme de Abóbora",
    valor: 19.9,
    foto: "assets/creme-de-abóbora.jpeg",
    texto:
      "Sopa cremosa de abóbora com toque de gengibre fresco, servida com croutons.",
  },

  {
    tipo: "sobremesa",
    nome: "Panna Cotta com Frutas Vermelhas",
    valor: 24.9,
    foto: "assets/panna-cotta.jpeg",
    texto: "Cremosa panna cotta com uma deliciosa calda de frutas vermelhas.",
  },

  {
    tipo: "Principal",
    nome: "Frango ao Molho de Mostarda Dijon",
    valor: 39.9,
    foto: "assets/frango-ao-molho.jpeg",
    texto:
      "Peito de frango grelhado com um molho cremoso de mostarda Dijon e batatas assadas com alecrim.",
  },
  {
    tipo: "Lanche",
    nome: "Pizza de Quatro Queijos",
    valor: 34.9,
    foto: "assets/pizza-quatro-queijos.jpg",
    texto:
      "Pizza com massa fina e crocante, molho de tomate e quatro tipos de queijo: mozzarella, provolone, gorgonzola e parmesão.",
  },
];
const menu = document.querySelector(".menu");
const options = document.querySelectorAll(".options button");

let menuItems = foods;

options.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.classList.value) {
      case "tudo":
        menuItems = foods;
        break;
      case "entrada":
        menuItems = foods.filter((item) => item.tipo === "Entrada");
        break;
      case "lanche":
        menuItems = foods.filter((item) => item.tipo === "Lanche");
        break;
      case "sobremesa":
        menuItems = foods.filter((item) => item.tipo === "Sobremesa");
        break;
      case "principal":
        menuItems = foods.filter((item) => item.tipo === "Principal");
        break;
    }
    displayMenuItems(menuItems);
  });
});

function displayMenuItems(menuItem) {
  let displayItem = menuItem.map((food) => {
    return `<div class="food">
              <img src="${food.foto}" alt="">
              <div class="content">
                  <div class="name-value">
                    <h2>${food.nome}</h2>
                    <span class="value">R$ ${food.valor}</span>
                  </div>
                  <div class="line"></div>
                  <p>${food.texto}</p>
              </div>
            </div>`;
  });
  displayItem = displayItem.join("");

  menu.innerHTML = displayItem;
}

document.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menuItems);
});

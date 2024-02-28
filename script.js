const foods = [
  {
    prato: {
      tipo: "Principal",
      nome: "Salmão Grelhado com Molho de Maracujá",
      valor: 59.9,
      foto: "https://receitinhas.com.br/receita/salmao-grelhado-com-molho-de-maracuja/",
      texto:
        "Delicioso salmão grelhado ao ponto, acompanhado de um molho de maracujá agridoce e risoto de limão siciliano.",
    },
  },
  {
    prato: {
      tipo: "Entrada",
      nome: "Carpaccio de Salmão",
      valor: 29.9,
      foto: "https://br.freepik.com/fotos/carpaccio-salmao",
      texto:
        "Fatias finas de salmão cru marinadas em azeite e limão siciliano, acompanhadas de rúcula e alcaparras.",
    },
  },
  {
    prato: {
      tipo: "Principal",
      nome: "Risoto de Camarão com Aspargo",
      valor: 48.9,
      foto: "https://anamariabraga.globo.com/receita/risoto-de-camarao-e-aspargos/",
      texto:
        "Cremoso risoto italiano preparado com arroz arbóreo, camarões frescos e aspargos verdes.",
    },
  },
  {
    prato: {
      tipo: "Sobremesa",
      nome: "Mousse de Chocolate com Calda de Frutas Vermelhas",
      valor: 22.9,
      foto: "https://www.tudogostoso.com.br/receita/146944-mousse-de-chocolate-com-calda-de-frutas-vermelhas.html",
      texto:
        "Cremosa mousse de chocolate com uma deliciosa calda de frutas vermelhas.",
    },
  },
  {
    prato: {
      tipo: "Principal",
      nome: "Medalhão de Filé Mignon com Bacon e Funghi",
      valor: 65.9,
      foto: "https://br.pinterest.com/pin/707346685215934422/",
      texto:
        "Medalhão de filé mignon envolto em bacon, acompanhado de molho funghi e purê de batatas com especiarias.",
    },
  },
  {
    prato: {
      tipo: "Entrada",
      nome: "Sopa de Creme de Abóbora com Gengibre",
      valor: 19.9,
      foto: "https://www.tudoreceitas.com/receita-de-creme-de-abobora-com-gengibre-5599.html",
      texto:
        "Sopa cremosa de abóbora com toque de gengibre fresco, servida com croutons.",
    },
  },
  {
    prato: {
      tipo: "Sobremesa",
      nome: "Panna Cotta com Frutas Vermelhas",
      valor: 24.9,
      foto: "https://www.panelinha.com.br/receita/Panna-cotta-com-calda-de-frutas-vermelhas",
      texto: "Cremosa panna cotta com uma deliciosa calda de frutas vermelhas.",
    },
  },
  {
    prato: {
      tipo: "Principal",
      nome: "Frango ao Molho de Mostarda Dijon",
      valor: 39.9,
      foto: "https://m.youtube.com/watch?v=pjcTvFrE2hk",
      texto:
        "Peito de frango grelhado com um molho cremoso de mostarda Dijon e batatas assadas com alecrim.",
    },
  },
  {
    prato: {
      tipo: "Pizza",
      nome: "Pizza de Quatro Queijos",
      valor: 34.9,
      foto: "https://depositphotos.com/br/photos/pizza-quatro-queijos.html",
      texto:
        "Pizza com massa fina e crocante, molho de tomate e quatro tipos de queijo: mozzarella, provolone, gorgonzola e parmesão.",
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
    foods.forEach((food) => {
        console.log(food);
    })
})
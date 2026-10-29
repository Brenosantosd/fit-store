import React, { useState } from "react"; 
import "./home.css";

function Home() {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Whey Protein 1kg", preco: 99.99, img: "/whey3.jpg" },
    { id: 2, nome: "Creatina 300g", preco: 79.90, img: "/creatina.jpg" },
    { id: 3, nome: "Pré-Treino 300g", preco: 89.90, img: "/pretreino.jpg" },
    { id: 4, nome: "BCAA 200 caps", preco: 49.90, img: "/bcaaa.jpg" }
  ]);

  function adicionaraoCarrinho(item) {
    const minhaLista = localStorage.getItem("@Carrinho");
    let produtosSalvos = JSON.parse(minhaLista) || [];

    // 1. Encontra a posição do produto no array do localStorage
    const index = produtosSalvos.findIndex((produto) => produto.id === item.id);

    if (index !== -1) {
      // Se o produto já existe, aumenta apenas a quantidade
      produtosSalvos[index].quantidade += 1;
    } else {
      // Se não existe, adiciona o produto com a propriedade quantidade: 1
      produtosSalvos.push({ ...item, quantidade: 1 });
    }

    // 2. Salva a lista atualizada de volta no localStorage
    localStorage.setItem("@Carrinho", JSON.stringify(produtosSalvos));
    alert("Produto adicionado ao carrinho com sucesso!");
  }

  return (
    <div>
      <h1 className="tituloHome">Fit Store</h1>

      <div className="Container-Produtos">
        {produtos.map((item) => (
          <div className="produtos" key={item.id}>
            <img src={item.img} alt={item.nome} />
            <h2 className="nome">{item.nome}</h2>
            <p className="preco">R$ {item.preco.toFixed(2)}</p>
            <button 
              className="botaoAdicionar" 
              onClick={() => adicionaraoCarrinho(item)}
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
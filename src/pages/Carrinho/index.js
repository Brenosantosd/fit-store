import React, { useState, useEffect, useMemo } from "react";
import "./carrinho.css";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  // 1. Carrega os produtos salvos no localStorage ao abrir a tela
  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem("@Carrinho")) || [];
    setCarrinho(salvos);
  }, []);

  // Função auxiliar para atualizar a tela e o localStorage ao mesmo tempo
  function atualizarCarrinho(novoCarrinho) {
    setCarrinho(novoCarrinho);
    localStorage.setItem("@Carrinho", JSON.stringify(novoCarrinho));
  }

  // 2. Aumentar a quantidade de um item (+1)
  function aumentarQtd(id) {
    const atualizado = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    atualizarCarrinho(atualizado);
  }

  // 3. Diminuir a quantidade (-1) e remover se chegar a 0
  function diminuirQtd(id) {
    const atualizado = carrinho
      .map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
      )
      .filter((item) => item.quantidade > 0);

    atualizarCarrinho(atualizado);
  }

  // 4. Remover o item diretamente da lista
  function removerItem(id) {
    const atualizado = carrinho.filter((item) => item.id !== id);
    atualizarCarrinho(atualizado);
  }

  // 5. Cálculo memoizado do Valor Total da Compra (R$)
  const total = useMemo(() => {
    return carrinho.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
  }, [carrinho]);

  // 6. Cálculo memoizado da Quantidade Total de Produtos
  const totalItens = useMemo(() => {
    return carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  }, [carrinho]);

  return (
    <div className="carrinho-container">
      <h1>Carrinho 🛒</h1>

      {carrinho.length === 0 ? (
        <p className="carrinho-vazio">Seu carrinho está vazio!</p>
      ) : (
        <div className="carrinho-conteudo">
          <div className="lista-itens">
            {carrinho.map((item) => (
              <div key={item.id} className="card-item">
                <img src={item.img} alt={item.nome} width="120" />

                <div className="info-item">
                  <h3>{item.nome}</h3>
                  <p>R$ {item.preco.toFixed(2)} unitário</p>
                  <p className="subtotal">
                    Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}
                  </p>
                </div>

                <div className="controles-qtd">
                  <span>Quantidade: </span>
                  <button className="diminuir" onClick={() => diminuirQtd(item.id)}>-</button>
                  <span> {item.quantidade}</span>
                  <button className="aumentar" onClick={() => aumentarQtd(item.id)}>+</button>
                </div>

                <button
                  className="btn-remover"
                  onClick={() => removerItem(item.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="resumo-total">
            <p className="quantidade-total">Total de itens: <strong>{totalItens}</strong></p>
            <h2>Total da Compra:<span className="total"> R$ {total.toFixed(2)}</span></h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
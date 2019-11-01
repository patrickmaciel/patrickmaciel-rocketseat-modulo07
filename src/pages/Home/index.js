import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

import tenis from '../../assets/images/tenis.png';

export default function Home() {
  return (
    <ProductList>
      {[...Array(6).keys()].map((e, i) => (
        <li key={i}>
          <img src={tenis} alt="Tênis" />
          <strong>Tênis muito legal</strong>
          <span>R$129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

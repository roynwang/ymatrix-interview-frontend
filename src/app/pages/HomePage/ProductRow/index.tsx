/**
 *
 * ProductRow
 *
 */
import { Product } from 'app/pages/slice/types';
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  product: Product;
}

export const ProductRow = memo((props: Props) => {
  const { name, price, stock } = props.product;
  return (
    <Div>
      <Name>{name}</Name>
      <Price>¥ {price}</Price>
      <Stock>{stock}</Stock>
    </Div>
  );
});

const Div = styled.div`
  display: flex;
`;
const Name = styled.div`
  flex: 2;
`;
const Price = styled.div`
  flex: 1;
`;
const Stock = styled.div`
  flex: 1;
`;

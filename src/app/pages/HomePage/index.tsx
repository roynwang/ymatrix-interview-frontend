import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useMallSlice } from '../slice';
import { selectMall } from '../slice/selectors';
import { ProductRow } from './ProductRow';

export function HomePage() {
  const mall = useSelector(selectMall);
  const dispatch = useDispatch();
  const { actions } = useMallSlice();

  React.useEffect(() => {
    dispatch(actions.getProductList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Mall</title>
      </Helmet>
      <Container>
        {mall && mall.products.map(p => <ProductRow product={p} />)}
      </Container>
    </>
  );
}

export const Container = styled.div``;

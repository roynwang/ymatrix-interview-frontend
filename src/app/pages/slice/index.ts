import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { mallSaga } from './saga';
import { MallState, Product } from './types';

export const initialState: MallState = {
  products: [],
};

const slice = createSlice({
  name: 'mall',
  initialState,
  reducers: {
    getProductList() {},
    getProductListSuccess(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { actions: mallActions } = slice;

export const useMallSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: mallSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useMallSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

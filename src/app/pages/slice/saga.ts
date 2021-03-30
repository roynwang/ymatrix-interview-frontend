import { put, takeLatest } from 'redux-saga/effects';
import { mallActions as actions } from '.';

function* getProductsList() {
  const data = [
    {
      id: 1,
      name: '牛油果',
      stock: 2,
      price: 3.99,
    },
  ];
  yield put(actions.getProductListSuccess(data));
}

export function* mallSaga() {
  yield takeLatest(actions.getProductList, getProductsList);
}

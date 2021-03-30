import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.mall || initialState;

export const selectMall = createSelector([selectSlice], state => state);

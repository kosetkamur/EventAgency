import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from '../lib/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()

import { useTranslation } from 'next-i18next';
import { UseTranslationOptions, UseTranslationResponse } from 'react-i18next';

export const useCommonTranslate = (
    options?: UseTranslationOptions<string> | undefined
): UseTranslationResponse<'common', undefined> => {
    return useTranslation('common', options);
};

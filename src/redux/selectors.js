export const selectCurrencies = (state) => state.currencies.items;

export const selectIsLoading = (state) => state.currencies.isLoading;

export const selectError = (state) => state.currencies.error;

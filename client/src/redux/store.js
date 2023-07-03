import cartReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const stripe = require('stripe')('sk_test_51NPP3aSBiYBRLzfpzruU5bhIKX57hP1G9DjBWMdmpepgsEZc5SV1wOlOpOBSibNrFO3QLhLwDNicT2NhzYvED3Yd00lx1Alqh6');
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
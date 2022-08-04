import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { favoritesReducer } from '../features/favorites/favoritesSlice';
import { staffReducer } from '../features/staff/staffSlice';
import { teamsReducer } from '../features/teams/teamSlice';
import { statsReducer } from '../features/stats/statsSlice';
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const config = {
  key: "root",
  storage: AsyncStorage,
  debug: true,
};

export const store = configureStore({
  reducer: persistCombineReducers(config, {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    favorites: favoritesReducer,
    staff: staffReducer,
    teams: teamsReducer,
    stats: statsReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([logger]),
});


export const persistor = persistStore(store);
// console.log(store.getState())

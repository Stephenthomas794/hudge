import { persistStore } from "redux-persist";
import Store from "./" 

export const persistedStore = persistStore(Store);
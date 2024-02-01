import { configureStore } from "@reduxjs/toolkit";
import autorizationDataReducer from "./reducers/autorizationData";
import errorListReducer from "./reducers/errorList";
import registerReducer from "./reducers/registerReducer";
import userLocation from "./reducers/userLocation";
import spinnerReducer from "./reducers/spinnerReducer";
import logsReducer from "./reducers/logsReducer";

export const store = configureStore({
  reducer: {
    registerData: registerReducer,
    errorList: errorListReducer,
    autorizationData: autorizationDataReducer,
    userLocationData: userLocation,
    spinnerStatus: spinnerReducer,
    logsData: logsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

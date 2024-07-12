"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({ children }) {
    const storeRef = useRef(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }
    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={storeRef.current.__persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}

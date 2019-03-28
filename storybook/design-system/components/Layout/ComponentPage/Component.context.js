import { createContext } from 'react';

export const ComponentContext = createContext({});

export const ComponentProvider = ComponentContext.Provider;
export const ComponentConsumer = ComponentContext.Consumer;

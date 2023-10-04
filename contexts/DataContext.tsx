'use client';

import React, { createContext, useContext, useState } from 'react';

type DataType = {
  providerName: string;
  planName: string;
};

type DataContextType = {
  data: null | DataType;
  setData: React.Dispatch<React.SetStateAction<null | DataType>>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<null | DataType>(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

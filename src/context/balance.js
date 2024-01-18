/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';

export const BalanceContext = createContext({
  balance: 0,
  balanceOperation: () => {},
});

export function BalanceProvider({ children }) {
  const [balance, setBalance] = useState(0);
  const startBalance = 50;

  useEffect(() => {
    const balanceLocal = JSON.parse(
      localStorage.getItem('@probasorte/balance')
    );
    if (balanceLocal) {
      setBalance(balanceLocal);
    } else {
      setBalance(startBalance);
    }
  }, [balance]);

  function balanceOperation() {
    setBalance((state) => {
      if (state <= 0) {
        localStorage.setItem('@probasorte/balance', startBalance);
        return startBalance;
      }
      localStorage.setItem('@probasorte/balance', state - 1);
      return state - 1;
    });
  }

  return (
    <BalanceContext.Provider
      value={{
        balance,
        balanceOperation,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
}

/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import { supabase } from '../supabase/supabase-client';

export const BalanceContext = createContext({
  balance: 0,
  setBalance: () => {},
});

export function BalanceProvider({ children }) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function initialBalanceValue() {
      try {
        const { data: dataSession, error: errorSession } =
          await supabase.auth.getSession();
        if (errorSession) throw errorSession;
        if (!dataSession) throw new Error('Erro ao receber dados de usuário');

        const { data: dataProfile, error: errorProfile } = await supabase
          .from('profiles')
          .select('balance')
          .eq('id', dataSession.session.user.id)
          .single();
        if (errorProfile) throw errorProfile;
        if (!dataProfile) throw new Error('Erro ao receber dados de perfil');

        setBalance(dataProfile.balance);
      } catch (error) {
        console.log(error);
      }
    }
    initialBalanceValue();
  }, []);

  return (
    <BalanceContext.Provider
      value={{
        balance,
        setBalance,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
}

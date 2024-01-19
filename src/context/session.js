/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import { supabase } from '../supabase/supabase-client';

export const SessionContext = createContext({
  session: null,
  user: null,
  setSession: () => {},
  setUser: () => {},
});

export function SessionProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getSession() {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (!data) {
          setSession(null);
          setUser(null);
          throw new Error('Erro ao carregar sessão');
        }

        setSession(data.session);
        const { data: dataProfile, error: errorProfile } = await supabase
          .from('profiles')
          .select()
          .eq('id', data.session.user.id)
          .single();
        if (errorProfile) throw errorProfile;
        if (!dataProfile) {
          throw new Error('Erro ao carregar perfil');
        }
        setUser({ user: data.session.user, profile: dataProfile });
      } catch (error) {
        console.log(error.message);
      }
    }
    getSession();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        session,
        user,
        setSession,
        setUser,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

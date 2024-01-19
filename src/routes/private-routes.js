/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
  const [session, setSession] = useState(
    JSON.parse(localStorage.getItem('sb-jmbhidtiryugxuxdhqax-auth-token')) ||
      null
  );
  useEffect(() => {
    const sessionLocal = JSON.parse(
      localStorage.getItem('sb-jmbhidtiryugxuxdhqax-auth-token')
    );
    if (sessionLocal) {
      setSession(sessionLocal);
    } else {
      setSession(null);
    }
  }, []);
  return session ? children : <Navigate to="/login" />;
}

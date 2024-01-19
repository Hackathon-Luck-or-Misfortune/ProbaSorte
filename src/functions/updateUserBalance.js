/* eslint-disable consistent-return */
import { supabase } from '../supabase/supabase-client';

export async function updateUserBalance(user, balance) {
  try {
    if (balance < 0) {
      throw new Error('Saldo insuficiente');
    }
    const { error, status, data } = await supabase
      .from('profiles')
      .update({
        balance,
      })
      .eq('id', user.id);
    if (error) throw error;
    return { status, data, balance };
  } catch (error) {
    return { error };
  }
}

/* eslint-disable consistent-return */
import { supabase } from '../supabase/supabase-client';

export async function createUserLuck(luck) {
  try {
    const { error, status, data } = await supabase.from('lucks').insert(luck);
    if (error) throw error;
    return { status, data };
  } catch (error) {
    return { error };
  }
}

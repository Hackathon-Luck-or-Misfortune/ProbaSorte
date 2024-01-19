/* eslint-disable consistent-return */
import { supabase } from '../supabase/supabase-client';

export async function getUserLucks(user) {
  try {
    const {
      error: errorSelect,
      data,
      status,
      count,
      statusText,
    } = await supabase
      .from('lucks')
      .select()
      .eq('user_id', user.id)
      .order('created_at', {
        ascending: false,
      });
    if (errorSelect) {
      throw errorSelect;
    }
    if (data) {
      return { status, data, count, statusText };
    }
  } catch (error) {
    return { error };
  }
}

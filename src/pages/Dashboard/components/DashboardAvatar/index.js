import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import * as Avatar from '@radix-ui/react-avatar';
import { supabase } from '../../../../supabase/supabase-client';
import { SessionContext } from '../../../../context/session';

export default function DashboardAvatar() {
  // eslint-disable-next-line operator-linebreak
  const linkStyle =
    'block font-normal text-sm py-1 hover:border-none hover:outline-none';
  const navigate = useNavigate();
  const { setSession, setUser, user } = useContext(SessionContext);

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setSession(null);
      setUser(null);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger asChild>
          <Avatar.Root className="cursor-pointer bg-blue_main inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full align-middle border-2 border-blue_main outline-none">
            <Avatar.Image
              src={user && user.user.user_metadata.picture}
              alt="Avatar da sua conta"
              className="h-full w-full rounded-[inherit] object-cover"
            />
            <Avatar.Fallback
              className="h-full w-full bg-blue_main text-white text-sm font-bold flex justify-center items-center"
              delayMs={0}
            >
              P
            </Avatar.Fallback>
          </Avatar.Root>
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="rounded z-[100] p-5 w-[200px] bg-blue_main text-white"
            sideOffset={10}
            alignOffset={-80}
          >
            <div className="mb-2">
              <span className="block text-sm font-bold">
                {user && user.profile.full_name}
              </span>
              <span className="block text-xs">{user && user.user.email}</span>
            </div>
            <Menubar.Separator className="h-[1px] w-full bg-sky-400 my-[5px]" />
            <Menubar.Item asChild>
              <button
                type="button"
                disabled
                className={`${linkStyle} opacity-55`}
                href="/"
              >
                Comprar sorte
              </button>
            </Menubar.Item>
            <Menubar.Item asChild>
              <button
                type="button"
                disabled
                className={`${linkStyle} opacity-55`}
                href="/"
              >
                Editar perfil
              </button>
            </Menubar.Item>
            <Menubar.Item asChild>
              <button
                type="button"
                onClick={handleSignOut}
                className={linkStyle}
                href="/"
              >
                Sair
              </button>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}

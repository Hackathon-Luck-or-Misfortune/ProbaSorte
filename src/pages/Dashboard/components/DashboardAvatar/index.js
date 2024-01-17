import * as Menubar from '@radix-ui/react-menubar';
import * as Avatar from '@radix-ui/react-avatar';
import avatarImg from '../../../../assets/images/Avatar.png';

export default function DashboardAvatar() {
  // eslint-disable-next-line operator-linebreak
  const linkStyle =
    'block font-normal text-sm py-1 hover:border-none hover:outline-none';

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger asChild>
          <Avatar.Root className="cursor-pointer bg-blue_main inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full align-middle border-1 border-blue_main outline-none">
            <Avatar.Image
              src={avatarImg}
              alt="Avatar da sua conta"
              className="h-full w-full rounded-[inherit] object-cover"
            />
            <Avatar.Fallback
              className="h-full w-full bg-blue_main text-white text-lg font-bold flex justify-center items-center"
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
            alignOffset={0}
          >
            <div className="mb-4">
              <span className="block text-sm font-bold">Ana Maria</span>
              <span className="block text-xs">aninha@gmail.com</span>
            </div>
            <Menubar.Separator className="h-[1px] bg-sky-400 m-[5px]" />
            <Menubar.Item asChild>
              <a className={linkStyle} href="/">
                Comprar sorte
              </a>
            </Menubar.Item>
            <Menubar.Item asChild>
              <a className={linkStyle} href="/">
                Editar perfil
              </a>
            </Menubar.Item>
            <Menubar.Item asChild>
              <a className={linkStyle} href="/">
                Sair
              </a>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}

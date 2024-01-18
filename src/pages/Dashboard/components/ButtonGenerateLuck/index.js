import { Link } from 'react-router-dom';
import * as Menubar from '@radix-ui/react-menubar';
import IconPlus from '../../../../components/Icons/IconPlus';
import IconLuck from '../../../../components/Icons/IconLuck';
import IconStatistic from '../../../../components/Icons/IconStatistic';

export default function ButtonGenerateLuck() {
  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger className="bg-blue_main flex gap-1 items-center rounded-lg text-white px-4 py-2.5">
          <IconPlus size={16} className="fill-white" /> Gerar Sorte
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="rounded z-[100] w-[200px] py-2 bg-blue_main text-white flex flex-col"
            sideOffset={10}
            alignOffset={-55}
          >
            <Menubar.Item asChild>
              <Link
                to="/dashboard/amulets"
                className="py-2 px-4 flex gap-2 items-center hover:border-none hover:outline-none"
              >
                <IconLuck size={16} className="fill-white" /> Com amuletos
              </Link>
            </Menubar.Item>
            <Menubar.Item asChild>
              <Link
                to="/dashboard/statistic"
                className="py-2 px-4 flex gap-2 items-center hover:border-none hover:outline-none"
              >
                <IconStatistic size={16} className="fill-white" /> Com
                Estatística
              </Link>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}

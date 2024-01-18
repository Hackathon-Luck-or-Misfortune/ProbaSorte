// index.jsx
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './index.css';
import { faqData } from '../../mock/faq';

export default function AccordionFAQ() {
  return (
    <ul className="flex flex-col gap-3">
      {faqData.map((faqItem) => (
        <li>
          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Header>
                <Accordion.Trigger className="AccordionTrigger flex justify-between bg-blue_main p-4 rounded-lg transition-all hover:opacity-75 text-blue_lightest font-bold items-center w-full">
                  <span>{faqItem.title}</span>
                  <ChevronDownIcon className="AccordionChevron" aria-hidden />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="AccordionContent p-2 bg-blue_lightest">{faqItem.description}</Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </li>
      ))}
    </ul>

  );
}

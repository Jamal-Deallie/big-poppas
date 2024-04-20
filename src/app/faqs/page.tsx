import { faqItems } from '../../data/faqItems';

import { AccordionGroup } from '../../components';

export default function FaqsPage() {
  return (
    <main className='py-30 px-4 lg:px-20'>
      <AccordionGroup data={faqItems} />
    </main>
  );
}

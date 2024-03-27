import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Props = {
  specs: string[];
};

export default function TabSection({ specs }: Props) {
  return (
    <Tabs defaultValue='description' className='w-[400px] my-10'>
      <TabsList>
        <TabsTrigger value='description'>Description</TabsTrigger>
        <TabsTrigger value='reviews'>Reviews (0)</TabsTrigger>
      </TabsList>
      <TabsContent
        value='description'
        className='font-montserrat text-[--clr-font] mt-8'
      >
        <h3>Specification</h3>
        <ul className='ml-2 leading-loose'>
          {specs.map((spec, idx) => (
            <li key={idx}>
              {idx + 1}. {spec}
            </li>
          ))}
        </ul>
      </TabsContent>
      <TabsContent
        value='reviews'
        className='font-montserrat text-[--clr-font] mt-8'
      >
        No reviews available.
      </TabsContent>
    </Tabs>
  );
}

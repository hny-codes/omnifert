import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  header: string;
  contact: string;
  icon: ImageMetadata;
};

export default function ContactCard({ header, contact, icon }: Props) {
  return (
    <Card className='bg-[#F0F4E8] py-10 max-w-[370px] w-full h-[362px]'>
      <CardHeader className='grid grid-rows-[120px_50px_1fr] justify-center items-center justify-items-center pb-4'>
        <div className='bg-white rounded-full p-4 min-h-[100px] min-w-[100px] drop-shadow-[0_5px_10px_rgba(106,150,31,0.2)] flex justify-center items-center'>
          <img
            src={icon.src}
            alt=''
            className='mx-auto'
            width={41}
            height={41}
          />
        </div>
        <CardTitle className='text-[--clr-green-03] font-gothamRounded font-medium text-3xl pt-6'>
          {header}
        </CardTitle>
      </CardHeader>
      <CardContent className='text-center'>
        <p className='font-montserrat text-xl text-[#474747]'>{contact}</p>
      </CardContent>
    </Card>
  );
}

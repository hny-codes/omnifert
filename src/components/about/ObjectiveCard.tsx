import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  title: string;
  body: string;
  image: ImageMetadata;
};

export default function ObjectiveCard({ title, body, image }: Props) {
  return (
    <Card className='bg-transparent border-none shadow-none grid grid-cols-[auto_minmax(0,_1fr)] gap-2'>
      <div className='bg-[--clr-green-02] p-4 w-fit h-fit rounded-xl mt-8'>
        <img src={image.src} alt={`${title} icon`} />
      </div>
      <div className='grid grid-rows-none md:grid-rows-[125px_1fr] lg:grid-rows-[100px_1fr]'>
        <CardHeader>
          <CardTitle className='font-gothamRounded text-[--clr-green-03] text-[1.375rem]'>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='font-montserrat text-[--clr-font] text-sm leading-loose'>
            {body}
          </p>
        </CardContent>
      </div>
    </Card>
  );
}

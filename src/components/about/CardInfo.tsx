import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  title: string;
  body: string;
  headerImg: ImageMetadata;
  icon: ImageMetadata;
};

export default function CardInfo({ title, body, headerImg, icon }: Props) {
  return (
    <Card className='bg-[--clr-white-02] max-w-[343.33px] relative mt-52 text-center sm:h-[248.89px] w-full'>
      <img
        className='absolute -z-10 -top-48 lg:right-8'
        src={headerImg.src}
        alt={`${title}`}
      />
      <CardHeader className='relative pt-16'>
        <div className='bg-white w-fit p-6 rounded-full absolute left-1/2 -translate-x-1/2 -top-12'>
          <img className='' src={icon.src} alt={`${title} icon`} />
        </div>
        <CardTitle className='text-[--clr-green-03] font-gothamRounded'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='font-montserrat'>{body}</p>
      </CardContent>
    </Card>
  );
}

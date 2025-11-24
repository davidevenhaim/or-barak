import Image from "next/image";

const PotraitImage = () => (
  <div className='relative w-full aspect-[3/4] md:aspect-[2/3]'>
    <div className='absolute inset-0 border-2 border-zinc-700/50 p-2 md:p-4'>
      <div className='relative w-full h-full overflow-hidden bg-zinc-900'>
        <Image
          src='/images/or-primary.jpg'
          alt='Or Barak'
          fill
          className='object-cover grayscale contrast-110'
          priority
        />
      </div>
    </div>
  </div>
);

export default PotraitImage;

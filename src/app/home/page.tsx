// import Image from 'next/image';
// import { Logo } from '';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        {/* <Image
          className='dark:invert'
          src='/images/AStore-logo.svg'
          alt='Store logo'
          width={300}
          height={300}
          priority
        /> */}

        {/* <Logo /> */}

        <h1>Test store</h1>
        <p>Welcome to my test store!</p>
        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <a
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            href='/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Check my products
          </a>
          <a
            className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
            href='/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Random thing to redirect!
          </a>
        </div>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='/'
          target='_blank'
          rel='noopener noreferrer'
        >
          One →
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Two →
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Yay! →
        </a>
      </footer>
    </div>
  );
}

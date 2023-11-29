import Logo from '@/app/ui/logo';
import Link from 'next/link';
import { inter } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      {/* logo */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-800 p-4 md:h-20">
        <Logo />
      </div>
      {/* introduce */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-10">
          <p
            className={`${inter.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            Welcome to QuickBook. <br />
            This is a project powered by Next.js and React brought to you by{' '}
            <a href="https://github.com/subutian" className="text-blue-500">
              Brian Su,
            </a>
            a dedicated Front-end Developer. Dive in and explore!
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}

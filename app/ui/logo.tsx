import { lusitana } from '@/app/ui/fonts';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[40px]">QuickBook</p>
    </div>
  );
}

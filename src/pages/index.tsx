import Image from "next/image";
import Link from "next/link";
import NavbarMobile from '@/components/NavbarMobile';
import NavbarDesktop from '@/components/NavbarDesktop';

export default function Home() {
  return (
    <>
      <NavbarMobile activePage="index" />
      <NavbarDesktop />
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
        <div>
          
          <Link href="/recipes">
          Recipes  
          </Link>
          <br></br>
          <Link href="/restaurants">Restaurants</Link>
        </div>
      </main>
    </>
  );
}

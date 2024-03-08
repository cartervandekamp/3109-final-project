import React from 'react';
import NavbarMobile from '@/components/NavbarMobile';
import NavbarDesktop from '@/components/NavbarDesktop';
import DoughnutChart from '@/components/DoughnutChart'; 
import PolarChart from '@/components/PolarChart';

export default function Home() {
  return (
    <>
      <NavbarMobile activePage="info" />
      <NavbarDesktop />
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
        <div> 
          <DoughnutChart />
          <PolarChart />
        </div>
      </main>
    </>
  );
}

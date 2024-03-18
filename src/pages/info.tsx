import React from 'react';
import NavbarMobile from '@/components/NavbarMobile';
import NavbarDesktop from '@/components/NavbarDesktop';
import DoughnutChart from '@/components/DoughnutChart'; 
import PolarChart from '@/components/PolarChart';
import styles from '../styles/info.module.css'; 

export default function Home() {
  return (
    <>
      <NavbarMobile activePage="info" />
      <NavbarDesktop />
      <main className={styles.main}>
        <div className="chart-container flex justify-between w-full">
        <div className={styles.titleContainer}>
          <h1>Food insecurity has always been a major issue amongst Canadian Families</h1>
          <h2>Culinary Compass would like to shed light on some of the statistics provided by StatCan</h2>
        </div>
          <br></br>
        <div className={styles.chartContainer}>
          <h3>Food Insecurity: Who is most at risk? </h3>
          <h4>Senior-led households have lower rates of food insecurity. According to Statcan, the age of the major income earner played a role in the likelihood of food insecurity, with senior-led households being less likely to report food insecurity. </h4>
          <div className="chart-item" style={{ width: "100%" }}>
            <DoughnutChart />
          </div>
          <br></br>
          <h3>Food insecurity was higher among Indigenous families, racialized communities and immigrant families </h3>
          <h4>On average, food insecurity among Indigenous families tended to be higher as well as racialized families. Immigrant families were also more likely to report food insecurity compared to the Canadian-born.  </h4>
          <div className="chart-item" style={{ width: "100%" }}>
            <PolarChart />
          </div>
        </div>
        </div>
      </main>
    </>
  );
}

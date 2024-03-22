import Image from "next/image";
import Link from "next/link";
import NavbarMobile from '@/components/NavbarMobile';
import NavbarDesktop from '@/components/NavbarDesktop';
import React from "react";
import HomePageRecipe from "@/components/HomePageRecipe";

import styles from '@/styles/home.module.css';
import HomePageRestaurant from "@/components/HomePageRestaurant";



export default function Home() {
  return (
    <>
      <NavbarMobile activePage="index" />
      <NavbarDesktop />
      <main className={styles.main}>
  
        <div className={styles.primaryContainer}>
        <div className={styles.titleContainer}>
          <h2>Hey there,</h2>
          <h1>What's on the menu today?</h1>
          </div>
          <div className={styles.recipeContainer}>
          <h3 className={styles.featuredText}>Featured Recipes</h3>
          <HomePageRecipe/>
          <h3 className={styles.featuredText}>Featured Restaurants</h3>
          <HomePageRestaurant/>
          </div>
        </div>
      </main>
    </>
  );
}

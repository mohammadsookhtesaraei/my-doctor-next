import Image from "next/image";

import notFoundImage from "@/assets/illustrations/not-found.svg";

import GlobalSearchBox from "@/components/global-search-box/GlobalSearchBox";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.writings}>
        <div className={styles.status}>404</div>
        <h1>صفحه ی مورد نظر شما پیدا نشد</h1>
        <p>
          با عرض پوزش، لطفاً از طریق کادر جستجو، پزشک یا مرکز درمانی مورد نظر
          خود را جستجو کنید.
        </p>
      </div>
      <div className={styles.visuals}>
        <Image src={notFoundImage} alt="" />
      </div>
      <div className={styles.search}>
        <GlobalSearchBox />
      </div>
    </div>
  );
}

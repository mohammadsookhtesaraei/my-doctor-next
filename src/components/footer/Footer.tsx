import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";
import idkLogo from "@/assets/logo/idk.svg";
import enamadLogo from "@/assets/logo/enamad.svg";
import certificateLogo from "@/assets/logo/certificate.svg";

import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>دکتر من</div>
        <div className={styles.description}>
          تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان های
          ایران
        </div>
      </div>

      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="/">
              <Image src={idkLogo} alt="idkLogo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={certificateLogo} alt="certificateLogo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="enamadLogo" />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="" target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <MingcuteYoutubeFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمام حقوق مادی و معنوی این وبسایت،خدمات و محتوای مربوط به آن متعلق به من
        می باشد
      </p>
    </footer>
  );
}

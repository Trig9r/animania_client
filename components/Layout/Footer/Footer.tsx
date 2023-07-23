/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';

import {
  EmailIcon,
  FBIcon,
  InstagramIcon,
  MarkerIcon,
  PhoneIcon,
  VKIcon,
  YtbIcon
} from '@/components/Icons';
import applePayIcon from '@/public/images/apple-pay.png';
import googlePayIcon from '@/public/images/google-pay.png';
import masterCardIcon from '@/public/images/master-card.png';
import visaCartIcon from '@/public/images/visa.png';

import styles from './styles.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__container}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top__item}>
          <span className={styles.footer__logo_red}>Ani</span>
          <span className={styles.footer__logo}>mania</span>

          <div className={styles.footer__copyright__info}>
            <p>
              Все видео на сайте представлены исключительнов информационных целях и не требуют
              скачивания
            </p>
            <p>Техническая поддержка и помощь пользователям:animania.support@gmail.com</p>
            <p>
              Этот сайт защищен системой reCAPTCHA, не нарушает политику конфидициальности Google и
              условия предоставления услуг
            </p>
          </div>
        </div>

        <div className={styles.footer__top__inner}>
          <div className={styles.footer__top__item}>
            <h3 className={styles.footer__top__item__title}>Меню</h3>

            <ul className={styles.footer__top__item__list}>
              <li className={styles.footer__top__item__list__item}>
                <Link href='/anime/top-100' className={styles.footer__top__item__list__item__link}>
                  Топ 100
                </Link>
              </li>

              <li className={styles.footer__top__item__list__item}>
                <Link href='/anime/random' className={styles.footer__top__item__list__item__link}>
                  Случайная
                </Link>
              </li>

              <li className={styles.footer__top__item__list__item}>
                <Link href='/anime/catalog' className={styles.footer__top__item__list__item__link}>
                  Каталог
                </Link>
              </li>

              <li className={styles.footer__top__item__list__item}>
                <Link href='/anime/wiki' className={styles.footer__top__item__list__item__link}>
                  Wiki
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer__top__item}>
            <h3 className={styles.footer__top__item__title}>Все сезоны</h3>

            <ul className={styles.footer__top__item__list}>
              <li className={styles.footer__top__item__list__item}>
                <Link href='/anime/top-100' className={styles.footer__top__item__list__item__link}>
                  Зимний сезон
                </Link>
              </li>

              <li className={styles.footer__top__item__list__item}>
                <Link href='/anime/random' className={styles.footer__top__item__list__item__link}>
                  Весенний сезон
                </Link>
              </li>

              <li className={styles.footer__top__item__list__item}>
                <Link href='/anime/catalog' className={styles.footer__top__item__list__item__link}>
                  Летний сезон
                </Link>
              </li>

              <li className={styles.footer__top__item__list__item}>
                <Link href='/anime/wiki' className={styles.footer__top__item__list__item__link}>
                  Осенний сезон
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__top__item}>
          <h3 className={styles.footer__top__item__title}>Контакты</h3>

          <ul className={`${styles.footer__top__item__list} ${styles.footer__top__item__contacts}`}>
            <li className={styles.footer__top__item__list__item}>
              <Link href='/contacts' className={styles.footer__top__item__list__item__link}>
                <span>Наш адрес: </span>
                <span>г. Череповец, ул. ... д. ...</span>
                <span>
                  <MarkerIcon />
                </span>
              </Link>
            </li>

            <li className={styles.footer__top__item__list__item}>
              <a href='tel:+78005553535' className={styles.footer__top__item__list__item__link}>
                <span>Наш контактный телефон: </span>
                <span>+ 7(800) 555-35-35</span>
                <span>
                  <PhoneIcon />
                </span>
              </a>
            </li>

            <li className={styles.footer__top__item__list__item}>
              <a
                href='mailto:info@animania.com.ru'
                className={styles.footer__top__item__list__item__link}
              >
                <span>Email: </span>
                <span>info@animania.com.ru</span>
                <span>
                  <EmailIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom__block}>
          <div className={styles.footer__bottom__block__left}>
            <h3 className={styles.footer__bottom__block__title}>Мы принимаем к оплате:</h3>
            <ul className={styles.footer__bottom__block__pay}>
              <li className={styles.footer__bottom__block__pay__item}>
                <Image src={applePayIcon} alt='applePayIcon' />
              </li>
              <li className={styles.footer__bottom__block__pay__item}>
                <Image src={googlePayIcon} alt='googlePayIcon' />
              </li>
              <li className={styles.footer__bottom__block__pay__item}>
                <Image src={masterCardIcon} alt='masterCardIcon' />
              </li>
              <li className={styles.footer__bottom__block__pay__item}>
                <Image src={visaCartIcon} alt='visaCartIcon' />
              </li>
            </ul>
          </div>
          <div className={styles.footer__bottom__block__right}>
            <h3 className={styles.footer__bottom__block__title}>Мы в соцсетях:</h3>
            <ul className={styles.footer__bottom__block__social}>
              <li className={styles.footer__bottom__block__social__item}>
                <VKIcon />
              </li>
              <li className={styles.footer__bottom__block__social__item}>
                <FBIcon />
              </li>
              <li className={styles.footer__bottom__block__social__item}>
                <InstagramIcon />
              </li>
              <li className={styles.footer__bottom__block__social__item}>
                <YtbIcon />
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer__bottom__block}>
          <p className={styles.footer__bottom__block__copyright}>© «Анимания» 2023</p>
        </div>
      </div>
    </div>
  </footer>
);

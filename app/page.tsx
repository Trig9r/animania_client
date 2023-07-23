/* eslint-disable import/no-extraneous-dependencies */
import Image from 'next/image';

import { MerchCards, NewAnimeCards, NewsCard, ResponsiveCircle } from '@/components';
import { PlayIcon } from '@/components/Icons';
import { Footer, Header } from '@/components/Layout';
import { Button } from '@/components/UI';
import merchTitle from '@/public/images/merch.png';
import newText from '@/public/images/new.png';
import newsText from '@/public/images/news.png';
import noragamiBg from '@/public/images/noragami-bg.png';
import springSeason from '@/public/images/spring-season.png';

import styles from './page.module.css';

const Home = () => (
  <>
    <Header />
    <main className='container'>
      <div className={styles.slogan__container}>
        <h2 className={styles.slogan__text}>Оживи свой мир с Аниме</h2>
        <div className={styles.tagline__text}>
          <p>Насыщенный мир аниме: от захватывающих приключений до трогательных эмоций</p>
          <p>Все здесь, для вас</p>
        </div>
      </div>

      <div className={styles.play_btn__container}>
        <Button classnames={styles.play_btn}>
          <PlayIcon />
        </Button>
        <div className={styles.new_title__container}>
          <span className={styles.new_title__date}>23.06.2023</span>
          <h3 className={styles.new_title__text}>
            <p>Новый сезон</p>
            <p>Бездомный Бог</p>
          </h3>
        </div>
      </div>

      <div className={styles.anime_counter__container}>
        <span className={styles.anime_counter} />
        <span className={styles.anime_counter} />
        <span className={`${styles.anime_counter} ${styles.anime_counter_active}`} />
        <span className={styles.anime_counter} />
      </div>

      <div className={styles.new_title__container}>
        <div className={styles.title__text__container}>
          <Image src={newText} alt='newText' />
          <h2 className={styles.title__text__small}>Новинки</h2>
        </div>

        <div className={styles.new_title__cards__container}>
          <NewAnimeCards />
        </div>
      </div>

      <div className={styles.news__container}>
        <div className={styles.news__text__container}>
          <Image src={newsText} alt='newsText' />
          <h2 className={styles.title__text__small}>Новости</h2>
        </div>

        <div className={styles.news__cards__container}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>

      <div className={styles.spring__season__container}>
        <div className={styles.title__text__container}>
          <Image src={springSeason} alt='springSeason' />
          <h2 className={styles.title__text__small}>Весенний сезон</h2>
        </div>

        <div className={styles.new_title__cards__container}>
          <NewAnimeCards />
        </div>
      </div>

      <div className={styles.merch__container}>
        <div className={styles.title__text__container}>
          <Image src={merchTitle} alt='merch' />
          <h2 className={styles.title__text__small}>Наш мерч</h2>
        </div>

        <div className={styles.new_title__cards__container}>
          <MerchCards />
        </div>
      </div>
    </main>
    <Footer />

    <ResponsiveCircle key='circle1' x={-110} y={229} classnames={styles.circle1} />
    <ResponsiveCircle key='circle2' x={800} y={117} classnames={styles.circle2} />
    <Image className={styles.img__person} src={noragamiBg} alt='img' />
    <div className={styles.background__image} />
  </>
);

export default Home;

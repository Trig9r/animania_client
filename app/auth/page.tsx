/* eslint-disable react/function-component-definition */

'use client';

import React, { MutableRefObject } from 'react';

import { SignInForm, SignUpForm } from '@/components/Forms';

import styles from './page.module.css';

export default function Auth() {
  const switchCtn = React.useRef() as MutableRefObject<HTMLDivElement>;
  const switchC1 = React.useRef() as MutableRefObject<HTMLDivElement>;
  const switchC2 = React.useRef() as MutableRefObject<HTMLDivElement>;
  const aContainer = React.useRef() as MutableRefObject<HTMLDivElement>;
  const bContainer = React.useRef() as MutableRefObject<HTMLDivElement>;

  const switchForm = () => {
    switchCtn.current.classList.add(styles.is_gx);

    setTimeout(() => switchCtn?.current.classList.remove(styles.is_gx), 1500);

    switchCtn.current.classList.toggle(styles.is_txr);

    switchC1.current.classList.toggle(styles.is_hidden);
    switchC2.current.classList.toggle(styles.is_hidden);
    aContainer.current.classList.toggle(styles.is_txl);
    bContainer.current.classList.toggle(styles.is_txl);
    bContainer.current.classList.toggle(styles.is_z200);
  };

  return (
    <div className={styles.main}>
      <div
        className={`${styles.container} ${styles.a_container}`}
        id='a-container'
        ref={aContainer}
      >
        <div className={styles.container__inner}>
          <SignUpForm switchForm={switchForm} />
        </div>
      </div>
      <div
        className={`${styles.container} ${styles.b_container}`}
        id='b-container'
        ref={bContainer}
      >
        <div className={styles.container__inner}>
          <SignInForm />
        </div>
      </div>
      <div className={styles.switch} id='switch-cnt' ref={switchCtn}>
        <div className={styles.switch__container} id='switch-c1' ref={switchC1}>
          <h2 className={`${styles.switch__title} ${styles.title}`}>Дабро пожаловать!</h2>
          <p className={`${styles.switch__description} ${styles.description}`}>
            Чтобы оставаться с нами на связи, пожалуйста, войдите под своей учётной записью
          </p>
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button} ${styles.switch_btn}`}
          >
            Войти
          </button>
        </div>
        <div
          className={`${styles.switch__container} ${styles.is_hidden}`}
          id='switch-c2'
          ref={switchC2}
        >
          <h2 className={`${styles.switch__title} ${styles.title}`}>Привет, дружище!</h2>
          <p className={`${styles.switch__description} ${styles.description}`}>
            Введите свои личные данные и начните просмотр с нами
          </p>
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button} ${styles.switch_btn}`}
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  );
}

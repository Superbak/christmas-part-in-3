'use client';
import Image from 'next/image';
import victory_img from '../img/victory.png';
import victory_style from './victory.module.css';

export default function Home() {
  return (
    <Image src={victory_img} className={victory_style.victoryImg} alt="vicotry" />
  )
}

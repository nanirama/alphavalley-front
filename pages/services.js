import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Testimonials from '../components/Home/Testimonial'
import Cta from '../components/Home/Cta'

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
     <Hero />
     <Features />
     <Testimonials />
     <Cta />
    </div>
    </Layout>
  )
}

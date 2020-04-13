import React from 'react';

// containers
import Header from '@/containers/home/Header';
import About from '@/containers/home/About';
import Skills from '@/containers/home/Skills';
import Portfolio from '@/containers/home/Portfolio';
import Contact from '@/containers/home/Contact';

function Home() {
  return (
    <section id="#home" style={styles}>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </section>
  );
}

const styles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
};
export default Home;

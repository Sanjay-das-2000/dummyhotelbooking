import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Questions from './Questions';
import Review from './Review';

export default function Home() {
  return (
    <div>
      <Header />
      <Review />
      <Questions />
      <Footer />
    </div>
  )
}

import React from 'react';
import Header from '../components/Header';


const appStyle = {
  backgroundColor: "#fafafa",
  height: "600px"
}

export default function Home() {
  return (
    <div className='app' style={appStyle}>
      <Header />
    </div>
  )
}
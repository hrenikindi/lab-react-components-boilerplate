import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/GallaryFooter';
import DataComponent from './components/DataComponent';

function App() {
  const data = DataComponent();

  return (
    <div>
      <Header />
      <Body data={data} />
      <Footer />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import "./Home.css";
import Footer from "../../components/footer/Footer";

function Home() {
  const [imageList, setImageList] = useState([]);

  const initializeImageList = () => {
    let auxImageList = []
    for (let i = 0; i < 200; i++) {
      auxImageList.push({ src: "/vite.svg" })
    }
    setImageList([...auxImageList]);
  }

  useEffect(() => {
    initializeImageList();
  }, [])

  return (
    <>
      <Header />
      {
        imageList.map((i, index) => (
          <div key={index}><img src="/vite.svg" alt="react" /></div>
        ))
      }
      <Footer/>
    </>
  )
}

export default Home;
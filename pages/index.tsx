import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from './components/Navbar'
import WhyChoose from './components/WhyChoose'
import Manga from './components/Manga'
import MangaTokenomics from './components/MangaTokenomics'
import TelegramBot from './components/TelegramBot'
import AIPoints from './components/AIPoints'
import Partners from './components/Partners'
import AIComunity from './components/AIComunity'
import StartGuide from './components/StartGuide'
import GetInvolved from './components/GetInvolved'
import MangaAI from './components/MangaAI'
import FirstMangaAI from './components/FirstMangaAI'
import Slider from './components/Slider'
import MangaAiSlider from './components/MangaAiSlider'
import WhyChooseSlider from './components/WhyChooseSlider'
import MangaMobiloe from './components/MangaMobiloe'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

<>
      <Navbar/>

      <FirstMangaAI/>
      <WhyChooseSlider/> 
      <WhyChoose/>
      

      <Manga/>
      <MangaMobiloe/>

      <MangaTokenomics/>

      <TelegramBot/>

      <AIPoints/>
      <MangaAiSlider/>

      <Partners/>

      <AIComunity/>

      <StartGuide/>
      
      <Slider/>
      <GetInvolved/>

      <MangaAI/>

     

      
      

</>
  )
}

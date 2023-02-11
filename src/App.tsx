import { useState } from 'react'
import { icons } from 'react-icons/lib'
import "./App.css"
import { SideBarMenu } from './Components/sideBar/SideBarMenu'
import { SideBarMenuCard, SideBarMenuItem } from './Components/sideBar/Types/types'
import { FcAbout, FcBusiness, FcAddressBook, FcHome } from 'react-icons/fc'

import abouticon from "./assets/IconImg/chat_service_icon.png"

import profileImage from './assets/Img/MyPhoto.jpg'
import Social from './Components/home/Social'
import Hom from './Components/home/Hom'
import { About } from './Components/about/About'
import Skills from './Components/skills/Skills'
import Services from './Components/services/Services'
import Qualifications from './Components/qualifications/Qualifications'
import Contact from './Components/contact/Contact'
import { Footer } from './Components/footer/Footer'




function App() {
  const items:SideBarMenuItem[] = [
    {
      id:'1',
      label: 'Home',
      icon: FcHome,
      url: "#home",
    },
    {
      id:'2',
      label: 'About',
      icon: FcAbout,
      url: "#about",
    },
    {
      id:'3',
      label: 'Projects',
      icon: FcBusiness,
      url: "./Cmpo",
    },
    {
      id:'4',
      label: 'Contact',
      icon: FcAddressBook,
      url: "#contact",
    },{
      id:'5',
      label: 'Projects',
      icon: FcBusiness,
      url: "./Cmpo",
    },
    {
      id:'6',
      label: 'Contact',
      icon: FcAddressBook,
      url: "#contact",
    },
  ];

  const card: SideBarMenuCard = {
    id: "card01",
    displayName: "",
    title: "",
    photoUrl: profileImage,
    Url: "/"
  };
  return (
  <div>
    <SideBarMenu items={items} card={card}></SideBarMenu>
    
    <Hom></Hom>
    <About></About>
    <Skills></Skills>
    <Services></Services>
    <Qualifications></Qualifications>
    <Contact></Contact>
    <Footer></Footer>
  </div>
  );
}

export default App

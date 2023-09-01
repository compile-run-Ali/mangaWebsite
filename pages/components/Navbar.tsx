import React,{useState} from 'react'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
   
    <>
       <div className=' '>
          <nav className="navbar navbar-inverse shadow-md shadow-[#524656] bg-main-gray">
            <div className="container-fluid text-white">

              <div className="navbar-header flex">
                <a className="navbar-brand" href="/"><img src="./images/navp1.svg" alt="error" /></a>
              </div>
              
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""} >
                <li>Home</li>
                <li>Manga Ai Bot</li>
                <li>Manga NFT</li>
                <li>$MANGA</li>
                <li>Tutorial</li>
                <li>Documentation</li>
              </ul>
            </div>
          </nav>
        </div>

    </>
  )
}

export default Navbar

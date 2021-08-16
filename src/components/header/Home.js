import React from 'react'
import './home.css';
// import image from './login.png';

function Home() {
    return (
        <div className='home_container'>
            <h1 className='heading'>Welcome Harry !</h1>
            <section className='intro_section'>
                <div className="intro_card">
                    <h2>Introduction to Robotics</h2>
                    <div className='information'>
                        <div className="topics">
                            <h3>TOPICS COVERED</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis illo culpa odit eveniet hic? Beatae ducim</p>
                        </div>
                        <div className="tools">
                            <h3>Tools</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum harum optio quam!</p>
                        </div>
                        <button className='btn'>READ MORE</button>
                    </div>
                </div>
                <div className="image">
                    {/* <img src={image} alt="" /> */}
                </div>
            </section>
            <section className='intro_section_reverse'>
                <div className="intro_card_reverse">
                    <h2>Introduction to Robotics</h2>
                    <div className='information'>
                        <div className="topics">
                            <h3>TOPICS COVERED</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis illo culpa odit eveniet hic? Beatae ducim</p>
                        </div>
                        <div className="tools">
                            <h3>Tools</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum harum optio quam!</p>
                        </div>
                        <button className='btn'>READ MORE</button>
                    </div>
                </div>
                <div className="image">
                    {/* <img src={image} alt="" /> */}
                </div>
            </section>
            <section className='intro_section'>
                <div className="intro_card">
                    <h2>Introduction to Robotics</h2>
                    <div className='information'>
                        <div className="topics">
                            <h3>TOPICS COVERED</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis illo culpa odit eveniet hic? Beatae ducim</p>
                        </div>
                        <div className="tools">
                            <h3>Tools</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum harum optio quam!</p>
                        </div>
                        <button className='btn'>READ MORE</button>
                    </div>
                </div>
                <div className="image">
                    {/* <img src={image} alt="" /> */}
                </div>
            </section>
            <section className='intro_section_reverse'>
                <div className="intro_card_reverse">
                    <h2>Introduction to Robotics</h2>
                    <div className='information'>
                        <div className="topics">
                            <h3>TOPICS COVERED</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis illo culpa odit eveniet hic? Beatae ducim</p>
                        </div>
                        <div className="tools">
                            <h3>Tools</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum harum optio quam!</p>
                        </div>
                        <button className='btn'>READ MORE</button>
                    </div>
                </div>
                <div className="image">
                    {/* <img src={image} alt="" /> */}
                </div>
            </section>
            <footer className='footer'>
                <div className="footer_left">
                    <div className="footer_logo">
                        <img src="" alt="icon"/>
                        <h1 className='footer_logo_heading'>CodesandBots</h1>
                    </div>
                    <div className="footer_icon">
                        <i class="fab fa-twitter fa-3x"></i>
                        <i class="fab fa-facebook-square fa-3x"></i>
                        <i class="fab fa-instagram-square fa-3x"></i>
                        <i class="fab fa-linkedin fa-3x"></i>
                    </div>
                    <div className="footer_subscribe">
                        <input type="text" className='footer_input'/>
                        <button className='footer_btn'>Subscribe</button>
                    </div>
                </div>
                <div className="footer_right">
                    <h2>CONTACT US</h2>
                    <h3 className='contact'>Phone:</h3>
                    <h3 className='contact'>Email:</h3>
                </div>
            </footer>
        </div>
    )
}

export default Home

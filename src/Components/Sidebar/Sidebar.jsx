import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({Sidebar , category,seCategory}) => {
  return (

    <div className={`sidebar ${Sidebar?"":"small-sidebar"}`}>
        <div className="sortcut-link">
            <div className={`side-link ${category==0?"active":""}`}  onClick={()=>seCategory(0)}>
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className={`side-link ${category==20?"active":""}`}  onClick={()=>seCategory(20)}>
                <img src={game_icon } alt="" /><p>Gaming</p>
            </div>
            <div className={`side-link ${category==2?"active":""}`}  onClick={()=>seCategory(2)} >
                <img src={automobiles} alt="" /><p>Automibiles</p>
            </div>
            <div className={`side-link ${category==17?"active":""}`}  onClick={()=>seCategory(17)}>
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className={`side-link ${category==24?"active":""}`}  onClick={()=>seCategory(24)}>
                <img src={entertainment} alt="" /><p>Entertainments</p>
            </div>
            <div className={`side-link ${category==28?"active":""}`}  onClick={()=>seCategory(28)}>
                <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className={`side-link ${category==10?"active":""}`}  onClick={()=>seCategory(10)}>
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className={`side-link ${category==22?"active":""}`}  onClick={()=>seCategory(22)}>
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            <div className={`side-link ${category==25?"active":""}`}  onClick={()=>seCategory(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr /> 
        </div>
        <div className="subsribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={jack} alt="" /><p>Pewdipie</p>
            </div>
            <div className="side-link">
                <img src={simon} alt="" /><p>Mr Beats</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="" /><p>Justin bieber</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" /><p>5-minus craft</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>naxt day</p>
            </div>
        </div>

    </div>
  )
}

export default Sidebar
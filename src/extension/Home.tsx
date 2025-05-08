import rotateSvg from '../assets/rotate.svg';
import darkLightSwitchSvg from '../assets/circle-half-stroke.svg';
import extToDesktopSvg from '../assets/ext-to-desktop.svg';
import logoutSvg from '../assets/logout.svg';
import browserSvg from '../assets/firefox.svg';

import IconButton from '../components/buttons/IconButton/IconButton';
import BookmarkFileItem from '../components/custom/BookmarkFileItem/BookmarkFileItem';
import './Home.css';


function Home() {
    return (
        <>
            <section id="top">
                <IconButton onClick={() => alert('Clicked!')} src={rotateSvg} alt="Rotate logo" />
                <div>
                    <IconButton onClick={() => alert('Clicked!')} src={extToDesktopSvg} alt="Extension to desktop logo" />
                    <IconButton onClick={() => alert('Clicked!')} src={darkLightSwitchSvg} alt="Dark Light Switch logo" />
                    <IconButton onClick={() => alert('Clicked!')} src={logoutSvg} alt="Logout logo" />
                </div>
            </section>
            <div className="divider" />
            <section id="content" className='container fill-space'>
                <div className="bookmarkFileList">
                    <BookmarkFileItem browserIcon={browserSvg} name="Bookmark 1" lastUpdate="02/05/2025 15:00"/>
                </div>
                <button style={{maxWidth:600, width:"100%", margin:"0 auto"}}>Set up by Default</button>
            </section>
        </>
    )
}

export default Home;
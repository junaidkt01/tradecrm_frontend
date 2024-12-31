import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./OnBoard.css"
const responsive = {
    0: { items: 1 },
};

const item = [
    <div className="on-board">
        <div className='on-board-img' >
            <img src="./onBoard.png" alt="" />
        </div>
        <div className='on-board-content' >
            <h2>Master Your Trading with Powerful Investment Tools</h2>
            <p>Discover a seamless way to manage your investments and make informed trading</p>
        </div>
    </div>,
    <div className="on-board">
        <div className='on-board-img' >
            <img src="./onBoard.png" alt="" />
        </div>
        <div className='on-board-content' >
            <h2>Master Your Trading with Powerful Investment Tools</h2>
            <p>Discover a seamless way to manage your investments and make informed trading</p>
        </div>
    </div>,
    <div className="on-board">
        <div className='on-board-img' >
            <img src="./onBoard.png" alt="" />
        </div>
        <div className='on-board-content' >
            <h2>Master Your Trading with Powerful Investment Tools</h2>
            <p>Discover a seamless way to manage your investments and make informed trading</p>
        </div>
    </div>,
    <div className="on-board">
        <div className='on-board-img' >
            <img src="./onBoard.png" alt="" />
        </div>
        <div className='on-board-content' >
            <h2>Master Your Trading with Powerful Investment Tools</h2>
            <p>Discover a seamless way to manage your investments and make informed trading</p>
        </div>
    </div>,
]


const OnBoard = () => {
    return (
        <div className='on-boards' >
            <div className='auth-logo' >
                <img src="./logo.svg" alt="" />
            </div>
            <AliceCarousel responsive={responsive} items={item} mouseTracking controlsStrategy="alternate" disableButtonsControls />
        </div>
    )
}

export default OnBoard

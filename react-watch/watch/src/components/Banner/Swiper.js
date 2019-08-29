import React from 'react';
import ReactSwipe from 'react-swipe';
import "./Swiper.css"
export default class Swiper extends React.Component{
    render(){
        return (
            <div className="banner">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{ 
                        continuous: true,
                        auto:3000,
                        speed:100, 
                    }}
                        
                >
                    <div><img src="./assets/img/banner1.jpg" /></div>
                    <div><img src="./assets/img/banner2.jpg" /></div>
                    <div><img src="./assets/img/banner3.jpg" /></div>
                    <div><img src="./assets/img/banner4.jpg" /></div>
                </ReactSwipe>
            </div>
        )
    }
}

 

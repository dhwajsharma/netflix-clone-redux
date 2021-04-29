import React from 'react'
import "./Banner.css"

const Banner = () => {

    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + "..." : string;
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_butto">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(``, 150)}
                </h1>
            </div>
            <div className="banner-fadeBottom" />
        </header>
    )
}

export default Banner

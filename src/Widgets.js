import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle('Rajesh React is back', 'Top news - 9999 readers')}
            {newsArticle('Rajesh React is back', 'Top news - 9999 readers')}
            {newsArticle('Rajesh React is back', 'Top news - 9999 readers')}
            {newsArticle('Rajesh React is back', 'Top news - 9999 readers')}
            {newsArticle('Rajesh React is back', 'Top news - 9999 readers')}
            {newsArticle('Rajesh React is back', 'Top news - 9999 readers')}
            {newsArticle('Rajesh React is back', 'Top news - 9999 readers')}
            {newsArticle('Rajesh React is back', 'Top news - 9999 readers')}

        </div>
    )
}

export default Widgets

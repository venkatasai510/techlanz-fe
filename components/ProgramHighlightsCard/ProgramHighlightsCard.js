import React from 'react'
import style from "styles/Components/ProgramHighlightsCard/ProgramHighlightsCard.module.scss"
import SVGImages from "assets/images/index";

function ProgramHighlightsCard() {
    return (
        <div className={style.cardContainer}>
            <div className={style.header}>
                Hands-on with Hardware
            </div>
            <div className={style.highlightsItemContainer}>
                <div className={style.highlightitem}>
                    <img className={style.highlightIcon} src={SVGImages.icon1.src} alt='icon' />
                    <div>Hands on with actual BMS board </div>
                </div>
                <div className={style.highlightitem}>
                    <img className={style.highlightIcon} src={SVGImages.icon2.src} alt='icon' />
                    <div>Learn what goes inside a BMS board </div>
                </div>
                <div className={style.highlightitem}>
                    <img className={style.highlightIcon} src={SVGImages.icon3.src} alt='icon' />
                    <div>Develop and write your algo on board </div>
                </div>
                <div className={style.highlightitem}>
                    <img className={style.highlightIcon} src={SVGImages.icon4.src} alt='icon' />
                    <div>At you convenience of home </div>
                </div>

            </div>
        </div>
    )
}

export default ProgramHighlightsCard
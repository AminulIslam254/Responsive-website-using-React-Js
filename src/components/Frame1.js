import { makeStyles } from '@material-ui/core';
import React from 'react';
import Button from "../images/Button.png";


const usestyles = makeStyles(({

    txt1: {
        position: "relative",
        fontFamily: "Poppins",
        fontSize: 70,
        fontWeight: 300,
        letterSpacing: "-0.015em",
        textAlign: "center",
        top: -930,
        left: 0,
        color: "white",



    },
    txt2: {
        position: "relative",
        fontFamily: "Poppins",
        fontSize: 70,
        fontWeight: 700,
        letterSpacing: "-0.015em",
        textAlign: 'center',
        top: -994,
        left: 0,
        color: "white",
    },
    txt3: {
        position: "relative",
        top: -1047,
        left: 0,

        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 29.4318,
        lineHeight: "111.5%",
        textAlign: "center",
        letterSpacing: "-0.06em",

        color: "grey",
    },
    infobox1: {
        position: "relative",
        top: -1047,
        left: 0,
        boxSizing: " border-box",
        padding: "24px 27px",
        letterSpacing: "-0.06em",

        color: "grey",

        boxShadow: "inset 0px -1px 11px rgba(255, 255, 255, 0.17), inset 0px 2px 0px rgba(255, 255, 255, 0.24)",
        borderRadius: 8,
        maxWidth: 425,
        minHeight: 257,
        marginLeft: "auto",
        marginRight: 556,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    infobox2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        padding: 10,
        gap: 12,

        width: 371,
        height: 77,

        background: "rgba(0, 0, 0, 0.3)",
        borderRadius: 10,

        /* Inside auto layout */
        flex: "none",
        order: 1,
        alignSelf: "stretch",
        flexGrow: 0,
    },
    button1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "7px 16px",
        gap: 4,

        position: "relative",
        left: 0,
        top: -1000,

        maxWidth: 225,
        minHeight: 56,
        marginLeft: "auto",
        marginRight: 637,

        background: "#ECAB03",
        borderRadius: 4,
        cursor:"pointer",
    }


}));

const Frame1 = () => {


    const classes = usestyles();
    return (
        <>


            <h2 className={classes.txt1}>
                Unlock to
            </h2>


            <h2 className={classes.txt2}>
                Power your dreams!
            </h2>
            <h2 className={classes.txt3}>
                Stand a Chance to win <br/><span style={{ fontWeight: "700px", color: "white" }}>N 3,OOO,OOO</span> everyday for the next 5 days
            </h2>

            <div className={classes.infobox1}>
                <span style={{ alignSelf: "center" }}>How To Play</span>
                <p>
                    1.Guess the right combintion of numbers<br />
                    2.Win <span style={{ fontWeight: "700px", color: "white" }}>N3,OOO,OOO</span> instanstly
                    <br />
                    Sounds unbelievable? Well, guess right & see for yourself!

                </p>
                <div className={classes.infobox2}>
                    Think well before you guess. You have only 2 attempts per day and even after you wi, you can come back the next day to try for another jackpot!
                </div>
            </div>

            <img src={Button} alt="" className={classes.button1} />

        </>

    )
}

export default Frame1
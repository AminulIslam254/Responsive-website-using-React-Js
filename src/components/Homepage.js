import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import star1 from "../images/star-1.png"
import Image1 from "../images/Frame1.png"


const styles = makeStyles(({
    logo1: {
        position: "absolute",
        width: 40.24,
        height: 40,
        left: 104,
        top: 37,
        backgroundColor: "white",
        borderRadius: 10
    },
    logo2: {
        position: "absolute",
        width: 19.64,
        height: 16.32,
        top: 12.85,
        left: 10.29,

    },
    logo3: {
        position: "absolute",
        width: 19.64,
        height: 16.32,
        top: -25.15,
        left: 1.29,
        cursor: "pointer",
        color: "blue",
    },
    frame1: {
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 0,
        gap: 10,
        width: 97,
        height: 40,
        left: 1239,
        top: 37,
    }


}));



const Homepage = () => {

    const classes = styles();


    return (
        <>
            <Container maxWidth="xs">
                <div className={classes.logo1}>
                    <div className={classes.logo2}>
                        <h3 className={classes.logo3}>M</h3>
                    </div>
                </div>

                <img src={star1} alt="" style={{
                    position: "absolute",
                    width: 56.67,
                    height: 40,
                    left: 374,
                    top: 694
                }} />

                <img src={Image1} alt="" className={classes.frame1} />

            </Container>

        </>
    )
}

export default Homepage
import { Grid, Grow } from "@mui/material";
import Image from "next/image";
import React from "react";
import cloud_prac from "../public/cloud_prac.png";
import myPhoto from "../public/linkedinimage.jpg";
import ML from "../public/ML.png";
import SAA from "../public/SAA.png";



const Aboutme = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
            <Grow in={true} style={{ transformOrigin: "1 2 1" }} timeout={2000}>
                    <Image src={myPhoto} />
            </Grow>
            </Grid>
            <Grid item xs={3}>
            <Grow in={true} style={{ transformOrigin: "1 2 1" }} timeout={2000}>
                <div>
                    <Image src={cloud_prac} />
                </div>
            </Grow>
            </Grid>
            <Grid item xs={3}>
            <Grow in={true} style={{ transformOrigin: "1 2 1" }} timeout={2000}>
                <div>
                    <Image src={ML} />
                </div>
            </Grow>
            </Grid>
            <Grid item xs={3}>
            {/* <div ref={refToComponent}> */}
            <div>
                <Grow
                    in={true}
                    style={{ transformOrigin: "1 2 1" }}
                    timeout={2000}
                >
                    <div>
                        <Image src={SAA} />
                    </div>
                </Grow>
            </div>
            </Grid>
        </Grid>
    );
};

export default Aboutme;

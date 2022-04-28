import { Grid, Grow } from "@mui/material";
import Image from "next/image";
import React from "react";
import cloud_prac from "../public/cloud_prac.png";
import myPhoto from "../public/linkedinimage.jpg";
import ML from "../public/ML.png";
import SAA from "../public/SAA.png";

import styles from '../styles/Home.module.css';
import styled from 'styled-components'

const ImagePhoto = styled.div`
    border-radius:25%;
    overflow: hidden;
    width:10rem;
    justify-content:center;
    

    
`;

const Aboutme = () => {
    // const refToComponent = useRef(null);
    // useScrollReveal(refToComponent);
    //style={{ position: "fixed" }}>
    return (
        <Grid>
            <Grid container item xs={12} justifyContent={'center'}>
            <Grow in={true} style={{ transformOrigin: "1 2 1" }} timeout={2000}>
                    <ImagePhoto>
                    <Image src={myPhoto} />
                    </ImagePhoto>
            </Grow>
            </Grid>
            <Grid container justifyContent='center'>
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
        </Grid>
    );
};

export default Aboutme;

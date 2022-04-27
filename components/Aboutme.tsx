import { Grid, Grow } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import useScrollReveal from "../utils/Hooks";
import cloud_prac from "../public/cloud_prac.png";
import myPhoto from "../public/linkedinimage.jpg";
import ML from "../public/ML.png";
import SAA from "../public/SAA.png";
const Aboutme = () => {
    const refToComponent = useRef(null);
    // useScrollReveal(refToComponent);
    //style={{ position: "fixed" }}>
    return (
        <Grid item xs={12}>
            <Grow in={true} style={{ transformOrigin: "1 2 1" }} timeout={2000}>
                <div>
                    <Image src={myPhoto} />
                </div>
            </Grow>
            <Grow in={true} style={{ transformOrigin: "1 2 1" }} timeout={2000}>
                <div>
                    <Image src={cloud_prac} />
                </div>
            </Grow>
            <Grow in={true} style={{ transformOrigin: "1 2 1" }} timeout={2000}>
                <div>
                    <Image src={ML} />
                </div>
            </Grow>
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
    );
};

export default Aboutme;

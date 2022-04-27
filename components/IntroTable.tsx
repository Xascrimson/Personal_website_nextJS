import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import ContactMe from "./ContactMe";
const IntroTable = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
            <Typography>
                Hi I'm Danny - Software Engineer (Mid-level) - currently working
                at National Australia Bank (NAB) and welcome to my personal
                website. <br /> <br />
                Navigate below the links to learn more
            </Typography>
            </Grid>
            
            <Grid item xs={6}>
                <ul>
                    <li>
                        <Link href="#aboutMe">About Me</Link>
                    </li>
                    <br />
                    <li>
                        <a
                            href={"/DannyHuangCV.pdf"}
                            download="Danny Huang CV.pdf"
                        >
                            Resume
                        </a>
                    </li>
                    <br />
                    <li>
                        <Link href="#websiteArchitecture">
                            Website Architecture
                        </Link>
                    </li>
                    <br />
                    <li>
                        <Link href="#stock">
                            Algorithmic Trading Stock Portfolio
                        </Link>
                    </li>
                </ul>
            </Grid>
            <Grid item xs={6}>
                <ul>
                    <li>
                        <a href="https://github.com/xascrimson">Github</a>
                    </li>
                    <br />
                    <li>
                        <a href="https://www.linkedin.com/in/danny-huang-471220159/">
                            Linkedin
                        </a>
                    </li>
                    <br />
                    <li>
                        <a href="https://medium.com/@dannyhuangNZ">Medium</a>
                    </li>
                    <br />
                    <li>
                        <ContactMe />
                    </li>
                </ul>
            </Grid>
        </Grid>
    );
};

export default IntroTable;

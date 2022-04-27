import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import IntroTable from "../components/IntroTable";
import styles from "../styles/Home.module.css";
import Aboutme from "./../components/Aboutme";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            {/* <ReactRotatingText items={["first", "second", "third"]} /> */}

            <Head>
                <title>Danny's website</title>
                <meta
                    name="Danny's website"
                    content="A place for Danny to showcase his skills"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Grid container spacing={2}>
                    <Grid container direction={'column'} item xs={8}>
                        <IntroTable />
                    </Grid>
                    <Grid container direction={'column'} item xs={4}>
                        <Aboutme />
                    </Grid>
                </Grid>
            </main>
        </div>
    );
};

export default Home;

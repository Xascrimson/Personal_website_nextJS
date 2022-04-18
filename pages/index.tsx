import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import IntroTable from "../components/IntroTable";
import styles from "../styles/Home.module.css";
import Aboutme from './../components/Aboutme';


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
                    <Grid item xs={8}>
                        <IntroTable/>
                    </Grid>
                    <Grid item xs={4}>
                    <Aboutme/>
                    </Grid>
                </Grid>
            </main>
            {/* <main className={styles.main}> */}
            {/* <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div> */}
            {/* </main> */}
        </div>
    );
};

export default Home;

import Disconnected from "../components/Disconnected";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
// import type { NextPage } from "next";
import NavBar from "../components/Navbar";
import { useWallet } from "@solana/wallet-adapter-react";
import Connected from "../components/Connected";

const Home: NextPage = () => {
  const { connected } = useWallet();

  return (
    <div className={styles.container}>
      <Head>
        <title>Aryabhat NFT Minting App</title>
        <meta name="The NFT Collection for Smart Investors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected ? "" : "url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          <NavBar />

          <Spacer>
            <Center>
              {/* If connected, the second view, otherwise the first */}
              {connected ? <Connected /> : <Disconnected />}
            </Center>
          </Spacer>

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/sushant_prusty"
                target="_blank"
                rel="noopener noreferrer"
              >
                Build by Aryabhat Online
              </a>
            </Box>
          </Center>

          {/* <p>Hello world</p> */}
        </Stack>
      </Box>
    </div>
  );
};

export default Home;

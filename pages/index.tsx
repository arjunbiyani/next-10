/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import Head from 'next/head';
import Image from 'next/image';

const HomePage = () => (
      <div className="px-8 mt-10">
        <Head>
         <title>Bitclass</title>
        </Head>    
        <div className="mx-auto">
         <Image src={'/img/pattern_nextjs.png'} alt={"Picture of the author"} width={1080} height={810}/>
        </div>
      </div>
);

export default HomePage;
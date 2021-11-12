/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from '../src/components/footer/footer';
import Header from '../src/components/header/header';

const HomePage = () => (
        <Container maxWidth="xl">
          <Header />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
             NEXT 10 
          </Typography>
          <Link href="/about">
            LINK 
          </Link>
          <Footer />
        </Box>
      </Container>
);

export default HomePage;
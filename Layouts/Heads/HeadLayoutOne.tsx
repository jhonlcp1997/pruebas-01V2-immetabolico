import Head from 'next/head'
import React from 'react'

interface props {
  children: any;
  title: string;
}

export const HeadLayoutOne = ({children, title}:props) => {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>{title? title : "IMM"}</title>
        <meta name="IMM-INDEX" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      </Head>

      {children}
    </>
  )
}
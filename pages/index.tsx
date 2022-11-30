import Head from "next/head";
import Script from "next/script";
import { HeadLayoutOne } from "../Layouts/Heads/HeadLayoutOne";
import { ViewBlogs } from "../ui/blogs/ViewBlogs";
import { BannerMapOne } from "../ui/components/banners/BannerMapOne";
import { BannerOffOne } from "../ui/components/banners/BannerOffOne";
import { FooterOne } from "../ui/components/footers/FooterOne";
import { HeaderOne } from "../ui/components/headers/HeaderOne";
import { JumbotronOne } from "../ui/components/jumbotrons/JumbotronOne";
import { MainOne } from "../ui/components/MainOne";
import { SpanBarOne } from "../ui/components/spanBars/SpanBarOne";


export default function Home() {
  return (
    <>
      <HeadLayoutOne title="IMM">
        <HeaderOne />

        <MainOne />

        <SpanBarOne />

        <JumbotronOne />

        <BannerOffOne />

        <ViewBlogs />

        <BannerMapOne />

        <FooterOne />

        {/* 
        {/* <scrip src="../js/immfarma/menu.js"></script> */}
      </HeadLayoutOne>
    </>
  )
}

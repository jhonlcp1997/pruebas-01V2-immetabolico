import { HeadLayoutOne } from "../Layouts/Heads/HeadLayoutOne";
import { ViewBlogs } from "../ui/blogs/ViewBlogs";
import { BannerMapOne, BannerOffOne, FooterOne, HeaderOne, JumbotronOne, MainOne, SpanBarOne } from "../ui/components";


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

      </HeadLayoutOne>
    </>
  )
}

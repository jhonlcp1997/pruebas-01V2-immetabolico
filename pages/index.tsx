import { HeadLayoutOne } from "../Layouts/Heads/HeadLayoutOne";
import { ViewBlogs } from "../ui/blogs/ViewBlogs";
import { BannerMapOne, BannerOffOne, FooterOne, HeaderOne, JumbotronOne, MainOne, SpanBarOne } from "../ui/components";
import { FormContacUs } from "../ui/components/forms/FormContacUs";
import { SectionWhoWeAre } from "../ui/components/sections/SectionWhoWeAre";


export default function Home() {
  return (
    <>
      <HeadLayoutOne title="IMM">
        <HeaderOne />

        <MainOne />

        <SpanBarOne />

        {/* <SectionWhoWeAre /> */}

        <JumbotronOne />

        <BannerOffOne
          idOfferEvent={12}
          typeOffer="Oferta especial"
          percentDiscount="Descuento de 30%"
          descriptionOffer="Lorem lorem lorem lorem lorem lorem lorem"
          rootPage="index"
        />

        <ViewBlogs />

        <BannerMapOne />

        <FormContacUs />

        <FooterOne />

      </HeadLayoutOne>
    </>
  )
}

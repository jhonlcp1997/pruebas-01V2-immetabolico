import { HeadLayoutOne } from "../../Layouts/Heads/HeadLayoutOne";
import { LayoutProductOne } from "../../Layouts/Products/LayoutProductOne";
import { HeaderOne } from "../../ui/components";


export default function joung() {
  return (
    <>
      <HeadLayoutOne
        title="IMM Productos Jovenes"
      >
        <HeaderOne />

        <LayoutProductOne />

      </HeadLayoutOne>
    </>
  )
}

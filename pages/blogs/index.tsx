import { LayoutBlogOne } from '../../Layouts/Blogs/LayoutBlogOne'
import { HeadLayoutOne } from '../../Layouts/Heads/HeadLayoutOne'
import { HeaderOne } from '../../ui/components'



export default function index() {


  return (
    <>
      <HeadLayoutOne
        title="IMM Blogs"
      >
        <HeaderOne />

        <LayoutBlogOne />
      </HeadLayoutOne>
    </>
  )
}

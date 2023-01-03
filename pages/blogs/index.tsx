import { useRouter } from 'next/router';
import { LayoutBlogOne } from '../../Layouts/Blogs/LayoutBlogOne'
import { HeadLayoutOne } from '../../Layouts/Heads/HeadLayoutOne'
import { HeaderOne } from '../../ui/components'



export default function index() {

  const { push } = useRouter();
  
  push('/blogs/popular');

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

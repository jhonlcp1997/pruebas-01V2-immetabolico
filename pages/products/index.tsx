import { useRouter } from 'next/router'
import { HeadLayoutOne } from '../../Layouts/Heads/HeadLayoutOne'
import { LayoutProductOne } from '../../Layouts/Products/LayoutProductOne'
import { HeaderOne } from '../../ui/components/headers/HeaderOne'


export default function index() {

  const { push, query, isReady} = useRouter();
  
  push('/products/children');


  return (
    <>
      <HeadLayoutOne
        title="IMM Productos Niños"
      >
        <HeaderOne />

        <LayoutProductOne />

      </HeadLayoutOne>
    </>
  )
}

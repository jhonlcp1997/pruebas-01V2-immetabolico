import React from 'react'
import { HeadLayoutOne } from '../../Layouts/Heads/HeadLayoutOne'
import { HeaderOne } from '../../ui/components'
import { useRouter } from 'next/router'
import { useOneBlogFetch } from '../../hooks/useBlogFetch';
import Link from 'next/link';


export default function blog() {
  const router = useRouter();
  
  // const [idBlog, setidBlog] = useState<string | undefined>()
  const id = Number(router.query.id)
  const {datas} = useOneBlogFetch(id)
  
  return (
    <>
      <HeadLayoutOne
        title="IMM Blogs"
      >
        <HeaderOne />
        <div className="box" key={datas?.id}>
              <div className="image">
                <img src={datas?.imgBlog} alt={datas?.titleBlog} />
              </div>
              <div className="content">
                <div className="date">
                  <h3>{datas?.dayCreateBlog}</h3>
                  <span>{datas?.monthCreateBlog}</span>
                </div>
                <a href="#" className="user"><i className="fas fa-user"></i> por {datas?.authorBlog}</a>
                <a href="#" className="title">{datas?.titleBlog}</a>
                <div dangerouslySetInnerHTML={{ __html: datas ? datas.descriptionBlog : ''}} id='texto'></div>
                <Link href="/blogs" className="btn">Regresar</Link>
              </div>
            </div>
      </HeadLayoutOne>
    </>
  )
}

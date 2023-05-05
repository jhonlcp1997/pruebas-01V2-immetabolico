import React, { useEffect, useState } from 'react'
import { HeadLayoutOne } from '../../Layouts/Heads/HeadLayoutOne'
import { HeaderOne } from '../../ui/components'
import { useRouter } from 'next/router'
import { useOneBlogFetch } from '../../hooks/useBlogFetch';


export default function blog() {
  const rputer = useRouter();
  
  // const [idBlog, setidBlog] = useState<string | undefined>()
  // const id = Number(router.query.id)
  const {datas} = useOneBlogFetch(query.id)

  console.log((router.query.id))
  

  
  return (
    <>
      <HeadLayoutOne
        title="IMM Blogs"
      >
        <HeaderOne />
        {/* <div className="box" key={element.id}>
              <div className="image">
                <img src={element.imgBlog} alt={element.titleBlog} />
              </div>
              <div className="content">
                <div className="date">
                  <h3>{element.dayCreateBlog}</h3>
                  <span>{element.monthCreateBlog}</span>
                </div>
                <a href="#" className="user"><i className="fas fa-user"></i> por {element.authorBlog}</a>
                <a href="#" className="title">{element.titleBlog}</a>
                <p>{element.descriptionBlog}</p>
                <a href="blog/index.html" className="btn">leer mas...</a>
              </div>
            </div> */}
      </HeadLayoutOne>
    </>
  )
}

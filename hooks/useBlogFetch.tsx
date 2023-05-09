import axios from "axios"
import { useEffect, useState } from "react"
import { PropsBlogs } from "../interfaces/PropsBlog"

export const useBlogFetch = () => {

  const [datas, setDatas] = useState<PropsBlogs[]>()

  const getData = async()=>{

    const {data} = await axios.get('http://localhost:8000/api/blogs')
    setDatas(data)
  }

  useEffect(() => {
    getData()
  }, [])
  

  return {datas}
}

export const useOneBlogFetch = (id:number)=> {
  const [datas, setDatas] = useState<PropsBlogs>()

  const getBlog = async()=>{

    if(!id) return
    const {data} = await axios.get(`http://localhost:8000/api/blog/${id}`)
    if(!data) return
    setDatas(data)
  }

  useEffect(() => {
    getBlog();
  }, [id])
  

  return {datas}
}

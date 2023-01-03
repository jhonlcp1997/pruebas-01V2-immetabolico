import React from 'react'
import { LayoutBlogOne } from '../../Layouts/Blogs/LayoutBlogOne'
import { HeadLayoutOne } from '../../Layouts/Heads/HeadLayoutOne'
import { HeaderOne } from '../../ui/components'

export default function newest() {
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

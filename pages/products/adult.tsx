import React from 'react'
import { HeadLayoutOne } from '../../Layouts/Heads/HeadLayoutOne'
import { LayoutProductOne } from '../../Layouts/Products/LayoutProductOne'
import { HeaderOne } from '../../ui/components'

export default function adult() {
  return (
    <>
      <HeadLayoutOne
        title="IMM Productos Adultos"
      >
        <HeaderOne />

        <LayoutProductOne />

      </HeadLayoutOne>
    </>
  )
}

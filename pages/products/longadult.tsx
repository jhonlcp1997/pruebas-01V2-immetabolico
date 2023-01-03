import React from 'react'
import { HeadLayoutOne } from '../../Layouts/Heads/HeadLayoutOne'
import { LayoutProductOne } from '../../Layouts/Products/LayoutProductOne'
import { HeaderOne } from '../../ui/components'

export default function longadult() {
  return (
    <>
      <HeadLayoutOne
        title="IMM Productos Adultos Mayores"
      >
        <HeaderOne />

        <LayoutProductOne />

      </HeadLayoutOne>
    </>
  )
}

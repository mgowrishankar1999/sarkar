import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function AllcategoryFilterSkeleton() {
  return (
    <div>
         <Skeleton count={5} style={{margin:10}}          />
    </div>
  )
}

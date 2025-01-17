import React from 'react'
import { Fone1 } from '../../images'

export default function ImageSection() {
  return (
    <div>
        <div className="flex flex-col md:flex-row">
            <div className="flex md:flex-col w-1/2 md:w-1/3">
            <img src={Fone1}/>
            <img src={Fone1}/>
            </div>
            <div className="flex w-3/3 md:w-2/3">

            <img src={Fone1}/>
            </div>
        </div>
    </div>
  )
}

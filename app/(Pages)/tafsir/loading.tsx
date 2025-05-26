"use client"
import { ThreeCircles } from 'react-loader-spinner'

export default function loading() {
  return   <>
      <div className="loader center-element w-100">
        <ThreeCircles
          visible={true}
          height="60"
          width="60"
          color="#14aae2"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
}

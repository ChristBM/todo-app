import React, { useState } from "react"
import ContentLoader from "react-content-loader"

export function SkeletonLoaderHeader( props ) {

  const [ ancho ] = useState( props.ancho )

  return (
    <ContentLoader
      speed={ 0.5 }
      width={ ancho }
      height={ 80 }
      backgroundColor="#243441"
      foregroundColor="#3d4b56"
      {...props}
    >
    <rect x="0" y="0" rx="5" ry="5" width="500" height="80" />

    </ContentLoader>
  )
}

export function SkeletonLoaderCounter( props ) {

  const [ ancho ] = useState( props.ancho )

  return (
    <ContentLoader
      speed={ 0.5 }
      width={ ancho }
      height={ 60 }
      backgroundColor="#243441"
      foregroundColor="#3d4b56"
      {...props}
    >
    <rect x="0" y="0" rx="5" ry="5" width="410" height="60" />

    </ContentLoader>
  )
}

export function SkeletonLoaderList( props ) {

  const [ ancho ] = useState( props.ancho )

  return (
    <ContentLoader
    speed={ 0.5 }
    width={ ancho }
    height={ 480 }
    backgroundColor="#243441"
    foregroundColor="#3d4b56"
    {...props}
  >

    <rect x="0" y="0" rx="5" ry="5" width="410" height="500" />

  </ContentLoader>
  )
}

export function SkeletonLoaderButton( props ) {

  return (
    <ContentLoader
    speed={ 0.5 }
    width={ 30 }
    height={ 100 }
    backgroundColor="#243441"
    foregroundColor="#3d4b56"
    {...props}
  >

    <rect x="0" y="0" rx="5" ry="5" width="30" height="100" />

  </ContentLoader>
  )
}
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import layoutData from '../../content/global/index.json'

function Opengraph({
  title,
  description,
  isMainPage = false,
  data = layoutData,
  image = '/opengraph_image.png',
}) {
  const router = useRouter()
  const blogName = data.header.name
  const URL = 'https://mingportal0.github.io'

  return (
    <Head>
      <title>{isMainPage ? blogName : title + ' - ' + blogName}</title>
      <meta
        name="description"
        content={isMainPage ? blogName : description + ' - ' + blogName}
      />

      <meta property="og:url" content={URL + router.asPath} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={isMainPage ? blogName : title + ' - ' + blogName}
      />
      <meta
        property="og:description"
        content={isMainPage ? blogName : description + ' - ' + blogName}
      />
      <meta property="og:image" content={image} />
    </Head>
  )
}

export default Opengraph

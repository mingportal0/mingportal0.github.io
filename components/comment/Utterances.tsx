import React, { useRef } from 'react'
import useScript from '../../lib/useScript'
import { useTheme } from 'next-themes'

const Utterances: React.FC = () => {
  const comment = useRef(null)
  const { theme } = useTheme()

  const status = useScript({
    url: 'https://utteranc.es/client.js',
    theme: theme,
    issueTerm: 'pathname',
    repo: 'mingportal0/mingportal0.github.io',
    ref: comment,
  })

  return <section>{<div ref={comment}></div>}</section>
}

export default Utterances

import { useEffect, useState } from 'react'

//Utterances Script 로딩
const useScript = (params) => {
  const { url, theme, issueTerm, repo, ref } = params

  const [status, setStatus] = useState(url ? 'loading' : 'idle')

  //URL 변경 및 로딩 시
  useEffect(() => {
    if (!url) {
      setStatus('idle')
      return
    }

    let script = document.createElement('script')
    script.src = url
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute(
      'theme',
      theme === 'dark' ? 'github-dark' : 'github-light'
    )
    script.setAttribute('issue-term', issueTerm)
    script.setAttribute('repo', repo)

    // Add script to document body
    console.log('ref.current', ref.current)
    ref.current.appendChild(script)

    // store status of the script

    const setAttributeStatus = (event) => {
      setStatus(event.type === 'load' ? 'ready' : 'error')
    }

    script.addEventListener('load', setAttributeStatus)
    script.addEventListener('error', setAttributeStatus)
    return () => {
      // useEffect clean up
      if (script) {
        script.removeEventListener('load', setAttributeStatus)
        script.removeEventListener('error', setAttributeStatus)
      }
    }
  }, [url])

  useEffect(() => {
    const commentTheme = theme === 'dark' ? 'github-dark' : 'github-light'
    utterancesTheme(commentTheme)
  }, [theme])
  return status
}

const utterancesTheme = (theme) => {
  if (document.querySelector('.utterances-frame')) {
    const message = {
      type: 'set-theme',
      theme: theme,
    }
    const iframe = document.querySelector('.utterances-frame')
    iframe.contentWindow.postMessage(message, 'https://utteranc.es')
  }
}

export default useScript

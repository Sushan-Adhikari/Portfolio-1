import { useEffect } from 'react'

// Fades out the initial loading overlay once the page has fully loaded.
export function useHideLoadingScreen() {
  useEffect(() => {
    const hideLoading = () => {
      const loadingScreen = document.getElementById('loadingScreen')
      if (!loadingScreen) return
      window.setTimeout(() => {
        loadingScreen.classList.add('hidden')
      }, 80)
    }

    if (document.readyState === 'complete') {
      hideLoading()
    } else {
      window.addEventListener('load', hideLoading)
    }

    return () => window.removeEventListener('load', hideLoading)
  }, [])
}

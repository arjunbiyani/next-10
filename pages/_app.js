// import App from 'next/app'

export function reportWebVitals(metric) {
    switch (metric.name) {
      case 'FCP':
      
        break
      case 'LCP':
        break
      case 'CLS':
        break
      case 'FID':
        break
      case 'TTFB':
        break
      default:
        break
    }
  }
  
  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  

  export default MyApp

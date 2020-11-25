// import App from 'next/app'

export function reportWebVitals(metric) {
    switch (metric.name) {
      case 'FCP':
       console.log("#####FCP######");
        break
      case 'LCP':
        console.log("#####LCP######");
        break
      case 'CLS':
        console.log("#####CLS######");
        break
      case 'FID':
        console.log("#####FID######");
        break
      case 'TTFB':
        console.log("#####TTFB######");
        break
      default:
        break
    }
  }
  
  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  

  export default MyApp
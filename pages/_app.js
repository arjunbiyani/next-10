// import App from 'next/app'

export function reportWebVitals(metric) {
    switch (metric.name) {
      case 'FCP':
       console.log("#####FCP######");
       console.log(metric);
        break
      case 'LCP':
        console.log("#####LCP######");
        console.log(metric);
        break
      case 'CLS':
        console.log("#####CLS######");
        console.log(metric);
        break
      case 'FID':
        console.log("#####FID######");
        console.log(metric);
        break
      case 'TTFB':
        console.log("#####TTFB######");
        console.log(metric);
        break
      default:
        break
    }
  }
  
  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  

  export default MyApp
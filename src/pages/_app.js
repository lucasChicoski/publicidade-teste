/**
 * Caso queira configurar o body (css) é preciso criar esse arquivo neste modelo.
 */

import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
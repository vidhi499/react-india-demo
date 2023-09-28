import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GluestackUIProvider } from "@gluestack-ui/themed"

export default function App({ Component, pageProps }: AppProps) {
  return <GluestackUIProvider>
    <Component {...pageProps} />
  </GluestackUIProvider>
}

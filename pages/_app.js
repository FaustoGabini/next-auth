import "../styles/globals.css";
import { SessionProvider, sessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

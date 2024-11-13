import "../styles/globals.css";
import Head from "next/head";

//import des outils necessaires 1
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

//initialisation du store 2
const store = configureStore({
  reducer: {},
});

function App({ Component, pageProps }) {
  return (
    //Forniture des données du store pour toute l'app 3
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

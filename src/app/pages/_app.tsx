// // pages/_app.tsx
// import { useEffect } from 'react';
// import { AppProps } from 'next/app';
// import { Inter, Playfair_Display } from 'next/font/google';
// import '../styles/globals.css';

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
// });

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   variable: '--font-playfair',
// });

// function MyApp({ Component, pageProps }: AppProps) {
//   useEffect(() => {
//     // Any global initialization here
//   }, []);

//   return (
//     <main className={`${inter.variable} ${playfair.variable} font-sans`}>
//       <Component {...pageProps} />
//     </main>
//   );
// }

// export default MyApp;
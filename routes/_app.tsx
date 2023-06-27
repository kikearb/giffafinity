import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="es" className="min-h-full bg-black">
      <Head>
        <title>Guifaffinity</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700;800&display=swap');
        </style>
      </Head>
      <body className="bg-gradient-to-br from-blue via-pink to-yellow bg-no-repeat bg-cover min-h-[100vh] font-opensans">
        <main class="mx-auto max-w-screen-lg py-large px-base lg:px-large">
          <h1 class="mb-xlarge">
            <a href="/" class="inline-flex items-center gap-[14px]">
              <img src="/logo.svg" class="md:w-[55px] w-[32px]" alt="" />
              <span class="my-6 text-h3 md:text-h2 lg:text-h1 font-extrabold text-white uppercase">
                guifaffinity
              </span>
            </a>
          </h1>
          <Component />
        </main>
      </body>
    </html>
  );
}

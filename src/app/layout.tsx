import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Target Live",
  description: "Target Live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>

        <header className='header'>
          <div className='header__inner container'>
            <img src='./assets/target_live.png' alt='target-live' />
            <div className='header__inner__links'>
              <div className='header__inner__links__sections'>
                <a>Dates</a>
                <a>Artistes</a>
                <a>Contact</a>
              </div>
              <div className='header__inner__links__social'>
                <a href='https://www.instagram.com/targetlive.production/' target='_blank'>
                  <img src="./assets/instagram.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className='container'>{children}</div>
      </body>
    </html>
  );
}

import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Ahmet Ecevit",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ahmet Ecevit - Full Stack Developer</title>
        <link rel="icon" type="image/svg" href="./ae.svg" />
        <meta
          name="description"
          content="Merhaba, ben Ahmet Ecevit. React.js, Node.js, Flutter ve Next.js gibi çeşitli teknolojilerde deneyime sahip bir Full Stack Developer'ım. Web ve mobil uygulama geliştirme konusundaki uzmanlığım ile projelerinizi hayata geçirir ve kullanıcı deneyimini iyileştiririm. Siz de benimle çalışarak teknolojiyi etkili bir şekilde kullanarak işinizi büyütebilirsiniz.
"
        />
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />

        <Script id="ga-script" strategy="lazyOnload">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
        </Script>
      </head>
      <body className="w-[100%] h-[100vh] overflow-hidden">{children}</body>
    </html>
  );
}

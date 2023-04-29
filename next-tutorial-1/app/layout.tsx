import "./globals.css";

export const metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>My Nav bar</nav>
        {children}
      </body>
    </html>
  );
}
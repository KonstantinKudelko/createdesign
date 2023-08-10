import "./app.css";

export const metadata = {
  title: "Create Design",
  description: "Create design furniture website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

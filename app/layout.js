export const metadata = {
  title: "สุกี้ผีน้อย",
  description: "ระบบสั่งอาหารร้านบุฟเฟต์สุกี้ผีน้อย",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, 'Noto Sans Thai', sans-serif",
          background: "#fff7f0",
          color: "#2b1d16",
        }}
      >
        {children}
      </body>
    </html>
  );
}

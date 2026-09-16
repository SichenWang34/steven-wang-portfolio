import './globals.css';

export const metadata = {
  title: 'Steven Wang — Mechanical Engineering Portfolio',
  description: 'Mechanical engineering, CAD, robotics, testing, and product development portfolio.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

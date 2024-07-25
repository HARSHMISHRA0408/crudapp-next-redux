
import { Providers } from '../redux/provider';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className='bg-blue-400 m-3 p-5 rounded-md'>
            <h1 className='text-3xl flex justify-center'>Task Management App</h1>
          </header>
          <main className='m-3'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

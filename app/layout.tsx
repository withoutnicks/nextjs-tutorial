import '@/app/ui/global.css';
import { space } from '@/app/ui/fonts'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
	return (
		<html lang='en'>
      <head>
        <title>NextJS - Dashboard Tutorial</title>
        <link rel='icon' href='/favicon.svg' />
      </head>
			<body className={`${space.className} antialiased`}>{children}</body>
		</html>
	);
}

import '@/app/ui/global.css';
import { space } from '@/app/ui/fonts'

export default function RootLayout({children,}: {children: React.ReactNode;}) {
	return (
		<html lang='en'>
      <head>
        <title>NextJS - Dashboard Tutorial</title>
        <link rel='icon' href='/icon-page.svg' />
      </head>
			<body className={`${space.className} antialiased`}>{children}</body>
		</html>
	);
}

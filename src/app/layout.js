import Container from '@/components/Container'
import './globals.scss'

export const metadata = {
  title: 'Bibloo',
  description: 'Your card game with Bible',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  )
}

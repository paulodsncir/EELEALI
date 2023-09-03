import StyledJsxRegistry from './registry'
import GlobalStyle from 'app/styles/global'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <GlobalStyle />
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  )
}

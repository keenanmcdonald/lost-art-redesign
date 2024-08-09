import Header from '@/components/Header'
import { Box } from '@mui/material'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Box>{children}</Box>
    </>
  )
}

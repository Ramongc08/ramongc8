import Hero from '@/app/components/Hero'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'


export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 px-6 py-20 min-h-screen font-sans">
      <Hero />
      <Header />
      <Footer />
    </main>
  )
}

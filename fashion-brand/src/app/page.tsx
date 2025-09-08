import Header from '@/components/Header'
import PhotoGrid from '@/components/PhotoGrid'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-black mb-6 tracking-wide">
            MINIMALIST
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 tracking-wide">
            FASHION
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the beauty of simplicity through our curated collection
            of timeless pieces that transcend seasons and trends.
          </p>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section id="collections" className="py-16 bg-white">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-light text-black tracking-wider">
            FEATURED COLLECTIONS
          </h3>
          <div className="w-24 h-0.5 bg-black mx-auto mt-4"></div>
        </div>
        <PhotoGrid />
      </section>

      <Footer />
    </div>
  )
}

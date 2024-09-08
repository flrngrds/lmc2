import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-white min-h-screen">
      <header className="flex justify-between items-center p-4 md:p-6 max-w-5xl mx-auto">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-8" />
          <span className="font-semibold text-gray-800">La Machine Commerciale</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Notre produit</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Tarifs</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://calendly.com/lamachinecommerciale/30min" passHref>
            <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
              Réserver un appel
            </button>
          </Link>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <ChevronDown className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-gray-800">Notre produit</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Tarifs</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a>
          </nav>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Augmentez vos ventes B2B en automatisant votre prospection
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Grâce à l'automatisation de votre processus de prospection, vous éliminez les tâches répétitives et vous concentrez sur ce qui compte vraiment : la relation client et la conclusion de deals.
          </p>
          <Link href="https://calendly.com/lamachinecommerciale/30min" passHref>
            <button className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 text-lg">
              Réserver un appel
            </button>
          </Link>
        </section>

        <section className="mb-16">
          <img src="/placeholder.svg?height=600&width=800" alt="Dashboard" className="w-full rounded-lg shadow-lg" />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Augmentez vos ventes B2B en laissant la technologie gérer votre processus commercial
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-lg">
                <img src="/placeholder.svg?height=300&width=400" alt={`Feature ${i}`} className="w-full rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Feature Title {i}</h3>
                <p className="text-gray-600">Feature description goes here. Explain the benefits and functionality.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Clairs, nets et précis</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-4">3 199€</p>
              <Link href="https://calendly.com/lamachinecommerciale/30min" passHref>
                <button className="w-full px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 mb-4">
                  Réserver un appel
                </button>
              </Link>
              <ul className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Feature {i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-4">4 399€</p>
              <button className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 mb-4">
                Contacter l'équipe
              </button>
              <ul className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Feature {i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Seul et expérimenté</h2>
          <div className="flex items-center space-x-4 justify-center">
            <img src="/placeholder.svg?height=80&width=80" alt="Florian Gartioux" className="w-20 h-20 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold">Florian Gartioux</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
          </div>
        </section>

        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Vos questions, nos réponses</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b pb-4">
                <h3 className="text-xl font-semibold mb-2">Question {i}?</h3>
                <p className="text-gray-600">Answer to question {i} goes here. Provide clear and concise information.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Des questions supplémentaires ?</h2>
          <Link href="https://calendly.com/lamachinecommerciale/30min" passHref>
            <button className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 text-lg">
              Contactez-nous
            </button>
          </Link>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-8 mb-2" />
              <p className="text-sm text-gray-600">© 2023 La Machine Commerciale</p>
            </div>
            <div className="w-full md:w-2/3 flex flex-wrap justify-end">
              <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-8">
                <h4 className="font-semibold mb-2">Product</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><a href="#" className="hover:text-gray-800">Features</a></li>
                  <li><a href="#" className="hover:text-gray-800">Pricing</a></li>
                  <li><a href="#" className="hover:text-gray-800">FAQ</a></li>
                </ul>
              </div>
              <div className="w-full md:w-auto">
                <h4 className="font-semibold mb-2">Company</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><a href="#" className="hover:text-gray-800">About</a></li>
                  <li><a href="#" className="hover:text-gray-800">Contact</a></li>
                  <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

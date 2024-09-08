import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const calendlyLink = "https://calendly.com/lamachinecommerciale/30min";

  const chartData = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 30 },
    { month: 'Mar', value: 50 },
    { month: 'Apr', value: 45 },
    { month: 'May', value: 60 },
    { month: 'Jun', value: 55 },
  ];

  return (
    <div className="font-sans">
      <header className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/api/placeholder/32/32" alt="La Machine Commerciale" className="h-8 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Notre solution</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Tarifs</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
        </nav>
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="hidden md:block">
          <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-md">
            Planifiez une réunion →
          </button>
        </a>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 border-t border-gray-200">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-gray-900">Notre solution</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Tarifs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
          </nav>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="block mt-4">
            <button className="w-full bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-md">
              Planifiez une réunion →
            </button>
          </a>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4">
        <section className="text-center my-20">
          <h2 className="text-emerald-400 font-semibold mb-4">TPEs et PMEs</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Augmentez <span className="underline">vos ventes B2B</span> en<br />
            automatisant votre prospection.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Grâce à l'automatisation de votre processus de prospection, vous éliminez
            le travail répétitif. Concentrez-vous sur le closing, laissez la technologie
            s'occuper du reste.
          </p>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-6 py-3 rounded-md text-lg">
              Réservez votre appel
            </button>
          </a>
        </section>

        <section className="mb-20">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jen9o1dos9twx8s3-ajGa3C4y3C5BRRLXY3XBxFLDD5bkns.png"
            alt="La Machine Commerciale Dashboard - Email Automation Sequence"
            className="w-full rounded-lg shadow-lg"
          />
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">LES ÉTAPES</h2>
          <h3 className="text-xl text-center text-gray-600 mb-12">
            Augmentez vos ventes B2B en laissant la technologie gérer votre processus commercial
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "01. Création d'une base de prospects", description: "Nous créerons une base de plusieurs milliers d'entreprises et de leurs décisionnaires à contacter." },
              { title: "02. La prospection par email est automatisée", description: "Les prospects rentrent dans la séquence composée d'un email d'introduction et de 3 à 4 emails de relance." },
              { title: "03. Les interactions sont enregistrées dans le CRM", description: "Avec La Machine Commerciale, toutes les interactions seront enregistrées automatiquement." },
              { title: "04. Vous convertissez vos prospects en clients", description: "La machine commerciale va générer des réservations d'appels de qualification. À vous de jouer !" },
            ].map((step, index) => (
              <div key={index} className="bg-gray-800 text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Clairs, nets et précis</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Nos offres sont 100% personnalisées.<br />
            Un besoin spécifique ? Nous y répondrons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Basic", price: "3 199€", description: "La machine personnalisée" },
              { title: "Pro", price: "4 399€", description: "La machine ultime" },
            ].map((plan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="block">
                  <button className="w-full bg-emerald-400 hover:bg-emerald-500 text-white px-6 py-3 rounded-md">
                    Réservez un appel
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Chart</h2>
          <div className="w-full h-64 bg-white border border-gray-200 rounded-lg p-4">
            <div className="w-full h-full flex items-end justify-between">
              {chartData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="bg-emerald-400 w-8" 
                    style={{height: `${item.value}%`}}
                  ></div>
                  <span className="mt-2 text-sm text-gray-600">{item.month}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="mb-8 md:mb-0">
              <img src="/api/placeholder/32/32" alt="Logo" className="h-8 w-auto mb-4" />
              <p className="text-sm text-gray-600">© 2023 La Machine Commerciale</p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Features</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

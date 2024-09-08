import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const calendlyLink = "https://calendly.com/lamachinecommerciale/30min"

  return (
    <div className="bg-white min-h-screen font-sans">
      <header className="flex justify-between items-center p-4 md:p-6 max-w-7xl mx-auto border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-8" />
          <span className="font-semibold text-gray-800 text-lg">La Machine Commerciale</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">Notre solution</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Tarifs</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="hidden md:inline-block">
            <button className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300">
              Planifiez une réunion
            </button>
          </a>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 border-b border-gray-200">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-gray-800 py-2">Notre solution</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 py-2">Tarifs</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 py-2">FAQ</a>
            <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
              <button className="w-full px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300">
                Planifiez une réunion
              </button>
            </a>
          </nav>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Augmentez vos ventes B2B en automatisant votre prospection
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Grâce à l'automatisation de votre processus de prospection, vous éliminez les tâches répétitives et vous concentrez sur ce qui compte vraiment : la relation client et la conclusion de deals.
          </p>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300 text-lg font-semibold">
              Planifiez une réunion
            </button>
          </a>
        </section>

        <section className="mb-16">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jen9o1dos9twx8s3-ajGa3C4y3C5BRRLXY3XBxFLDD5bkns.png" 
            alt="La Machine Commerciale Dashboard - Email Automation Sequence" 
            className="w-full rounded-lg shadow-lg"
          />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            LES ÉTAPES
          </h2>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
            Augmentez vos ventes B2B en laissant la technologie gérer votre processus commercial
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-2">01. Création d'une base de prospects adaptée à votre typologie de clients</h4>
              <p className="text-gray-300">En premier lieu, nous créerons une base de plusieurs milliers d'entreprises et de leurs décisionnaires à contacter dans la séquence de prospection.</p>
              <img src="/placeholder.svg?height=200&width=300" alt="Création de base de prospects" className="w-full rounded-lg mt-4" />
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-2">02. La prospection par email est automatisée</h4>
              <p className="text-gray-300">Les prospects rentrent dans la séquence composée d'un email d'introduction et de 3 à 4 emails de relance. Les objectifs : Attirer l'attention de vos prospects, Présenter votre produit, service ou solution, Convertir les emails en appel ou réunion en ligne de qualification commerciale</p>
              <img src="/placeholder.svg?height=200&width=300" alt="Prospection par email automatisée" className="w-full rounded-lg mt-4" />
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-2">03. Les interactions sont enregistrées dans le CRM</h4>
              <p className="text-gray-300">Avoir un logiciel de Gestion de la Relation Client paramétré et propre est stratégique. Avec La Machine Commerciale, toutes les interactions seront enregistrées automatiquement.</p>
              <img src="/placeholder.svg?height=200&width=300" alt="Interactions enregistrées dans le CRM" className="w-full rounded-lg mt-4" />
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-2">04. Vous convertissez vos prospects en clients</h4>
              <p className="text-gray-300">La machine commerciale va générer des réservations d'appels de qualification. À vous de jouer !</p>
              <img src="/placeholder.svg?height=200&width=300" alt="Conversion des prospects en clients" className="w-full rounded-lg mt-4" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Clairs, nets et précis</h2>
          <p className="text-center mb-8 text-gray-600">
            Nos offres sont 100% personnalisées.<br />
            Un besoin spécifique ? Nous y répondrons.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Basic</h3>
              <p className="text-sm mb-4 text-gray-600">La machine personnalisée</p>
              <p className="text-4xl font-bold mb-4 text-gray-900">3 199€</p>
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                <button className="w-full px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300 mb-4">
                  Réservez un appel
                </button>
              </a>
              <ul className="space-y-2">
                {[
                  "Construction d'une base de plusieurs milliers de prospects (Entreprises + Contacts)",
                  "Création de l'adresse email de prospection",
                  "Warm-up de l'adresse email",
                  "Rédaction de la séquence d'emails (A/B testing de l'email 1 + 3 emails de relance)",
                  "Intégration et automatisation du CRM",
                  "Paramétrage d'un calendrier de réservation",
                  "1 an d'abonnement à Apollo",
                  "1 an d'abonnement à Google Workspace",
                  "Support",
                  "Documentation complète",
                  "Formation aux outils"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                    {index === 10 && <span className="ml-1 text-sm text-gray-500">(1 heure inclus)</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Pro</h3>
              <p className="text-sm mb-4 text-gray-600">La machine ultime</p>
              <p className="text-4xl font-bold mb-4 text-gray-900">4 399€</p>
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                <button className="w-full px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300 mb-4">
                  Réservez un appel
                </button>
              </a>
              <ul className="space-y-2">
                {[
                  "Construction d'une base de plusieurs milliers de prospects (Entreprises + Contacts)",
                  "Création de l'adresse email de prospection",
                  "Warm-up de l'adresse email",
                  "Rédaction de la séquence d'emails (A/B testing de l'email 1 + 3 emails de relance)",
                  "Intégration et automatisation du CRM",
                  "Paramétrage d'un calendrier de réservation",
                  "1 an d'abonnement à Apollo",
                  "1 an d'abonnement à Google Workspace",
                  "Support",
                  "Documentation complète",
                  "Formation aux outils",
                  "Création d'une page d'accueil personnalisée",
                  "Configuration avancée du CRM"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                    {index === 10 && <span className="ml-1 text-sm text-gray-500">(2 heures inclus)</span>}
                    {index === 11 && <span className="ml-1 text-sm text-gray-500">(1 an d'abonnement à Umso inclus)</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Seul et expérimenté</h2>
          <div className="flex items-center space-x-4 justify-center">
            <img src="/placeholder.svg?height=80&width=80" alt="Florian Gartioux" className="w-20 h-20 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Florian Gartioux</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
          </div>
        </section>

        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Vos questions, nos réponses</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b pb-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Question {i}?</h3>
                <p className="text-gray-600">Answer to question {i} goes here. Provide clear and concise information.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Des questions supplémentaires ?</h2>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300 text-lg font-semibold">
              Contactez-nous
            </button>
          </a>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-8 mb-2" />
              <p className="text-sm text-gray-600">© 2023 La Machine Commerciale</p>
            </div>
            <div className="w-full md:w-2/3 flex flex-wrap justify-end">
              <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-8">
                <h4 className="font-semibold mb-2 text-gray-900">Product</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><a href="#" className="hover:text-gray-800">Features</a></li>
                  <li><a href="#" className="hover:text-gray-800">Pricing</a></li>
                  <li><a href="#" className="hover:text-gray-800">FAQ</a></li>
                </ul>
              </div>
              <div className="w-full md:w-auto">
                <h4 className="font-semibold mb-2 text-gray-900">Company</h4>
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

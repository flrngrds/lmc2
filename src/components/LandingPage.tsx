import React, { useState } from 'react'
import { Menu, ChevronDown, ChevronUp, Check } from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const calendlyLink = "https://calendly.com/lamachinecommerciale/30min"

  const faqData = [
    { question: "Qu'est-ce que La Machine Commerciale ?", answer: "La Machine Commerciale est une solution d'automatisation de la prospection B2B qui vous aide à augmenter vos ventes en éliminant les tâches répétitives." },
    { question: "Comment fonctionne l'automatisation de la prospection ?", answer: "Notre système crée une base de prospects, automatise les séquences d'emails, enregistre les interactions dans un CRM, et génère des rendez-vous qualifiés pour votre équipe commerciale." },
    { question: "Combien de temps faut-il pour voir des résultats ?", answer: "Les résultats varient, mais la plupart de nos clients commencent à voir une augmentation des rendez-vous qualifiés dans les premières semaines d'utilisation." },
  ]

  return (
    <div className="bg-white min-h-screen font-sans">
      <header className="sticky top-0 z-50 bg-white shadow-lg pt-4">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20LMC-d4ESebyC6u3CkwWE6BILkfkQ82hqZ1.png" 
                alt="La Machine Commerciale" 
                className="h-8"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#les-etapes" className="text-gray-600 hover:text-gray-800">Notre solution</a>
              <a href="#nos-tarifs" className="text-gray-600 hover:text-gray-800">Tarifs</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-800">FAQ</a>
            </nav>
            <div className="hidden md:block">
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-2 bg-emerald-400 text-white rounded-full hover:bg-emerald-300 transition duration-300">
                  Planifiez une réunion →
                </button>
              </a>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white px-8 pt-2 pb-4 border-b border-gray-200">
          <nav className="flex flex-col space-y-2">
            <a href="#les-etapes" className="text-gray-600 hover:text-gray-800 py-2">Notre solution</a>
            <a href="#nos-tarifs" className="text-gray-600 hover:text-gray-800 py-2">Tarifs</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-800 py-2">FAQ</a>
          </nav>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="block mt-4">
            <button className="w-full px-4 py-2 bg-emerald-400 text-white rounded-full hover:bg-emerald-300 transition duration-300">
              Planifiez une réunion →
            </button>
          </a>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-8 lg:px-16">
        <section className="text-center py-20">
          <h2 className="text-emerald-400 font-semibold mb-4">TPEs et PMEs</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Augmentez <span className="underline">vos ventes B2B</span> en automatisant votre prospection.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Grâce à l'automatisation de votre processus de prospection, vous éliminez le travail répétitif. Concentrez-vous sur le closing, laissez la technologie s'occuper du reste.
          </p>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 bg-emerald-400 text-white rounded-full hover:bg-emerald-300 transition duration-300 text-lg font-semibold">
              Réservez votre appel
            </button>
          </a>
        </section>

        <section className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
          <div className="relative shadow-2xl rounded-lg overflow-hidden">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jen9o1dos9twx8s3-ajGa3C4y3C5BRRLXY3XBxFLDD5bkns.png" 
              alt="La Machine Commerciale Dashboard - Email Automation Sequence" 
              className="w-full"
            />
          </div>
        </section>

        <section className="mb-20 bg-gray-900 text-white p-8 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Vous êtes arrivé(e) sur cette page après avoir reçu un email ?
            </h2>
            <p className="text-xl mb-6">
              En fait, notre machine commerciale automatisée l'a fait pour nous !
            </p>
            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-emerald-400 text-white rounded-full hover:bg-emerald-300 transition duration-300 text-lg font-semibold">
                Demandez une consultation
              </button>
            </a>
          </div>
        </section>

        <section id="les-etapes" className="mb-20">
          <h2 className="text-2xl font-bold mb-2 text-emerald-400">
            LES ÉTAPES
          </h2>
          <h3 className="text-4xl font-bold mb-12 text-gray-900">
            Augmentez vos ventes B2B en laissant la technologie gérer votre processus commercial
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "01. Création d'une base de prospects adaptée à votre typologie de clients",
                description: "En premier lieu, nous créerons une base de plusieurs milliers d'entreprises et de leurs décisionnaires à contacter dans la séquence de prospection.",
              },
              {
                title: "02. La prospection par email est automatisée",
                description: "Les prospects rentrent dans la séquence composée d'un email d'introduction et de 3 à 4 emails de relance. Les objectifs : Attirer l'attention de vos prospects, Présenter votre produit, service ou solution, Convertir les emails en appel ou réunion en ligne de qualification commerciale",
              },
              {
                title: "03. Les interactions sont enregistrées dans le CRM",
                description: "Avoir un logiciel de Gestion de la Relation Client paramétré et propre est stratégique. Avec La Machine Commerciale, toutes les interactions seront enregistrées automatiquement.",
              },
              {
                title: "04. Vous convertissez vos prospects en clients",
                description: "La machine commerciale va générer des réservations d'appels de qualification. À vous de jouer !",
              }
            ].map((step, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg text-white">
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="nos-tarifs" className="mb-20">
          <h2 className="text-2xl font-bold mb-2 text-emerald-400">
            NOS TARIFS
          </h2>
          <h3 className="text-4xl font-bold mb-4 text-left text-gray-900">Clairs, nets et précis</h3>
          <p className="text-left mb-12 text-gray-600">
            Nos offres sont 100% personnalisées.<br />
            Un besoin spécifique ? Nous y répondrons.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left"></th>
                  <th className="p-4 text-center border border-gray-300 w-1/3">
                    <h4 className="text-2xl font-bold">Basic</h4>
                    <p className="text-sm text-gray-600">La machine personnalisée</p>
                    <p className="text-4xl font-bold my-4">3 199€</p>
                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="block">
                      <button className="w-full px-4 py-2 bg-emerald-400 text-white rounded-full hover:bg-emerald-300 transition duration-300">
                        Réservez un appel
                      </button>
                    </a>
                  </th>
                  <th className="p-4 text-center border border-gray-300 w-1/3">
                    <h4 className="text-2xl font-bold">Pro</h4>
                    <p className="text-sm text-gray-600">La machine ultime</p>
                    <p className="text-4xl font-bold my-4">4 399€</p>
                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="block">
                      <button className="w-full px-4 py-2 bg-emerald-400 text-white rounded-full hover:bg-emerald-300 transition duration-300">
                        Réservez un appel
                      </button>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
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
                  <tr key={index} className="border-b border-gray-300">
                    <td className="p-4 font-bold">
                      <div className="max-w-xs">{feature}</div>
                    </td>
                    <td className="p-4 text-center border-r border-gray-300">
                      {index < 11 ? <Check className="inline-block h-5 w-5 text-emerald-500" /> : 
                       index === 10 ? <span className="text-sm text-gray-500">1 heure inclus</span> : '-'}
                    </td>
                    <td className="p-4 text-center">
                      {index < 13 ? <Check className="inline-block h-5 w-5 text-blue-500" /> : '-'}
                      {index === 10 && <span className="text-sm text-gray-500">2 heures inclus</span>}
                      {index === 11 && <span className="text-sm text-gray-500">1 an d'abonnement à Umso inclus</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Vos questions, nos réponses</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Des questions supplémentaires ?</h2>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 bg-emerald-400 text-white rounded-full hover:bg-emerald-300 transition duration-300 text-lg font-semibold">
              Réservez un appel
            </button>
          </a>
        </section>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20LMC-d4ESebyC6u3CkwWE6BILkfkQ82hqZ1.png" alt="Logo" className="h-8 mb-2" />
              <p className="text-sm text-white">© 2023 La Machine Commerciale</p>
            </div>
            <div className="w-full md:w-2/3 flex flex-wrap justify-end">
              <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-12">
                <h4 className="font-semibold mb-2 text-white">Légal</h4>
                <ul className="text-sm text-white space-y-1">
                  <li><a href="https://lamachinecommerciale.com/confidentialite" className="hover:text-gray-300">Politique de confidentialité</a></li>
                  <li><a href="https://lamachinecommerciale.com/cgu" className="hover:text-gray-300">Conditions Générales d'Utilisation</a></li>
                  <li><a href="https://lamachinecommerciale.com/cookies" className="hover:text-gray-300">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

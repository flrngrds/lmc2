import React, { useState, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTailwindLoaded, setIsTailwindLoaded] = useState(false)

  useEffect(() => {
    // Check if Tailwind styles are loaded
    const isTailwindApplied = window.getComputedStyle(document.body).display === 'block'
    setIsTailwindLoaded(isTailwindApplied)
    
    if (!isTailwindApplied) {
      console.warn('Tailwind styles may not be loaded correctly')
    }
  }, [])

  const calendlyLink = "https://calendly.com/lamachinecommerciale/30min"

  const baseStyles: Record<string, React.CSSProperties> = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
      borderBottom: '1px solid #e5e7eb',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    nav: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      color: '#4b5563',
      textDecoration: 'none',
    },
    button: {
      backgroundColor: '#10b981',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
    heroSection: {
      textAlign: 'center',
      marginTop: '60px',
      marginBottom: '60px',
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    heroText: {
      fontSize: '20px',
      color: '#4b5563',
      marginBottom: '30px',
    },
  }

  return (
    <div style={baseStyles.container}>
      {!isTailwindLoaded && (
        <div style={{ backgroundColor: 'yellow', padding: '10px', textAlign: 'center' }}>
          Warning: Tailwind styles may not be loaded correctly. Using fallback styles.
        </div>
      )}
      
      <header style={baseStyles.header}>
        <div style={baseStyles.logo}>La Machine Commerciale</div>
        <nav style={baseStyles.nav} className="hidden md:flex">
          <a href="#" style={baseStyles.navLink}>Notre solution</a>
          <a href="#" style={baseStyles.navLink}>Tarifs</a>
          <a href="#" style={baseStyles.navLink}>FAQ</a>
        </nav>
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
          <button style={baseStyles.button} className="hidden md:block">
            Planifiez une réunion
          </button>
        </a>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: 'none', border: 'none' }}
        >
          <ChevronDown style={{ width: '24px', height: '24px' }} />
        </button>
      </header>

      {isMenuOpen && (
        <div style={{ padding: '20px 0', borderBottom: '1px solid #e5e7eb' }} className="md:hidden">
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="#" style={baseStyles.navLink}>Notre solution</a>
            <a href="#" style={baseStyles.navLink}>Tarifs</a>
            <a href="#" style={baseStyles.navLink}>FAQ</a>
          </nav>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '20px' }}>
            <button style={baseStyles.button}>
              Planifiez une réunion
            </button>
          </a>
        </div>
      )}

      <main>
        <section style={baseStyles.heroSection}>
          <h1 style={baseStyles.heroTitle}>
            Augmentez vos ventes B2B en automatisant votre prospection
          </h1>
          <p style={baseStyles.heroText}>
            Grâce à l'automatisation de votre processus de prospection, vous éliminez les tâches répétitives et vous concentrez sur ce qui compte vraiment : la relation client et la conclusion de deals.
          </p>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
            <button style={{...baseStyles.button, fontSize: '18px', padding: '15px 30px'}}>
              Planifiez une réunion
            </button>
          </a>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jen9o1dos9twx8s3-ajGa3C4y3C5BRRLXY3XBxFLDD5bkns.png" 
            alt="La Machine Commerciale Dashboard - Email Automation Sequence" 
            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
          />
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ ...baseStyles.heroTitle, fontSize: '36px' }}>
            LES ÉTAPES
          </h2>
          <h3 style={{ ...baseStyles.heroText, fontSize: '24px', marginBottom: '40px' }}>
            Augmentez vos ventes B2B en laissant la technologie gérer votre processus commercial
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { title: "01. Création d'une base de prospects", description: "Nous créerons une base de plusieurs milliers d'entreprises et de leurs décisionnaires à contacter." },
              { title: "02. La prospection par email est automatisée", description: "Les prospects rentrent dans la séquence composée d'un email d'introduction et de 3 à 4 emails de relance." },
              { title: "03. Les interactions sont enregistrées dans le CRM", description: "Avec La Machine Commerciale, toutes les interactions seront enregistrées automatiquement." },
              { title: "04. Vous convertissez vos prospects en clients", description: "La machine commerciale va générer des réservations d'appels de qualification. À vous de jouer !" },
            ].map((step, index) => (
              <div key={index} style={{ backgroundColor: '#1f2937', color: 'white', padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{step.title}</h4>
                <p style={{ color: '#d1d5db' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ ...baseStyles.heroTitle, fontSize: '36px' }}>Clairs, nets et précis</h2>
          <p style={{ ...baseStyles.heroText, marginBottom: '40px' }}>
            Nos offres sont 100% personnalisées.<br />
            Un besoin spécifique ? Nous y répondrons.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              { title: "Basic", price: "3 199€", description: "La machine personnalisée" },
              { title: "Pro", price: "4 399€", description: "La machine ultime" },
            ].map((plan, index) => (
              <div key={index} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{plan.title}</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px' }}>{plan.description}</p>
                <p style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>{plan.price}</p>
                <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                  <button style={{...baseStyles.button, width: '100%'}}>
                    Réservez un appel
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: '#f3f4f6', padding: '40px 0', marginTop: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ marginBottom: '20px' }}>
            <img src="/placeholder.svg?height=32&width=32" alt="Logo" style={{ width: '32px', height: '32px', marginBottom: '10px' }} />
            <p style={{ fontSize: '14px', color: '#4b5563' }}>© 2023 La Machine Commerciale</p>
          </div>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#" style={{ ...baseStyles.navLink, fontSize: '14px' }}>Features</a></li>
                <li><a href="#" style={{ ...baseStyles.navLink, fontSize: '14px' }}>Pricing</a></li>
                <li><a href="#" style={{ ...baseStyles.navLink, fontSize: '14px' }}>FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#" style={{ ...baseStyles.navLink, fontSize: '14px' }}>About</a></li>
                <li><a href="#" style={{ ...baseStyles.navLink, fontSize: '14px' }}>Contact</a></li>
                <li><a href="#" style={{ ...baseStyles.navLink, fontSize: '14px' }}>Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "VirtusCo",
          "url": "https://virtusco.in",
          "logo": "https://virtusco.in/logo.png",
          "description": "Leading robotics and automation solutions provider in India",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "contact@virtusco.in"
          }
        })
      }}
    />
  )
} 

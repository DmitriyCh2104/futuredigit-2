"use client"

import { NavigationMenuLink } from "@/components/ui/navigation-menu"

import { NavigationMenuContent } from "@/components/ui/navigation-menu"

import { NavigationMenuTrigger } from "@/components/ui/navigation-menu"

import { NavigationMenuItem } from "@/components/ui/navigation-menu"

import { NavigationMenuList } from "@/components/ui/navigation-menu"

import { NavigationMenu } from "@/components/ui/navigation-menu"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Code, Layers, Cpu, GitBranch, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteNavigation } from "@/components/site-navigation"
import { SiteFooter } from "@/components/site-footer"

export default function SoftwareEngineeringPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: Code,
      title: "Développement sur mesure",
      description: "Applications web et mobiles adaptées à vos besoins spécifiques",
    },
    {
      icon: Layers,
      title: "Architecture logicielle",
      description: "Conception de systemes scalables et maintenables",
    },
    {
      icon: Cpu,
      title: "Intégration systèmes",
      description: "Connexion fluide entre vos différentes applications",
    },
    {
      icon: GitBranch,
      title: "Modernisation legacy",
      description: "Transformation de vos applications existantes",
    },
  ]

  const benefits = [
    "Équipes expertes certifiées",
    "Méthodologies agiles",
    "Code de haute qualité",
    "Support continu",
    "Livraison dans les délais",
    "Technologies modernes",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
  <div className="flex items-center justify-between h-20">
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo-20no-20background.png"
        alt="Madison Logo"
        width={120}
        height={40}
        className="h-10 w-auto"
      />
    </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-foreground text-background hover:bg-foreground/90 hover:text-background data-[state=open]:bg-foreground/90 data-[state=open]:text-background">
                    Conseil
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[300px]">
                      <NavigationMenuLink asChild>
                        <a href="/modes/conseil" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Conseil</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Concevoir vos solutions sur-mesure de l'idee au projet
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-foreground text-background hover:bg-foreground/90 hover:text-background data-[state=open]:bg-foreground/90 data-[state=open]:text-background">
                    Regie
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[300px]">
                      <NavigationMenuLink asChild>
                        <a href="/modes/regie" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Regie</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Renforcez vos équipes avec nos experts en immersion
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Business Units</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <NavigationMenuLink asChild>
                        <a href="/business-units/banque-finance" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Banque Finance</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Solutions pour le secteur bancaire et financier
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/business-units/ingenierie" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Ingénierie</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Expertise technique et solutions d'ingénierie
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Nos Expertises</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:grid-cols-2">
                      <NavigationMenuLink asChild>
                        <a href="/expertises/software-engineering" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Software Engineering</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Developpement logiciel sur mesure
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/expertises/cloud" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Cloud</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Infrastructure cloud scalable et securisee
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/expertises/infrastructure-devops" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Infrastructure & DevOps</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Automatisation et gestion d'infrastructure
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/expertises/gestion-projet" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Gestion de projet</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Pilotage et coordination de projets IT
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/expertises/sap" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Expertise SAP</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Integration et conseil SAP
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/#contact">
              <Button className="bg-foreground text-background hover:bg-foreground/90">Contact</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/expertise-software.jpg"
            alt="Software Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Nos Expertises
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Software Engineering
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Nous concevons et développons des solutions logicielles innovantes et performantes, 
              adaptées aux défis uniques de votre entreprise.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Discutons de votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins en développement logiciel
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-[#0a101f]/60 border border-gray-800/50 hover:bg-[#0a101f]/80 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-[#020817] to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi nous choisir?</h2>
              <p className="text-muted-foreground mb-8">
                Notre equipe d'ingenieurs logiciels experimente vous accompagne de la conception 
                a la mise en production, en garantissant qualite et performance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/expertise-software-2.jpg"
                alt="Team collaboration"
                className="rounded-2xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer vos idées en réalité ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour discuter de votre projet et découvrir comment notre expertise 
              en développement logiciel peut accélérer votre croissance.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Contactez-nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-background/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/expertises/software-engineering" className="text-sm text-muted-foreground hover:text-primary">
                    Software Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/expertises/cloud" className="text-sm text-muted-foreground hover:text-primary">
                    Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/expertises/infrastructure-devops" className="text-sm text-muted-foreground hover:text-primary">
                    Infrastructure & DevOps
                  </Link>
                </li>
                <li>
                  <Link href="/expertises/gestion-projet" className="text-sm text-muted-foreground hover:text-primary">
                    Gestion de Projet
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Modes d'intervention</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/modes/conseil" className="text-sm text-muted-foreground hover:text-primary">
                    Conseil
                  </Link>
                </li>
                <li>
                  <Link href="/modes/regie" className="text-sm text-muted-foreground hover:text-primary">
                    Regie
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business Units</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/business-units/banque-finance" className="text-sm text-muted-foreground hover:text-primary">
                    Banque Finance
                  </Link>
                </li>
                <li>
                  <Link href="/business-units/ingenierie" className="text-sm text-muted-foreground hover:text-primary">
                    Ingénierie
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Paris, France
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <Link href="mailto:contact@madison.com" className="text-sm text-muted-foreground hover:text-primary">
                    contact@madison.com
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <Link href="tel:+33123456789" className="text-sm text-muted-foreground hover:text-primary">
                    +33 1 2345 6789
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 pb-8 border-t space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Madison. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground pb-4">
              <Link href="/" className="hover:text-primary">
                Mentions légales
              </Link>
              <span>|</span>
              <Link href="/" className="hover:text-primary">
                Politique de confidentialité
              </Link>
              <span>|</span>
              <Link href="/" className="hover:text-primary">
                Politique cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

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
import { ArrowRight, Users, UserPlus, Shield, Zap, CheckCircle, Briefcase, Clock, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteNavigation } from "@/components/site-navigation"
import { SiteFooter } from "@/components/site-footer"

export default function RegiePage() {
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
      icon: UserPlus,
      title: "Renfort d'équipe",
      description: "Intégrez un ou plusieurs de nos experts au sein de vos équipes existantes.",
    },
    {
      icon: Shield,
      title: "Expertise garantie",
      description: "Des profils qualifiés et évalués pour répondre à vos exigences techniques.",
    },
    {
      icon: Users,
      title: "Immersion complète",
      description: "Nos consultants s'intègrent à votre culture et vos méthodes de travail.",
    },
    {
      icon: Zap,
      title: "Flexibilité maximale",
      description: "Adaptez vos ressources en fonction de l'évolution de vos projets.",
    },
  ]

  const profileTypes = [
    {
      icon: Briefcase,
      title: "Développeurs",
      profiles: ["Fullstack", "Frontend", "Backend", "Mobile", "DevOps"],
    },
    {
      icon: Users,
      title: "Chefs de Projet",
      profiles: ["Scrum Master", "Product Owner", "Project Manager", "Delivery Manager"],
    },
    {
      icon: Award,
      title: "Architectes",
      profiles: ["Solution", "Technique", "Cloud", "Data", "Sécurité"],
    },
    {
      icon: Clock,
      title: "Experts Fonctionnels",
      profiles: ["Business Analyst", "Consultant SAP", "MOA", "Data Analyst"],
    },
  ]

  const benefits = [
    "Sélection rigoureuse des profils",
    "Intégration rapide en quelques jours",
    "Suivi de mission personnalisé",
    "Flexibilité contractuelle",
    "Continuité de service assurée",
    "Accompagnement RH dédié",
  ]

  const advantages = [
    {
      title: "Accès aux talents",
      description: "Un vivier de plus de 500 consultants qualifiés dans tous les domaines IT.",
    },
    {
      title: "Réactivité",
      description: "Proposition de profils sous 48 h et démarrage possible sous 2 semaines.",
    },
    {
      title: "Qualité",
      description: "Des consultants formés et certifiés, évalués sur leurs compétences techniques et soft skills.",
    },
    {
      title: "Engagement",
      description: "Un suivi régulier pour garantir la satisfaction client et l'épanouissement du consultant.",
    },
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
                            Concevoir vos solutions sur mesure de l'idée au projet
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
                            Infrastructure cloud scalable et sécurisée
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
            src="/images/regie-hero.jpg"
            alt="Extended Teams - Regie"
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
              Extended Teams
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Regie
            </h1>
            <p className="text-xl text-muted-foreground mb-4 text-pretty">
              Renforcer vos équipes pour réussir vos projets.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Bénéficiez de l'expertise et du leadership d'un ou de plusieurs de nos talents, 
              en immersion au sein de votre organisation, pour renforcer vos équipes et vous 
              accompagner dans votre développement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                  Renforcez votre équipe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Offre Regie</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des experts qualifiés intégrés à vos équipes pour accélérer vos projets
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

      {/* Profile Types Section */}
      <section className="py-24 bg-gradient-to-b from-[#020817] to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Profils</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un large éventail de compétences pour répondre à tous vos besoins IT
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {profileTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#0a101f]/40 border border-gray-800/30"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.profiles.map((profile) => (
                    <li key={profile} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {profile}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Engagements</h2>
              <p className="text-muted-foreground mb-8">
                Nous nous engageons à vous fournir les meilleurs talents et à assurer 
                le succès de leur mission au sein de vos équipes.
              </p>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-primary pl-4"
                  >
                    <h3 className="font-semibold mb-1">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
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
                src="/images/regie-team.jpg"
                alt="Consultant en mission"
                className="rounded-2xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="p-8 rounded-2xl bg-[#0a101f]/60 border border-gray-800/50">
                <h3 className="text-2xl font-bold mb-6">Un Partenariat Gagnant</h3>
                <p className="text-muted-foreground mb-6">
                  Notre approche régie va au-delà de la simple mise à disposition de ressources. 
                  Nous construisons un véritable partenariat pour garantir la réussite de vos projets.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Entretiens techniques approfondis avant chaque mission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Points de suivi réguliers avec le client et le consultant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Formations continues pour maintenir l'excellence technique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Remplacement garanti en cas d'indisponibilité</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi choisir la régie ?</h2>
              <p className="text-muted-foreground mb-8">
                La régie vous offre flexibilité et accès immédiat à des compétences pointues 
                pour répondre à vos besoins ponctuels ou récurrents.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#020817] to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin de renforcer vos équipes ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour discuter de vos besoins et découvrir comment nos experts 
              peuvent contribuer au succès de vos projets.
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

      <SiteFooter />
    </div>
  )
}

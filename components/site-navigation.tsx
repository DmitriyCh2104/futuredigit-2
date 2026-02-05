"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function SiteNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground">Conseil</NavigationMenuTrigger>
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
          <NavigationMenuTrigger className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground">Regie</NavigationMenuTrigger>
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
            <div className="grid gap-3 p-4 w-[400px]">
              <NavigationMenuLink asChild>
                <a
                  href="/business-units/banque-finance"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Banque Finance</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Solutions pour le secteur bancaire et financier
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="/business-units/ingenierie"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
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
                <a
                  href="/expertises/software-engineering"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Software Engineering</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Développement logiciel sur mesure
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="/expertises/cloud"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Cloud</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Solutions cloud et infrastructure
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="/expertises/infrastructure-devops"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Infrastructure & DevOps</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Automatisation et optimisation
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="/expertises/sap"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">SAP</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Expertise SAP et integration
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="/expertises/gestion-projet"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Gestion de Projet</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Management et pilotage de projets
                  </p>
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

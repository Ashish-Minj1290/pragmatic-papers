"use client"

import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import { isActivePath } from "./isActivePath"

type MegaMenuLinkProps = Omit<React.ComponentProps<typeof NavigationMenuLink>, "href"> & {
  href: string | null
}

export function MegaMenuLink({ href, ...props }: MegaMenuLinkProps): React.ReactNode {
  const pathname = usePathname()
  return <NavigationMenuLink active={isActivePath(pathname, href)} {...props} />
}

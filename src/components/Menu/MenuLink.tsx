"use client"

import { isActivePath } from "@/utilities/isActivePath"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { usePathname } from "next/navigation"

type MenuLinkProps = Omit<useRender.ComponentProps<"a">, "href"> & {
  href: string | null
}

export function MenuLink({ href, render, ...props }: MenuLinkProps): React.ReactNode {
  const active = isActivePath(usePathname(), href)
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">({ "aria-current": active ? "page" : undefined }, props),
    render,
    state: { active },
  })
}

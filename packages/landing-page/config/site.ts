import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://qlock.abandon.work"

export const siteConfig: SiteConfig = {
  name: "Qlock",
  author: "alfxjx",
  description:
    "Easy to setup. Customizable. Responsive. Crossplatform. Decorate your screen with QLOCK.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "Landing Page",
    "Template",
    "Starter",
  ],
  url: {
    base: baseUrl,
    author: "https://abandon.work",
  },
  ogImage: `${baseUrl}/og.png`,
}

export const contactConfig: ContactConfig = {
  email: "xujianxiang@abandon.work",
}

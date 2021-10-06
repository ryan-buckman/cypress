import LogoWebpack from '../images/logos/webpack.svg?url'
import LogoVite from '../images/logos/vite.svg?url'
import LogoNext from '../images/logos/nextjs.svg?url'
import LogoNuxt from '../images/logos/nuxt.svg?url'
import LogoVue from '../images/logos/vue.svg?url'
import LogoReact from '../images/logos/react.svg?url'

import componentLogo from '../images/testingTypes/component.svg'
import e2eLogo from '../images/testingTypes/e2e.svg'

import type { FrontendFrameworkEnum, SupportedBundlers, TestingTypeEnum } from '../generated/graphql'

export const FrameworkBundlerLogos: Record<FrontendFrameworkEnum | SupportedBundlers, string> = {
  webpack: LogoWebpack,
  vite: LogoVite,
  vue: LogoVue,
  vuecli: LogoVue,
  nextjs: LogoNext,
  nuxtjs: LogoNuxt,
  react: LogoReact,
  cra: LogoReact,
}

export const TestingTypeIcons: Record<TestingTypeEnum, string> = {
  e2e: e2eLogo,
  component: componentLogo,
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type TechIconsProps = {
  title: string
  icon: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconsProps[]
}

export type ConceptsProps = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptsProps[]
}

export type ModulesProps = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: ModulesProps[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type SocialLinksProps = {
  title: string
  url: string
}

export type Author = {
  photo: ImageProps
  name: string
  role: string
  socialLinks: SocialLinksProps[]
  description: string
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type ReviewsProps = {
  name: string
  text: string
  photo: {
    url: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewsProps[]
}

export type QuestionsProps = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: QuestionsProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}

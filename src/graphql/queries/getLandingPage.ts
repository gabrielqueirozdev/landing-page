const GET_LANDING_PAGE = /* GraphQL */ `
  fragment imageProps on UploadFile {
    alternativeText
    url
  }

  fragment logo on LandingPage {
    logo {
      ...imageProps
    }
  }

  fragment buttonProps on ComponentPageButton {
    label
    url
  }

  fragment button on ComponentPageHeader {
    button {
      ...buttonProps
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      ...button
      image {
        ...imageProps
      }
    }
  }

  fragment aboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        ...imageProps
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          ...imageProps
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        ...buttonProps
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        photo {
          ...imageProps
        }
        name
        role
        socialLinks {
          title
          url
        }
        description
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        name
        text
        photo {
          url
        }
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...aboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
      ...sectionFaq
    }
  }
`

export default GET_LANDING_PAGE

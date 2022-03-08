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

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...aboutProject
      ...sectionTech
    }
  }
`

export default GET_LANDING_PAGE

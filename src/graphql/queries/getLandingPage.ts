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

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
    }
  }
`

export default GET_LANDING_PAGE

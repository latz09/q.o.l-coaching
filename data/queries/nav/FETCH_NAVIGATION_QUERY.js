export const FETCH_NAVIGATION_QUERY = `
  *[_type == "navigationSection"][0]{
    logoIcon {
      asset->{
        _id,
        url,
        metadata {
          lqip
        }
      },
      hotspot,
      crop
    },
    mobileMenuLogo {
      asset->{
        _id,
        url,
        metadata {
          lqip
        }
      },
      hotspot,
      crop
    },
    navLinks[] {
      label,
      anchor
    }
  }
`
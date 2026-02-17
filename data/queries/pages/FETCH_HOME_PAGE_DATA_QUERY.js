export const FETCH_HOMEPAGE_DATA_QUERY = `
{
  "hero": *[_type == "heroSection"][0]{
    backgroundImage {
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
    logo {
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
    headline,
    subheadline,
    credentials,
    ctaText,
    ctaLink
  },
  "whatBringsYouHere": *[_type == "whatBringsYouHereSection"][0]{
    heading,
    image {
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
    questions
  },
  "aboutCoaching": *[_type == "aboutCoachingSection"][0]{
    heading,
    subheading,
    paragraphs,
    inclusivityLine
  },
  "coachingServices": *[_type == "coachingServicesSection"][0]{
    heading,
    subheading,
    image {
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
    packages[] {
      title,
      price,
      features,
      ctaText,
      ctaLink
    }
  },
  "biofieldTuning": *[_type == "biofieldTuningSection"][0]{
    heading,
    paragraphs,
    youtubeVideos[] {
      title,
      url
    },
    sessionHeading,
    sessionSubheading,
    sessionBullets,
    packages[] {
      title,
      price,
      ctaText,
      ctaLink
    }
  },
  "aboutElizabeth": *[_type == "aboutElizabethSection"][0]{
    heading,
    headshot {
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
    paragraphs,
    credentials[] {
      credential,
      year
    }
  },
  "faq": *[_type == "faqSection"][0]{
    heading,
    items[] {
      question,
      answer
    }
  },
  "contact": *[_type == "contactSection"][0]{
    heading,
    paragraphs,
    submitButtonText
  },
  "footer": *[_type == "footerSection"][0]{
    logo {
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
    tagline,
    location,
    disclaimer
  }
}
`;
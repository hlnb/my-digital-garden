module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'HelenB',
  siteDescription:
    'Embark on a transformative journey in my Digital Sanctuary. Explore web technologies, self-discovery and wisdom of Adler and the Stoics. Find your path here.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: {
    name: 'Helen Burgess', // i.e. Lene Saile - page / blog author's name. Must be set.
    avatar: '/favicon.png',
    email: 'me@helenburgesss.id.au', // i.e. hola@lenesaile.com - email of the author
    website: 'https://www.helenburgess.id.au' // i.e. https.://www.lenesaile.com - the personal site of the author
  },
  creator: {
    name: 'Helen Burgess',  // i.e. Lene Saile - creator&quote;s (developer) name.
    email: 'me@helenburgess.id.au',
    website: 'https://helenburgess.id.au',
    social: 'https://mastodon.au/@hlnbee'
  },
  themeColor: '#2f2e5a', //  Manifest: defines the default theme color for the application
  themeBgColor: '#FBFBFB', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  opengraph_default: '/assets/images/template/opengraph-default.jpg', // fallback/default meta image
  opengraph_default_alt:
    'From ASCII to HTML, I’ve navigated the roads less travelled in technology and life. Veteran, Nana, knitter, and web technologist looking to pass on my lived experience of self-discovery.', // alt text for default meta image
  blog: {
    // RSS feed
    name: 'Writing from my Digital Garden',
    description:
      'From ASCII to HTML, I’ve navigated the roads less travelled in technology and life. Veteran, Nana, knitter, and web technologist looking to pass on my lived experience of self-discovery.',
    // feed links are looped over in the head. You may add more to the array.
    feedLinks: [
      {
        title: 'Atom Feed',
        url: '/feed.xml',
        type: 'application/atom+xml'
      }
    ],
    // Tags
    tagSingle: 'Tag',
    tagPlural: 'Tags',
    tagMore: 'More tags:',
    // pagination
    paginationLabel: 'Blog',
    paginationPage: 'Page',
    paginationPrevious: 'Previous',
    paginationNext: 'Next',
    paginationNumbers: true
  },
  details: {
    aria: 'section controls',
    expand: 'expand all',
    collapse: 'collapse all'
  },
  navigation: {
    ariaTop: 'Main',
    ariaBottom: 'Complementary',
    ariaPlatforms: 'Platforms',
    // activate alternative mobile menu with drawer
    drawerNav: false,
    navLabel: 'Menu'
  },
  themeSwitch: {
    title: 'Theme',
    light: 'light',
    dark: 'dark',
    initial: 'select'
  },
  greenweb: {
    // this goues into src/common/greenweb.njk
    providers: {
      // if you want to add more than one, edit the array directly.
      domain: 'netlify.com',
      service: 'cdn'
    },
    credentials: {
      // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
      domain: '',
      doctype: '',
      url: ''
    }
  },
  viewRepo: {
    // this is for the view/edit on github link. The value in the package.json will be pulled in.
    allow: true,
    infoText: 'View this page on GitHub'
  },
  easteregg: true
};

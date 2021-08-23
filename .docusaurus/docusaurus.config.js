export default {
  "title": "Daniel Share's Blog",
  "tagline": "My tech blog",
  "url": "https://danielshare.co.uk",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/logo.png",
  "organizationName": "Superbition",
  "projectName": "blog",
  "themeConfig": {
    "announcementBar": {
      "id": "announcementBar-1",
      "content": "Automatic database, file and server backups and management: <a target=\"_blank\" rel=\"noopener\" href=\"https://bakup.io\">Bakup.io</a>",
      "isCloseable": true
    },
    "navbar": {
      "title": "Daniel Share's Blog",
      "logo": {
        "alt": "Blog Logo",
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "/",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://bakup.io",
          "label": "Bakup.io",
          "position": "right"
        },
        {
          "href": "https://twitter.com/danielashare",
          "label": "Twitter",
          "position": "right"
        },
        {
          "href": "https://github.com/danielashare",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "additionalLanguages": [
        "php"
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": [
      {
        "name": "twitter:card",
        "content": "summary_large_image"
      },
      {
        "name": "twitter:site",
        "content": "@danielashare"
      },
      {
        "name": "twitter:creator",
        "content": "@danielashare"
      }
    ],
    "docs": {
      "versionPersistence": "localStorage"
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": false,
        "blog": {
          "showReadingTime": true,
          "path": "./blog",
          "routeBasePath": "/",
          "blogTitle": "Daniel Share's Blog",
          "blogDescription": "A technical blog about building Bakup.io"
        },
        "theme": {
          "customCss": "/Users/danielshare/blog/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};
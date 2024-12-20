const sources = [
    {
        "sourceType": "user",
        "fetch": "/api/sitemap"
    },
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/adatvedelmi-tajekoztato"
            },
            {
                "loc": "/coreerosites"
            },
            {
                "loc": "/ergometergyakorlatok"
            },
            {
                "loc": "/eroemeles"
            },
            {
                "loc": "/galeria"
            },
            {
                "loc": "/gyerekedzesek"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/kettlebell"
            },
            {
                "loc": "/mobilizacio"
            },
            {
                "loc": "/posts"
            },
            {
                "loc": "/rolunk"
            },
            {
                "loc": "/szemelyesedzesterv"
            },
            {
                "loc": "/szemelyreszabottetrend"
            },
            {
                "loc": "/szolgaltatasok"
            },
            {
                "loc": "/testsulygyakorlatok"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/"
            },
            {
                "loc": "/rolunk"
            },
            {
                "loc": "/szolgaltatasok"
            },
            {
                "loc": "/kettlebell"
            },
            {
                "loc": "/testsulygyakorlatok"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/gyerekedzesek"
            },
            {
                "loc": "/eroemeles"
            },
            {
                "loc": "/szemelyesedzesterv"
            },
            {
                "loc": "/ergometergyakorlatok"
            },
            {
                "loc": "/adatvedelmi-tajekoztato"
            },
            {
                "loc": "/mobilizacio"
            },
            {
                "loc": "/coreerosites"
            },
            {
                "loc": "/posts/edzoterem-oroshaza-formaba-lendulni-kozossegben-konnyebb"
            },
            {
                "loc": "/posts/szemelyi-edzes-oroshaza-egyeni-celokhoz-igazitott-profi-tamogatas"
            },
            {
                "loc": "/galeria"
            },
            {
                "loc": "/posts/crossfit-oroshaza-ero-allokepesseg-es-kozosseg-egy-helyen"
            },
            {
                "loc": "/szemelyreszabottetrend"
            },
            {
                "loc": "/posts"
            },
            {
                "loc": "/posts/adatvedelmi-tajekoztato"
            },
            {
                "loc": "/posts/fitt-es-egeszseges-eletmod-oroshazan-fejleszd-erodet-es-allokepessegedet-a-symbol-gymben"
            },
            {
                "loc": "/posts/ero-allokepesseg-fejlesztes-oroshazan-eletmod-es-edzes-lehetosegek-a-symbol-gym-edzotermeben"
            },
            {
                "loc": "/posts/funkcionalis-edzes-oroshazan-ero-es-allokepesseg-fejlesztes-a-symbol-gym-edzotermeben"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map

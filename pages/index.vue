<script setup>
  import { fetchPosts, truncateContent } from '~/utils/js/utils'

  const itemsPost = await fetchPosts()
  const latestPosts = itemsPost.value?.slice(-3) || []

  const heroList = [
    {
      label: 'Erősítés',
      img: '01_erosites.svg',
    },
    {
      label: 'Személyi edzők',
      img: '02_szemelyi_edzok.svg',
    },
    {
      label: 'Különleges edzéstervek',
      img: '03_edzestervek.svg',
    },
    {
      label: 'Egyéni étrend tanácsadás',
      img: '04_egyeni_etrend_tervezes.svg',
    },
    {
      label: 'Kiemelkedő eszközpark',
      img: '05_kiemelkedo_edzopark.svg',
    },
  ]

  const servicesCards = [
    {
      id: 1,
      title: 'SAJÁT TESTSÚLLYAL VÉGZETT GYAKORLATOK',
      icon: '01_sajat_testsuly.svg',
      link: '/testsulygyakorlatok',
    },
    {
      id: 2,
      title: 'KETTLEBELL GYAKORLATOK',
      icon: '02_kettleball.svg',
      link: '/kettlebell',
    },
    {
      id: 3,
      title: 'ERGOMÉTERES GÉPEKEN VÉGZETT GYAKORLATOK',
      icon: '03_ergometeres.svg',
      link: '/ergometergyakorlatok',
    },
    {
      id: 4,
      title: 'ERŐEMELŐ ELEMEK',
      icon: '04_eroemelo.svg',
      link: '/eroemeles',
    },
    {
      id: 5,
      title: 'MOBILIZÁCIÓS GYAKORLATOK',
      icon: '05_mobilizacios.svg',
      link: '/mobilizacio',
    },
    {
      id: 6,
      title: 'CORE IZMOK ERŐSÍTÉSE',
      icon: '06_core_izmok.svg',
      link: '/coreerosites',
    },
    {
      id: 7,
      title: 'EGYEDI EDZÉSTERV',
      icon: '07_egyedi_edzesterv.svg',
      link: '/szemelyesedzesterv',
    },
    // {
    //   id: 8,
    //   title: 'EGYÉNI ÉTREND',
    //   icon: '08_egyeni_etrend.svg',
    //   link: '/szemelyreszabottetrend',
    // },
    {
      id: 8,
      title: 'GYEREK EDZÉSEK',
      icon: 'gyermek.svg',
      link: '/gyerekedzesek',
    },
  ]

  const target = [
    {
      title: 'Kezdőknek: ',
      description:
        'Akik most lépnek be a crosstraining világába, és szeretnének egy támogató közösségben fejlődni.',
    },
    {
      title: 'Tapasztalt sportolóknak: ',
      description:
        'Akik új kihívásokat keresnek, és tovább szeretnék fejleszteni erőnlétüket és teljesítményüket.',
    },
    {
      title: 'Közösségre vágyóknak: ',
      description:
        'Akik egy összetartó, motiváló társaság részei szeretnének lenni, ahol minden edzés közös élmény.',
    },
    {
      title: 'Fittségüket növelni vágyóknak: ',
      description:
        'Akik szeretnének fittebbé válni, és a legjobb formájukat hozni.',
    },
    {
      title: 'Mentális erőt fejleszteni kívánóknak: ',
      description:
        'Akik nem csak a testüket, de a mentális erejüket is új szintre szeretnék emelni.',
    },
  ]
</script>

<template>
  <section class="h-[670px] relative overflow-hidden">
    <div class="container flex items-center justify-end h-full">
      <div class="max-w-[500px] relative z-10 pt-[100px]">
        <div class="z-10 p-10 bg-white">
          <h1 class="pb-5 text-4xl font-extrabold uppercase font-shoulders">
            Építsd fel a legjobb önmagad a Symbol Gym-ben!
          </h1>
          <p>
            A Symbol Gym-ben a fejlődés nemcsak cél, hanem életstílus. Modern
            eszközparkunkkal és tapasztalt edzőinkkel segítünk, hogy elérd a
            kitűzött céljaidat, legyen az erőnövelés, állóképesség-fejlesztés
            vagy egy egészségesebb életmód kialakítása. Lépj be hozzánk, és
            tapasztald meg, mit jelent igazán hatékonyan edzeni!
          </p>
        </div>
        <div class="bg-primary h-1.5"></div>
      </div>
    </div>
    <NuxtImg
      src="/img/hero-bg.webp"
      class="absolute inset-0 object-cover w-full h-full"
      alt="Hero background"
      width="1536"
      height="670"
      format="webp"
      quality="90"
      loading="eager"
      fetchpriority="high"
    />
  </section>

  <section class="bg-black">
    <div class="container flex flex-wrap justify-around py-8 gap-x-20 gap-y-10">
      <div v-for="item in heroList" class="flex flex-col items-center w-20">
        <div class="h-16 pb-3">
          <NuxtImg
            :src="'/img/hero-icons/' + item.img"
            class="h-full"
            :alt="item.label"
          ></NuxtImg>
        </div>
        <span class="text-center text-white uppercase font-teko">{{
          item.label
        }}</span>
      </div>
    </div>
  </section>

  <section class="sm:h-[570px] relative overflow-hidden flex items-center">
    <div class="container z-10 mix-blend-overlay">
      <p
        class="font-shoulders text-white text-4xl sm:text-[170px] opacity-10 font-black uppercase leading-[182px] max-w-4xl"
      >
        Sosem késő elkezdeni
      </p>
    </div>
    <NuxtImg
      src="/img/red-bg.webp"
      class="absolute inset-0 object-cover w-full h-full"
    />
  </section>

  <section class="py-10 text-white bg-black">
    <div class="container">
      <h2 class="pb-4 uppercase text-[32px] font-extrabold font-shoulders">
        MIRŐL SZÓL A SYMBOL GYM ÉRZÉS?
      </h2>
      <p class="max-w-3xl pb-10 text-sm">
        A Symbol Gym érzés többről szól, mint egyszerű edzésről. Itt egy
        közösség része lehetsz, ahol a családias hangulat és a támogató társaság
        minden alkalommal motivál. A Symbol Gym-ben együtt dolgozunk, együtt
        fejlődünk, és együtt érjük el a céljainkat. Ez az érzés a közös
        küzdelmekből, a megosztott sikerekből és a folyamatos támogatásból
        fakad. Nálunk nem csak erősebbé válsz, hanem igazi közösségre találsz,
        amely minden lépésedet támogatja az úton.
      </p>
      <NuxtImg
        src="/img/team.webp"
        class="w-[832px]"
        alt="Team"
        width="832"
        height="478"
        format="webp"
        quality="90"
        sizes="(max-width: 768px) 100vw, 832px"
      />
    </div>
  </section>

  <section class="py-10 text-white bg-black">
    <div class="container flex flex-col items-end">
      <h2
        class="max-w-3xl pb-4 uppercase text-[32px] font-extrabold font-shoulders"
      >
        Szolgáltatásaink
      </h2>
      <p class="max-w-3xl pb-10 text-sm text-right">
        A Symbol Gym érzés többről szól, mint egyszerű edzésről. Itt egy
        közösség része lehetsz, ahol a családias hangulat és a támogató társaság
        minden alkalommal motivál. A Symbol Gym-ben együtt dolgozunk, együtt
        fejlődünk, és együtt érjük el a céljainkat. Ez az érzés a közös
        küzdelmekből, a megosztott sikerekből és a folyamatos támogatásból
        fakad. Nálunk nem csak erősebbé válsz, hanem igazi közösségre találsz,
        amely minden lépésedet támogatja az úton.
      </p>
      <div
        class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="card in servicesCards"
          :key="card.id"
          class="p-4 text-center bg-black border border-white"
        >
          <NuxtLink :to="card.link" class="block">
            <div class="mb-4 text-red-500">
              <NuxtImg
                :src="`/img/szolgaltatasok/${card.icon}`"
                :alt="card.title"
                class="w-32 h-32 mx-auto"
                loading="lazy"
              />
            </div>
            <h3 class="text-2xl text-white uppercase font-teko">
              {{ card.title }}
            </h3>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 text-white bg-black">
    <div class="container flex flex-col">
      <h2
        class="max-w-3xl pb-4 uppercase text-[32px] font-extrabold font-shoulders"
      >
        Blog
      </h2>

      <div
        class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
      >
        <div
          v-for="post in latestPosts"
          :key="post.slug"
          class="page-information-content__blog-content__gBox__iTextBox"
        >
          <NuxtLink
            class="blog-box__link-box__Nuxtlink"
            :to="`/posts/${post.slug}`"
          >
            <NuxtImg
              height="100%"
              loading="lazy"
              class="page-information-content__blog-content__gBox__iTextBox__img"
              :src="`${$config.public.apiBaseUrl}/storage/${post.image}`"
              alt="{{ post.title }}"
            />
            <div
              class="page-information-content__blog-content__gBox__iTextBox__tBox"
            >
              <h4
                class="page-information-content__blog-content__gBox__iTextBox__tBox__h4 text-2xl text-white uppercase font-teko"
              >
                {{ post.title }}
              </h4>
              <p
                class="page-information-content__blog-content__gBox__iTextBox__tBox__p"
                v-html="truncateContent(post.body, 230)"
              ></p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="container py-20">
    <h3 class="mb-6 text-4xl font-extrabold font-shoulders text-white">
      KINEK VALÓ A SYMBOL GYM?
    </h3>
    <ul class="space-y-4">
      <li
        v-for="(item, index) in target"
        :key="index"
        class="flex items-start text-white"
      >
        <div
          class="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-black rounded-full"
        ></div>
        <div>
          <span class="font-semibold text-white">{{ item.title }}</span>
          {{ item.description }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
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
</script>

<template>
  <section class="py-10 text-white bg-black">
    <div class="container flex flex-col items-end subpage-content">
      <h2
        class="max-w-3xl pb-4 uppercase text-[32px] font-extrabold font-shoulders"
      >
        Szolgáltatásaink
      </h2>
      <p class="max-w-3xl pb-10 text-sm text-right">
        A Symbol Gym egyedülálló élményt kínál: itt nem csupán a testedet
        formálhatod, hanem egy olyan támogató közösség részévé válhatsz, amely
        mindig melletted áll. Célunk, hogy a mozgás ne csak egy kötelezettség
        legyen, hanem egy élmény, amelyet szívesen élsz át újra és újra. Nálunk
        a családias hangulat és az egymás iránti bizalom teremti meg azt a
        légkört, amelyben mindenki fejlődhet. Az edzések során nemcsak izmaidat
        erősítjük, hanem barátságokat építünk, és közös sikereket érünk el.
        Hiszünk abban, hogy a közös célokért való küzdelem és az egymás iránti
        támogatás sokkal többet ad, mint amit bármelyik edzőterem nyújtani tud.
        A Symbol Gym-ben minden lépésed számít. Akár a kezdő lépéseknél tartasz,
        akár a következő nagy kihívásodra készülsz, mi itt vagyunk, hogy
        segítsünk. Csatlakozz hozzánk, és éld át, milyen érzés, amikor egy
        közösség veled együtt halad az úton, mindig a legjobbat kihozva belőled!
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
</template>

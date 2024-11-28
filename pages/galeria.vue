<script setup>
  useHead({
    title: 'Galéria',
  })

  import { ref, onMounted, computed } from 'vue'

  const galleryImages = ref([])
  const currentImageIndex = ref(0)
  const isLightboxOpen = ref(false)
  const isImageLoading = ref(false)

  onMounted(async () => {
    try {
      const imageModules = import.meta.glob(
        '/public/img/gallery/**/*.{webp,jpg,png}',
        { eager: true }
      )
      const images = []

      Object.keys(imageModules).forEach((path) => {
        const match = path.match(/\/img\/gallery\/(.+)\/(.+)$/)
        if (match) {
          const [, folder, filename] = match
          images.push({
            src: `/img/gallery/${folder}/${filename}`,
            alt: `${folder} image`,
          })
        }
      })

      galleryImages.value = images
    } catch (error) {
      console.error('Error loading gallery images:', error)
    }
  })

  const openLightbox = (index) => {
    currentImageIndex.value = index
    isLightboxOpen.value = true
    isImageLoading.value = true
    document.addEventListener('keydown', handleKeyDown)
    disableScroll()
  }

  const closeLightbox = () => {
    isLightboxOpen.value = false
    document.removeEventListener('keydown', handleKeyDown)
    enableScroll()
  }

  const nextImage = () => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % galleryImages.value.length
    isImageLoading.value = true
  }

  const prevImage = () => {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + galleryImages.value.length) %
      galleryImages.value.length
    isImageLoading.value = true
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      nextImage()
    } else if (event.key === 'ArrowLeft') {
      prevImage()
    } else if (event.key === 'Escape') {
      closeLightbox()
    }
  }

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('lightbox-container')) {
      closeLightbox()
    }
  }

  const disableScroll = () => {
    document.body.classList.add('no-scroll')
  }

  const enableScroll = () => {
    document.body.classList.remove('no-scroll')
  }

  const currentImage = computed(
    () => galleryImages.value[currentImageIndex.value]
  )

  const handleImageLoad = () => {
    isImageLoading.value = false
  }
</script>

<template>
  <section class="gallery-content bg-black">
    <!-- Header Image -->
    <NuxtImg
      src="/img/team.webp"
      alt="Beautiful garden path"
      class="object-cover w-full h-screen"
    />

    <div class="container my-16">
      <!-- Gallery Title -->
      <h2 class="mb-8 text-white text-3xl uppercase font-teko text-white">
        GALÉRIA
      </h2>
      <!-- Description -->
      <div class="leading-loose">
        <p class="pb-6 text-white">
          A Symbol Gym Orosháza több mint egy egyszerű edzőterem – ez egy olyan
          közösségi tér, ahol az emberek inspirációt és támogatást találnak az
          egészségesebb, erősebb élet felé vezető úton. Itt mindenki
          megtapasztalhatja, mit jelent túllépni a saját határain, legyen szó
          fizikai vagy mentális kihívásokról. Edzéseink nemcsak a testet
          formálják, hanem a lelket is erősítik, hogy kitartással és
          elszántsággal nézhess szembe a mindennapok próbáival. Az itt
          megszerzett erő és kitartás az élet minden területén érezteti hatását.
        </p>
        <p class="pb-6 text-white">
          Az edzéseink során a legújabb technológiákat és módszereket
          alkalmazzuk, hogy a fejlődésed minden szempontból optimális legyen. A
          Symbol Gym falai között minden perc értékes, és minden egyes gyakorlat
          közelebb visz a kitűzött célokhoz. A fejlesztésre szánt figyelem és az
          elért eredmények öröme egyaránt hozzájárulnak ahhoz, hogy az edzés ne
          csak kötelezettség, hanem valódi életmód legyen.
        </p>
        <p class="text-white">
          Várunk téged is a Symbol Gym Orosházában, ahol egy családias
          közösségben, támogató légkörben dolgozhatsz önmagad legjobb
          változatának megteremtésén. Éld át a változást, érezd az erőt és
          találd meg azt az önbizalmat, ami valóban megváltoztatja az életedet!
          Légy részese ennek az inspiráló utazásnak, ahol nemcsak tested, hanem
          lelked is új szintre emelkedik. Csatlakozz hozzánk, és tapasztald meg,
          mit jelent az igazi csapat, ahol együtt érünk el csodálatos
          eredményeket!
        </p>
      </div>
      <!-- Image Grid -->
      <div class="grid grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(image, index) in galleryImages"
          :key="image.src"
          class="relative group"
        >
          <div>
            <div
              class="relative w-full h-64 mb-4 overflow-hidden transition-shadow duration-300 cursor-pointer group-hover:shadow-xl"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="object-cover w-full h-full"
                loading="lazy"
              />
              <div
                @click="openLightbox(index)"
                class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-0 cursor-pointer group-hover:bg-opacity-20"
              >
                <span
                  class="text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  >Megtekintés</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="/" class="go-back-button">
        <span class="go-back-button__icon">&#8592;</span>
        <span class="go-back-button__text">Vissza a főoldalra</span>
      </NuxtLink>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="isLightboxOpen"
        @click="handleOutsideClick"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 lightbox-container"
      >
        <div class="relative max-w-4xl max-h-full">
          <div
            v-if="isImageLoading"
            class="absolute inset-0 flex items-center justify-center"
          >
            <PhosphorIconSpinner class="w-8 h-8 text-white animate-spin" />
          </div>
          <img
            v-if="currentImage"
            :src="currentImage.src"
            :alt="currentImage.alt"
            class="object-contain max-w-full max-h-[80vh]"
            @load="handleImageLoad"
          />
          <button
            @click.stop="prevImage"
            class="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-4 top-1/2 hover:bg-opacity-75"
          >
            <PhosphorIconArrowLeft :size="24" />
          </button>
          <button
            @click.stop="nextImage"
            class="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-4 top-1/2 hover:bg-opacity-75"
          >
            <PhosphorIconArrowRight :size="24" />
          </button>
          <button
            @click.stop="closeLightbox"
            class="absolute p-2 text-white bg-black bg-opacity-50 rounded-full top-4 right-4 hover:bg-opacity-75"
          >
            <PhosphorIconX :size="24" />
          </button>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style>
  .no-scroll {
    overflow: hidden;
    padding-right: 15px; /* Adjust this value based on the width of your scrollbar */
  }

  .gallery-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .header-image {
    position: relative;
    height: 300px;
    overflow: hidden;
  }

  .header-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

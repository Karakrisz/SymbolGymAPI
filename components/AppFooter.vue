<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phonenumber: '',
  subject: '',
});

const isSent = ref(false);
const isLoading = ref(false);
const errorMessage = ref<string | null>(null);

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phonenumber: '',
    subject: '',
  };
};

const sendEmail = async () => {

  isLoading.value = true;
  errorMessage.value = null;

  try {
    const formData = new URLSearchParams();
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('phonenumber', form.value.phonenumber);
    formData.append('subject', form.value.subject);

    const response = await fetch('https://formcarry.com/s/hqOyhWUJRxd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json', 
      },
      body: formData.toString(),
    });

    if (response.ok) {
      isSent.value = true;
      // alert('Form submitted successfully!');
      resetForm(); 
    } else {
      const responseText = await response.text(); 
      throw new Error(`Failed to send form. Server responded with: ${responseText}`);
    }
  } catch (error) {
    console.error('Error sending form:', error);
    errorMessage.value = error instanceof Error ? error.message : 'Unknown error occurred.';
    alert(errorMessage.value);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section class="relative flex items-center justify-center bg-black">
    <NuxtImg
      src="/img/form-bg.webp"
      alt="Background"
      class="absolute inset-0 object-cover w-full h-full max-w-6xl"
    />
    <div
      class="container relative z-10 flex flex-col items-end justify-end bg-black bg-opacity-75 md:bg-opacity-0"
    >
      <div class="py-20 md:w-1/2">
        <h2
          class="mb-2 text-4xl font-extrabold text-right text-primary font-shoulders"
        >
          EDDZ VELÜNK!
        </h2>
        <p class="mb-6 text-sm text-right text-white">
          Jelentkezz az alábbi űrlapon és lépj be a Symbol Gym érzésbe!
        </p>
        <form @submit.prevent="sendEmail" class="flex flex-col items-end">
          <div class="w-full mb-4">
            <input
              type="text"
              placeholder="NÉV"
              id="name"
              v-model="form.name"
              required
              class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary"
            />
          </div>
          <div class="w-full mb-4">
            <input
              type="email"
              placeholder="E-MAIL CÍM"
              id="email"
              v-model="form.email"
              required
              class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary"
            />
          </div>
          <div class="w-full mb-4">
            <input
              type="tel"
              id="phonenumber"
              v-model="form.phonenumber"
              required
              placeholder="TELEFONSZÁM"
              class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary"
            />
          </div>
          <div class="w-full mb-6">
            <input
              type="number"
              placeholder="EDZÉSEK SZÁMA HETENTE"
              id="subject"
              v-model="form.subject"
              required
              class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary"
            />
          </div>
          <div v-if="!isSent" class="contact-form__link-box__text-box text-end">
            <button
              type="submit"
              aria-label="submit"
              class="px-[39px] py-[17px] font-extrabold text-xl text-white transition duration-300 bg-primary font-shoulders hover:bg-red-700 cursor"
            >
              JELENTKEZEM
            </button>
            <p class="mt-4 text-xs text-right text-gray-400">
              A JELENTKEZEM GOMBRA KATTINTVA ELFOGADOM AZ ADATVÉDELMI
              NYILATKOZATOT.
            </p>
          </div>
          <div v-if="isSent" class="confirmation-message bg-color-w">
            <p class="confirmation-message__p text-white f-600">
              Köszönjük az üzenetét, hamarosan felvesszük Önnel a kapcsolatot.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
  <footer class="text-white bg-black font-teko">
    <div
      class="flex flex-col items-center justify-between ml-10 sm:gap-12 sm:items-start md:flex-row"
    >
      <!-- Logo and Navigation -->
      <div class="flex items-center gap-8 my-8">
        <NuxtImg src="/img/logo_white.svg" alt="Symbol Gym" class="w-32 h-32" />
        <nav class="space-y-2">
          <NuxtLink
            to="/galeria"
            class="block tracking-widest hover:text-gray-300"
            >GALÉRIA</NuxtLink
          >
          <NuxtLink
            to="/rolunk"
            class="block tracking-widest hover:text-gray-300"
            >RÓLUNK</NuxtLink
          >
          <NuxtLink
            to="/szolgaltatasok"
            class="block tracking-widest hover:text-gray-300"
            >SZOLGÁLTATÁSOK</NuxtLink
          >
          <!-- <a href="#" class="block tracking-widest hover:text-gray-300">BLOG</a> -->
          <!-- <a href="#" class="block tracking-widest hover:text-gray-300"
            >ÁRLISTA</a
          > -->
          <NuxtLink
            to="/kapcsolat"
            class="block tracking-widest hover:text-gray-300"
            >KAPCSOLAT</NuxtLink
          >
        </nav>
      </div>

      <!-- Legal and Social -->
      <div
        class="flex flex-col items-center mx-auto sm:items-start sm:mx-0 sm:my-8"
      >
        <nav class="mb-4 space-y-2 opacity-50">
          <NuxtLink
            to="adatvedelmi-tajekoztato"
            class="block tracking-widest hover:text-gray-300"
            >ADATVÉDELMI NYILATKOZAT</NuxtLink
          >
          <!-- <a href="#" class="block tracking-widest hover:text-gray-300"
            >GYAKRAN ISMÉTELT KÉRDÉSEK</a
          > -->
        </nav>
        <div class="flex space-x-4">
          <a
            target="_blank"
            href="https://www.facebook.com/p/Symbol-Gym-100057306825568"
            class="hover:opacity-75"
          >
            <NuxtImg
              src="/img/FacebookLogo.svg"
              alt="Facebook"
              class="w-6 h-6"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/symbolgym"
            class="hover:opacity-75"
          >
            <NuxtImg
              src="/img/InstagramLogo.svg"
              alt="Instagram"
              class="w-6 h-6"
            />
          </a>
        </div>
        <NuxtImg
          src="/img/DigitalSeedLogo.svg"
          alt="Digital Studio"
          class="w-20 pb-4 pt-7 sm:pb-0"
        />
      </div>

      <!-- Map -->
      <div
        class="relative hidden w-full h-[250px] max-w-6xl overflow-hidden md:w-1/2 lg:w-3/5 md:flex"
      >
        <!-- <NuxtImg
          src="/img/map.webp"
          alt="Map"
          class="absolute inset-0 object-cover w-full h-full"
        /> -->
        <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.861822055165!2d20.651532376375744!3d46.57019777111364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47443f501104d1bf%3A0x28afc28132a08eed!2sSymbol%20Gym%20Crosstraining%20Funkcion%C3%A1lis%20edz%C5%91terem!5e0!3m2!1shu!2shu!4v1730730305084!5m2!1shu!2shu"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </footer>
</template>

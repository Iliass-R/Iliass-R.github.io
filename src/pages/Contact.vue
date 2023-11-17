<template>
  <div class="h-full bg-primary/30">
    <div
      class="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full"
    >
      <!-- texte & formulaire-->
      <div class="flex flex-col w-full max-w-[700px]">
        <!-- text -->
        <h2 class="h2 text-center mb-12">
          Prenons un temps <span class="text-accent">d'échange.</span>
        </h2>
        <!-- formulaire -->
        <form
          class="flex-1 flex flex-col gap-6 w-full mx-auto"
          @submit.prevent="submitForm"
        >
          <div class="flex gap-x-6 w-full">
            <input v-model="name" type="text" placeholder="nom" class="input" />
            <input
              v-model="email"
              type="text"
              placeholder="email"
              class="input"
            />
          </div>
          <input
            v-model="subject"
            type="text"
            placeholder="objet"
            class="input"
          />
          <textarea
            v-model="message"
            placeholder="message"
            class="textarea"
          ></textarea>
          <button
            class="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
          >
            <span @click="submitForm" class="cursor-pointer">
              Me contacter</span
            >
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../../supabase.js";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const submitForm = async () => {
  try {
    // Envoyer les données à Supabase
    const { data, error } = await supabase.from("ContactForm").insert([
      {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      },
    ]);

    if (error) {
      console.error("Erreur lors de l'envoi des données à Supabase:", error);
    } else {
      console.log("Données envoyées avec succès:");
      // Réinitialiser le formulaire après l'envoi réussi
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    }
  } catch (error) {
    console.error("Erreur inattendue:", error);
  }
};
</script>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNotice } from '@/stores/useNotice'
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import SecondaryButton from '@/components/common/SecondaryButton.vue'
import LanguageSelect from '@/components/interface/LanguageSelect.vue'

const { t } = useI18n()
const notice = useNotice()
notice.loadFromStorage()

const tabs: Array<'policy' | 'services' | 'choices'> = ['policy', 'services', 'choices']
const activeTab = ref<'policy' | 'services' | 'choices'>('policy')

const choices = ref({
  performance: false,
  functionality: false,
  marketing: false,
})
</script>

<template>
  <div
    id="overlay"
    v-if="!notice.accepted"
    class="fixed w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.45)] z-55"
  >
    <div
      id="notice"
      class="flex flex-col relative w-full h-128 p-10 pb-4 max-w-256 bg-b-l-default dark:bg-b-d-l8 shadow-xl rounded-md text-sm md:text-md font-normal text-t-l-default dark:text-t-d-l14 text-justify"
    >
      <div class="flex flex-row justify-between">
        <div>
          <h2 class="select-none text-xl md:text-2xl font-semibold">
            {{ t('system.cookies.notice.title') }}
          </h2>
          <p class="mb-4 text-xs md:text-sm">
            <span class="font-semibold">{{ t('system.cookies.notice.lastUpdated') }}</span>
          </p>
        </div>
        <LanguageSelect class="absolute top-4 right-4 flex items-end" />
      </div>
      <div class="flex gap-4 border-b mb-4 pb-2">
        <button
          class="font-semibold cursor-pointer"
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="['px-2 py-1', activeTab === tab ? 'border-b-2 border-p-l-default' : 'opacity-70']"
        >
          {{ t('system.cookies.notice.categories.' + tab) }}
        </button>
      </div>

      <div class="grow overflow-scroll px-2">
        <div v-if="activeTab === 'policy'">
          <p class="mb-2">{{ t('system.cookies.notice.policy.intro') }}</p>
          <p class="mb-2">{{ t('system.cookies.notice.policy.firstParty') }}</p>
          <p class="mb-2">{{ t('system.cookies.notice.policy.why') }}</p>

          <h3 class="font-semibold mb-1">
            {{ t('system.cookies.notice.policy.categories.necessary.title') }}
          </h3>
          <p class="mb-2">{{ t('system.cookies.notice.policy.categories.necessary.text') }}</p>

          <h3 class="font-semibold mb-1">
            {{ t('system.cookies.notice.policy.categories.performance.title') }}
          </h3>
          <p class="mb-2">{{ t('system.cookies.notice.policy.categories.performance.text') }}</p>

          <h3 class="font-semibold mb-1">
            {{ t('system.cookies.notice.policy.categories.functionality.title') }}
          </h3>
          <p class="mb-2">{{ t('system.cookies.notice.policy.categories.functionality.text') }}</p>

          <h3 class="font-semibold mb-1">
            {{ t('system.cookies.notice.policy.categories.marketing.title') }}
          </h3>
          <p class="mb-2">{{ t('system.cookies.notice.policy.categories.marketing.text') }}</p>
        </div>

        <div v-if="activeTab === 'services'">
          <p class="mb-2">{{ t('system.cookies.notice.services.intro') }}</p>
        </div>

        <div v-if="activeTab === 'choices'">
          <p class="mb-2">{{ t('system.cookies.notice.choices.intro') }}</p>
          <div class="flex flex-col gap-2">
            <label class="flex items-center gap-2">
              <input type="checkbox" disabled checked />
              {{ t('system.cookies.notice.choices.necessary') }}
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="choices.performance" />
              {{ t('system.cookies.notice.choices.performance') }}
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="choices.functionality" />
              {{ t('system.cookies.notice.choices.functionality') }}
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="choices.marketing" />
              {{ t('system.cookies.notice.choices.marketing') }}
            </label>
          </div>
        </div>
      </div>

      <div class="mt-4 flex flex-col items-center justify-center sm:flex-row gap-4 justify-end">
        <SecondaryButton :action="() => notice.acceptChoices(choices)">
          {{ t('system.cookies.notice.buttons.confirm') }}
        </SecondaryButton>
        <SecondaryButton :action="() => notice.acceptMandatory()">
          {{ t('system.cookies.notice.buttons.mandatory') }}
        </SecondaryButton>
        <PrimaryButton :action="() => notice.acceptAll()">
          {{ t('system.cookies.notice.buttons.accept') }}
        </PrimaryButton>
      </div>
    </div>
  </div>
</template>

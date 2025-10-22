<script setup lang="ts">
import { ref, watch, onBeforeUnmount, computed } from 'vue'
import { useI18n } from 'vue-i18n'

type Status = 'idle' | 'working' | 'error' | 'success'

const props = defineProps<{
  baseKey: string
  status: Status
  errorText?: string
  colorMap?: Partial<Record<Status, string>>
}>()

const { t } = useI18n()

const dots = ref('')
let interval: ReturnType<typeof setInterval> | null = null

watch(
  () => props.status,
  (newStatus) => {
    if (newStatus === 'working') startDots()
    else { stopDots(); dots.value = '' }
  },
  { immediate: true }
)

function startDots(): void {
  stopDots()
  const states = ['.', '..', '...']
  let i = 0
  interval = setInterval(() => {
    dots.value = states[i]
    i = (i + 1) % states.length
  }, 400)
}

function stopDots(): void {
  if (interval !== null) { clearInterval(interval); interval = null }
}

onBeforeUnmount(stopDots)

const colorClass = computed(() => {
  const defaults: Record<Status, string> = {
    idle: 'text-t-l-default dark:text-t-d-default',
    working: 'text-a-l-default dark:text-a-d-d10',
    success: 'text-a-l-default dark:text-a-d-d10',
    error: 'text-t-error dark:text-t-error',
  }
  return props.colorMap?.[props.status] ?? defaults[props.status]
})

const text = computed(() => {
  switch (props.status) {
    case 'working':
      return t(`${props.baseKey}.action`)
    case 'success':
      return t(`${props.baseKey}.success`)
    case 'error':
      return props.errorText && props.errorText.length
        ? props.errorText
        : (t(`${props.baseKey}.error`, '') as unknown as string)
    default:
      return t(`${props.baseKey}.default`)
  }
})
</script>

<template>
  <h1
    class="select-none text-xs md:text-sm font-light transition-colors duration-300"
    :class="colorClass">
    {{ text }}<span v-if="status === 'working'">{{ dots }}</span>
  </h1>
</template>

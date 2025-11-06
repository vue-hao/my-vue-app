export const devlog = (...data: any[]) => {
  if (import.meta.env.DEV) {
    console.log('[dev]', ...data)
  }
}

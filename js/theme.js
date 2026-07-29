(() => {
  const storageKey = "nicolaluessi-theme"
  const picker = document.querySelector("#theme-select")

  if (!picker) {
    return
  }

  let savedTheme = "system"

  try {
    const storedValue = localStorage.getItem(storageKey)
    if (storedValue === "light" || storedValue === "dark") {
      savedTheme = storedValue
    }
  } catch {}

  picker.value = savedTheme

  picker.addEventListener("change", () => {
    const selectedTheme = picker.value

    if (selectedTheme === "light" || selectedTheme === "dark") {
      document.documentElement.dataset.theme = selectedTheme
    } else {
      delete document.documentElement.dataset.theme
    }

    try {
      if (selectedTheme === "system") {
        localStorage.removeItem(storageKey)
      } else {
        localStorage.setItem(storageKey, selectedTheme)
      }
    } catch {}
  })
})()

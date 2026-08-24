const sidebarStorageKey = "left-sidebar"

function getSavedSidebarState(): "collapsed" | "expanded" {
  try {
    return localStorage.getItem(sidebarStorageKey) === "collapsed" ? "collapsed" : "expanded"
  } catch {
    return "expanded"
  }
}

function setSidebarState(state: "collapsed" | "expanded", save = false) {
  const isExpanded = state === "expanded"
  const label = isExpanded ? "Collapse sidebar" : "Expand sidebar"

  document.documentElement.setAttribute("left-sidebar", state)

  for (const button of document.getElementsByClassName("sidebar-toggle")) {
    button.setAttribute("aria-expanded", String(isExpanded))
    button.setAttribute("aria-label", label)
    button.setAttribute("title", label)
  }

  if (save) {
    try {
      localStorage.setItem(sidebarStorageKey, state)
    } catch {
      // The control still works when storage is unavailable.
    }
  }
}

setSidebarState(getSavedSidebarState())

document.addEventListener("nav", () => {
  const toggleSidebar = () => {
    const currentState = document.documentElement.getAttribute("left-sidebar")
    setSidebarState(currentState === "collapsed" ? "expanded" : "collapsed", true)
  }

  setSidebarState(getSavedSidebarState())

  for (const button of document.getElementsByClassName("sidebar-toggle")) {
    button.addEventListener("click", toggleSidebar)
    window.addCleanup(() => button.removeEventListener("click", toggleSidebar))
  }
})

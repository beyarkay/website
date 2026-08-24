// @ts-ignore
import sidebarToggleScript from "./SidebarToggle.inline"
import styles from "./styles/sidebarToggle.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const SidebarToggle: QuartzComponent = () => {
  return (
    <button
      type="button"
      class="sidebar-toggle"
      aria-controls="quartz-sidebar-left"
      aria-expanded={true}
      aria-label="Collapse sidebar"
      title="Collapse sidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 3v18" />
        <path class="sidebar-toggle-caret sidebar-toggle-collapse-caret" d="m16 9-3 3 3 3" />
        <path class="sidebar-toggle-caret sidebar-toggle-expand-caret" d="m14 9 3 3-3 3" />
      </svg>
    </button>
  )
}

SidebarToggle.beforeDOMLoaded = sidebarToggleScript
SidebarToggle.css = styles

export default (() => SidebarToggle) satisfies QuartzComponentConstructor

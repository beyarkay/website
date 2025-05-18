import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "beyarkay/website",
        // from data-repo-id
        repoId: "R_kgDOMglifg",
        // from data-category
        category: "Announcements",
        // from data-category-id
        categoryId: "DIC_kwDOMglifs4Clyjj",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      Home: "https://boydkane.com",
      GitHub: "https://github.com/beyarkay",
      Twitter: "https://www.twitter.com/beyarka",
      LessWrong: "https://www.lesswrong.com/users/beyarkay",
      LinkedIn: "https://www.linkedin.com/in/boydrkane/",
      Essays: "https://boydkane.com/essays/",
      Projects: "https://boydkane.com/projects/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        filterFn: (node) => {
          // exclude files with the tag "explorerexclude"
          return node.file?.frontmatter?.tags?.includes("explorer-exclude") !== true
        },
      }),
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}

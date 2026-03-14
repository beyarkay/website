import test, { describe, before, after } from "node:test"
import assert from "node:assert"
import * as fs from "fs"
import * as path from "path"
import { execSync } from "child_process"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, "../../..")
const CONTENT_DIR = path.join(ROOT, "content")
const PUBLIC_DIR = path.join(ROOT, "public")

const TEST_FILE = path.join(CONTENT_DIR, "_test-unlisted-xyz789.md")
const UNLISTED_SLUG = "_test-unlisted-xyz789"

describe("unlisted frontmatter", () => {
  before(() => {
    fs.writeFileSync(
      TEST_FILE,
      `---
title: Test Unlisted Page
unlisted: true
tags: [_test-unlisted-tag-xyz789]
---

This is a test page that should be unlisted.
`,
    )
    execSync("npx quartz build", { cwd: ROOT, stdio: "pipe", timeout: 60_000 })
  })

  after(() => {
    fs.unlinkSync(TEST_FILE)
  })

  test("unlisted page is built and accessible", () => {
    const htmlPath = path.join(PUBLIC_DIR, `${UNLISTED_SLUG}.html`)
    assert(fs.existsSync(htmlPath), `Expected ${htmlPath} to exist`)
    const html = fs.readFileSync(htmlPath, "utf-8")
    assert(
      html.includes("This is a test page that should be unlisted"),
      "Unlisted page should contain its content",
    )
  })

  test("unlisted page has noindex meta tag", () => {
    const htmlPath = path.join(PUBLIC_DIR, `${UNLISTED_SLUG}.html`)
    const html = fs.readFileSync(htmlPath, "utf-8")
    assert(
      html.includes('content="noindex, nofollow"'),
      "Expected noindex,nofollow meta tag in unlisted page",
    )
  })

  test("unlisted page is not in sitemap", () => {
    const sitemap = fs.readFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), "utf-8")
    assert(
      !sitemap.includes(UNLISTED_SLUG),
      "Unlisted page should not appear in sitemap",
    )
  })

  test("unlisted page is not in content index (search/explorer/graph)", () => {
    const index = fs.readFileSync(
      path.join(PUBLIC_DIR, "static", "contentIndex.json"),
      "utf-8",
    )
    assert(
      !index.includes(UNLISTED_SLUG),
      "Unlisted page should not appear in content index",
    )
  })

  test("unlisted page is not in RSS feed", () => {
    const rss = fs.readFileSync(path.join(PUBLIC_DIR, "index.xml"), "utf-8")
    assert(
      !rss.includes(UNLISTED_SLUG),
      "Unlisted page should not appear in RSS feed",
    )
  })

  test("unlisted page tag does not create a tag page", () => {
    const tagPagePath = path.join(PUBLIC_DIR, "tags", "_test-unlisted-tag-xyz789.html")
    assert(
      !fs.existsSync(tagPagePath),
      "Tag page should not be created for tags only used by unlisted pages",
    )
  })

  test("unlisted page does not appear in any tag listing", () => {
    const tagsDir = path.join(PUBLIC_DIR, "tags")
    if (!fs.existsSync(tagsDir)) return
    const tagFiles = fs.readdirSync(tagsDir).filter((f) => f.endsWith(".html"))
    for (const tagFile of tagFiles) {
      const html = fs.readFileSync(path.join(tagsDir, tagFile), "utf-8")
      assert(
        !html.includes(UNLISTED_SLUG),
        `Unlisted page should not appear in tag page ${tagFile}`,
      )
    }
  })

  test("unlisted page does not appear in folder listing", () => {
    // The test file is at root, so check the root folder index if it exists
    const folderFiles = fs.readdirSync(PUBLIC_DIR).filter((f) => f.endsWith(".html"))
    for (const file of folderFiles) {
      if (file === `${UNLISTED_SLUG}.html`) continue // skip the page itself
      const html = fs.readFileSync(path.join(PUBLIC_DIR, file), "utf-8")
      assert(
        !html.includes(`>${UNLISTED_SLUG}<`),
        `Unlisted page should not appear as a link in ${file}`,
      )
    }
  })
})

<h1 id="nuxt-taxonomies" align="center">Nuxt Taxonomies</h1>

<p align="center"><a href="https://www.patreon.com/thombruce"><img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron"></a></p>

<p align="center"><a href="https://github.com/thombruce/nuxt-taxonomies/issues"><img src="https://img.shields.io/github/issues-raw/thombruce/nuxt-taxonomies?logo=github" alt="GitHub issues"></a></p>

<p align="center"><a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a></p>

<p align="center">Plugin adding support for automatic handling of taxonomies with Nuxt Content.</p>

## Installation

```sh
# With Yarn
yarn add @thombruce/nuxt-taxonomies
# With npm
npm install @thombruce/nuxt-taxonomies --save
```

Add `@thombruce/nuxt-taxonomies` to `buildModules` in `nuxt.config.js`:

```js
  buildModules: [
    // ...
    "@thombruce/nuxt-taxonomies",
    // ...
  ],
```

## Usage

```vue
<script>
export default {
  async asyncData ({ $taxonomies }) {
    // To list all tags found in /content/blog files
    const tags = $taxonomies('tags', 'blog').all() // [{ slug: 'my-tag', title: 'My Tag' }, { slug: 'my-other-tag', title: 'My Other Tag' }]

    return { tags }
  }
}
```

```vue
<script>
export default {
  async asyncData ({ $taxonomies }) {
    // To retrieve a specific term
    const term = $taxonomies('tags', 'blog').find('my-tag') // { slug: 'my-tag', title: 'My Tag' }

    return { term }
  }
}
</script>
```

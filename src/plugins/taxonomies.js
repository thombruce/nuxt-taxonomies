import flow from 'lodash/fp/flow'
import flatten from 'lodash/fp/flatten'
import compact from 'lodash/fp/compact'
import uniq from 'lodash/fp/uniq'
import map from 'lodash/fp/map'
import kebabCase from 'lodash/fp/kebabCase'

class Taxonomy {
  constructor ($content, taxonomy, property, options) {
    this.$content = $content
    this.taxonomy = taxonomy
    this.property = property || ''
    this.options = options || {}
    this.terms = []
  }

  async all () { // $taxonomies(taxonomy, property, options).all()
    await this.getTerms()
    return this.terms
  }

  async find (slug) { // $taxonomies(taxonomy, property, options).find(term)
    await this.getTerms()
    const term = this.terms.find(term => term.slug === slug)
    return term
  }

  async getTerms () {
    const articles = await this.$content(this.property, this.options)
      .only([this.taxonomy])
      .fetch()
    let terms = articles.map(article => article[this.taxonomy])

    this.terms = flow(
      flatten,
      compact,
      uniq,
      map(term => {
        const sanitizedTerm = kebabCase(term)
        return {
          slug: sanitizedTerm,
          title: term,
          path: `${(this.options.nestedTaxonomy && this.property != '') ? '/' + this.property : ''}/${this.taxonomy}/${sanitizedTerm}`
        }
      })
    )(terms)

    return this.terms
  }
}

export default ({ $content }, inject) => {
  inject(
    'taxonomies',
    (taxonomy, property, options) => {
      return new Taxonomy($content, taxonomy, property, options)
    }
  )
}

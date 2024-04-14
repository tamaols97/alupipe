"use server"

import data from "./data"

export async function getProduct(slug, lang) {
    const _products = data.products(lang)
    const _catalogs = data.catalogs(lang)
    const _product = _products[slug]

    if (!_product) return null 

    return {
        name: "",
        content: "",
        catalogs: _product.catalogs ? _catalogs.filter(cata => !!_product.catalogs.find(id => cata.id == id)) : []
    }
}
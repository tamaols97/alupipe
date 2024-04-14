import _catalog from "./base/catalogs"
import _products from "./base/products"

export default  {
    catalogs: lang => _catalog[lang],
    products: lang => _products[lang],
}
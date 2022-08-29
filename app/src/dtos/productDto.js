class ProductDto {
    constructor(timestamp, name, description, category, url, price, stock) {
        this.timestamp = timestamp,
        this.name = name,
        this.description = description,
        this.category = this.category,
        this.url = url,
        this.price = price,
        this.stock = stock
    }
}

module.exports = ProductDto
function GetProducts() {
    return fetch("http://localhost:2023/products", { method: "GET" })
}

export const ProductService = {
    GetProducts
};

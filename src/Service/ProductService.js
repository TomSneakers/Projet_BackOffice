function GetProducts() {
    return fetch("http://localhost:2023/products", { method: "GET" });
}

async function GetOrders() {
    const result = await fetch("http://localhost:2023/orders", { method: "GET" });
    return result.json();
}

function AddProduct(category, name, prices, image, description) {
    const body = JSON.stringify({
        category: category,
        name: name,
        prices: prices,
        imageUrl: image,
        description: description
    });
    return fetch("http://localhost:2023/products", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" }
    });
}

async function GetProduct(id) {
    const result = await fetch(`http://localhost:2023/product/${id}`, { method: "GET" });
    return result.json();
}

function UpdateProduct(id, category, name, prices, image, description) {
    const body = JSON.stringify({
        category: category,
        name: name,
        prices: prices,
        imageUrl: image,
        description: description
    });
    return fetch(`http://localhost:2023/product/${id}`, {
        method: "PUT",
        body,
        headers: { "Content-Type": "application/json" }
    });
}

function DeleteProduct(id) {
    return fetch(`http://localhost:2023/product/${id}`, { method: "DELETE" });
}

async function GetOrder(id) {
    const request = await fetch(`http://localhost:2023/order/${id}`, { method: "GET" });
    return request.json();
}

export const ProductService = {
    GetProducts,
    GetProduct,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    GetOrders,
    GetOrder
};

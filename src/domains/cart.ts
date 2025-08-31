import { IProduct } from "@domains/product";

export interface ICartProduct extends IProduct {
    quantity: number;
}

class Cart {
    private cartProducts: Map<string, ICartProduct>;

    constructor() {
        this.cartProducts = new Map();
    }

    public getProducts(): ICartProduct[] {
        return Array.from(this.cartProducts.values());
    }

    public addProduct(addingProduct: IProduct) {
        const cartProduct = this.cartProducts.get(addingProduct.id);

        if (!cartProduct) {
            return this.cartProducts.set(addingProduct.id, {
                ...addingProduct,
                quantity: 1,
            });
        }
    }

    public deleteProduct(productId: string) {
        this.cartProducts.delete(productId);
    }

    public getTotalProductPrice(productId: string) {
        const cartProduct = this.cartProducts.get(productId);

        if (!cartProduct) {
            console.log("We don`t have this product in your cart...");
            return 0;
        }

        const productTotalPrice = cartProduct.price * cartProduct.quantity;

        return productTotalPrice;
    }

    public getTotalCartPrice() {
        if (this.cartProducts.size === 0) {
            return 0;
        }

        const cartTotalPrice = Array.from(this.cartProducts.values()).reduce(
            (sum, currentProduct) =>
                sum + currentProduct.price * currentProduct.quantity,
            0
        );

        return cartTotalPrice;
    }

    public clearCart() {
        this.cartProducts.clear();
    }

    public increaseQuantity(productId: string): void {
        const cartProduct = this.cartProducts.get(productId);

        if (!cartProduct) return;

        cartProduct.quantity = cartProduct.quantity + 1;
    }

    public decreaseQuantity(productId: string): void {
        const cartProduct = this.cartProducts.get(productId);

        if (!cartProduct) return;

        cartProduct.quantity = cartProduct.quantity - 1;

        if (cartProduct.quantity <= 0) {
            this.deleteProduct(productId);
        }
    }
}

export default Cart;

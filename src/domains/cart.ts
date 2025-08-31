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
        const cartProduct: ICartProduct | undefined = this.cartProducts.get(
            addingProduct.id
        );

        if (cartProduct) {
            return;
        }

        this.cartProducts.set(addingProduct.id, {
            ...addingProduct,
            quantity: 1,
        });
    }

    public deleteProduct(productId: string) {
        this.cartProducts.delete(productId);
    }

    public getTotalProductPrice(productId: string) {
        const cartProduct: ICartProduct | undefined =
            this.cartProducts.get(productId);

        if (!cartProduct) {
            console.log("We don`t have this product in your cart...");

            return 0;
        }

        const productTotalPrice: number =
            cartProduct.price * cartProduct.quantity;

        return productTotalPrice;
    }

    public getTotalCartPrice() {
        if (this.cartProducts.size === 0) {
            return 0;
        }

        const prices: number[] = Array.from(this.cartProducts.values()).map(
            (product: ICartProduct) => product.price * product.quantity
        );

        const cartTotalPrice: number = prices.reduce(
            (sum: number, price: number) => sum + price,
            0
        );

        return cartTotalPrice;
    }

    public getTotalProducts() {
        const products: ICartProduct[] = Array.from(this.cartProducts.values());

        const totalProducts: number = products.reduce(
            (sum: number, product: ICartProduct) => sum + product.quantity,
            0
        );

        return totalProducts;
    }

    public clearCart() {
        this.cartProducts.clear();
    }

    public increaseQuantity(productId: string): void {
        const cartProduct: ICartProduct | undefined =
            this.cartProducts.get(productId);

        if (!cartProduct) return;

        cartProduct.quantity = cartProduct.quantity + 1;
    }

    public decreaseQuantity(productId: string): void {
        const cartProduct: ICartProduct | undefined =
            this.cartProducts.get(productId);

        if (!cartProduct) return;

        if (cartProduct.quantity === 1) {
            this.deleteProduct(productId);

            return;
        }

        cartProduct.quantity = cartProduct.quantity - 1;
    }
}

export default Cart;

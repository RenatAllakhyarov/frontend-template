import { IProduct } from "@domains/product";

export interface ICartProduct extends IProduct {
    quantity: number;
}

class Cart {
    private cartProducts: Map<string, ICartProduct>;

    constructor(products?: ICartProduct[]) {
        this.cartProducts = new Map();

        if (!products) return;

        products.forEach((product) => {
            this.cartProducts.set(product.id, { ...product });
        });
    }

    public getProducts(): ICartProduct[] {
        return Array.from(this.cartProducts.values());
    }

    public addProduct(addingProduct: IProduct): void {
        const cartProduct: ICartProduct | undefined = this.cartProducts.get(
            addingProduct.id
        );

        if (!!cartProduct) return;

        this.cartProducts.set(addingProduct.id, {
            ...addingProduct,
            quantity: 1,
        });
    }

    public deleteProduct(productId: string): void {
        this.cartProducts.delete(productId);
    }

    public getTotalProductPrice(productId: string): number {
        const cartProduct: ICartProduct | undefined =
            this.cartProducts.get(productId);

        if (!cartProduct) return 0;

        return cartProduct.price * cartProduct.quantity;
    }

    public getTotalPrice(): number {
        if (!this.cartProducts.size) return 0;

        const products = Array.from(this.cartProducts.values());

        const productPrices = products.map((p) => p.price * p.quantity);

        const totalPrice = productPrices.reduce((sum, price) => sum + price, 0);

        return totalPrice;
    }

    public getProductsCount(): number {
        const products = Array.from(this.cartProducts.values());

        const totalCount = products.reduce(
            (sum, product) => sum + product.quantity,
            0
        );

        return totalCount;
    }

    public clearCart(): void {
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

        if (cartProduct.quantity !== 1) {
            cartProduct.quantity = cartProduct.quantity - 1;
            return;
        }

        this.deleteProduct(productId);
    }
}

export default Cart;

import { IProduct } from "@domains/product";

export interface ICartProduct extends IProduct {
    quantity: number;
}

class CartManager {
    private cartProducts: ICartProduct[] = [];

    public getProducts(): ICartProduct[] {
        return this.cartProducts;
    }

    public addProduct(addingProduct: IProduct) {
        const isProductInCart = this.cartProducts.some(
            (product) => product.id === addingProduct.id
        );

        if (!isProductInCart) {
            return this.cartProducts.push({ ...addingProduct, quantity: 1 });
        }

        const cartProduct = this.cartProducts.find(
            (product) => product.id === addingProduct.id
        );

        if (cartProduct) {
            cartProduct.quantity = cartProduct.quantity + 1;
        }
    }

    public deleteProduct(productId: string) {
        this.cartProducts = this.cartProducts.filter(
            (product) => product.id !== productId
        );
    }

    public sumProductPrice(productId: string) {
        const cartProduct = this.cartProducts.find(
            (product) => product.id === productId
        );

        if (!cartProduct) {
            console.log("We don`t have this product in your cart...");
            return 0;
        }

        const productTotalPrice = cartProduct.price * cartProduct.quantity;

        return productTotalPrice;
    }

    public sumCartTotalPrice() {
        if (!this.cartProducts.length) {
            return 0;
        }

        const cartTotalPrice = this.cartProducts.reduce(
            (sum, currentProduct) =>
                sum + currentProduct.price * currentProduct.quantity,
            0
        );

        return cartTotalPrice;
    }

    public clearCart() {
        this.cartProducts = [];
    }

    public addQuantity(productId: string): void {
        const cartProduct = this.cartProducts.find(
            (product) => product.id === productId
        );

        if (!cartProduct) return;

        cartProduct.quantity = cartProduct.quantity + 1;
    }

    public decreaseQuantity(productId: string): void {
        const cartProduct = this.cartProducts.find(
            (product) => product.id === productId
        );

        if (!cartProduct) return;

        cartProduct.quantity = cartProduct.quantity - 1;

        if (cartProduct.quantity <= 0) {
            this.deleteProduct(productId);
        }
    }
}

export default CartManager;
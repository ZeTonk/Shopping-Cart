class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity = 1) {
        // Check if item already exists in cart
        const existingItemIndex = this.items.findIndex(
            item => item.name === name
        );

        if (existingItemIndex !== -1) {
            // If item exists, increase quantity
            this.item[existingItemIndex].quantity += quantity;
        } else {
            // If itm doesn't exist, add new item
            this.items.push({
                name,
                price,
                quantity
            });
        }

        return `${quantity} ${name}(s) added to cart.`;
    }

    removeItem(name,quantity = 1) {
        const index = this.items.findIndex(
            item => item.name === name
        );

        if (index === -1) {
            return `${name} not found in cart.`;
        }

        const item = this.items[index];

        if (item.quantity <= quantity) {
            // Remove the item completely 
            this.items.splice(index, 1);
            return `${name} removed from cart.`;
        } else {
            // Decrease quantity
            item.quantity -= quantity;
            return `${quantity} ${name}(s) removed from cart.`;
        }
    }

    updateQuantity(name, newQuantity) {
        if (newQuantity <= 0) {
            return this.removeItem(name, Infinity);
        }

        const item = this.items.find(
            item => item.name === name
        );

        if (!item) {
            return `${name} not found in cart.`;
        }

        item.quantity = newQuantity;
        return `${name} quantity updated to ${newQuantity}.`;
    }
        calculateTotal() {
            return this.items.reduce(
                (total, item) => total + (item.price * item.quantity),
                0
            );
        }

        generateRecipt() {
            if (this.items.length === 0) {
                return "Your cart is empty.";
            }

            let recipt = "===== RECIPT =====\n";

            this.items.forEach(item => {
                const itemTotal = (item.price * item.quantity).toFixed(2);
                recipt += `${item.name} x${item.quantity}: $${itemTotal}\n`;
            });

            recipt += "=================\n";
            recipt += `TOTAL: $${this.calculateTotal().toFixed(2)}`;

            return recipt
        }
    }
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await fetch(`${import.meta.env.APP_API_URL}/products`);

        const data = await res.json();

        return data;
    }
)


export const fetchProductsById = createAsyncThunk(
    "products/fetchProductsById",
    async (productId) => {
        const res = await fetch(`${import.meta.env.APP_API_URL}/products/${productId}`);

        const data = await res.json();

        return data;
    }
)


export const addProduct = createAsyncThunk(
    "products/addProduct",
    async productData => {
        const res = await fetch(`${import.meta.env.APP_API_URL}/products/add`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        const data = await res.json();

        return data;
    }
)

export const removeProduct = createAsyncThunk(
    "products/removeProduct",
    async productId => {
        const res = await fetch(`${import.meta.env.APP_API_URL}/products/remove/${productId}`, {
            method:"DELETE"
        });

        const data = await res.json();

        return data;
    }
)

export const editProduct = createAsyncThunk(
    "products/editProduct",
    async (product) => {
        const res = await fetch(`${import.meta.env.APP_API_URL}/products/edit/${product.id}`, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        const data = await res.json();

        return data;
    }
)


// /products/edit/1




const initialState = {
    products: [],
    filteredProducts: [],
    product: null,
    cart: [],
    favourite: [],
    loading: false,
    error: ""
}


// id = 1
// 1. Создать массив favourite ["1"]
// 2. Проверка ID внутри favourite, есть или нет ?
// 3. Если есть такой ID мы удаляем из массива
// 4. Если нет такого ID мы добавляем

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductFromLocalStorage: state => {
            let cartStorage = JSON.parse(localStorage.getItem("cart"));

            if (cartStorage) {
                state.cart = [...cartStorage];
            } else {
                localStorage.setItem("cart", JSON.stringify([]))
            }
        },
        getFavouriteFromLocalStorage: state => {
            let favouriteStorage = JSON.parse(localStorage.getItem("favourite"));

            if (favouriteStorage) {
                state.favourite = [...favouriteStorage];
            } else {
                localStorage.setItem("favourite", JSON.stringify([]))
            }
        },
        addProductToCart: (state, { payload }) => {
            let foundProduct = state.cart.find(item => item.id === payload.id);

            if (!foundProduct) {
                state.cart.push({ ...payload, count: 1 });

                localStorage.setItem("cart", JSON.stringify(state.cart))
            }
        },
        incrementProduct: (state, { payload }) => {
            state.cart = state.cart.map(item => {
                if (item.id === payload) {
                    item.count += 1;
                }

                return item;
            })

            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        decrementProduct: (state, { payload }) => {
            state.cart = state.cart.map(item => {
                if (item.id === payload) {
                    item.count -= 1;

                    if (item.count === 0) {
                        return null;
                    }
                }

                return item;
            }).filter(item => item);

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeProductFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(item => item.id !== payload);

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        setFavourite: (state, { payload }) => {
            let foundFavourite = state.favourite.find(item => item === payload);

            if(foundFavourite){
                state.favourite = state.favourite.filter(item => item !== payload);
            }else {
                state.favourite.push(payload)
            }

            localStorage.setItem("favourite", JSON.stringify(state.favourite))
        },
        sortBy: (state, {payload}) => {
            let data = state.filteredProducts.length > 0 ? state.filteredProducts : state.products

            if(payload.value === "low-to-high"){
                state.filteredProducts = data.sort((a, b) => a.price - b.price)
            }else if (payload.value === "high-to-low"){
                state.filteredProducts = data.sort((a, b) => b.price - a.price)
            }else {
                state.filteredProducts = data.sort((a, b) => a.id - b.id);
            }
        },
        filterByPrice: (state, {payload}) => {
            const {minPrice, maxPrice} = payload;

            state.filteredProducts = state.products.filter(item => item.price >= minPrice && item.price <= maxPrice)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchProductsById.pending, state => {
                state.loading = true;
            })
            .addCase(fetchProductsById.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchProductsById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addProduct.pending, state => {
                state.loading = true;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(removeProduct.pending, state => {
                state.loading = true;
            })
            .addCase(removeProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter(item => item.id !== action.payload);
            })
            .addCase(removeProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(editProduct.pending, state => {
                state.loading = true;
            })
            .addCase(editProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.map(item => {
                    if(item.id === action.payload.id){
                        item = action.payload
                    }

                    return item;
                });
            })
            .addCase(editProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})


export const { 
    addProductToCart, 
    removeProductFromCart, 
    incrementProduct, 
    decrementProduct, 
    getProductFromLocalStorage, 
    setFavourite, 
    getFavouriteFromLocalStorage,
    sortBy,
    filterByPrice
} = ProductsSlice.actions

export default ProductsSlice.reducer
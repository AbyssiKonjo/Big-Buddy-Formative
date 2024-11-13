import axios from "axios";

// Bring in all the envs
const CONSUMER_KEY = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_KEY
const CONSUMER_SECRET = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_SECRET
const API_URL = import.meta.env.VITE_WOOCOMMERCE_API_URL

// API Call
const wooCommerceApi = axios.create({
    baseURL: API_URL,
    auth: {
        username: CONSUMER_KEY,
        password: CONSUMER_SECRET,
    },
    params: {
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
    },

});

export default wooCommerceApi;
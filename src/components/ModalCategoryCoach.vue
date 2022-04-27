<template>
    <div>
        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal" class="modal-toggle">
        <div class="modal">
            <div class="modal-box">
                <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="font-bold text-lg text-center">Silahkan Pilih Kategori Coaching</h3>
                <div class="mt-5">
                    <select v-model="selectedCategories" class="block text-center py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" style="width: 29rem">
                        <option value="null">
                           Silahkan Pilih
                        </option>
                        <option v-for="cat in data_categories" :key="cat.id" :value="cat.slug">
                            {{ cat.categories_coaching }}
                        </option>
                    </select>
                </div>
                <div class="modal-action">
                <button @click="submitLocalStorage()" for="my-modal" class="btn">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data_categories: [],
            selectedCategories: null,
            token: null,
            user_name: null,
        }
    },
    created(){
        this.dcryptToken()

        this.axios.get(import.meta.env.VITE_BASE_URL_API + `/category-coaching`)
        .then(res => {
            // console.log(res.data.data);
            this.data_categories = res.data.data
        })
    },
    methods:{
        dcryptToken(){
            let querytoken = this.$route.query.token;
            let username = this.$route.query.name;
            console.log(username);
            if(querytoken != null){
                this.axios.get(import.meta.env.VITE_BASE_URL_API + `/getDcryptToken/` + querytoken)
                .then(res => {
                    // console.log(res.data.token);
                    this.token = res.data.token
                    this.user_name = username
                })
            }
        },
        submitLocalStorage(){
            if(this.selectedCategories == null){
                alert("Silahkan Pilih Kategori Terlebih Dahulu!")
                // console.log(import.meta.env.VITE_APP_AUTH_BASE_URL );
            } else {
                if (import.meta.env.VITE_APP_AUTH_BASE_URL == this.token) {
                    localStorage.setItem('token', this.token);
                    localStorage.setItem('name', this.user_name);
                    localStorage.setItem('status', "loggedIn");
                    localStorage.setItem('kategori', this.selectedCategories)
                    this.$router.push({
                        name: 'dashboard-view', 
                        params: {
                            slug: this.selectedCategories
                        }
                    })
                }
            }
        }
    }
}
</script>
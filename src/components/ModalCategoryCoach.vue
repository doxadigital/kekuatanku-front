<template>
    <div>
        <div class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div class=" text-center self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                Silahkan Pilih Kategori Coaching Yang Kamu Inginkan
            </div>
            <div class="mt-8">
                <form autoComplete="off">
                    <div class="flex flex-col mb-2">
                        <div class="flex relative ">
                            <select v-model="selectedCategories" class="block text-center py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" style="width: 29rem">
                                <option value="null">
                                   Silahkan Pilih
                                </option>
                                <option v-for="cat in data_categories" :key="cat.id" :value="cat.slug">
                                    {{ cat.categories_coaching }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="flex w-full">
                        <button @click="submitLocalStorage()" for="my-modal" class="btn">Submit</button>
                    </div>
                </form>
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
        }
    },
    created(){
        // this.dcryptToken()

        this.axios.get(import.meta.env.VITE_BASE_URL_API + `api/category-coaching`)
        .then(res => {
            // console.log(res.data.data);
            this.data_categories = res.data.data
        })
    },
    methods:{
        // dcryptToken(){
        //     let querytoken = this.$route.query.token;
        //     let username = this.$route.query.name;
        //     console.log(username);
        //     if(querytoken != null){
        //         this.axios.get(import.meta.env.VITE_BASE_URL_API + `/api/getDcryptToken/` + querytoken)
        //         .then(res => {
        //             // console.log(res.data.token);
        //             this.token = res.data.token
        //             this.user_name = username
        //         })
        //     }
        // },
        submitLocalStorage(){
            if(this.selectedCategories == null){
                alert("Silahkan Pilih Kategori Terlebih Dahulu!")
            } else {
                localStorage.setItem('kategori', this.selectedCategories)
                if (localStorage.getItem('role') == 'coach') {	
                    this.$router.push({ name: 'dashboard-coach-view' })
                } else if (localStorage.getItem('role') == 'user') {
                    this.$router.push({name: 'dashboard-view'})
                } else {
                    window.location.reload()
                }
            }
        }
    }
}
</script>
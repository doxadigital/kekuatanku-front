<template>  
    <div class="bg-indigo-900 relative overflow-hidden h-screen">
        <img src="../assets/img/4905784.jpg" class="absolute h-full w-full object-cover"/>
        <div class="inset-0 bg-black opacity-25 absolute">
        </div>
        <header class="absolute top-0 left-0 right-0 z-20">
            <nav class="container mx-auto px-6 md:px-12 py-4">
                <div class="md:flex justify-center items-center">
                    <div class="flex justify-between items-center">
                        <div class="md:hidden">
                            <button class="text-white focus:outline-none">
                                <svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div class="container mx-auto px-10 md:px-12 relative z-10 flex items-center py-30 xl:py-40">
            <div class="w-full flex flex-col items-center relative z-10">              
                <div class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                    <div class=" text-center self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                        Selamat Datang, Silahkan login dengan akunmu
                    </div>
                    <div class="mt-8">
                        <form @submit.prevent="login" autoComplete="off">
                            <div class="flex flex-col mb-2">
                                <div class="flex relative ">
                                    <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input type="text" id="sign-in-email" v-model="email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email"/>
                                </div>
                            </div>
                            <div class="flex flex-col mb-6">
                                <div class="flex relative ">
                                    <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input type="password" v-model="password" id="sign-in-pass" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password"/>
                                </div>
                            </div>
                            <div class="flex w-full">
                                <button type="submit" class="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email: '',
            password: '',
            loggedIn: localStorage.getItem('loggedIn'),
            token: localStorage.getItem('token'),
            loginFailed: null
        }
    },
    methods:{
        login(e){
            e.preventDefault()
            if (this.password.length > 0) {
                this.axios.get(import.meta.env.VITE_BASE_URL_API + `sanctum/csrf-cookie`).then(response => {
                    this.axios.post(import.meta.env.VITE_BASE_URL_API + `api/login`, {
                        email: this.email,
                        password: this.password
                    })
                    .then(res => {
                        console.log(res)
                        if (res.data.success) {
                            localStorage.setItem("loggedIn", "true")
                            localStorage.setItem("token", res.data.token)
                            localStorage.setItem("name", res.data.user.name)
                            localStorage.setItem('role', res.data.user.role_coaching)
                            this.loggedIn = true
                            if (localStorage.getItem('role') == 'coach') {
                                return this.$router.push({ name: 'dashboard-coach-view' })
                            } else {
                                return this.$router.push({ name: 'category-view' })
                            }
                        } else {
                            this.loginFailed = true
                        }
                    })
                })
            }
        },
    },
    mounted() {
        if (this.loggedIn) {
            return this.$router.push({ name: 'dashboard-coach-view' })
        }
    }
}
</script>
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
                <ModalCategoryCoach />
            </div>
        </div>
    </div>
</template>
<script>
import ModalCategoryCoach from '../components/ModalCategoryCoach.vue'
export default {
    components:{
        ModalCategoryCoach,
    }
}
</script>
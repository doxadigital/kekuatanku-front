<template>
    <div class="container my-12 mx-auto px-4 md:px-12"> 
        <div class="profile">
            <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4">
                <div class="flex-row gap-4 flex justify-center items-center">
                    <div class="flex-shrink-0">
                        <a href="#" class="block relative">
                            <img alt="profil" src="../assets/img/60111.jpg" width="150"/>
                        </a>
                    </div>
                    <div class=" flex flex-col">
                        <span class="text-gray-600 dark:text-white text-lg font-medium">
                            {{name}}
                        </span>
                        <span class="text-gray-400 text-xs">
                            User
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white dark:bg-gray-800 mt-20 ">
            <div class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span class="block">
                       Selamat Datang Di Dashboard Coach
                    </span>
                    <span class="block text-indigo-500">
                        Silahkan untuk mebuat room dengan menekan tombol disamping
                    </span>
                </h2>
                <div class="lg:mt-0 lg:flex-shrink-0">
                    <div class=" inline-flex rounded-md shadow">
                        <label for="my-modal-3" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Buat Room</label>
                        <!-- <button type="button" class="">
                            Buat Room
                        </button> -->
                    </div>
                </div>
                <ModalJoin /> 
            </div>
        </div>
    </div>
</template>
<script>
import ModalJoin from '../components/ModalJoinRoom.vue'
export default {
    data(){
        return {
            name: localStorage.getItem('name')
        }
    },
    components:{
        ModalJoin,
    }
}
</script>
<template>
    <div>
        <input type="checkbox" id="my-modal-3" class="modal-toggle">
        <div class="modal">
            <div class="modal-box relative">
                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold text-center">Silahkan Isi Detail Room</h3>
                <form @submit.prevent="createRoom()" method="post">
                    <div class=" relative mt-3">
                        <label for="name-with-label" class="text-gray-700">
                            Nama Sesi Coaching
                        </label>
                        <input type="text" v-model="rooms.session_name" id="name-with-label" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent" placeholder="Nama Coach"/>
                    </div>
                    <div class=" relative mt-3">
                        <label for="name-with-label" class="text-gray-700">
                            Nama Coach
                        </label>
                        <input type="text" v-model="rooms.coaching_name" id="name-with-label" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent" placeholder="Nama Coach"/>
                    </div>
                    <div class=" relative mt-3">
                        <label for="name-with-label" class="text-gray-700">
                            Tanggal Coaching
                        </label>
                        <input type="text" v-model="rooms.coaching_date" id="name-with-label" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent" placeholder="Tanggal Coaching"/>
                    </div>
                    <div class="relative mt-3">
                        <label for="name-with-label" class="text-gray-700">
                            Kode Room
                        </label>
                        <input type="text" v-model="rooms.room_code" id="name-with-label" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparentfocus:ring-indigo-500 border-l border-b border-t border-gray-300 py-2 px-4 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm rounded-md" placeholder="Kode Room"/>                            
                    </div>
                    <button type="submit" for="my-modal" class="btn mt-5">Submit</button>     
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import moment from 'moment'
export default {
    data(){
        return {
            rooms: {
                session_name: '',
                coaching_name: localStorage.getItem('name'),
                coaching_date: moment().format("MMM Do YY"),
                room_code: "",
                coaching_role: localStorage.getItem('role')
            }
        }
    },
    created(){
        this.generateString(8);
    },
    methods:{
        generateString(length) {
            let result = "";
            const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            this.rooms.room_code = result;
            return result;
        },
        createRoom(){
            this.axios.post(import.meta.env.VITE_BASE_URL_API +'api/coach-room', this.rooms)
            .then((res) => {
                alert('Room Coaching Sukses dibuat!');
                this.$router.push({name: 'coaching-view', query:{
                    code: this.rooms.room_code
                }})
            });
        }
    }
}
</script>
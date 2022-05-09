<template>
    <div>
        <input type="checkbox" id="my-modal-4" class="modal-toggle">
        <div class="modal">
            <div class="modal-box relative">
                <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold text-center">Silahkan Isi Kode Room</h3>
                <div class="relative mt-3">
                    <label for="name-with-label" class="text-gray-700">
                        Kode Room
                    </label>
                    <input type="text" v-model="room_codes" id="name-with-label" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparentfocus:ring-indigo-500 border-l border-b border-t border-gray-300 py-2 px-4 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm rounded-md" placeholder="Kode Room"/>                            
                </div>
                <div class="modal-action">
                <button @click="getCodeRoom()" for="my-modal-4" class="btn mt-5">Submit</button> 
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            room_codes:""
        }
    },
    methods:{
        getCodeRoom(){
            if(this.room_codes == ""){
                alert('silahkan isi kode room terlebih dahulu')
            }
            else{
                this.axios.get(import.meta.env.VITE_BASE_URL_API + `api/code-room/` + this.room_codes)
                .then(res => {
                    console.log(res.data.success);
                    if(res.data.success == false){
                        this.$router.push({ name: 'dashboard-view' });
                        alert(res.data.messages)
                    }
                    else{
                        this.$router.push({name: 'coaching-view', query:{
                            code: this.room_codes
                        }})
                    }
                })
            }
        }
    }
}
</script>
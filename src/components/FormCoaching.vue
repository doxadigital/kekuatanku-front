<template>
  <div class="mb-6 ml-10">
        <div class=" relative ">
          <label for="name-with-label" class="text-gray-700">
              Nama
          </label>
          <input style="width: 18rem;" type="text" id="name-with-label" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" v-model="name" placeholder="Nama"/>
        </div>
	</div>
  <div class="mb-6 ml-10">
        <div class=" relative ">
            <label for="name-with-label" class="text-gray-700">
            Tanggal Lahir 
            </label>
            <input style="width: 18rem;" type="text" id="name-with-label" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="email" placeholder="Tanggal Lahir" v-model="birthDate"/>
        </div>
	</div>
  <div class="mb-6 ml-10">
	    <label class="text-gray-700" for="animals">
                Jumlah Kartu
            <select style="width: 18rem;" v-model="selectedNumber" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                <option value="0">
                    Silahkan Pilih Opsi
                </option>
                <option v-for="number in number_card" :key="number.id" :value="number.coaching_number">
                    {{ number.coaching_number }}
                </option>
            </select>
        </label>
	</div>
  <div class="mb-6 ml-10">
	      <label class="text-gray-700">
                Jenis Coaching
            <select style="width: 18rem;" v-model="selectedJenis" class="block w-52 py-2 px-10 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                <option value="">
                    Silahkan Pilih Opsi
                </option>
                <option v-for="select in coaching_select" :key="select.id" :value="select.coaching_select">
                    {{select.coaching_select}}                        
                </option>
            </select>
        </label>
	</div>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-start-2 col-span-4 table-form" v-if="selectedNumber != 0">
        <label for="name-with-label" class="text-gray-700 placment-content-center">
          PILIH NOMOR KARTU
        </label>
        <table class="table-auto">
          <tbody>
            <tr>
              <th v-for="(col, index) in selectedNumber">
                <div class=" relative ">
                  <input type="text" id="rounded-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent" placeholder="Nomor Kartu" v-model="numberCard[index]"/>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-accent mt-5" @click="getRumus()">Submit</button>
    </div>
  </div>
  <div id="selectedCard" class="grid grid-cols-3 gap-6 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-full">
    <div v-for="(col, index) in selectedNumber" >
      <article class="article overflow-hidden rounded-lg shadow-lg">
        <div class="">
          <img class="imagesCard block h-auto w-full">
        </div>
        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg">
              <a class="titleCard no-underline hover:underline text-black" href="#">
                                                
              </a>
            </h1>
        </header>
        <footer class="flex text-center items-center justify-between leading-none p-2 md:p-4">
          <h4 class="questCard">
                      
          </h4>
        </footer>
      </article>
    </div>
  </div>
    <!-- END Column -->
    <!-- <div class="container mx-auto mt-8">
      <div class="max-w-2xl border rounded">
        <div>
          <div class="w-full">
            <div class="relative w-full p-6 overflow-y-auto h-[40rem]">
              <ul class="space-y-2">
                <li class="flex justify-start">
                  <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span class="block">Hi</span>
                  </div>
                </li>
                <li class="flex justify-end">
                  <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span class="block">Hiiii</span>
                  </div>
                </li>
                <li class="flex justify-end">
                  <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span class="block">how are you?</span>
                  </div>
                </li>
                <li class="flex justify-start">
                  <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span class="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex items-center justify-between w-full p-3 border-t border-gray-300">
              <input type="text" placeholder="Message"
                class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                name="message" required />
              <button type="submit">
                <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  <div class="grid grid-rows-3 grid-flow-col gap-4">
    <button @click="deleteRoom()" class="row-start-1 row-end-4 btn btn-warning">Akhiri Sesi</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: localStorage.getItem('name'),
            number_card: [],
            coaching_select: [],	
            selectedTitle: "",
            selectedImages: null,
            selectedQuest: "",
            selectedNumber: 0,
            birthDate: null,
            numberCard: [],
            selectedJenis: null,
            results: 0
        }
    },
    created() {
        this.axios.get(import.meta.env.VITE_BASE_URL_API + `api/number-card`)
        .then(res => {
            // console.log(res.data.data);
            this.number_card = res.data.data;
        })

        this.axios.get(import.meta.env.VITE_BASE_URL_API + `api/coaching-select`)
        .then(res => {
            // console.log(res.data.data);
            this.coaching_select = res.data.data;
        })  
    },
    methods: {
        async getRumus(){
            if(this.selectedJenis == null && this.birthDate == null){
                alert('Silahkan Isi Semua Field');
            } else {
              if (this.selectedJenis == 'P1ntu') {
                for(var i = 0; i < this.numberCard.length; i++){
                    if((this.numberCard[i]+this.birthDate)% 77 ==0,77,(this.numberCard[i]+this.birthDate) % 77){
                          var result = parseInt(this.numberCard[i])+parseInt(this.birthDate) % 77
                          await this.axios.get(import.meta.env.VITE_BASE_URL_API + `api/selected-card/` + result)
                          .then(res => {
                              this.selectedTitle = res.data.data.title
                              this.selectedQuest = res.data.data.question
                              this.selectedImages = res.data.data.images
                          })
                          
                          var title = document.getElementById('selectedCard').querySelectorAll('.titleCard')
                          var images = document.getElementById('selectedCard').querySelectorAll('.imagesCard')
                          var quest = document.getElementById('selectedCard').querySelectorAll('.questCard')
                          title[i].innerHTML = this.selectedTitle
                          quest[i].innerHTML = this.selectedQuest
                          images[i].src = this.selectedImages
                    }
                }
              } else{
                for(var i = 0; i < this.numberCard.length; i++){
                  if ((this.numberCard[i]+this.birthDate) % 99 == 0,99,(this.numberCard[i]+this.birthDate) % 99){
                      var result = parseInt(this.numberCard[i])+parseInt(this.birthDate) % 99
                      await this.axios.get(import.meta.env.VITE_BASE_URL_API + `api/selected-card/` + result)
                      .then(res => {
                        this.selectedTitle = res.data.data.title
                        this.selectedQuest = res.data.data.question
                        this.selectedImages = res.data.data.images
                      })

                      var title = document.getElementById('selectedCard').querySelectorAll('.titleCard')
                      var images = document.getElementById('selectedCard').querySelectorAll('.imagesCard')
                      var quest = document.getElementById('selectedCard').querySelectorAll('.questCard')
                      title[i].innerHTML = this.selectedTitle
                      quest[i].innerHTML = this.selectedQuest
                      images[i].src = this.selectedImages
                  }
                }
              }
            }
        },
        deleteRoom(){
          const roomcode = this.$route.query.code;
          this.axios.delete(import.meta.env.VITE_BASE_URL_API + `api/delete-room/` + roomcode )
          .then(res => {
            if (localStorage.getItem('role') == "user") {
              this.$router.push({name: 'dashboard-view'})             
            } else {
              this.$router.push({name: 'dashboard-coach-view'})
            }
          })
        }
    }
}
</script>
<template>
    <div class="mb-6 ml-2">
        <div class=" relative ">
          <label for="name-with-label" class="text-gray-700">
              Nama
          </label>
          <input type="text" id="name-with-label" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" v-model="name" placeholder="Nama"/>
        </div>
	</div>
    <div class="mb-6 ml-2">
        <div class=" relative ">
            <label for="name-with-label" class="text-gray-700">
            Tanggal Lahir 
            </label>
            <input type="text" id="name-with-label" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="email" placeholder="Tanggal Lahir" v-model="birthDate"/>
        </div>
	</div>
    <div class="mb-6 ml-2">
	    <label class="text-gray-700" for="animals">
                Jumlah Kartu
            <select v-model="selectedNumber" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                <option value="0">
                    Silahkan Pilih Opsi
                </option>
                <option v-for="number in number_card" :key="number.id" :value="number.coaching_number">
                    {{ number.coaching_number }}
                </option>
            </select>
        </label>
	</div>
    <div class="mb-6 ml-2">
	        <label class="text-gray-700">
                Jenis Coaching
            <select v-model="selectedJenis" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                <option value="">
                    Silahkan Pilih Opsi
                </option>
                <option v-for="select in coaching_select" :key="select.id" :value="select.coaching_select">
                    {{select.coaching_select}}                        
                </option>
            </select>
        </label>
	</div>
    <div class="table-form" v-if="selectedNumber != 0">
        <label for="name-with-label" class="text-gray-700 placment-content-center">
          PILIH NOMOR KARTU
        </label>
        <table class="table-auto">
          <tbody>
            <tr>
              <th v-for="col in selectedNumber">
                <div class=" relative ">
                  <input type="text" id="rounded-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent" placeholder="Nomor Kartu" v-model="numberCard"/>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
    </div>
    <button @click="getRumus()">Submit</button>
    <div v-if="selectedNumber != 0" v-for="res in selectedNumber" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                    <a class="no-underline hover:underline text-black" href="#">
                        Article Title
                    </a>
                </h1>
            </header>
            <footer class="flex text-center items-center justify-between leading-none p-2 md:p-4">
                <h4>
                  Contoh pertanyaan??????
                </h4>
            </footer>
        </article>
        <!-- END Article -->
    </div>
    <!-- END Column -->
    <div class="container mx-auto mt-8">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: localStorage.getItem('name'),
            number_card: [],
            coaching_select: [],	
            selectedNumber: 0,
            birthDate: null,
            numberCard: null,
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
        getRumus(){
            if(this.selectedJenis == null){
                alert('Silahkan Pilih Jenis');
            } else {
                if (this.selectedJenis == 'P1ntu') {
                    if((this.numberCard+this.birthDate)% 77 ==0,77,(this.numberCard+this.birthDate) % 77){
                        alert(parseInt(this.numberCard)+parseInt(this.birthDate) % 77)
                    }
                } else if ((this.numberCard+this.birthDate) % 99 == 0,99,(this.numberCard+this.birthDate) % 99){
                    alert(parseInt(this.numberCard)+parseInt(this.birthDate) % 99)
                }
            }
        }
    }
}
</script>
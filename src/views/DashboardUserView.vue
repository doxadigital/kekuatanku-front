<template>
<div class="navbar bg-base-100 h-28">
<!-- Icon -->    
  <div class="navbar-start lg:p-6 ">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="#">Coaching History </a></li>
        <li><a href="#">Self Coach </a></li>
        <li><a href="#">Coaching</a></li>
        <li><a href="#">Insights </a></li>
      </ul>
    </div>
    <a href="#">
        <img style="max-width: 50%; height: 50%;" src="../assets/img/watermark-removebg-preview.png" alt="logo">
    </a>
  </div> 
<!-- Submenu -->  
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li>
          <router-link to="/coaching" class="text-base text-gray-500 hover:text-gray-900">
            Dashboard
          </router-link>
      </li>
      <li><a href="#">Self Coach </a></li>
      <li><a href="#">Coaching</a></li>
      <li><a href="#">Insights </a></li>
    </ul>
  </div> 
 <!-- Avatar icon --> 
  <div class="navbar-end">
    <div class="profile p-6"> 
         <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-80 ring-offset-2">
                <a href="#"><img src="https://api.lorem.space/image/face?hash=3174" /></a>
                </div>
            </div>  
        </div>
    </div>
</div>

  <div class="container my-12 mx-auto px-4 md:px-12"> 
    
    <!-- Form -->
    <form class="w-full max-w-[100%]"> 
        <div class="flex flex-wrap -mx-3 mb-2 justify-center">
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Judul
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Cari Judul Coaching">
            </div>
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Jenis
            </label>
            <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>All</option>
                <option>Self</option>
                <option>Private</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            </div>
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                From
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="date" placeholder="90210">
            </div> 
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                To
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="date" placeholder="90210">
            </div> 
            <div class="min-w-0 md:w-3/3 pl-8 mt-6 md:mb-0"> 
            <button class="btn btn-blue btn-primary">Submit</button>
            </div> 
            <div class="min-w-0 md:w-3/3 pl-4 mt-6 md:mb-0"> 
            <button class="btn btn-blue btn-primary">Clear</button>
            </div> 
        </div>
    </form>

    <div class="flex flex-col w-auto -mx-1 lg:-mx-6 mt-20"> 
          <!-- Column -->
          <div class="my-1 px-1 w-full mx-auto lg:my-6 lg:px-6 lg:w-full">
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table class="min-w-full leading-normal">
                          <thead>
                              <tr>
                                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                      Nama Coaching
                                  </th>
                                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                      Coacher
                                  </th>
                                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                      Tanggal Coaching
                                  </th>
                                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                      Status
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <div class="flex items-center">
                                          <div class="ml-3">
                                              <p class="text-gray-900 whitespace-no-wrap">
                                                  Coaching ala-ala
                                              </p>
                                          </div>
                                      </div>
                                  </td>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap">
                                          Heri S.
                                      </p>
                                  </td>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap">
                                          12/09/2020
                                      </p>
                                  </td>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                          <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                          </span>
                                          <span class="relative">
                                              Done
                                          </span>
                                      </span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <div class="flex items-center">
                                          <div class="ml-3">
                                              <p class="text-gray-900 whitespace-no-wrap">
                                                  Coaching ala-ala
                                              </p>
                                          </div>
                                      </div>
                                  </td>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap">
                                          Heri S.
                                      </p>
                                  </td>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap">
                                          12/09/2020
                                      </p>
                                  </td>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                          <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                          </span>
                                          <span class="relative">
                                              Done
                                          </span>
                                      </span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <div class="flex items-center">
                                          <div class="ml-3">
                                              <p class="text-gray-900 whitespace-no-wrap">
                                                  Coaching ala-ala
                                              </p>
                                          </div>
                                      </div>
                                  </td>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap">
                                          Heri S.
                                      </p>
                                  </td>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap">
                                          12/09/2020
                                      </p>
                                  </td>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                          <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                          </span>
                                          <span class="relative">
                                              Done
                                          </span>
                                      </span>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          <!-- END Column -->
 
    </div>
  </div>
</template>
<script>
import ModalJoin from '../components/ModalJoinRoom.vue'
import ModalCreate from '../components/ModalCreateRoom.vue';
export default {
    components:{
        ModalJoin,
        ModalCreate
    },
    data(){
        return {
            name: localStorage.getItem('name'),
            cekKategori: localStorage.getItem('kategori')
        }
    },
    methods: {
        logout(){
            localStorage.removeItem('name');
            localStorage.removeItem('role');
            localStorage.removeItem('token');
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('kategori');
            
            this.$router.push({name: 'welcome-view'})
        }
    }
}
</script>

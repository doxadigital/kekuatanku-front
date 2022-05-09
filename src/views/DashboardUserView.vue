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
    <div class="flex flex-wrap -mx-1 lg:-mx-6 mt-20">
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-6 lg:px-6 lg:w-1/2">
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

          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-6 lg:px-6 lg:w-1/2">
              <div class="bg-white dark:bg-gray-800 ">
                  <div class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                      <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                          <span class="block">
                              Kamu Siap Untuk Join Ke Room Coachingmu ?
                          </span>
                          <span class="block text-indigo-500">
                              Silahkan Join Disini.
                          </span>
                      </h2>
                      <div class="lg:mt-0 lg:flex-shrink-0">
                          <div class=" inline-flex rounded-md shadow">
                            <label for="my-modal-4" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Join Room</label>
                          </div>
                      </div>
                      <ModalJoin />
                  </div>
              </div>
          </div>
          <!-- END Column -->
    </div>
  </div>
</template>
<script>
import ModalJoin from '../components/ModalJoinRoom.vue'
export default {
    components:{
        ModalJoin
    },
    data(){
        return {
            name: localStorage.getItem('name')
        }
    }
}
</script>

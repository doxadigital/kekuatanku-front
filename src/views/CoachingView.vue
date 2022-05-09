<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="form-one flex flex-wrap place-content-center">
          <FormCoaching />
      </div>
  </div>
</template>

<script>
import FormCoaching from "../components/FormCoaching.vue";
export default {
    components: {
      FormCoaching,
    },
    created(){
      this.getDataRoom();
    },
    methods:{
      getDataRoom(){
        const roomcode = this.$route.query.code;
        console.log(roomcode);
        this.axios.get(import.meta.env.VITE_BASE_URL_API + `api/code-room/` + roomcode).then(response => {
          if(response.data.success == false){
            this.$router.push({ name: 'dashboard-view' });
            alert(response.data.messages);
          }else{
            this.$router.push({name: 'coaching-view', query:{
                code: roomcode
            }})
          }
        })
      },
    },
}
</script>
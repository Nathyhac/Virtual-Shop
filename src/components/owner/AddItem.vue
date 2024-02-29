
<template>
  <div class="flex justify-center  pt-6">
  <div class="w-[50%]  px-4 text-center border border-gray-400 rounded">

    <div class="text-white text-center font-bold p-4 rounded mb-4 bg-red-700"
        :class="reg_alert">
     {{ reg_alert }}
    </div>
     
    <vee-form :validation-schema="schema" @submit="register">
      <div mb-3>
      <label class="inlie-block mb-2">Name</label>
      <vee-field
        type="text"
        name="name"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Name">
      </vee-field>
      <ErrorMessage class="text-red-600" name="name"/>
    </div>

    <div mb-3>
      <label class="inline-block mb-2">Description</label>
      <vee-field
      type="text"
      name="description"
      class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      placeholder="Enter Description">
      </vee-field>
    <ErrorMessage class="text-red-600" name="description"/>
    </div>

    <div mb-3>
      <label class="inline-block mb-2">Quantity</label>
      <vee-field
      type="number"
      name="quantity"
      class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      placeholder="Enter Quantity">
      </vee-field>
    <ErrorMessage class="text-red-600" name="quantity"/>
    </div>

     <div mb-3>
    <label class="inline-block mb-2">Price</label>
      <vee-field
      type="number"
      name="price"
      class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      placeholder="Enter Price">
      </vee-field>
    </div>
    <ErrorMessage class="text-red-600" name="price"/>

    <div mb-3>
    <label class="inline-block mb-2">Photo</label>
      <vee-field
      type="file"
       name="file"
      class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      placeholder="Enter Price"
      @change="handleImage($event)">
      </vee-field>
    </div>

    <div mb-3>
      <img :src="this.imageSrc" alt="">
    </div>
    <ErrorMessage class="text-red-600" name="file"/>

    <button 
    type="submit"
    class="bg-green-500 text-white rounded-sm w-[50%]">
      Submit
    </button>
    </vee-form>
  </div>
</div>

</template>

<script>
  export default {
    data() {
        return {
            schema:{
              name: 'required',
              description:'required',
              quantity:'required|min_value:1',
              price:'required|min_value:1',
              file:'required',
            },
            imageSrc: "",
            reg_alert: 'bg-red-600'
        }
    },
    methods: {
      handleImage(e) {
        const image = e.target.files[0]

        if(image) {
          this.readandPreview(image)
        }
      },
      readandPreview(image) {
         const reader = new FileReader()
         reader.onload = (e) => {
           this.imageSrc = e.target.result
         }
         reader.readAsDataURL(image)
      },
      register() {
        this.reg_alert = 'bg-green-600'
      }
    }
  }
</script>
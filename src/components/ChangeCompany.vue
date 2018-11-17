<template>
    <div>
      <!--  <b-img src="assets/logo.jpg" rounded="circle" blank width="120" height="120" blank-color="#777" alt="img" class="m-1" />-->
      <h1> Jalaram rakhi</h1>

       <b-container class="input">
            <b-row>
                <b-col>
                        <b-form-group id="Changecompany1"
                            label="Current Company"
                            label-for="currentCompany"
                            >
                        </b-form-group>
                </b-col>
                <b-col>
                    <!--Display curent comapny id-->
                        <b-form-group id="currentCompany"
                            label="Current Company number"
                            >
                        </b-form-group>
                </b-col>
            </b-row>
        </b-container>
        <!--Select the new company id (company to be changed)-->
        <b-form-select v-model="selected" :options="options" class="mb-3 input" placeholder="-Select New Company" />

        <!--Ask for password for confirmation-->
        <b-form-input v-model="password"
                  type="password"
                  placeholder="Confirm Password" class="input" >

        </b-form-input>
        <div>
        <b-button size="md" variant="primary">
                Change Company
        </b-button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      selected: null,
      options: [
        { text: 'Select One', value: null },
        '1.', '2', '3'
      ]
    }
  }
}
</script>
<style>
.input {
  width: 40%;
  margin: 10px auto;
}
</style>

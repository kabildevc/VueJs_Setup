<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Registration form</h1>
      </div>
      <div class="col-sm-12">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="registration-form">
          <div class="row">
            <div class="col-sm-6">
              <b-form-group id="input-group-1" label="First Name:" label-for="firstName" >
                <b-form-input id="firstName" v-model="form.firstName" type="text" required placeholder="Enter First Name"></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" label="Last Name:" label-for="lastName">
                <b-form-input id="lastName" v-model="form.lastName" type="text" placeholder="Enter Last Name"></b-form-input>
              </b-form-group>
              <b-form-group label="Individual radios">
                <b-form-radio v-model="form.gender" name="gender" value="M">Male</b-form-radio>
                <b-form-radio v-model="form.gender" name="gender" value="F">Female</b-form-radio>
                <b-form-radio v-model="form.gender" name="gender" value="O">Others</b-form-radio>
              </b-form-group>
            </div>
            <div class="col-sm-6">
              <b-form-group id="input-group-3" label="Joined Date: " label-for="joinedDate">
                <b-form-input id="joinedDate" v-model="form.joinedDate" type="date" required></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-4" label="Technologies:" label-for="technologies" >
                <b-form-select id="technologies" rows="3" v-model="form.technologies" :options="technologiesOption" multiple required></b-form-select>
              </b-form-group>
              <b-form-group id="input-group-4" label="Years of Experience:" label-for="yearsOfExp">
                <b-form-select id="yearsOfExp" v-model="form.yearsOfExp" required>
                  <option v-bind:value="null" disabled>Please choose the experience</option>
                  <option v-bind:value="items" v-for="items in 4">{{`${items} Years`}}</option>
                </b-form-select>
              </b-form-group>
            </div>
          </div>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
    <b-modal id="modal-1" title="User Details" ok-title="Submit" cancel-title="Cancel" @ok="handleOk" @cancel="handleCancel">
      <div class="row">
        <div class="col-sm-12">
          <div class="modal-form-content">
            <span class="content-label">First Name:</span>
            <span class="content-value">{{form.firstName}}</span>
          </div>
          <div class="modal-form-content">
            <span class="content-label">Last Name:</span>
            <span class="content-value">{{form.lastName}}</span>
          </div>
          <div class="modal-form-content">
            <span class="content-label">Gender:</span>
            <span class="content-value">{{gender}}</span>
          </div>
          <div class="modal-form-content">
            <span class="content-label">Joined Date:</span>
            <span class="content-value">{{joinedDate}}</span>
          </div>
          <div class="modal-form-content">
            <span class="content-label">Technologies:</span>
            <span class="content-value">{{technologies}}</span>
          </div>
          <div class="modal-form-content">
            <span class="content-label">Years of Experience:</span>
            <span class="content-value">{{yearsOfExp}}</span>
          </div>
        </div>
      </div>

    </b-modal>
    <div class="row" v-if="tableData.length > 0">
      <div class="col-sm-12">
          <b-table striped hover :items="tableData" :fields="tableFields" aria-required=""></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import Registration from './registration'
export default Registration;
</script>




<template>
    <div id="DisplayForm">
        <b-modal id="DisplayFormModal" v-model="showModal" ref="modal-1" title="User Details" ok-title="Submit" cancel-title="Cancel" @ok="handleOk" @cancel="handleCancel">
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
                    <span class="content-value">{{form.gender}}</span>
                </div>
                <div class="modal-form-content">
                    <span class="content-label">Joined Date:</span>
                    <span class="content-value">{{form.joinedDate}}</span>
                </div>
                <div class="modal-form-content">
                    <span class="content-label">Technologies:</span>
                    <span class="content-value">{{form.technologies}}</span>
                </div>
                <div class="modal-form-content">
                    <span class="content-label">Years of Experience:</span>
                    <span class="content-value">{{form.yearsOfExp}}</span>
                </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import DiaplayForm from './DispalyForm'
export default DiaplayForm
</script>



import dateFormat from 'dateformat'
import DisplayForm from '../../components/DisplayForm'

export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        gender: '',
        joinedDate: null,
        technologies: [],
        yearsOfExp: null
      },
      technologiesOption: [
        { value: 'React Js', text: 'React Js' },
        { value: 'Vue Js', text: 'Vue Js' },
        { value: 'Angular Js', text: 'Angular Js' },
        { value: 'Ionic Js', text: 'Ionic Js' },
        { value: 'Node Js', text: 'Node Js' }
      ],
      show: true,
      tableData:[],
      tableFields: {
        firstName: {
          label: 'First Name',
        },
        lastName: {
          label: 'Last Name',
        },
        gender: {
          label: 'Gender',
        },
        joinedDate: {
          label: 'Joined Date',
        },
        technologies: {
          label: 'Technologies',
        },
        yearsOfExp: {
          label: 'Years of Experience',
        }
      },
      displayFormStatus: false,
      displayFormData: {}
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$bvModal.show('modal-1')
      // this.displayFormStatus = true
      // this.displayFormData = {
      //   ...this.form,
      //   technologies: this.technologies,
      //   joinedDate: this.joinedDate,
      //   gender: this.gender,
      //   yearsOfExp: this.yearsOfExp
      // }
      
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.clearData()
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    clearData() {
      this.form.firstName =  ''
      this.form.lastName =  ''
      this.form.gender =  ''
      this.form.joinedDate =  null
      this.form.technologies =  []
      this.form.yearsOfExp =  null
    },
    handleOk() {
      this.tableData.push({
        ...this.form,
        technologies: this.technologies,
        joinedDate: this.joinedDate,
        gender: this.gender,
        yearsOfExp: this.yearsOfExp
      })
      this.clearData()
    },
    handleCancel() {
      
    }
  },
  computed: {
    technologies: function() {
      return this.form.technologies.join(', ')
    },
    yearsOfExp: function() {
      return this.form.yearsOfExp ? `${this.form.yearsOfExp} Years` : ' - '
    },
    joinedDate: function() {
      console.log(this.form.joinedDate)
      return this.form.joinedDate ? dateFormat(this.form.joinedDate, 'dd mmm, yyyy') : ' - '
    },
    gender: function() {
      return this.form.gender == 'M' ? 'Male': this.form.gender == 'F' ? 'Female': this.form.gender == 'O' ? 'Others': ' - '
    }
  },
  components: {
    DisplayForm
  }
}




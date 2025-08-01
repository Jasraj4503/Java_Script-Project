document.querySelector('#info').addEventListener('submit', (e) =>{
    e.preventDefault()

    const patient_name = document.querySelector('#p_name').value
    const patient_mobile = document.querySelector('#p_mobile').value
    const patient_diseases = document.querySelector('#p_diseases').value
    let patient_birth_date = document.querySelector('#p_dob').value 
    const date = new Date(patient_birth_date)
    const patient_email = document.querySelector('#p_email').value 
    const patient_address = document.querySelector('#address').value 
    const patient_rel_name = document.querySelector('#p_r_name').value
    const patient_rel_mobile = document.querySelector('#p_r_mobile').value
    const patient_rel_relation = document.querySelector('#p_r_relation').value


    var result;
    class Common{
        constructor(who, name, mobile){
            this.who = who
            this.name = name
            this.mobile = mobile
        }

        output(){
            result = `${this.who} Name = ${this.name}<br> Phone Number = ${this.mobile}<br>`
        }
    }

    class Patient extends Common{
        constructor(who, name, mobile, diseases, birth_date, email, address){
            super(who, name, mobile)
            this.diseases = diseases
            this.birth_date = birth_date
            this.email = email
            this.address = address
        }

        output(){
            super.output()
            result += `Diseases = ${this.diseases}<br> Date of birth = ${this.birth_date}<br> Email = ${this.email}<br> Address = ${this.address}`
        }
    }

    class Relative extends Common{
        constructor(who, name, mobile, relation){
            super(who, name, mobile)
            this.relation = relation
        }

        output(){
            super.output()
            result += `Relation = ${this.relation}`
        }
    }

    const p1 = new Patient("Patient", patient_name, patient_mobile, patient_diseases, date.toLocaleDateString(), patient_email, patient_address)
    p1.output()
    document.querySelector('#patient').innerHTML = result

    const r1 = new Relative("Relative", patient_rel_name, patient_rel_mobile, patient_rel_relation)
    r1.output()
    document.querySelector('#relative').innerHTML = result
})
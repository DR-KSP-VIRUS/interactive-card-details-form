<template>
    <div class="cards">
        <CardBack :cvc="cvc" />
        <CardFront
            :cardHolderName="cardHolderName" 
            :cardNumber="cardNumber"
            :month="month" :year="year"
        />
    </div>
    <div class="form-wrapper">
        <form v-if="valid" class="form" @submit.prevent="handleSubmit">
            <div class="input-wrapper">
                <label for="holdername" :class="error.cardHolderName === '' ?'':'error-text'">Cardholder Name</label>
                <input type="text" v-model="cardHolderName"
                    :class="error.cardHolderName === '' ? 'input-control' :'input-control error-field'" 
                    id="holdername" 
                    placeholder="e.g. Jane Appleseed" 
                    @blur="() => !cardHolderName ? error.cardHolderName = 'can\'t be blank': error.cardHolderName='' "
                />
                <span>{{ error.cardHolderName }}</span>
            </div>
            <div class="input-wrapper">
                <label for="cardnumber" :class="error.cardNumber === '' ? '': 'error-text'">Card Number</label>
                <input type="text" v-model="cardNumber" 
                    :class="!validateCardNumber && error.cardNumber === '' ? 'input-control': 'input-control error-field' "  
                    id="cardnumber" 
                    placeholder="e.g. 1234 5678 9123 0000"
                    @blur="() => !cardNumber ? error.cardNumber = 'can\'t be blank': validateCardNumber ? error.cardNumber='Wrong format, only numbers':error.cardNumber='' " 
                />
                <span>{{ error.cardNumber }}</span>
            </div>
            <div class="input-group-wrapper">
                <div class="short">
                    <label for="expdate" :class="error.year==='' || error.month === '' ? '':'error-text'">Exp. Date (MM/YY)</label>
                    <div class="input-group">
                        <input type="text" id="expdate" v-model="month" 
                            :class="!validateMonth && error.month==='' ? 'input-control':'input-control error-field'" placeholder="MM" 
                            @blur="() => !month ? error.month = 'can\'t be blank':validateMonth ? error.month='Wrong format, only numbers': error.month='' "
                        />
                        <input type="text" name="year" v-model="year"   
                            :class="!validateYear && error.year==='' ? 'input-control':'input-control error-field'" placeholder="YY" 
                            @blur="() => !year ? error.year='can\'t be blank':validateYear ? error.year='Wrong format, only numbers': error.year='' "
                        />
                    </div>
                    <span>{{ error.month || error.year }}</span>
                </div>
                <div class="long">
                    <label for="cvc" :class="error.cvc === '' ? '': 'error-text'">CVC</label>
                    <input type="text" id="cvc" 
                        :class="!validateCvc && error.cvc==='' ? 'input-control':'input-control error-field'"  
                        placeholder="e.g. 123" v-model="cvc" 
                        @blur="() => !cvc ? error.cvc = 'can\'t be blank':validateCvc? error.cvc ='Wrong format only numbers': error.cvc='' "
                    />
                    <span>{{ error.cvc }}</span>
                </div>
            </div>
            <button type="submit" class="btn-confirm">Confirm</button>
        </form>
        <CardCompleted v-else @continue="handleFormReset"/>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { validateField, numberField } from '@/helpers/validate';
import CardFront from './CardFront.vue';
import CardBack from './CardBack.vue';
import CardCompleted from './CardCompleted.vue';

const cvc = ref('');
const cardHolderName = ref('');
const cardNumber = ref('');
const month = ref('');
const year = ref('');
const valid = ref(true);
const error = ref({
    month: '',
    year: '',
    cvc: '',
    cardHolderName: '',
    cardNumber: '',
})

const validateFields = () => {
    error.value.month =  !validateField(month.value) ? 'can\'t be blank': month.value.length != 2 ? 'Max is 2 digits': !(+month.value >= 1 && +month.value <= 12) ? 'Month is be between 01 and 12':'';
    error.value.year = !validateField(year.value) ? "Can't be blank": year.value.length != 2 ? 'Max is 2 digits': validateYear.value ? 'Wrong format, only numbers':'';
    error.value.cardHolderName = validateField(cardHolderName.value) ? '' : "Can't be blank";
    error.value.cardNumber = !validateField(cardNumber.value) ? "Can't be blank": cardNumber.value.length != 19 ? 'Max is 12 digits 3 spaces within 4 digits': validateCardNumber.value?'Wrong format, only numbers':'';
    error.value.cvc = !validateField(cvc.value) ? 'can\'t be blank': cvc.value.length != 3 ? 'Max is 3 digits': validateCvc.value ? 'Wrong format, only format':'';

}

const isValid = () => {
    validateFields();
    // check that all errors fields are empty and return true
    return Object.entries(error.value).every((entry)=>entry[1] === '');
    
}

const validateCardNumber = computed(() => {
    if (validateField(cardNumber.value)) {
        return numberField(cardNumber.value) ? error.value.cardNumber='':error.value.cardNumber = 'Wrong format, only numbers';
    }
});

const validateMonth = computed(() => {
    if (validateField(month.value)) {
        return numberField(month.value) ? error.value.month = '' : error.value.month = 'Wrong format, only numbers';
    }
});


const validateYear = computed(() => {
    if (validateField(year.value)) {
        return numberField(year.value)? error.value.year = '' : error.value.year = 'Wrong format, only numbers';
    }
});

const validateCvc = computed(() => {
    if (validateField(cvc.value)) {
        return numberField(cvc.value) ? error.value.cvc = '' : error.value.cvc = 'Wrong format, only numbers';
    }
});

const handleSubmit = () => {
    if (isValid()) {
        valid.value = false;
    } else {
        valid.value = true;
    }
}

const handleFormReset = () => {
    cvc.value = '';
    cardHolderName.value = '';
    cardNumber.value = '';
    year.value = '';
    month.value = '';
    valid.value = true;
}

</script>

<style scoped>

.cards {
    position: absolute;
    top: 5%;
    left: 18%;
    transition: all .54s ease;
}


.form-wrapper{
    background-color: var(--white);
    display: flex;
    place-items: center;
    place-content: center;
    padding: 1rem 1rem;
}

.form{
    display: flex;
    flex-direction: column;
}

.input-wrapper{
    display: flex;
    flex-direction: column;
    margin: .5rem 0;
}

span{
    color: var(--red);
}

.input-control{
    width: 100%;
    border: 1px solid var(--dark-grayish-violet);
    padding: .7rem 1.2rem;
    margin: .4rem 0;
    border-radius: .3rem;
}


.input-group-wrapper{
    display: flex;
    margin: .5rem 0;
}

.short {
    flex: 0 0 11rem;
}

.short .input-control{
    margin: .4rem .7rem 0 0;
}


.input-group{
    display: flex;
    padding: 0 1rem 0 0;
}

.long {
    flex: 1 1 0px;
}

label {
    text-transform: uppercase;
    color: var(--very-dark-violet);
}

.btn-confirm {
    background: var(--very-dark-violet);
    color: var(--white);
    padding: 1rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    letter-spacing: .3rem;
    line-height: 1rem;
    border-radius: .3rem;
    cursor: pointer;
    transition: transform 89ms ease;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 500
}

.btn-confirm:active{
    transform: scale(0.89);
}

.input-control:focus-within{
    border-width: .12rem;
    border-block-end-color: var(--right-gradient);
    border-block-start-color: var(--left-gradient);
    border-inline-start-color: var(--left-gradient);
    border-inline-end-color: var(--right-gradient);
}

.error-field {
    border: 1px solid var(--red);
}

.error-text {
    color: var(--red);
}


@media screen and (min-width:540px) {
    .cards {
        top: 18%;
        left: 25%;
    }

    .form-wrapper{
        padding: 7rem 2rem;
    }
}

@media screen and (min-width:768px) {
    .cards {
        top: 4%;
        left: 10%;
    }

    .form-wrapper{
        padding: 19rem 0;
    }

}


@media screen and (min-width:1024px) {
    .cards {
        display: flex;
        flex-direction: column-reverse;
    }

    .cards picture > img {
        height: 12.5rem;
    }

    .cvc{
        position: absolute;
        top: 24.5rem;
        right: 8rem;
    }

    .card-logo{
        left: -17rem;
    }

    .card-back{
        position: absolute;
        top: 19rem;
        right: 5rem;
    }

    .card-front {
        position: relative;
        left: -9rem;
    }

    .card-front-text{
        left: 7rem;
        margin-top: 2rem;
        font-size: 1.5rem;
    }

    .card-details {
        margin-top: 2rem;
        font-size: .7rem;
    }

    .form-wrapper{
        padding: 0 10rem;
        place-items: center;
        place-content: center;
        height: 100vh;
        transition: all .54s ease;
    }
    
    .form {
        margin-top: -3rem;
        transition: all .54s ease;
    }
}

@media screen and (min-width:1024px) and (max-height:600px){
    .cards{
        top: -15%;
        left: 18%;
    }

    .form-wrapper{
        padding: 3rem 12rem;
    }
}

@media screen and (min-width:1280px) {
    .cards{
        top: 1%;
        left: 23%;
    }

    .form-wrapper {
        padding: 0 20rem;
    }
}

@media screen and (min-height:1366px) {

    .form-wrapper{
        padding: 0 11rem;
    }

    .form {
        margin-top: -25rem;
    }

}

@media screen and (min-height:1368px) and (min-width:912px) {
    .cards {
        left: 21%;
    }

    .form-wrapper {
        padding: 1rem 8rem;
    }

    .form {
        margin-top: 19rem;
    }
}

</style>

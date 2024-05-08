<template>
    <div class="cards">
        <Card>
            <picture>
                <img class="card-back" src="/images/bg-card-back.png" alt="card back">
                <p class="cvc">{{ cvc ? cvc:'000' }}</p>
            </picture>
        </Card>
        <Card>
            <picture>
                <img class="card-front" src="/images/bg-card-front.png" alt="card front">
                <picture class="card-logo">
                    <img src="/images/card-logo.svg" alt="card logo">
                    <div class="card-front-text">
                        <p>{{ cardNumber ? cardNumber : '0000 0000 0000 0000 0000' }}</p>
                        <div class="card-details">
                            <p>{{ cardHolderName ? cardHolderName: 'Jane Appleseed' }}</p>
                            <p>{{ month ? month : '00' }}/{{ year ? year : '00'}}</p>
                        </div>
                    </div>
                </picture>
            </picture>
        </Card>
    </div>
    <div class="form-wrapper">
        <form v-if="valid" class="form" @submit.prevent="handleSubmit">
            <div class="input-wrapper">
                <label for="holdername" :class="error.cardHolderName === '' ?'':'error-text'">Cardholder Name</label>
                <input type="text" v-model="cardHolderName"
                    :class="error.cardHolderName === '' ? 'input-control' :'input-control error-field'" 
                    id="holdername" 
                    placeholder="e.g. Jane Appleseed" 
                    @blur="isValid"
                />
                <span>{{ error.cardHolderName }}</span>
            </div>
            <div class="input-wrapper">
                <label for="cardnumber" :class="error.cardNumber === '' ? '': 'error-text'">Card Number</label>
                <input type="text" v-model="cardNumber" 
                    :class="!validateNumbers && error.cardNumber === '' ? 'input-control': 'input-control error-field' "  
                    id="cardnumber" 
                    placeholder="e.g. 1234 5678 9123 0000"
                    @blur="isValid" 
                />
                <span>{{ error.cardNumber }}</span>
            </div>
            <div class="input-group-wrapper">
                <div class="short">
                    <label for="expdate" :class="error.year==='' || error.month === '' ? '':'error-text'">Exp. Date (MM/YY)</label>
                    <div class="input-group">
                        <input type="text" id="expdate" v-model="month" 
                            :class="error.month==='' ? 'input-control':'input-control error-field'" placeholder="MM" 
                            @blur="isValid"
                        />
                        <input type="text" name="year" v-model="year"   
                            :class="error.year==='' ? 'input-control':'input-control error-field'" placeholder="YY" 
                            @blur="isValid"
                        />
                    </div>
                    <span>{{ error.month || error.year }}</span>
                </div>
                <div class="long">
                    <label for="cvc" :class="error.cvc === '' ? '': 'error-text'">CVC</label>
                    <input type="text" id="cvc" 
                        :class="error.cvc==='' ? 'input-control':'input-control error-field'"  
                        placeholder="e.g. 123" v-model="cvc" 
                        @blur="isValid"
                    />
                    <span>{{ error.cvc }}</span>
                </div>
            </div>
            <button class="btn-confirm">Confirm</button>
        </form>
        <CardCompleted v-else @continue="handleFormReset"/>
    </div>
</template>
<!-- :class="error.cardNumber === '' ? 'input-control' :'input-contro error-field'" -->
<script setup>
import { ref, computed } from 'vue';
import { validateField } from '@/helpers/validate';
import Card from './Card.vue';
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
    error.value.month = !validateField(month.value) ? "Can't be blank": month.value.length != 2 ? 'Max is 2 digits': !(+month.value >= 1 && +month.value <= 12) ? 'Month is be between 01 and 12':'';
    error.value.year = !validateField(year.value) ? "Can't be blank": year.value.length != 2 ? 'Max is 2 digits': '';
    error.value.cardHolderName = validateField(cardHolderName.value) ? '' : "Can't be blank";
    error.value.cardNumber = !validateField(cardNumber.value) ? "Can't be blank": cardNumber.value.length != 19 ? 'Max is 12 digits 3 spaces within 4 digits': '';
    error.value.cvc = !validateField(cvc.value) ? "can't be blank": cvc.value.length != 3 ? 'Max is 3 digits': '';

}

const isValid = () => {
    validateFields();
    return Object.entries(error.value).every((entry)=>entry[1] === '');

}

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

const validateNumbers = computed(() => {
    if (validateField(cardNumber.value)) {
        let numberValues = parseInt(cardNumber.value);
        console.log(/[\d*]/.test(numberValues));
    }
})

</script>

<style scoped>

.cards {
    position: absolute;
    top: 5%;
    left: 15%;
    transition: all .54s ease;
}

.cards picture > img {
    height: 9rem;
    transition: all .54s ease;
}


picture {
    display: flex;
    flex-direction: column;
    place-items: center;
}

.cvc{
    position: absolute;
    top: 3.8rem;
    right: 2.5rem;
    color: var(--white);
    transition: all .54s ease;
}


.card-front {
    position: absolute;
    top: 5.1rem;
    left: -2rem;
    width: 100%;
    transition: all .54s ease;
}

.card-logo {
    position: absolute;
    height: 1rem;
    top: 6rem;
    left: -7rem;
    width: 100%;
    transition: all .54s ease;
}

.card-front-text{
    padding: 2rem;
    color: var(--white);
    text-transform: uppercase;
    position: absolute;
    left:4rem ;
    top: 1.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.1rem;
    transition: all .54s ease;
}

.card-details {
    display: flex;
    place-content: space-between;
    margin-top: 1rem;
    font-size: .7rem;
    transition: all .54s ease;
}

.card-back, 
.card-front {
    box-shadow: 0 0px 0px var(--very-dark-violet),
    0 0px 0px var(--very-dark-violet),
    0 1px 10px var(--very-dark-violet),
    0 0px 0px var(--very-dark-violet);
    border-radius: .7rem;
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
        top: 10%;
        left: 24%;
    }
    .cards picture > img {
        height: 14rem;
    }

    .card-front {
        top: 8rem;
    }

    .card-logo {
        top: 9rem;
        left: -11rem;
    }

    .card-front-text {
        margin-top: 2rem;
        left: 8.5rem;
        font-size: 1.9rem;
    }

    .card-details {
        margin-top: 2rem;
        font-size: 1rem;
    }

    .cvc {
        top: 6.2rem;
        font-size: 1.5rem;
        right: 3rem;
    }
    .form-wrapper{
        padding: 13rem 0;
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

@media screen and (min-width:1024px) and (max-height:672px){
    .cards{
        top: -15%;
        left: 18%;
    }

    .card-back {
        top: 23rem;
    }

    .cvc {
        top: 28.3rem;
    }


    .form-wrapper{
        padding: 3rem 8rem;
    }
}

@media screen and (min-width:1280px) {
    .card-front{
        top: 1rem;
        left: -15rem;
    }

    .card-logo {
        top: 3rem;
        left: -23rem;
    }

    .cards picture > img{
        height: 13.5rem;
    }

    .card-front-text {
        left: 8rem;
    }

    .card-back {
        left: -11rem;
    }

    .cvc {
        left: 8.5rem;
        top: 24.8rem;
    }

    .form-wrapper {
        padding: 0 14rem;
    }
}

@media screen and (min-height:1366px) {
    .card-front{
        top: 2rem;
        left: -11rem;
    }

    .card-logo{
        top: 3rem;
        left: -18.5rem;
    }

    .card-back {
        top: 33rem;
        left: -8rem;
    }

    .cvc {
        top:38.4rem;
        left: 9.5rem;
    }

    .form-wrapper{
        padding: 0rem 7rem;
    }
}

@media screen and (min-height:1368px) and (min-width:912px) {
    .card-front {
        top: 8rem;
        left: -4.5rem;
    }

    .card-logo {
        top: 9.5rem;
        left: -13rem;
    }

    .cvc {
        top: 6rem;
        left: 19.9rem;
    }

    .form-wrapper {
        padding: 15rem 8rem;
    }
}

</style>

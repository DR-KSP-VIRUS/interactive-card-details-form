<template>
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
</template>

<script setup>
const props = defineProps({
    cardNumber: {
        type:String,
    },
    cardHolderName: {
        type: String,
    },
    month: {
        type: String,
    },
    year: {
        type:String,
    }
})
</script>


<style scoped>
.cards picture > img {
    height: 9.5rem;
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
    left: -7.5rem;
    width: 100%;
    transition: all .54s ease;
}

.card-front-text{
    padding: 1.5rem 2rem;
    color: var(--white);
    text-transform: uppercase;
    position: absolute;
    left:4.5rem ;
    top: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all .54s ease;
}

.card-details {
    display: flex;
    place-content: space-between;
    margin-top: 1rem;
    font-size: .7rem;
    transition: all .54s ease;
}
 
.card-front {
    box-shadow: 0 0px 0px var(--very-dark-violet),
    0 0px 0px var(--very-dark-violet),
    0 1px 10px var(--very-dark-violet),
    0 0px 0px var(--very-dark-violet);
    border-radius: .7rem;
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
    .cards picture > img {
        height: 20rem;
        width: max-content;
    }

    .card-front {
        top: 11.7rem;
    }

    .card-logo {
        top: 13rem;
        left: -14rem;
        width: 35rem;
    }

    .card-logo img {
        max-width: 9rem;
    }

    .card-front-text {
        margin-top: 4rem;
        left: 11rem;
        font-size: 1.9rem;
    }

    .card-details {
        margin-top: 2rem;
        font-size: 1rem;
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

    .cards picture > img {
        height: 14rem;
    }
    .card-front{
        top: 7rem;
    }

    .card-logo {
        top: 8rem;
        left: -22rem;
    }

    .card-logo img{
        max-width: 6rem;
    }

    .card-front-text {
        left: 12rem;
    }

    .card-details {
        place-content: space-around;
    }

    .card-details p:first-child{
        margin-left: -8rem;
    }

}

@media screen and (min-width:1280px) {
    .card-front{
        top: 1rem;
        left: -15rem;
    }

    .card-logo {
        top: 3rem;
        left: -26rem;
    }

    .cards picture > img{
        height: 17rem;
    }

    .card-front-text {
        left: 11rem;
        top: 4rem;
        font-size: 1.8rem;
    }

    .card-details{
        place-content: space-around;
        font-size: 1rem;
    }

    .card-details p:first-child {
        margin-left: -7rem;
    }

}

@media screen and (min-height:1366px) {
    .cards picture > img {
        height: 16rem;
        width: max-content;
    }
    .card-front{
        top: 2rem;
        left: -5rem;
    }

    .card-logo{
        top: 3rem;
        left: -17rem;
    }

    .card-front-text {
        left: 11rem;
        top: 3rem;
    }

    .card-details{
        place-content: space-around;
    }

    .card-details p:first-child {
        margin-left: -7.5rem;
    }

}

@media screen and (min-height:1368px) and (min-width:912px) {
    .cards picture > img {
        height: 20rem;
        width: max-content;
    }

    .card-front {
        top: 11.4rem;
        left: -5.5rem;
    }

    .card-logo {
        top: 12.5rem;
        left: -17rem;
    }

}

</style>
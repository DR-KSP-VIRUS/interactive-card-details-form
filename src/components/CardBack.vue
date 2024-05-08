<template>
    <picture>
    <img class="card-back" src="/images/bg-card-back.png" alt="card back">
    <p class="cvc">{{ cvc ? cvc:'000' }}</p>
</picture>
</template>

<script setup>
const props = defineProps({
    cvc: {
        type: String,
    }
});
</script>


<style scoped>
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


.card-logo {
    position: absolute;
    height: 1rem;
    top: 6rem;
    left: -7rem;
    width: 100%;
    transition: all .54s ease;
}



.card-back {
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
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
    width: 18rem;
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

}

@media screen and (min-width:768px) {
    .cards picture > img {
        height: 20rem;
        width: max-content;
    }
    .cvc {
        top: 9rem;
        font-size: 1.5rem;
        right: 4rem;
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
}

@media screen and (min-width:1024px) and (max-height:600px){
    .cards picture > img{
        height: 14rem;
    }

    .card-back {
        top: 25rem;
        left: -5rem;
    }

    .cvc {
        top: 30.7rem;
    }

}

@media screen and (min-width:1280px) {

    .cards picture > img{
        height: 17rem;
    }

    .card-back {
        top: 22rem;
        left: -11rem;
    }

    .cvc {
        left: 13rem;
        top: 29.4rem;
        font-size: 1.8rem;
    }

}

@media screen and (min-height:1366px) {
    .cards picture > img {
        height: 16rem;
    }
    .card-back {
        top: 37rem;
        left: -2rem;
    }

    .cvc {
        top:43.9rem;
        left: 20.5rem;
    }
}

@media screen and (min-height:1368px) and (min-width:912px) {
    .cards picture > img {
        height: 20rem;
        width: max-content;
    }

    .cvc {
        top: 9rem;
        left: 29rem;
    }

}
</style>
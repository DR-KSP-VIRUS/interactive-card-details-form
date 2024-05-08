<template>
    <div class="completed">
        <picture>
            <img src="/images/icon-complete.svg" alt="completed icon">
        </picture>
        <div class="completed-text">
            <h1>Thank you!</h1>
            <p>We have added your card details</p>
        </div>
        <button class="btn-continue" @click="onContinue">Continue</button>
    </div>
</template>


<script setup>

const emit = defineEmits(['continue']);

const onContinue = () => {
    emit("continue");
}
</script>

<style scoped>
.completed {
    display: flex;
    flex-direction: column;
}
.completed picture {
    display: flex;
    place-items: center;
    place-content: center;
}
.completed-text{
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-block: 2rem;
}

.completed-text p{
    padding-top: 1rem;
}

.btn-continue {
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

.btn-continue:active {
    transform: scale(0.89);
}
</style>
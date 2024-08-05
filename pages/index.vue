<template>
    <div class="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div class="text text-center">
            <h1>License YPT</h1>
            <button type="button" class="btn btn-primary mt-3" @click="handleLogin"><font-awesome-icon
                    :icon="['fas', 'right-to-bracket']" /> Masuk</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

definePageMeta({
    layout: 'empty'
});

const router = useRouter();

const handleLogin = () => {
    router.push('/login');
};
</script>

<style scoped>
.container-fluid {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.btn-primary {
    background-color: #4681f4;
    border-color: #4681f4;
}
</style>

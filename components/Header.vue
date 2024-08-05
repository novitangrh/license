<template>
    <div class="d-flex align-items-center p-3 border-bottom">
        <div class="d-flex align-items-center">
            <h1 class="h1 me-3">License YPT</h1>
            <template v-if="isSettingsPage">
                <nuxt-link to="/settings/notification" class="page-title">Notifikasi</nuxt-link>
                <nuxt-link to="/settings/contact" class="page-title ms-3">Kontak</nuxt-link>
            </template>
            <template v-else>
                <span class="page-title">{{ pageTitle }}</span>
            </template>
        </div>
        <div class="d-flex align-items-center ms-auto">
            <span class="text me-3">Aulia Arief</span>
            <div class="profile text-center">
                <span class="initial">A</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isSettingsPage = computed(() => route.path.startsWith('/settings'));

const pageTitle = computed(() => {
    switch (route.path) {
        case '/':
            return 'Index';
        case '/dashboard':
            return 'Beranda';
        case '/license-types':
            return 'Jenis Lisensi';
        case '/license-list':
            return 'Daftar Lisensi';
        case '/settings':
            return '';
        default:
            return '';
    }
});
</script>

<style scoped>
.page-title {
    color: #6f42c1;
    background-color: #e9ecef;
    border-radius: 0.3125rem;
    font-weight: 500;
    padding: 0.125rem 0.5rem;
    text-decoration: none;
}

.page-title:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.text {
    font-weight: 500;
}

.profile {
    width: 2rem;
    height: 2rem;
}

.initial {
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 2rem;
    color: #6f42c1;
    background-color: #e0d8ef;
    font-weight: bold;
    border-radius: 0.3125rem;
}

.border-bottom {
    border-bottom: 0.1875rem solid black !important;
}
</style>
<template>
    <div class="sidebar">
        <div class="sidebar-item">
            <img src="@/assets/images/logo.png" alt="Logo" class="sidebar-logo">
        </div>
        <nav class="nav flex-column">
            <nuxt-link to="/dashboard" class="nav-link">
                <font-awesome-icon :icon="['fas', 'house']" />
            </nuxt-link>
            <nuxt-link to="/license-types" class="nav-link">
                <font-awesome-icon :icon="['fas', 'file-lines']" />
            </nuxt-link>
            <nuxt-link to="/license-list" class="nav-link">
                <font-awesome-icon :icon="['fas', 'clipboard-list']" />
            </nuxt-link>
            <nuxt-link to="/settings" class="nav-link">
                <font-awesome-icon :icon="['fas', 'gear']" />
            </nuxt-link>
        </nav>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.sidebar {
    width: 6.25rem;
    height: 100vh;
    position: fixed;
    background-color: #007bff;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sidebar-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.625rem;
    margin-top: 0.625rem;
}

.sidebar-logo {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 0.625rem;
}

.nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.nav-link {
    padding: 0.9375rem;
    margin: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.875rem;
    color: white;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.3125rem;
}

.nav-icon {
    max-width: 3.125rem;
    max-height: 3.125rem;
}
</style>

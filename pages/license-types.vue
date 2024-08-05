<template>
    <div>
        <div class="card mb-3">
            <div class="card-body">
                <div class="flex-container mb-3">
                    <h3 class="flex-item">Jenis Lisensi Tersedia</h3>
                    <div class="flex-item flex-end">
                        <div class="input-group search-bar">
                            <div class="input-group-text">
                                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                            </div>
                            <input type="text" class="form-control" placeholder="Cari" />
                        </div>
                        <!-- <button type="button" class="btn btn-secondary btn-filter" @click="filterLicenses">
                            <font-awesome-icon :icon="['fas', 'filter']" />
                        </button> -->
                        <button type="button" class="btn btn-success ml-3 btn-add" data-bs-toggle="modal"
                            data-bs-target="#licenseTypesModal">
                            <font-awesome-icon :icon="['fas', 'plus']" class="me-2" /> Tambah
                        </button>
                    </div>
                </div>
                <hr class="custom-line" />
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">NAMA</th>
                            <th scope="col">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in items" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>
                                <button class="btn btn-warning btn-sm" @click="editLicense(index)">
                                    <font-awesome-icon :icon="['fas', 'pen']" />
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <font-awesome-icon :icon="['fas', 'trash-can']" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="modal fade" id="licenseTypesModal" tabindex="-1" aria-labelledby="licenseTypesModalLabel"
                    aria-hidden="true" data-bs-backdrop="static">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn" data-bs-dismiss="modal">
                                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                                </button>
                                <h1 class="modal-title fs-5" id="licenseTypesModalLabel">Tambah Jenis Lisensi</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="addLicense">
                                    <div class="mb-3">
                                        <label for="task-name" class="col-form-label">
                                            Jenis Lisensi
                                            <sup class="text-danger">
                                                <font-awesome-icon :icon="['fas', 'asterisk']" />
                                            </sup>
                                        </label>
                                        <input type="text" class="form-control" id="task-name" v-model="newLicenseName"
                                            placeholder="Masukkan Jenis Lisensi...">
                                    </div>
                                    <div class="modal-footer justify-content-center">
                                        <button type="submit" class="btn btn-success">
                                            <font-awesome-icon :icon="['fas', 'save']" class="me-2" /> Simpan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true"
                    data-bs-backdrop="static">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn" data-bs-dismiss="modal">
                                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                                </button>
                                <h1 class="modal-title fs-5" id="editModalLabel">Edit Jenis Lisensi</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="updateLicense">
                                    <div class="mb-3">
                                        <label for="edit-task-name" class="col-form-label">
                                            Jenis Lisensi
                                            <sup class="text-danger">
                                                <font-awesome-icon :icon="['fas', 'asterisk']" />
                                            </sup>
                                        </label>
                                        <input type="text" class="form-control" id="edit-task-name"
                                            v-model="editingLicenseName" placeholder="Masukkan Jenis Lisensi...">
                                    </div>
                                    <div class="modal-footer justify-content-center">
                                        <button type="submit" class="btn btn-success">
                                            <font-awesome-icon :icon="['fas', 'save']" class="me-2" /> Simpan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import * as bootstrap from 'bootstrap';
import { onMounted, ref } from 'vue';

export default {
    setup() {
        const items = ref([{ name: 'Domain' }, { name: 'Warranty' }]);
        const newLicenseName = ref('');
        const editingLicenseName = ref('');
        const editingIndex = ref<number | null>(null);

        const addLicenseModal = ref<bootstrap.Modal | null>(null);
        const editLicenseModal = ref<bootstrap.Modal | null>(null);

        onMounted(() => {
            if (process.client) {  // Pastikan hanya berjalan di sisi klien
                const addLicenseModalEl = document.getElementById('licenseTypesModal');
                if (addLicenseModalEl) {
                    addLicenseModal.value = new bootstrap.Modal(addLicenseModalEl);
                }

                const editLicenseModalEl = document.getElementById('editModal');
                if (editLicenseModalEl) {
                    editLicenseModal.value = new bootstrap.Modal(editLicenseModalEl);
                }
            }
        });

        const addLicense = () => {
            if (newLicenseName.value.trim() !== '') {
                items.value.push({ name: newLicenseName.value });
                newLicenseName.value = '';
                if (process.client && addLicenseModal.value) {
                    addLicenseModal.value.hide();
                }
            }
        };

        const editLicense = (index: number) => {
            editingIndex.value = index;
            editingLicenseName.value = items.value[index].name;
            if (process.client && editLicenseModal.value) {
                editLicenseModal.value.show();
            }
        };

        const updateLicense = () => {
            if (editingIndex.value !== null && editingLicenseName.value.trim() !== '') {
                items.value[editingIndex.value].name = editingLicenseName.value;
                editingLicenseName.value = '';
                editingIndex.value = null;
                if (process.client && editLicenseModal.value) {
                    editLicenseModal.value.hide();
                }
            }
        };

        return {
            items,
            newLicenseName,
            addLicense,
            editingLicenseName,
            editLicense,
            updateLicense,
        };
    },
};
</script>

<style scoped>
.card {
    border: 1px solid #ced4da;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-body {
    padding: 20px;
}

.flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.flex-item {
    margin-right: 10px;
}

.flex-end {
    display: flex;
    align-items: center;
    gap: 10px;
}

.search-bar {
    max-width: 300px;
    margin-right: 10px;
}

.input-group-text {
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 5px 0 0 5px;
}

.input-group .form-control {
    border-radius: 0 5px 5px 0;
}

.table-bordered {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
}

.table-bordered th,
.table-bordered td {
    border: 1px solid #dee2e6;
    text-align: center;
    vertical-align: middle;
    padding: 10px;
}

.table-bordered thead th:first-child {
    border-top-left-radius: 10px;
}

.table-bordered thead th:last-child {
    border-top-right-radius: 10px;
}

.table-bordered tbody tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}

.table-bordered tbody tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}

.custom-line {
    border: 1px solid;
}

.btn-success {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    padding: 5px 15px;
    color: white;
    border-radius: 5px;
}

.btn-success .bi-plus {
    margin-right: 5px;
    color: white;
}

.btn-add {
    white-space: nowrap;
}

/* .btn-filter {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
} */

.btn-sm {
    margin: 3px;
}

.btn-sm .bi {
    font-size: 16px;
}

.btn-warning .bi-pencil {
    font-size: 16px;
}

.btn-danger .bi-trash {
    font-size: 16px;
}

.modal-footer {
    display: flex;
    justify-content: center;
}

.modal-footer .btn-success .me-2 {
    margin-right: 8px;
}

.text-danger {
    font-size: 8px;
    vertical-align: super;
}
</style>

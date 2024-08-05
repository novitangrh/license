<template>
    <div class="card mb-3">
        <div class="card-body">
            <div class="flex-container mb-3">
                <h3 class="flex-item">Daftar Lisensi</h3>
                <div class="flex-item flex-end">
                    <div class="input-group search-bar">
                        <div class="input-group-text">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        </div>
                        <input type="text" class="form-control" placeholder="Cari" />
                    </div>
                    <button type="button" class="btn btn-secondary btn-filter" @click="filterLicenses">
                        <font-awesome-icon :icon="['fas', 'filter']" />
                    </button>
                    <button type="button" class="btn btn-success ml-3 btn-add" data-bs-toggle="modal"
                        data-bs-target="#licenseListModal">
                        <font-awesome-icon :icon="['fas', 'plus']" class="me-2" /> Tambah
                    </button>
                </div>
            </div>
            <hr class="custom-line" />
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">JENIS</th>
                        <th scope="col">NAMA</th>
                        <th scope="col">WAKTU</th>
                        <th scope="col">TANGGAL MULAI</th>
                        <th scope="col">TANGGAL SELESAI</th>
                        <th scope="col">PENYEDIA</th>
                        <th scope="col">NOMINAL</th>
                        <th scope="col">AKSI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Domain</td>
                        <td>Abcd</td>
                        <td>Tahunan</td>
                        <td>1 Juli 2024</td>
                        <td>1 Juli 2025</td>
                        <td>Telkom</td>
                        <td>Rp. 1.500.000</td>
                        <td>
                            <button class="btn btn-warning btn-sm">
                                <font-awesome-icon :icon="['fas', 'pen']" />
                            </button>
                            <button class="btn btn-danger btn-sm">
                                <font-awesome-icon :icon="['fas', 'trash-can']" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="modal fade" id="licenseListModal" tabindex="-1" aria-labelledby="licnseListModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn" data-bs-dismiss="modal">
                                <font-awesome-icon :icon="['fas', 'chevron-left']" />
                            </button>
                            <h1 class="modal-title fs-5" id="licenseListModalLabel">Daftar Lisensi</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="task-status" class="col-form-label">Jenis Lisensi<sup
                                            class="text-danger">
                                            <font-awesome-icon :icon="['fas', 'asterisk']" />
                                        </sup></label>
                                    <select class="form-select" id="task-status" v-model="newTaskStatus">
                                        <option value="Domain">Domain</option>
                                        <option value="Service">Service</option>
                                        <option value="Warranty">Warranty</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="task-name" class="col-form-label">Nama<sup class="text-danger">
                                            <font-awesome-icon :icon="['fas', 'asterisk']" />
                                        </sup></label>
                                    <input type="text" class="form-control" id="task-name"
                                        placeholder="Masukkan Nama Lisensi...">
                                </div>
                                <div class="mb-3">
                                    <label class="col-form-label">Waktu<sup class="text-danger">
                                            <font-awesome-icon :icon="['fas', 'asterisk']" />
                                        </sup></label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" id="monthly" value="Bulanan"
                                            v-model="newTaskTime" />
                                        <label class="form-check-label" for="monthly">
                                            Bulanan
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" id="yearly" value="Tahunan"
                                            v-model="newTaskTime" />
                                        <label class="form-check-label" for="yearly">
                                            Tahunan
                                        </label>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="start-date" class="col-form-label">Tanggal Mulai<sup
                                                class="text-danger">
                                                <font-awesome-icon :icon="['fas', 'asterisk']" />
                                            </sup></label>
                                        <input type="text" class="form-control" id="start-date"
                                            placeholder="Masukkan Tanggal Mulai...">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="end-date" class="col-form-label">Tanggal Selesai<sup
                                                class="text-danger">
                                                <font-awesome-icon :icon="['fas', 'asterisk']" />
                                            </sup></label>
                                        <input type="text" class="form-control" id="end-date"
                                            placeholder="Masukkan Tanggal Selesai...">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="provider" class="col-form-label">Penyedia<sup class="text-danger">
                                            <font-awesome-icon :icon="['fas', 'asterisk']" />
                                        </sup></label>
                                    <input type="text" class="form-control" id="provider"
                                        placeholder="Masukkan Penyedia...">
                                </div>
                                <div class="mb-3">
                                    <label for="amount" class="col-form-label">Nominal<sup class="text-danger">
                                            <font-awesome-icon :icon="['fas', 'asterisk']" />
                                        </sup></label>
                                    <input type="text" class="form-control" id="amount"
                                        placeholder="Masukkan Nominal...">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success">
                                <font-awesome-icon :icon="['fas', 'save']" class="me-2" /> Simpan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            newTaskStatus: '',
            newTaskTime: '',
        };
    },
    methods: {
        addLicenseList() {
            // Your logic to add a license
        },
        filterLicenses() {
            // Your logic to filter licenses
        },
    },
});
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

.btn-filter {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
}

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

<template>
    <div>
        <div class="text">Selamat Datang, Aulia Arief!</div>
        <div class="container mt-4">
            <div class="row">
                <!-- Card 1: Service -->
                <div class="col-md-4 mb-4">
                    <div class="card card-custom">
                        <div class="card-body">
                            <h5 class="card-title">Service</h5>
                            <p class="card-text">Details about service.</p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Warranty -->
                <div class="col-md-4 mb-4">
                    <div class="card card-custom">
                        <div class="card-body">
                            <h5 class="card-title">Warranty</h5>
                            <p class="card-text">Detail about warranty.</p>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Domain -->
                <div class="col-md-4 mb-4">
                    <div class="card card-custom">
                        <div class="card-body">
                            <h5 class="card-title">Domain</h5>
                            <p class="card-text">Detail about domain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                            <th scope="col">TENGGAT WAKTU</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</template>


<script setup>

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
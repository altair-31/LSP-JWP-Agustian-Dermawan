<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <title>To-Do List</title>
</head>
<body>
    <div class="container mt-5">
        <div class="card shadow">
            <div class="card-header bg-primary text-white">
                <h2 class="text-center mb-0"><i class="fas fa-check-circle mr-2"></i>To-Do List</h2>
            </div>
        <form id="taskForm" method="POST" class="p-4">
            <div class="input-group mb-3">
                <input type="text" class="form-control form-control-lg" name="title" placeholder="Tambah Tugas Baru..." required>
                <div class="input-group-append">
                    <button type="submit" class="btn btn-success">
                        <i class="fas fa-plus"></i> Tambah
                    </button>
                </div>
            </div>
        </form>
        <div class="card-body pt-0">
            <h3 class="mb-4 text-muted">List Tugas</h3>
            <ul class="list-group" id="taskList">
            </ul>
        </div>
    </div>
    <script src="script.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
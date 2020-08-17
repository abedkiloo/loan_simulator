
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>Vue js App</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>

<body class="hold-transition sidebar-mini">
<div class="wrapper" id="app">

    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="navbar-nav mr-auto">
                <a href="#" class="navbar-brand">getLoan</a>
                <ul></ul>
                <li class="nav-item">
                    <a href="/customers" class="nav-link">Customers</a>
                </li>
                <li class="nav-item">
                    <a href="/loans" class="nav-link">Loans</a>
                </li>
            </div>
        </nav>
    </aside>

    <div class="content-wrapper">
        <div class="content">
            <div class="container-fluid">

                <router-view></router-view>

                <vue-progress-bar></vue-progress-bar>

            </div>
        </div>
    </div>

</div>

<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>

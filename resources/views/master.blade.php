<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>Vue js App</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>
        ul li  {
           display: inline-block;
        }
    </style>
</head>

<body class="hold-transition sidebar-mini">
<div class="wrapper" id="app">

    <aside class="main-sidebar sidebar-dark-primary elevation-4">
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

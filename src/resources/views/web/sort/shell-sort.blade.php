@extends('layout.app')

@section('stylesheets')
@parent
<link rel="stylesheet" href="{{ asset('static/css/sort/sort-common.css') }}">
@endsection

@section('script')
<script type="text/javascript" src="{{ asset('static/libs/require.js') }}" data-main="{{ asset('static/js/sort/shell-sort.js') }}"></script>
@endsection

@section('main')
<ol class="breadcrumb">
    <li><a href="{{ url('/') }}">主页</a></li>
    <li><a href="{{ url('/js/sort') }}">排序算法</a></li>
    <li>插入排序—希尔排序(Shell`s Sort)</li>
</ol>

<div class="panel panel-primary">
    <div class="panel-heading">
        <h3 class="panel-title">插入排序—希尔排序(Shell`s Sort)</h3>
    </div>
    <div class="panel-body">
        <ul class="list-group">
           <li class="list-group-item">初始化</li>
           <li class="list-group-item clearfix" id="init-container"></li>
           <li class="list-group-item"><button id="start-btn" type="button" class="btn btn-default">排序演示</button></li>
           <li class="list-group-item clearfix" id="order-container"></li>
        </ul>
    </div>
</div>
@endsection

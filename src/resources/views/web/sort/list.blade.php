@extends('layout.app')

@section('stylesheets')
@parent
@endsection

@section('main')
    <ol class="breadcrumb">
      <li><a href="{{ url('/') }}">主页</a></li>
      <li>排序算法</li>
    </ol>

    <a href="#" class="list-group-item active">
        排序算法
    </a>
    <a href="{{ url('js/sort/straight-insertion-sort') }}" class="list-group-item">插入排序—直接插入排序(Straight Insertion Sort)</a>
    <a href="{{ url('js/sort/shell-sort') }}" class="list-group-item">插入排序—希尔排序(Shell`s Sort)</a>
    <a href="#" class="list-group-item">选择排序—简单选择排序(Simple Selection Sort)</a>
    <a href="#" class="list-group-item">选择排序—堆排序(Heap Sort)</a>
    <a href="#" class="list-group-item">交换排序—冒泡排序(Bubble Sort)</a>
    <a href="#" class="list-group-item">交换排序—快速排序(Quick Sort)</a>
    <a href="#" class="list-group-item">归并排序(Merge Sort)</a>
    <a href="#" class="list-group-item">桶排序/基数排序(Radix Sort)</a>
@endsection

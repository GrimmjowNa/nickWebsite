@extends('layout.app')

@section('stylesheets')
@parent
<link rel="stylesheet" href="{{ asset('static/css/root/do-nothing.css') }}">
@endsection

@section('script')
<script type="text/javascript" src="{{ asset('static/libs/require.js') }}" data-main="{{ asset('static/js/root/do-nothing.js') }}"></script>
@endsection

@section('main')
<button type="button" class="btn btn-info">{{ trans('page.doNothing.exit') }}</button>
@endsection
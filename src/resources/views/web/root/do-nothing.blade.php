@extends('layout.app')

@section('stylesheets')
@parent
<link rel="stylesheet" href="{{ asset('static/css/root/do-nothing.css') }}">
@endsection

@section('script')
<script type="text/javascript" src="{{ asset('static/libs/require.js') }}" data-main="{{ asset('static/js/root/do-nothing.js') }}"></script>
@endsection

@section('main')
<button type="button" class="btn btn-info theme-btn">{{ trans('page.doNothing.toggleTheme') }}</button>
<button type="button" class="btn btn-info again-btn">{{ trans('page.doNothing.again') }}</button>
<button type="button" class="btn btn-info exit-btn">{{ trans('page.doNothing.exit') }}</button>
<div class="panel panel-default time-panel">
    <div class="panel-body">
    </div>
</div>

<audio id="bg-audio" autoplay="autoplay" loop="loop">
  <source src="{{ asset('/static/image/do-nothing/1.ogg') }}" type="audio/ogg" />
</audio>
@endsection
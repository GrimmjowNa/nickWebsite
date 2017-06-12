@extends('layout.app')

@section('script')
<script type="text/javascript" src="{{ asset('static/libs/require.js') }}" data-main="{{ asset('static/js/home.js') }}"></script>
@endsection

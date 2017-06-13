@extends('layout.app')

@section('script')
<script type="text/javascript" src="{{ asset('static/libs/require.js') }}" data-main="{{ asset('static/js/home.js') }}"></script>
<script>
    MESSAGE = {
        'title': '{{ trans("page.home.title") }}',
        'doNothing': '{{ trans("page.home.doNothing") }}',
        'doEyeExercises': '{{ trans("page.home.doEyeExercises") }}',
        'moveBody': '{{ trans("page.home.moveBody") }}',
        'music': '{{ trans("page.home.music") }}'
    }
</script>
@endsection

<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    @section('head-meta')
    @show

    <title>@yield('title', trans('app.website.title'))</title>

    @section('lib_styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('/static/libs/bootstrap/css/bootstrap.min.css') }}">
    @show

    @section('stylesheets')
    <link href="{{ asset('/static/css/base.css') }}" rel="stylesheet" />
    @show

    <script type="text/javascript">
        var require = {
            urlArgs: "_v={{ config('config.app_version', '0.0.1') }}"
        };
    </script>

    @section('script')
    <script type="text/javascript" src="{{ asset('static/libs/require.js') }}" data-main="{{ asset('static/js/config.js') }}"></script>
    @show

</head>
<body>
    @section('header')
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="{{ url('/') }}">{{ trans('app.website.name') }}</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    @foreach (config('menu') as $menu => $category)
                    @if (array_key_exists('children', $category) && $category['children'])
                    <li class="dropdown">
                    <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ trans('menu.' . $menu . '.name') }}<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        @foreach($category['children'] as $key => $sub)
                        <li><a href="{{ url($sub['url']) }}">{{ trans('menu.' . $menu . '.children.' . $key . '.name') }}</a></li>
                        @endforeach
                    </ul>
                    </li>
                    @else
                    <li>
                        <a href="{{ url($category['url']) }}">{{ trans('menu.' . $menu . '.name') }}<span class="sr-only">(current)</span></a>
                    </li>
                    @endif
                    @endforeach
                </ul>

                <ul class="nav navbar-nav navbar-right">
                   <!--  <li><a href="#">Link</a></li> -->
                    <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ trans('menu.language') }}<span class="caret"></span></a>
                        <ul class="dropdown-menu" id="language">
                            @foreach(config('lang') as $lang => $value)
                            <li><a href="javascript:void(0)" data-lang="{{ $lang }}">{{ $value }}</a></li>
                            @endforeach
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    @show

    <div class="col-sm-10 col-sm-offset-1 main-body">
        @section('main')
        @show
    </div>

    @section('footer')
    <footer>
        <div class="container copyright">
            <div class="row text-center">
                ©2016.08 - {{ date('Y.m') }} NickNa 版权所有 naguangqing@qq.com
            </div>
        </div>
    </footer>
    @show
</body>
</html>

<?php

/**
 *  Global method
 */
if (function_exists('format_json_success')) {
    function format_json_success($body = null)
    {
        return array(
            'body' => $body,
            'status' => 'SUCCESS',
        );
    }
}

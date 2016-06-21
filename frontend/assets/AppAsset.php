<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
    ];
    public $js = [
        /* js Library */
        'js/lib/jquery-2.1.3.min.js',
        'js/lib/underscore-min.js',
        'js/lib/backbone-min.js',
        /* js Application */
        'js/app/models/todo-model.js',
        'js/app/collections/todo-collection.js',
        'js/app/views/todo-collection-view.js',
        'js/app/routers/router.js',
        'js/app/app.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}

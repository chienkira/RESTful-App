<?php

/* @var $this yii\web\View */

use yii\helpers\Html;

$this->title = 'Todo';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-todo">

    <!-- Content -->
    <div id="content">
    </div>

    <!-- Template of TODO List -->
    <script type="text/template" id="list-template">
        <h1>TODO List</h1>
        <hr>
        <div>
            <table border="1" width="350px">
                <tbody id="todo-lists"></tbody>
            </table>
        </div>
    </script>

    <!-- Template of TODO item -->
    <script type="text/template" id="item-template">
        <td style="margin:0px">
            <span class="todo-edit" style="margin:0px"><%- name %></span>
        </td>
    </script>
</div>

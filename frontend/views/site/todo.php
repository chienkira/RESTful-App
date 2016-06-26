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
        <div>
            <input type="text" id="new-todo-code" placeholder="Code" autofocus/>
            <input type="text" id="new-todo-name" placeholder="Country Name"/>
            <input type="text" id="new-todo-population" placeholder="Population"/>
        </div>
        <input type="button" id="addTodo" value="Add">
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
            <span class="todo-edit" style="margin:0px"><%- code %>：<%- name %></span>
        </td>
        <td style="margin:0px">
            <span class="todo-edit" style="margin:0px"><%- population %>人</span>
        </td>
        <input type="hidden" id="item-code" val="<%- code %>"/>
        <td>
            <a class="remove-link" href="#">Del</a>
        </td>
    </script>
</div>

<template>
  <div class="DetailBasic">
    <ul>
        <li>query信息编号: {{$route.query.id}}</li>
        <li>query信息标题:{{$route.query.title}}</li>
        <li>propsQuery信息标题:{{title}}</li>
        <li>params信息编号:{{id}}</li>
        <li>params信息标题:{{title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"Detail",
    props:["id","title"]
}
</script>

<style>
    .DetailBasic {
        border-left:6px #fff solid ;
        padding-left: 6px;
    }
    .DetailBasic ul {
        list-style: none;
    }
    .DetailBasic ul li {
        height: 30px;
        line-height: 30px;
        font-family: 'Times New Roman', Times, serif;
    }
</style>
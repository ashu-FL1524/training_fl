<template>
    <div id = "menu">
        <router-link to="/" style="color: white;text-decoration: none">Home</router-link> |
        <router-link to="/dashboard" style="color: white;text-decoration: none">Dashboard</router-link> |
        <router-link to="/register" style="color: white;text-decoration: none ">Register</router-link> |
        <router-link to="/userdetails" style="color: black; text-decoration: none">UserDetails</router-link>
    </div>
</template>

<style scoped>
    #menu{
        padding: 10px;
        text-align: right;
        color: white;
        font-size: 20px;
        width:50%;
        position: absolute;
        right:0;
    }
</style>

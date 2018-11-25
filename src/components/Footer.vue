<template>
    <div class="footer-child">                 
        <a href="https://www.facebook.com/wonseokpark912" target="_black"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/></a>
        <p>Created By WS </p>
    </div>
</template>

<script>
    export default {
        name: 'footer-child'
        
    }
</script>

<style lang="scss" scoped>

.footer-child {
    text-align: center;
    font-size: 1.15rem;
    color: #979797;

    a {
        text-decoration: none;
        color: #979797;

        &:hover {
            color: #000;
        }
    }

    p {
        margin-bottom: 0;
        font-size: 0.95rem;
    }
}




</style>
<template>
    <div>
        <div id="year">
            <select class="year-select" @change="handleYear">
                <option>- 년도 - </option>
                <option value="2018" selected>2018년</option>
                <option value="2019">2019년</option>
                <option value="2020">2020년</option>
            </select>
        </div>
        <table id="tables">               
            <table-top v-bind:topMandalart="mandalartObj.top"></table-top>
            <table-middle v-bind:middleMandalart="mandalartObj.middle"></table-middle>
            <table-bottom v-bind:bottomMandalart="mandalartObj.bottom"></table-bottom>        
        </table>
        <div id="btn-save">
            <button class="btn btn-dark">저 장</button>
        </div>
    </div>
</template>

<script>
import eventBus from '../EventBus.js';
import TableTop from '@/components/TableTop'
import TableMiddle from '@/components/TableMiddle'
import TableBottom from '@/components/TableBottom'

    export default {        
        props: [ "mandalartObj"],
        methods: {
            handleYear: function(e) {                
                if(e.target.value) eventBus.$emit("targetYear", e.target.value)
                else alert("년도를 선택 할 수 없습니다.");
            }
        },
        components : { TableTop, TableMiddle, TableBottom }
        
    }
</script>

<style lang="scss" scoped>

@import "../assets/style.scss";


#tables {
    border: 1px solid #dee2e6;
    margin-bottom: 1rem;
}

#btn-save{
    text-align: center;
    button {
        width: 15vw;
        font-size: 0.5rem;        
    }
}

#year{  
    text-align: left;
    margin-bottom: 0.3rem; 
    .year-select {        
        width: 6vw;
        padding-left: 0.3rem;
        font-size: 0.7rem;
        line-height: 0.7rem;
        border-radius: .2rem;
    }
}

@media(max-width: $site_max_small) {
    #tables {
        font-size: 0.5rem;    
    }
}

</style>
<template>    
    <tr>
        <td> 
            <table id="topLeft" class="table table-bordered tbl tbl-top-left" @keyup="handleKeyup">
                <tbody>
                    <tr>            
                        <td><input type="text" class="topLeft1"  :value="topMandalart[0].topLeft.topLeft123" /></td>
                        <td><input type="text" class="topLeft2"  :value="topMandalart[0].topLeft.topLeft2" /></td>
                        <td><input type="text" class="topLeft3"  :value="topMandalart[0].topLeft.topLeft3" /></td>
                    </tr>
                    <tr>            
                        <td><input type="text" class="topLeft4"  :value="topMandalart[0].topLeft.topLeft4" /></td>
                        <td><input type="text" class="topLeftSubject"  :value="topMandalart[0].topLeft.topLeftSubject" /></td>
                        <td><input type="text" class="topLeft5"  :value="topMandalart[0].topLeft.topLeft5" /></td>                        
                    </tr>
                    <tr>
                        <td><input type="text" class="topLeft6"  :value="topMandalart[0].topLeft.topLeft6" /></td>
                        <td><input type="text" class="topLeft7"  :value="topMandalart[0].topLeft.topLeft7" /></td>
                        <td><input type="text" class="topLeft8"  :value="topMandalart[0].topLeft.topLeft8" /></td>
                    </tr>            
                </tbody>
            </table>
        </td>
        <td> 
            <table id="topCenter" class="table table-bordered tbl tbl-top" @keyup="handleKeyup">
                <tbody>
                    <tr>            
                        <td><input type="text" class="topCenter1"  :value="topMandalart[1].topCenter.topCenter1" /></td>
                        <td><input type="text" class="topCenter2"  :value="topMandalart[1].topCenter.topCenter2" /></td>
                        <td><input type="text" class="topCenter3"  :value="topMandalart[1].topCenter.topCenter3" /></td>
                    </tr>
                    <tr>            
                        <td><input type="text" class="topCenter4"  :value="topMandalart[1].topCenter.topCenter4" /></td>
                        <td><input type="text" class="topCenterSubject"  :value="topMandalart[1].topCenter.topCenterSubject" /></td>
                        <td><input type="text" class="topCenter5"  :value="topMandalart[1].topCenter.topCenter5" /></td>                        
                    </tr>
                    <tr>
                        <td><input type="text" class="topCenter6"  :value="topMandalart[1].topCenter.topCenter6" /></td>
                        <td><input type="text" class="topCenter7"  :value="topMandalart[1].topCenter.topCenter7" /></td>
                        <td><input type="text" class="topCenter8"  :value="topMandalart[1].topCenter.topCenter8" /></td>
                    </tr>
                </tbody>
            </table>
        </td>
        <td> 
            <table id="topRight" class="table table-bordered tbl tbl-top-right" @keyup="handleKeyup">        
                <tbody>
                    <tr>            
                        <td><input type="text" class="topRight1"  :value="topMandalart[2].topRight.topRight1" /></td>
                        <td><input type="text" class="topRight2"  :value="topMandalart[2].topRight.topRight2" /></td>
                        <td><input type="text" class="topRight3"  :value="topMandalart[2].topRight.topRight3" /></td>
                    </tr>
                    <tr>            
                        <td><input type="text" class="topRight4"  :value="topMandalart[2].topRight.topRight4" /></td>
                        <td><input type="text" class="topRightSubject"  :value="topMandalart[2].topRight.topRightSubject" /></td>
                        <td><input type="text" class="topRight5"  :value="topMandalart[2].topRight.topRight5" /></td>                        
                    </tr>
                    <tr>
                        <td><input type="text" class="topRight6"  :value="topMandalart[2].topRight.topRight6" /></td>
                        <td><input type="text" class="topRight7"  :value="topMandalart[2].topRight.topRight7" /></td>
                        <td><input type="text" class="topRight8"  :value="topMandalart[2].topRight.topRight8" /></td>
                    </tr>            
                </tbody>
            </table>
        </td>
    </tr>    
</template>

<script>

import eventBus from '../EventBus.js';

export default {
    props : ["topMandalart"],
    methods: {
        handleKeyup : function(evt) {
            const obj = evt.target.closest('table').id;
            const key = evt.target.className;
            const value = evt.target.value;

            eventBus.$emit('modify', obj, key, value);                
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../assets/style.scss";

td {
    padding: 0;
}

.tbl {
    margin: 0;    
    table-layout: fixed;
}
.tbl tr td {
    padding: 0px;    
    margin: 0;
    height: 5.5rem;
    text-align: center;
    overflow: hidden;
    text-align: center;
    border: 0;
}

.tbl tr td input {
    margin: 0;
    padding: 0; 
    width: 100%;
    height: 100%;
    text-align: center;
    border: 0;
    outline-style: none;
}

.tbl tr:nth-child(2) td {
    border-top: $border_line;
    border-bottom : $border_line;
}

.tbl tr td:nth-child(2) {
    border-left: $border_line;
    border-right: $border_line;
}

.tbl tr:nth-child(2) td:nth-child(2) input{
    background-color: $bak_color;
}

.tbl-top-left tr:nth-child(3) td:nth-child(3) input{
    background-image: $bak_img_color, url('../assets/arrow-top-left.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.tbl-top tr:nth-child(3) td:nth-child(2) input{
    background-image: $bak_img_color, url('../assets/arrow-top.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.tbl-top-right tr:nth-child(3) td:nth-child(1) input{
    background-image: $bak_img_color, url('../assets/arrow-top-right.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

@media(max-width: $site_max_small) {    
    .tbl tr td{
            height: 2.5rem;
            line-height: 2.5rem;            
    }
}


</style>
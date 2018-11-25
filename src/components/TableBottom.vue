<template>    
    <tr>
        <td> 
            <table id="bottomLeft" class="table table-bordered tbl tbl-bottom-left" @keyup="handleKeyup">        
                <tbody>
                    <tr>            
                        <td><input type="text" class="bottomLeft1"  :value="bottomMandalart[0].bottomLeft.bottomLeft1" /></td>
                        <td><input type="text" class="bottomLeft2"  :value="bottomMandalart[0].bottomLeft.bottomLeft2" /></td>
                        <td><input type="text" class="bottomLeft3"  :value="bottomMandalart[0].bottomLeft.bottomLeft3" /></td>
                    </tr>
                    <tr>            
                        <td><input type="text" class="bottomLeft4"  :value="bottomMandalart[0].bottomLeft.bottomLeft4" /></td>
                        <td><input type="text" class="bottomLeftSubject"  :value="bottomMandalart[0].bottomLeft.bottomLeftSubject" /></td>
                        <td><input type="text" class="bottomLeft5"  :value="bottomMandalart[0].bottomLeft.bottomLeft5" /></td>                        
                    </tr>
                    <tr>
                        <td><input type="text" class="bottomLeft6"  :value="bottomMandalart[0].bottomLeft.bottomLeft6" /></td>
                        <td><input type="text" class="bottomLeft7"  :value="bottomMandalart[0].bottomLeft.bottomLeft7" /></td>
                        <td><input type="text" class="bottomLeft8"  :value="bottomMandalart[0].bottomLeft.bottomLeft8" /></td>
                    </tr>            
                </tbody>
            </table>
        </td>
        <td> 
            <table id="bottomCenter" class="table table-bordered tbl tbl-bottom" @keyup="handleKeyup">         
                <tbody>
                    <tr>            
                        <td><input type="text" class="bottomCenter1"  :value="bottomMandalart[1].bottomCenter.bottomCenter1" /></td>
                        <td><input type="text" class="bottomCenter2"  :value="bottomMandalart[1].bottomCenter.bottomCenter2" /></td>
                        <td><input type="text" class="bottomCenter3"  :value="bottomMandalart[1].bottomCenter.bottomCenter3" /></td>
                    </tr>
                    <tr>            
                        <td><input type="text" class="bottomCenter4"  :value="bottomMandalart[1].bottomCenter.bottomCenter4" /></td>
                        <td><input type="text" class="bottomCenterSubject"  :value="bottomMandalart[1].bottomCenter.bottomCenterSubject" /></td>
                        <td><input type="text" class="bottomCenter5"  :value="bottomMandalart[1].bottomCenter.bottomCenter5" /></td>                        
                    </tr>
                    <tr>
                        <td><input type="text" class="bottomCenter6"  :value="bottomMandalart[1].bottomCenter.bottomCenter6" /></td>
                        <td><input type="text" class="bottomCenter7"  :value="bottomMandalart[1].bottomCenter.bottomCenter7" /></td>
                        <td><input type="text" class="bottomCenter8"  :value="bottomMandalart[1].bottomCenter.bottomCenter8" /></td>
                    </tr>            
                </tbody>
            </table>
        </td>
        <td> 
            <table id="bottomRight" class="table table-bordered tbl tbl-bottom-right" @keyup="handleKeyup">        
                <tbody>
                    <tr>            
                        <td><input type="text" class="bottomRight1"  :value="bottomMandalart[2].bottomRight.bottomRight1" /></td>
                        <td><input type="text" class="bottomRight2"  :value="bottomMandalart[2].bottomRight.bottomRight2" /></td>
                        <td><input type="text" class="bottomRight3"  :value="bottomMandalart[2].bottomRight.bottomRight3" /></td>
                    </tr>
                    <tr>            
                        <td><input type="text" class="bottomRight4"  :value="bottomMandalart[2].bottomRight.bottomRight4" /></td>
                        <td><input type="text" class="bottomRightSubject"  :value="bottomMandalart[2].bottomRight.bottomRightSubject" /></td>
                        <td><input type="text" class="bottomRight5"  :value="bottomMandalart[2].bottomRight.bottomRight5" /></td>                        
                    </tr>
                    <tr>
                        <td><input type="text" class="bottomRight6"  :value="bottomMandalart[2].bottomRight.bottomRight6" /></td>
                        <td><input type="text" class="bottomRight7"  :value="bottomMandalart[2].bottomRight.bottomRight7" /></td>
                        <td><input type="text" class="bottomRight8"  :value="bottomMandalart[2].bottomRight.bottomRight8" /></td>
                    </tr>            
                </tbody>                           
            </table>
        </td>
    </tr>    
</template>

<script>
import eventBus from '../EventBus.js';

export default {
    props : ["bottomMandalart"],
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

.tbl-bottom-left tr:nth-child(1) td:nth-child(3) input{
    background-image: $bak_img_color, url('../assets/arrow-bottom-left.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.tbl-bottom tr:nth-child(1) td:nth-child(2) input{
    background-image: $bak_img_color, url('../assets/arrow-bottom.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.tbl-bottom-right tr:nth-child(1) td:nth-child(1) input{
    background-image: $bak_img_color, url('../assets/arrow-bottom-right.png');
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
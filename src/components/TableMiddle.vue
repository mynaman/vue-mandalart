<template>    
    <tr>
        <td> 
            <table id="middleLeft" class="table table-bordered tbl tbl-middle-left" @keyup="handleKeyup">        
                <tbody>
                    <tr>            
                        <td><input type="text" class="middleLeft1"  :value="middleMandalart[0].middleLeft.middleLeft1" /></td>
                        <td><input type="text" class="middleLeft2"  :value="middleMandalart[0].middleLeft.middleLeft2" /></td>
                        <td><input type="text" class="middleLeft3"  :value="middleMandalart[0].middleLeft.middleLeft3" /></td>
                    </tr>
                    <tr>            
                        <td><input type="text" class="middleLeft4"  :value="middleMandalart[0].middleLeft.middleLeft4" /></td>
                        <td><input type="text" class="middleLeftSubject"  :value="middleMandalart[0].middleLeft.middleLeftSubject" /></td>
                        <td><input type="text" class="middleLeft5"  :value="middleMandalart[0].middleLeft.middleLeft5" /></td>                        
                    </tr>
                    <tr>
                        <td><input type="text" class="middleLeft6"  :value="middleMandalart[0].middleLeft.middleLeft6" /></td>
                        <td><input type="text" class="middleLeft7"  :value="middleMandalart[0].middleLeft.middleLeft7" /></td>
                        <td><input type="text" class="middleLeft8"  :value="middleMandalart[0].middleLeft.middleLeft8" /></td>
                    </tr>            
                </tbody>
            </table>
        </td>
        <td> 
            <table id="middleCenter" class="table table-bordered tbl tbl-middle" @keyup="handleKeyup">        
                <tbody>
                    <tr>            
                        <td><input type="text" class="topLeftSubject"  :value="middleMandalart[1].middleCenter.topLeftSubject" /></td>
                        <td><input type="text" class="topCenterSubject"  :value="middleMandalart[1].middleCenter.topCenterSubject" /></td>
                        <td><input type="text" class="topRightSubject"  :value="middleMandalart[1].middleCenter.topRightSubject" /></td>
                    </tr>
                    <tr>            
                        <td><input type="text" class="middleLeftSubject"  :value="middleMandalart[1].middleCenter.middleLeftSubject" /></td>
                        <td><input type="text" class="superSubject"  :value="middleMandalart[1].middleCenter.superSubject" /></td>
                        <td><input type="text" class="middleRightSubject"  :value="middleMandalart[1].middleCenter.middleRightSubject" /></td>                        
                    </tr>
                    <tr>
                        <td><input type="text" class="bottomLeftSubject"  :value="middleMandalart[1].middleCenter.bottomLeftSubject" /></td>
                        <td><input type="text" class="bottomCenterSubject"  :value="middleMandalart[1].middleCenter.bottomCenterSubject" /></td>
                        <td><input type="text" class="bottomRightSubject"  :value="middleMandalart[1].middleCenter.bottomRightSubject" /></td>
                    </tr>            
                </tbody>
            </table>
        </td>
        <td> 
            <table id="middleRight" class="table table-bordered tbl tbl-middle-right" @keyup="handleKeyup">        
                <tbody>
                    <tr>            
                        <td><input type="text" class="middleRight1"  :value="middleMandalart[2].middleRight.middleRight1" /></td>
                        <td><input type="text" class="middleRight2"  :value="middleMandalart[2].middleRight.middleRight2" /></td>
                        <td><input type="text" class="middleRight3"  :value="middleMandalart[2].middleRight.middleRight3" /></td>
                    </tr>
                    <tr>            
                        <td><input type="text" class="middleRight4"  :value="middleMandalart[2].middleRight.middleRight4" /></td>
                        <td><input type="text" class="middleRightSubject"  :value="middleMandalart[2].middleRight.middleRightSubject" /></td>
                        <td><input type="text" class="middleRight5"  :value="middleMandalart[2].middleRight.middleRight5" /></td>                        
                    </tr>
                    <tr>
                        <td><input type="text" class="middleRight6"  :value="middleMandalart[2].middleRight.middleRight6" /></td>
                        <td><input type="text" class="middleRight7"  :value="middleMandalart[2].middleRight.middleRight7" /></td>
                        <td><input type="text" class="middleRight8"  :value="middleMandalart[2].middleRight.middleRight8" /></td>
                    </tr>            
                </tbody>
            </table>
        </td>
    </tr>    
</template>

<script>
import eventBus from '../EventBus.js';

export default {
    props : ["middleMandalart"],
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
    border: 1px solid #dee2e6;    
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

.tbl-middle tr td input{
    background-color: $bak_color;
}

.tbl-middle tr:nth-child(2) td:nth-child(2) input{
    background-color: #DC143C
}

.tbl-middle-left tr:nth-child(2) td:nth-child(3) input{
    background-image: $bak_img_color, url('../assets/arrow-middle-left.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.tbl-middle-right tr:nth-child(2) td:nth-child(1) input{
    background-image: $bak_img_color, url('../assets/arrow-middle-right.png');
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

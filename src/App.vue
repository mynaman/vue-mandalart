<template>
  <div id="wrap">
    <div id="header-container">
      <menubar></menubar>
    </div>
    <div id="section">
      <div id="section-container" class="container">
        <mandalart v-bind:mandalartObj="obj"></mandalart>
      </div>
    </div>
    <div id="footer">
      <div id="footer-container" class="container">
        <footer-child></footer-child>
      </div>
    </div>
  </div>
</template>

<script>

import eventBus from './EventBus';
import Utils from './util/Utils'
import Menubar from "@/components/Menubar";
import Mandalart from "@/components/Mandalart";
import FooterChild from "@/components/Footer";

  export default {

    data: function() {
      return {        
        year_target: new Date().getFullYear(),
        obj : {
          top : [
            {
              topLeft : {     
                topLeftSubject : "",
                topLeft1 : "",
                topLeft2 : "",
                topLeft3 : "",
                topLeft4 : "",                
                topLeft5 : "",
                topLeft6 : "",
                topLeft7 : "",
                topLeft8 : ""
              }
            },
            {
              topCenter : {
                topCenterSubject : "",
                topCenter1 : "",
                topCenter2 : "",
                topCenter3 : "",
                topCenter4 : "",               
                topCenter5 : "",
                topCenter6 : "",
                topCenter7 : "",
                topCenter8 : ""
              }
            },
            {
              topRight : {
                topRightSubject : "",
                topRight1 : "",
                topRight2 : "",
                topRight3 : "",
                topRight4 : "",
                topRight5 : "",
                topRight6 : "",
                topRight7 : "",
                topRight8 : ""
              }
            }
          ],
          middle : [
            {
              middleLeft : {                
                middleLeftSubject : "",
                middleLeft1 : "",
                middleLeft2 : "",
                middleLeft3 : "",
                middleLeft4 : "",
                middleLeft5 : "",
                middleLeft6 : "",
                middleLeft7 : "",
                middleLeft8 : ""
              }
            },
            {
              middleCenter : {                
                superSubject : "",
                topLeftSubject : "",
                topCenterSubject : "",
                topRightSubject : "",
                middleLeftSubject : "",
                middleRightSubject : "",
                bottomLeftSubject : "",
                bottomCenterSubject : "",
                bottomRightSubject : ""
              }
            },
            {
              middleRight : {  
                middleRightSubject : "",
                middleRight1 : "",
                middleRight2 : "",
                middleRight3 : "",
                middleRight4 : "",
                middleRight5 : "",
                middleRight6 : "",
                middleRight7 : "",
                middleRight8 : ""
              }
            }
          ],
          bottom : [
            {
              bottomLeft : {      
                bottomLeftSubject : "",
                bottomLeft1 : "",
                bottomLeft2 : "",
                bottomLeft3 : "",
                bottomLeft4 : "",
                bottomLeft5 : "",
                bottomLeft6 : "",
                bottomLeft7 : "",
                bottomLeft8 : ""
              }
            },
            {
              bottomCenter : {
                bottomCenterSubject : "",
                bottomCenter1 : "",
                bottomCenter2 : "",
                bottomCenter3 : "",
                bottomCenter4 : "",
                bottomCenter5 : "",
                bottomCenter6 : "",
                bottomCenter7 : "",
                bottomCenter8 : ""
              }
            },
            {
              bottomRight : {
                bottomRightSubject : "",
                bottomRight1 : "",
                bottomRight2 : "",
                bottomRight3 : "",
                bottomRight4 : "",
                bottomRight5 : "",
                bottomRight6 : "",
                bottomRight7 : "",
                bottomRight8 : ""
              }
            }
          ]
        }
      }
    },      
    components: { Mandalart, Menubar, FooterChild },
    methods: {
      yearChanged: function(year) {
        this.year_target = year;
      },
      objModify: function(arr) {          
          const num = Utils.regexNum(arr[1]);
          if(arr[0].indexOf('top') > -1) {
            this.topSwap(arr);
          } else if(arr[0].indexOf('middle') > -1) {
            this.middleSwap(arr);
          } else {
            this.bottomSwap(arr);
          }

          if(!num) this.centerAsyc(arr);
      },
      topSwap: function(arr) {
        switch(arr[0]) {
          case "topLeft": 
            this.obj.top[0].topLeft[arr[1]] = arr[2];                         
            break;
          case "topCenter":
            this.obj.top[1].topCenter[arr[1]] = arr[2];
            break;
          case "topRight":
            this.obj.top[2].topRight[arr[1]] = arr[2];
            break;
          default: break;
        }
      },
      middleSwap: function(arr) {
        switch(arr[0]) {
          case "middleLeft":
            this.obj.middle[0].middleLeft[arr[1]] = arr[2];
            break;
          case "middleCenter":
            this.obj.middle[1].middleCenter[arr[1]] = arr[2];
            break;
          case "middleRight":
            this.obj.middle[2].middleRight[arr[1]] = arr[2];
            break;
          default: break;
        }
      },
      bottomSwap: function(arr) {
        switch(arr[0]) {
          case "bottomLeft": 
            this.obj.bottom[0].bottomLeft[arr[1]] = arr[2];
            break;
          case "bottomCenter":
            this.obj.bottom[1].bottomCenter[arr[1]] = arr[2];
            break;
          case "bottomRight":
            this.obj.bottom[2].bottomRight[arr[1]] = arr[2];
            break;
          default: break;
        }
      },
      centerAsyc: function(arr) {
        if(arr[0] !== "middleCenter") {
          this.obj.middle[1].middleCenter[arr[1]] = arr[2];
        } else {
            if(arr[1].indexOf('top') > -1) {
              this.topAsyc(arr);
            } else if(arr[1].indexOf('middle') > -1) {
              this.middleAsyc(arr);
            } else {
              this.bottomAsyc(arr);
            }
        }
      },      
      topAsyc: function(arr) {
        switch(arr[1]) {
          case "topLeftSubject": 
            this.obj.top[0].topLeft[arr[1]] = arr[2]; 
            break;
          case "topCenterSubject":
            this.obj.top[1].topCenter[arr[1]] = arr[2];
            break;
          case "topRightSubject":
            this.obj.top[2].topRight[arr[1]] = arr[2];
            break;
          default: break;
        }
      },
      middleAsyc: function(arr) {
        switch(arr[1]) {
          case "middleLeftSubject":
            this.obj.middle[0].middleLeft[arr[1]] = arr[2];
            break;          
          case "middleRightSubject":
            this.obj.middle[2].middleRight[arr[1]] = arr[2];
            break;
          default: break;
        }
      },
      bottomAsyc: function(arr) {
        switch(arr[1]) {
          case "bottomLeftSubject": 
            this.obj.bottom[0].bottomLeft[arr[1]] = arr[2];
            break;
          case "bottomCenterSubject":
            this.obj.bottom[1].bottomCenter[arr[1]] = arr[2];
            break;
          case "bottomRightSubject":
            this.obj.bottom[2].bottomRight[arr[1]] = arr[2];
            break;
          default: break;
        }
      },      
    },
    mounted: function() {
      eventBus.$on("modify", (...obj) => this.objModify(obj));
      eventBus.$on("targetYear", (year) => this.yearChanged(year));
    }
  }

</script>

<style lang="scss">

@import "./assets/style.scss";

* {
  font-family: 'Lato', sans-serif !important;
}

#header-container, #section {
  margin-bottom: 1.65%;
}

@media(max-width: $site_max_small) {    
    #header-container {
      margin-bottom: 15%;
    }
}


</style>
<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Mandalart</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active" v-if="isLogout" >
                        <a class="nav-link" href="#" @click="childPopup">Login</a>
                    </li>
                    <li class="nav-item" v-if="isLogin">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                    <li class="nav-item" v-if="isLogin">
                        <a class="nav-link" href="#">Chart</a>
                    </li>                
                </ul>
            </div>
        </nav>
        <div class="child-window" v-show="isChild" ref="child">
            <div class="container">
                <div class="child-container">
                    <button type="button" class="close" aria-label="Close" @click="childPopup">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>                        
                        <button type="submit" class="btn btn-dark">Login</button>
                    </form>
                    
                    <div class="btn-auth">
                        <h6>소셜 로그인</h6>
                        <button class="btn btn-primary">Facebook</button>
                        <button class="btn btn-warning">kakao</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        data: function() {
            return {
                isLogin: false,
                isLogout: true,
                isChild: false
            }
        },
        methods: {
            childPopup: function() {
                this.isChild = !this.isChild ? true : false;                
            }
        }
        
    }
</script>

<style lang="scss" scoped>

.child-window {
     position: absolute;
     width: 20vw;
     height: 100%;
     top:0;
     right:0;
     background-color: #fff;
     box-shadow: -1px 0px 80px 1px rgba(0, 0, 0, .2);

    .container {
        z-index: 100;

        .child-container {
            display: flex;
            flex-direction: column;

            button {                                
                margin-bottom: 3.5rem;
                font-size: 3.5rem;
                text-align: end;
                outline-style: none;
            }

            button[type="submit"] {                
                width: 100%;
                text-align: center;
                line-height: 1.8rem;
                font-size: 1.5rem;
            }

            .btn-auth { 
                display: flex;
                flex-direction: column;
                text-align: left;

                button {
                    margin-bottom: 10px;
                    width: 100%;
                    line-height: 1.8rem;                
                    font-size: 1.5rem;
                    text-align: center;
                    outline-style: none;                               
                    
                }
            }
        }
    }
}

</style>
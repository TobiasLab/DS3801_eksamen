/*const HomePage = {
    template: `
                <div id="homePage">
                
                    <img id="TestImage" src="/Bilder/HK_logo_icon.png">
                    <h3 id="TestTitle">Studentklinikken</h3>
                    <div v-show="elementVisible" id="loginBox">
                        
                        <div class="container">
                            <h2 id="info">Velkommen tilbake</h2>
                            <h4 id="info2">Log in for å få oversikt over egen timeliste, kunde-hendelser, tidligere behandlinger og ledige tider</h4>
                            <form>
                                <div class="input-group" id="input_group1">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input id="email" type="text" class="form-control" name="email" placeholder="Email">
                                </div>
                                <div class="input-group" id="input_group2">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <input id="password" type="password" class="form-control" name="password" placeholder="Password">
                                </div>
                                <router-link to="/Pages/LandingPage" class="btn btn-info" id="log_in_button" role="button">Logg inn</router-link>
                            </form>
                        </div>
                    </div>
                </div>
            `,
    data() {
        return {
            elementVisible: false,
        }
    },
    created() {
        setTimeout(() => this.elementVisible = true, 3000)
    },
}

export default HomePage;
*/

var email = document.getElementById('email');
var password = document.getElementById('password');
var loginTest = document.getElementById('lon_in_button').addEventListener("click", function() {
    emailTest = 123;
    passwordTest = 123;

    if (email === emailTest) {
        if (password === passwordTest) {
            return true;
        } else {
            alert("You've typed the wrong email/password");
        }
    }
}) 

/*
function created() {
    var elementVisible = false;
    setTimeout(() => this.elementVisible = true, 3000)
}
*/

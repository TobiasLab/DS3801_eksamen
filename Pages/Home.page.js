const HomePage = {
    template: `
                <div id="homePage">
                
                    <img id="TestImage" src="./Bilder/HK_logo_icon.png">
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
                                <a href="ansatt(dashbord).html" class="btn btn-info" id="log_in_button" role="button">Log in</a>
                            </form>
                        </div>
                    </div>
                </div>
            `,
    data() {
        return {
            title: "Top Text",
            elementVisible: false
        }
    },
    created() {
        setTimeout(() => this.elementVisible = true, 3000)
    }
}

export default HomePage;